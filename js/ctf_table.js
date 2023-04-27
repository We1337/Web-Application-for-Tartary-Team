/* Fetch match.json */
fetch('../json/match.json').then(response => response.json()).then(data => {

    /* Select by ID */
    let tableBody = document.getElementById("table-body");

    /* Title: Number, Title, Rank, Score */
    let titleElement = "<tr><th> # </th><th> CTF title </th><th> Rank </th><th> Score </th></tr>";
    document.getElementById("table-body").innerHTML = titleElement;

    /* List of participation in CTF table */
    for(let i = 0; i < data["ctf"].length; i++) {
        const row = document.createElement("tr");
        const number = document.createElement("th");
        const title = document.createElement("th");
        const rank = document.createElement("th");
        const score = document.createElement("th");

        number.innerHTML = i + 1;
        title.innerHTML = '<a href="' + data.ctf[i].link + '" title="' + data.ctf[i].name + '">' + data.ctf[i].name + '</a>';
        rank.innerHTML = '<abbr>' + data.ctf[i].rank + '</abbr>';
        score.innerHTML = data.ctf[i].score;

        row.appendChild(number);
        row.appendChild(title);
        row.appendChild(rank);
        row.appendChild(score);
        tableBody.appendChild(row);
    }
});