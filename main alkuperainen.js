//import { square } from "../Vedonlyontipeli/ottelut";
import {moroMoro, morlokkiaTere} from './moduuli.js';
moroMoro('Jii');
morlokkiaTere('Jii');


var kerroin1;
var kerroinX;
var kerroin2;
var varat = 10;
var arpa = 0;
var random = Math.floor(Math.random()*30+1);
console.log('random alussa: ', random)
var ottelupari = "";

//Pohdittavaksi: 
// Miten laatisin seuraavan, pitkän if-lausekkeen for-lausekkeella, jotta säästäisin jatkossa tilaa? Todarista tuttuun tyyliin "kuinka monta otteluparia joukkueet voivat muodostaa (pelaamatta itseään vastaan!!)"
// Voisiko while-silmukan if-lauseita yksinkertaistaa esim sisäkkäisillä if-lauseilla?
// Lean sovelluskehityksessä mahtaa viitata juuri koodin säilyttämiseen mahdollisimman 1kertaisena. Tästä oli juttua Software Engineering -kurssilla.
//Kehitettäväksi:
// Miten tekisin näistä kaikista funktioita, tai oikeammin, komponentteja, ja miten säil\u00f6n osan komponenteista kirjastomaisesti erillisiin tiedostoihin nyt kun kyseessä pelkkä javascript (onko kuinka helppoa tai mahdollistakaan?)

square();

console.log("ottelupari: ", ottelupari, ". Random: ", random)

kerroin1 = 1/Math.random()+1
console.log('Kotijoukkueen kerroin: ', kerroin1);

kerroinX = 1/Math.random()+1
console.log('Tasapelin kerroin: ', kerroinX);

kerroin2 = 1/Math.random()+1
console.log('Vierasjoukkueen kerroin: ', kerroin2);

todnak1 = 1/kerroin1
todnakX = 1/kerroinX
todnak2 = 1/kerroin2

console.log('todnak1: ', todnak1)
console.log('todnakX: ', todnakX)
console.log('todnak2: ', todnak2)


while (varat >= 1)
{
    var valinta = prompt("Rahatilanne: " + varat.toFixed(2) + ".\nOttelupari: " + ottelupari + ".\n1: " + kerroin1.toFixed(2) + ". X: " + kerroinX.toFixed(2) + ". 2: " + kerroin2.toFixed(2) + ".\nPaina '1', 'X', '2'.\nNeuvotellaksesi sopupelin, paina '3'.\nPaina 'L' lopettaaksesi.");
    
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
    //TäHäN NE ++ tai -- hommat KERROTTUNA KERTOIMELLA. PELI EI TOIMI JOSSEI Tää TOIMI.
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

