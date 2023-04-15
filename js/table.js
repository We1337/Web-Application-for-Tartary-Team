fetch('../json/match.json').then(response => response.json()).then(data => {

    let tableBody = document.getElementById("table-body");
    

    for(let i = 0; i < data["ctf"].length; i++) {
        var row = document.createElement("tr");
        var position = document.createElement("th");
        var title = document.createElement("th");
        var place = document.createElement("th");
        var score = document.createElement("th");

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