fetch('../json/match.json').then(response => response.json()).then(data => {

    let tableBody = document.getElementById("table-body");
    
    // Display table from json file
    for(let i = 0; i < data["ctf"].length; i++) {
        const row = document.createElement("tr");
        const position = document.createElement("th");
        const title = document.createElement("th");
        const place = document.createElement("th");
        const score = document.createElement("th");

        position.innerHTML = i + 1;
        title.innerHTML = '<a href="' + data.ctf[i].link + '" title="' + data.ctf[i].name + '">' + data.ctf[i].name + '</a>';
        place.innerHTML = '<abbr title="Position">' + data.ctf[i].place + '</abbr>'
        score.innerHTML = data.ctf[i].score;

        row.appendChild(position);
        row.appendChild(title);
        row.appendChild(place);
        row.appendChild(score);
        tableBody.appendChild(row);
    }
});