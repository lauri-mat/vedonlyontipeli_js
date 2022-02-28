var kerroin1;
var kerroinX;
var kerroin2;
var varat = 10;
var arpa = 0;

while(varat >= 1)
{
var random = Math.floor(Math.random()*30+1);
console.log('random alussa: ', random)
var ottelupari = "";

//Pohdittavaksi: 
// Miten laatisin seuraavan, pitkän if-lausekkeen for-lausekkeella, jotta säästäisin jatkossa tilaa? Todarista tuttuun tyyliin "kuinka monta otteluparia joukkueet voivat muodostaa (pelaamatta itseään vastaan!!)"
// Voisiko while-silmukan if-lauseita yksinkertaistaa esim sisäkkäisillä if-lauseilla?
// Lean sovelluskehityksessä mahtaa viitata juuri koodin säilyttämiseen mahdollisimman 1kertaisena. Tästä oli juttua Software Engineering -kurssilla.
//Kehitettäväksi:
// Miten tekisin näistä kaikista funktioita, tai oikeammin, komponentteja, ja miten säil\u00f6n osan komponenteista kirjastomaisesti erillisiin tiedostoihin nyt kun kyseessä pelkkä javascript (onko kuinka helppoa tai mahdollistakaan?)

if (random === 1) // Jos vain yksi = -merkki, niin se muuttaa alkuarvo-randomin väkisin arvokseen. "===":lla vain sillä ehdolla, että alkuarvo mätchää
{
   ottelupari = "Riskiryhm\u00e4 vs. V\u00e4hemmist\u00f6n enemmist\u00f6"; // "===" muutettava "=":ksi, jotta otteluparin alkuarvo muuttuu (v\u00e4kisin).
}
else if (random === 2)
{
    ottelupari = "Riskiryhm\u00e4 vs. Kiitt\u00e4m\u00e4tt\u00f6m\u00e4t";
}
else if (random === 3)
{
    ottelupari = "Riskiryhm\u00e4 vs. Ylt\u00e4yliskyll\u00e4stetyt";
}
else if (random === 4)
{
    ottelupari = "Riskiryhm\u00e4 vs. FC Tuho";
}
else if (random === 5)
{
    ottelupari = "Riskiryhm\u00e4 vs. Turpasaunojat";
}
else if (random === 6) 
{
    ottelupari = "V\u00e4hemmist\u00f6n enemmist\u00f6 vs. Riskiryhm\u00e4"; 
}
else if (random === 7)
{
    ottelupari = "V\u00e4hemmist\u00f6n enemmist\u00f6 vs. Kiitt\u00e4m\u00e4tt\u00f6m\u00e4t";
}
else if (random === 8)
{
    ottelupari = "V\u00e4hemmist\u00f6n enemmist\u00f6 vs. Ylt\u00e4yliskyll\u00e4stetyt";
}
else if (random === 9)
{
    ottelupari = "V\u00e4hemmist\u00f6n enemmist\u00f6 vs. FC Tuho";
}
else if (random === 10)
{
    ottelupari = "V\u00e4hemmist\u00f6n enemmist\u00f6 vs. Turpasaunojat";
}
else if (random === 11) 
{
    ottelupari = "Kiitt\u00e4m\u00e4tt\u00f6m\u00e4t vs. Riskiryhm\u00e4"; 
}
else if (random === 12)
{
    ottelupari = "Kiitt\u00e4m\u00e4tt\u00f6m\u00e4t vs. V\u00e4hemmist\u00f6n enemmist\u00f6";
}
else if (random === 13)
{
    ottelupari = "Kiitt\u00e4m\u00e4tt\u00f6m\u00e4t vs. Ylt\u00e4yliskyll\u00e4stetyt";
}
else if (random === 14)
{
    ottelupari = "Kiitt\u00e4m\u00e4tt\u00f6m\u00e4t vs. FC Tuho";
}
else if (random === 15)
{
    ottelupari = "Kiitt\u00e4m\u00e4tt\u00f6m\u00e4t vs. Turpasaunojat";
}
else if (random === 16) 
{
    ottelupari = "Ylt\u00e4yliskyll\u00e4stetyt vs. Riskiryhm\u00e4"; 
}
else if (random === 17)
{
    ottelupari = "Ylt\u00e4yliskyll\u00e4stetyt vs. Kiitt\u00e4m\u00e4tt\u00f6m\u00e4t";
}
else if (random === 18)
{
    ottelupari = "Ylt\u00e4yliskyll\u00e4stetyt vs. V\u00e4hemmist\u00f6n enemmist\u00f6";
}
else if (random === 19)
{
    ottelupari = "Ylt\u00e4yliskyll\u00e4stetyt vs. FC Tuho";
}
else if (random === 20)
{
    ottelupari = "Ylt\u00e4yliskyll\u00e4stetyt vs. Turpasaunojat";
}
else if (random === 21) 
{
    ottelupari = "FC Tuho vs. Riskiryhm\u00e4"; 
}
else if (random === 22)
{
    ottelupari = "FC Tuho vs. Kiitt\u00e4m\u00e4tt\u00f6m\u00e4t";
}
else if (random === 23)
{
    ottelupari = "FC Tuho vs. V\u00e4hemmist\u00f6n enemmist\u00f6";
}
else if (random === 24)
{
    ottelupari = "FC Tuho vs. Ylt\u00e4yliskyll\u00e4stetyt";
}
else if (random === 25)
{
    ottelupari = "FC Tuho vs. Turpasaunojat";
}
else if (random === 26) 
{
    ottelupari = "Turpasaunojat vs. Riskiryhm\u00e4"; 
}
else if (random === 27)
{
    ottelupari = "Turpasaunojat vs. Kiitt\u00e4m\u00e4tt\u00f6m\u00e4t";
}
else if (random === 28)
{
    ottelupari = "Turpasaunojat vs. V\u00e4hemmist\u00f6n enemmist\u00f6";
}
else if (random === 29)
{
    ottelupari = "Turpasaunojat vs. Ylt\u00e4yliskyll\u00e4stetyt";
}
else if (random === 30)
{
    ottelupari = "Turpasaunojat vs. FC Tuho";
}
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

    var valinta = prompt("Rahatilanne: " + varat.toFixed(2) + " \u20ac. (Minimi: 1.00 \u20ac) \n\nIllan ottelupari: " + ottelupari + "\n1: " + kerroin1.toFixed(2) + "\nX: " + kerroinX.toFixed(2) + "\n2: " + kerroin2.toFixed(2) + "\nPaina '1', 'X', tai '2'.\n\nNeuvotellaksesi sopupelin, paina '3'.\nPaina 'L' lopettaaksesi.");
    
if (valinta === 'L')
{
    if (varat < 10)
    {
        alert("H\u00e4visit " + (10 - round(varat)) + " \u20ac. Veikkaaminen on raadollinen bisnes...");
        break;
    }
    else if (varat === 10)
    {
        alert("Veikkaaminen on raadollinen bisnes...");
        break;
    }
    else if (varat > 10 && varat <= 50)
    {
        alert("Voitit " + (round(varat) - 10) + " \u20ac virtuaalista taskurahaa.");
        break;
    }
    else if (varat > 50)
    {
        alert("Voitit " + (round(varat) - 10) + " virtuaalimammonaa puhtaana k\u00e4teen. Pid\u00e4 kivaa!");
        break;
    }
    
}
else if (valinta != '3')
{
    var arpa = prompt("Rahatilanne: " + Math.round(varat) + " \u20ac. Paljonko haluat sijoittaa?");
}

    if (valinta === '1' && (Math.random()*(todnak1+todnakX+todnak2) < todnak1) && arpa <= varat)
{
    console.log('toteutunut, kotijoukkue :', Math.random()*(todnak1+todnakX+todnak2))
    //TäHäN NE ++ tai -- hommat KERROTTUNA KERTOIMELLA. PELI EI TOIMI JOSSEI Tää TOIMI.
    varat = varat + kerroin1*arpa;
    alert("Arvasit oikein! Kotijoukkue voitti kertoimella " + kerroin1.toFixed(2) + ". Rahatilanne: " + Math.round(varat) + " \u20ac.");
}
else if (valinta === 'X' && (Math.random()*(todnak1+todnakX+todnak2) > todnak1 && (Math.random()*(todnak1+todnakX+todnak2) < todnak2)) && arpa <= varat)
{
    console.log('toteutunut :', Math.random()*(todnak1+todnakX+todnak2))
    varat = varat + kerroinX*arpa;
    alert("Arvasit oikein! Tasapeli, kertoimella " + kerroinX.toFixed(2) + ". Rahatilanne: " + Math.round(varat)+ " \u20ac.");
}
else if (valinta === '2' && (Math.random()*(todnak1+todnakX+todnak2) > todnak2) && arpa <= varat)
{
    console.log('toteutunut :', Math.random()*(todnak1+todnakX+todnak2))
    varat = varat + kerroin2*arpa;
    alert("Arvasit oikein! Vierasjoukkue voitti kertoimella " + kerroin2.toFixed(2) + ". Rahatilanne: " + Math.round(varat)+ " \u20ac.");
}
else if (valinta === '3')
{
    var putka = Math.floor(Math.random()*3+1)
    var valinta = prompt("Illan ottelupari: " + ottelupari + "\n1: " + kerroin1.toFixed(2) + "\nX: " + kerroinX.toFixed(2) + "\n2: " + kerroin2.toFixed(2) + ".\nPaina '1', 'X', tai '2'.");  
    var arpa = prompt("Rahatilanne: " + Math.round(varat) + " \u20ac. Paljolla haluat lahjoa paremman joukkueen?");
    console.log("putka-arpa: ", putka);

    if (putka === 1)
    {
        alert("Top tykk\u00e4n\u00e4\u00e4n! Iskuryhm\u00e4 tekee kaikkensa kitke\u00e4kseen sopupelin Noppaliigasta. Varasi " + Math.round(varat) + " takavarikoitiin valtiolle.");
        break;
    }
    else if (valinta === '1' && arpa <= varat)
    {
        varat = varat + kerroin1*arpa;
        alert("Kiinni veti! Kotijoukkue voitti kertoimella " + kerroin1.toFixed(2) + ". Rahatilanne: " + Math.round(varat) + " \u20ac."); 
    }
    else if (valinta === 'X' && arpa <= varat)
    {
        varat = varat + kerroinX*arpa;
        alert("Kiinni veti! Tasapeli, kertoimella " + kerroinX.toFixed(2) + ". Rahatilanne: " + Math.round(varat) + " \u20ac."); 
    }
    else if (valinta === '2' && arpa <= varat)
    {
        varat = varat + kerroin2*arpa;
    alert("Kiinni veti! Vierasjoukkue voitti kertoimella " + kerroin2.toFixed(2) + ". Rahatilanne: " + Math.round(varat) + " \u20ac.");
    }
    else if (arpa > varat)
    {
        alert("\u00c4l\u00e4 hulluja puhu. Sinulla ei ole varaa lahjoa " + arpa + " \u20ac:lla!");
    }
    else
    {
        alert("Pelien ennalta sopiminen ei ole heikkohermoisille...")
    }
}
else if (arpa > varat)
{
    alert("\u00c4l\u00e4 hulluja puhu. Sinulla ei ole varaa " + arpa + " \u20ac arpaan!");
}
else
{
    varat = varat-arpa;
    alert("Arvasit v\u00e4\u00e4rin! Rahatilanne: " + Math.round(varat) + " \u20ac.");
}
if (varat < 1)
{
    alert("Peli ohi. Menetit kaiken!");
    break;
}
}