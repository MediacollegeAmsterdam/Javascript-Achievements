const uitvoer = document.getElementById('uitvoer');
let dataObject;
const jsonKnop = document.getElementById('haalJSON');
const urlJson = 'https://gist.githubusercontent.com/Theo-denBlanken/193d989a2aab328f847f4357e7171dc5/raw/1ca3b05253dee0dac348b9ded4ada8a64d97ff5e/huisDataa.json';
jsonKnop.addEventListener('click', () => {
    jsonKnop.style.display = 'none';
    const vraagServ = new XMLHttpRequest();
    vraagServ.onreadystatechange = () => {
        if(vraagServ.readyState == 4 && vraagServ ==200){
            dataObject = JSON.parse( vraagServ.responseText);
            uitvoeren();
        }
    }
    vraagServ.open('GET', urlJson, true); 
    vraagServ.send();
});

const  geefDagWeek = (num => {
    switch (num) {
        case 0 : return 'Zondag'; break;
        case 1 : return 'Maandag'; break;
        case 2 : return 'Dinsdag'; break;
        case 3 : return 'Woensdag'; break;
        case 4 : return 'Donderdag'; break;
        case 5 : return 'Vrijdag'; break;
        case 6 : return 'Zaterdag'; break;
        default: return num;
    }
})

const geefMaand = (num => {
    switch (num) {
        case 0 : return 'Jan'; break;
        case 1 : return 'Feb'; break;
        case 2 : return 'Maart'; break;
        case 3 : return 'April'; break;
        case 4 : return 'Mei'; break;
        case 5 : return 'Juni'; break;
        case 6 : return 'Juli'; break;
        case 7 : return 'Aug'; break;
        case 8 : return 'Sep'; break;
        case 9 : return 'Okt'; break;
        case 10 : return 'Nov'; break;
        case 11 : return 'Dec'; break;
        default: return num;
        
    }
})

const maakDatum = (num) => {
    if(typeof(num) == 'string'){
        num = Date.parse(num);
    }
    //set de string van de JS datum om in een beter vorm.

    let datum = new Date(num);

    let dagWeek = datum.getDay();
    let dagMaand = datum.getDate();
    let maand = datum.getMonth();
    let jaar = datum.getFullYear();
    let uren = datum.getHours();
    if(uren <10){
        uren = '0' + uren;
    }

    let minuten = datum.getMinutes();
    if(minuten <10){
        minuten = '0' + minuten;
    }

    return `${geefDagWeek(dagWeek)}<br>
    ${dagMaand} ${geefMaand(maand)} ${jaar} ${uren}: ${minuten}`
}


const uitvoeren = () => {
    let htmlStr = "";
    dataObject.forEach( obj  => {
        htmlStr += `<div class="Rij">`;
        htmlStr += `<div>${maakDatum(obj.tijd)}</div>`;
        htmlStr += `<div>${obj.tempBuiten}&deg;C</div>`;
        htmlStr += `<div>${obj.tempBinnen}&deg;C</div>`;
        htmlStr += `<div>${obj.tempGewenst}&deg;C</div>`;
        if( obj.tempGewenst > obj.tempBinnen ) {
            htmlStr += `<div><img src="icons/vlam.svg" alt="Cv aan" class="icon"> </img></div>`;
        }
        else {
            htmlStr +=  `<div><img src="icons/vlamUit.svg" alt="Cv Uit" class="icon"> </img></div>`
        }

        if( obj.lichtKamer ) {
            htmlStr += `<div><img src="icons/lampAan.svg" alt="Lamp aan" class="icon"> </img></div>`;
        }
        else {
            htmlStr +=  `<div><img src="icons/lampUit.svg" alt="Lamp Uit" class="icon"> </img></div>`
        }
        if( obj.lichtBuiten ) {
            htmlStr += `<div><img src="icons/lampAan.svg" alt="Lamp aan" class="icon"> </img></div>`;
        }
        else {
            htmlStr +=  `<div><img src="icons/lampUit.svg" alt="Lamp Uit" class="icon"> </img></div>`
        }
        htmlStr += `</div>`;
        
    })
    uitvoer.innerHTML = htmlStr;

    //deze functie voert de data uit in de DIV met de id "uitvoer"
}

const starten = () => {
    //de data array onze dataObject stoppen
    dataObject = energieData;
    // data uitvoeren
    uitvoeren();
}


document.addEventListener('DOMContentLoaded', starten);

