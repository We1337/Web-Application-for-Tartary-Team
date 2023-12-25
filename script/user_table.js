/**
 * Document for Fetching and Displaying Team Information
 *
 * This script fetches team information from a JSON file and dynamically
 * populates an HTML table with the relevant details.
 *
 * Author: We1337
 * Version: 1.0.0
 */

// Fetch team.json and populate the team table
fetch('../json/team.json')
  .then(response => response.json())
  .then(data => {

    // Select the table body element by ID
    const tableBody = document.getElementById("team-body");

    // Set table header titles: #, Nick Name, Skills
    const titleElement = "<tr><th> # </th><th> Nick Name </th><th> Skills </th></tr>";
    tableBody.innerHTML = titleElement;

    // Populate the table with team information
    for (let i = 0; i < data["team"].length; i++) {
      const row = document.createElement("tr");
      const position = document.createElement("th");
      const names = document.createElement("th");
      const skills = document.createElement("th");

      // Set values for each column in the current row
      position.innerHTML = i + 1;
      names.innerHTML = `<a href="${data.team[i].link}" title="${data.team[i].user}">${data.team[i].user}</a>`;
      skills.innerHTML = `<p>${data.team[i].skills.join(', ')}</p>`;

      // Append the columns to the current row
      row.appendChild(position);
      row.appendChild(names);
      row.appendChild(skills);

      // Append the row to the table body
      tableBody.appendChild(row);
    }
  })
  .catch(error => {
    console.error("Error fetching or parsing team.json:", error);
    // Handle the error, e.g., display an error message to the user
  });
