var kerroin1;
var kerroinX;
var kerroin2;
var varat = 10;
var arpa = 0;
var random = Math.floor(Math.random()*30+1);
console.log('random alussa: ', random)
var parit = ["V\u00e4hemmist\u00f6n enemmist\u00f6", "Ylt\u00e4yliskyll\u00e4stetyt", "FC Tuho", "Turpasaunojat", "Kiitt\u00e4m\u00e4tt\u00f6m\u00e4t", "Riskiryhm\u00e4"];
var ottelupari = [];

// function otteluparit(jengi) {
//     for (var i = 0; i < 5; i++){
//         if (parit[i] === jengi){
//         continue
//         }
//         else
//         {
//         console.log("otteluparit: ", ottelupari);
//         ottelupari.push(jengi+" vs. "+parit[i]);
//         }
//     }
// }

const otteluparit = (jengi) => {
    for (var i = 0; i < 5; i++){
        if (parit[i] === jengi){
        continue
        }
        else
        {
        console.log("otteluparit: ", ottelupari);
        ottelupari.push(jengi+" vs. "+parit[i]);
        }
    }
}


console.log(otteluparit(parit[0]));
console.log(otteluparit(parit[1]));
console.log(otteluparit(parit[2]));
console.log(otteluparit(parit[3]));
console.log(otteluparit(parit[4]));
console.log(otteluparit(parit[5]));




while (varat >= 1)
{
kerroin1 = 1/Math.random()+1
console.log('Kotijoukkueen kerroin: ', kerroin1);

kerroinX = 1/Math.random()+1
console.log('Tasapelin kerroin: ', kerroinX);

kerroin2 = 1/Math.random()+1
console.log('Vierasjoukkueen kerroin: ', kerroin2);

    var valinta = prompt("Rahatilanne: " + varat.toFixed(2) + ".\nOttelupari: " + ottelupari[Math.floor(Math.random()*ottelupari.length)] + ".\n1: " + kerroin1.toFixed(2) + ". X: " + kerroinX.toFixed(2) + ". 2: " + kerroin2.toFixed(2) + ".\nPaina '1', 'X', '2'.\nNeuvotellaksesi sopupelin, paina '3'.\nPaina 'L' lopettaaksesi.");
    
if (valinta === 'L')
{
    alert("Veikkaaminen on raadollinen bisnes...");
    break;
}
else if (valinta != '3')
{
    var arpa = prompt("Rahatilanne:" + Math.round(varat) + ". Paljonko haluat sijoittaa?");
}

    if (valinta === '1' && (Math.random()*(todnak1+todnakX+todnak2) < todnak1) && arpa <= varat)
{
    console.log('toteutunut, kotijoukkue :', Math.random()*(todnak1+todnakX+todnak2))
        varat = varat + kerroin1*arpa;
    alert("Arvasit oikein! Kotijoukkue voitti kertoimella " + kerroin1.toFixed(2) + ". Rahatilanne: " + Math.round(varat));
}
else if (valinta === 'X' && (Math.random()*(todnak1+todnakX+todnak2) > todnak1 && (Math.random()*(todnak1+todnakX+todnak2) < todnak2)) && arpa <= varat)
{
    console.log('toteutunut :', Math.random()*(todnak1+todnakX+todnak2))
    varat = varat + kerroinX*arpa;
    alert("Arvasit oikein! Tasapeli, kertoimella " + kerroinX.toFixed(2) + ". Rahatilanne: " + Math.round(varat));
}
else if (valinta === '2' && (Math.random()*(todnak1+todnakX+todnak2) > todnak2) && arpa <= varat)
{
    console.log('toteutunut :', Math.random()*(todnak1+todnakX+todnak2))
    varat = varat + kerroin2*arpa;
    alert("Arvasit oikein! Vierasjoukkue voitti kertoimella " + kerroin2.toFixed(2) + ". Rahatilanne: " + Math.round(varat));
}
else if (valinta === '3')
{
    var putka = Math.floor(Math.random()*3+1)
    var valinta = prompt("Riskiryhm\u00e4; vs. V\u00e4hemmist\u00f6n enemmist\u00f6 - 1: " + kerroin1.toFixed(2) + ". X: " + kerroinX.toFixed(2) + ". 2: " + kerroin2.toFixed(2) + ".\n Valitse 1, X, 2");  
    var arpa = prompt("Rahatilanne:" + Math.round(varat) + ". Paljolla haluat lahjoa paremman joukkueen?");
    console.log("putka-arpa: ", putka);

    if (putka === 1)
    {
        alert("Top tykk\u00e4n\u00e4\u00e4n! Iskuryhm\u00e4 tekee kaikkensa kitke\u00e4kseen sopupelin arvausliigasta. Varasi " + Math.round(varat) + " takavarikoitiin valtiolle.");
        break;
    }
    else if (valinta === '1' && arpa <= varat)
    {
        varat = varat + kerroin1*arpa;
        alert("Kiinni veti! Kotijoukkue voitti kertoimella " + kerroin1.toFixed(2) + ". Rahatilanne: " + Math.round(varat)); 
    }
    else if (valinta === 'X' && arpa <= varat)
    {
        varat = varat + kerroinX*arpa;
        alert("Kiinni veti! Tasapeli, kertoimella " + kerroinX.toFixed(2) + ". Rahatilanne: " + Math.round(varat)); 
    }
    else if (valinta === '2' && arpa <= varat)
    {
        varat = varat + kerroin2*arpa;
    alert("Kiinni veti! Vierasjoukkue voitti kertoimella " + kerroin2.toFixed(2) + ". Rahatilanne: " + Math.round(varat));
    }
    else if (arpa > varat)
    {
        alert("\u00e4l\u00e4 hulluja puhu. Sinulla ei ole varaa lahjoa " + arpa + " €:lla!");
    }
}
else if (arpa > varat)
{
    alert("\u00e4l\u00e4 hulluja puhu. Sinulla ei ole varaa " + arpa + " € arpaan!");
}
else
{
    varat = varat-arpa;
    alert("Arvasit v\u00e4\u00e4rin! Rahatilanne: " + Math.round(varat));
}
if (varat < 1)
{
    alert("Peli ohi. Menetit kaiken!");
    break;
}
}

