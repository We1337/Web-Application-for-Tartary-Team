fetch('../json/team.json').then(response => response.json()).then(data => {

    let tableBody = document.getElementById("users-body");
    
    // Display users from json file
    for(let i = 0; i < data["team"].length; i++) {
        const row = document.createElement("th");
        const position = document.createElement("th");
        const names = document.createElement("th");
        const skils = document.createElement("th");

        position.innerHTML = i + 1;
        names.innerHTML = '<a href="' + data.team[i].link + '" title="' + data.team[i].user + '">' + data.team[i].user + '</a>';
        skils.innerHTML = '<p>' + data.team[i].skils.join(',   ') + '</p>'
        
        row.appendChild(position);
        row.appendChild(names);
        row.appendChild(skils);
        tableBody.appendChild(row);
    }
});