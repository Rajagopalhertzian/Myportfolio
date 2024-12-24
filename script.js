document.addEventListener("DOMContentLoaded", () => {
  // GitHub API Configuration
  const username = "your-github-username"; // s
  const githubApiUrl = `https://api.github.com/users/${rajagopalhertzian}/repos`;

  // Fetch GitHub Repository Data
  async function fetchGitHubData() {
    try {
      const response = await axios.get(githubApiUrl);
      const repos = response.data;
      const languageCounts = {};

      repos.forEach((repo) => {
        const language = repo.language || "Unknown";
        if (languageCounts[language]) {
          languageCounts[language]++;
        } else {
          languageCounts[language] = 1;
        }
      });

      const languagesList = document.getElementById("github-languages");
      languagesList.innerHTML = Object.entries(languageCounts)
        .map(
          ([language, count]) =>
            `<li><strong>${language}:</strong> ${count} repositories</li>`
        )
        .join("");
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
    }
  }

  fetchGitHubData();

  // Globe Visualization using Three.js
  const container = document.getElementById("globe-container");
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / 400, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();

  renderer.setSize(container.offsetWidth, 400);
  container.appendChild(renderer.domElement);

  const geometry = new THREE.SphereGeometry(2, 32, 32);
  const material = new THREE.MeshBasicMaterial({
    color: 0x8e2de2,
    wireframe: true,
  });
  const globe = new THREE.Mesh(geometry, material);
  scene.add(globe);

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);
    globe.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  animate();
});
