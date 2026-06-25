# GitHub Profile Analyzer

A simple Command Line Interface (CLI) tool built with modern JavaScript that fetches live data from the GitHub API and analyzes profile metrics.

## Features
* **Parallel Fetching:** Uses `Promise.all()` to retrieve user data and repositories simultaneously.
* **Profile Analytics:** Extracts and displays top languages, follower counts, and repositories.
* **Error Handling:** Robust `try...catch` blocks to handle network issues gracefully.

## How to Run
1. Open your terminal in the project folder.
2. Ensure you have **Node.js (v18+)** installed.
3. Run the following command:
   ```bash
   node app.js
   ```

## Built With
* JavaScript (ES6+)
* Fetch API
