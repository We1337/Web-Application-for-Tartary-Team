fetch('../json/match.json').then(response => response.json()).then(data => {

    const possition = document.getElementById("possition");
    const title = document.getElementById("title");
    const place = document.getElementById("place");
    const score = document.getElementById("score");

    //console.log(data);

    console.log(data.length);

    for(let i = 0; i < data.length; i++) {
        console.log(i);
    }

});