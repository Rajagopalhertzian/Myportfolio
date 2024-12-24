document.addEventListener("DOMContentLoaded", async function () {
  const username = "rajagopalhertzian"; // Your GitHub username
  const githubApiUrl = `https://api.github.com/users/${username}/repos`;

  async function fetchGitHubData() {
    try {
      const response = await fetch(githubApiUrl);
      const repos = await response.json();
      if (!Array.isArray(repos)) throw new Error("Invalid response");

      const languageCounts = {};

      // Count repositories by programming language
      repos.forEach((repo) => {
        const language = repo.language || "Unknown";
        languageCounts[language] = (languageCounts[language] || 0) + 1;
      });

      // Populate language dashboard
      renderLanguageChart(languageCounts);
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
      const errorMessage = document.getElementById("github-dashboard-error");
      if (errorMessage) errorMessage.textContent = "Failed to fetch GitHub data.";
    }
  }

  function renderLanguageChart(data) {
    const ctx = document.getElementById("languageChart").getContext("2d");
    const labels = Object.keys(data);
    const counts = Object.values(data);

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Number of Repositories",
            data: counts,
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  fetchGitHubData();
});
