/**
 * Document for Fetching and Displaying CTF Participation Data
 *
 * This script fetches CTF (Capture The Flag) participation data from a JSON file
 * and dynamically populates an HTML table with the relevant information.
 *
 * Author: We1337
 * Version: 1.0.0
 */

// Fetch match.json and populate the CTF participation table
fetch('../json/match.json')
  .then(response => response.json())
  .then(data => {

    // Select the table body element by ID
    let tableBody = document.getElementById("table-body");

    // Set table header titles: Number, Title, Rank, Score
    let titleElement = "<tr><th> # </th><th> CTF title </th><th> Rank </th><th> Score </th></tr>";
    tableBody.innerHTML = titleElement;

    // Populate the table with CTF participation data
    for (let i = 0; i < data["ctf"].length; i++) {
      const row = document.createElement("tr");
      const number = document.createElement("th");
      const title = document.createElement("th");
      const rank = document.createElement("th");
      const score = document.createElement("th");

      // Set values for each column in the current row
      number.innerHTML = i + 1;
      title.innerHTML = `<a href="${data.ctf[i].link}" title="${data.ctf[i].name}">${data.ctf[i].name}</a>`;
      rank.innerHTML = `<abbr>${data.ctf[i].rank}</abbr>`;
      score.innerHTML = data.ctf[i].score;

      // Append the columns to the current row
      row.appendChild(number);
      row.appendChild(title);
      row.appendChild(rank);
      row.appendChild(score);

      // Append the row to the table body
      tableBody.appendChild(row);
    }
  })
  .catch(error => {
    console.error("Error fetching or parsing match.json:", error);
    // Handle the error, e.g., display an error message to the user
  });
