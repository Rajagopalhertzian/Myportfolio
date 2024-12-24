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
      const languagesList = document.getElementById("github-languages");
      languagesList.innerHTML = Object.entries(languageCounts)
        .map(
          ([language, count]) =>
            `<li><strong>${language}:</strong> ${count} repositories</li>`
        )
        .join("");
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
      document.getElementById("github-languages").innerText =
        "Unable to fetch data. Please try again later.";
    }
  }

  fetchGitHubData();
});
