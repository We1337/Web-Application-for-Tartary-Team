/**
 * Document for Fetching and Displaying Writeups
 *
 * This script fetches writeups information from a JSON file and dynamically
 * populates an HTML table with the relevant details.
 *
 * Author: We1337
 * Version: 1.0.0
 */

// Fetch writeups.json and populate the writeups table
fetch('../json/writeups.json')
  .then(response => response.json())
  .then(data => {

    // Select the table body element by ID
    const tableBody = document.getElementById("body-writeups");

    // Set table header titles: #, Title, Skills
    const titleElement = "<tr><th> # </th><th> Title </th><th> Skills </th></tr>";
    tableBody.innerHTML = titleElement;

    // Populate the table with writeups information
    for (let i = 0; i < data["writeups"].length; i++) {
      const row = document.createElement("tr");
      const position = document.createElement("td"); // Changed from th to td
      const title = document.createElement("td");
      const topic = document.createElement("td");

      // Set values for each column in the current row
      position.textContent = i + 1; // Used textContent for security
      title.innerHTML = `<a href="${data.writeups[i].link}" title="${data.writeups[i].title}">${data.writeups[i].title}</a>`;
      topic.innerHTML = `<p>${data.writeups[i].topic.join(', ')}</p>`;

      // Append the columns to the current row
      row.appendChild(position);
      row.appendChild(title);
      row.appendChild(topic);

      // Append the row to the table body
      tableBody.appendChild(row);
    }
  })
  .catch(error => {
    console.error("Error fetching or parsing writeups.json:", error);
    // Handle the error, e.g., display an error message to the user
  });
