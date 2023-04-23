fetch('../json/writeups.json').then(response => response.json()).then(data => {

    let tableBody = document.getElementById("writeups-body");
    
    // Display writeups
    for(let i = 0; i < data["writeups"].length; i++) {
        const row = document.createElement("tr");
        const position = document.createElement("th");
        const title = document.createElement("th");
        const topic = document.createElement("th");

        position.innerHTML = i + 1;
        title.innerHTML = '<a href="' + data.writeups[i].link + '" title="' + data.writeups[i].title + '">' + data.writeups[i].title + '</a>';
        topic.innerHTML = '<p>' + data.writeups[i].topic.join(',   ') + '</p>'
        
        row.appendChild(position);
        row.appendChild(title);
        row.appendChild(topic);
        tableBody.appendChild(row);
    }
});