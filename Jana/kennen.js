var jahr = 2019,
    monat = 10,
    tag = 20,
    stunde = 17,
    minute = 38,
    sekunde = 27; // Start-Datum in MEZ

function countup() {
    var startDatum = new Date(jahr, monat - 1, tag, stunde, minute, sekunde);
    zielDatum = new Date(); // Aktuelles Datum

    // Countup erst berechnen und anzeigen, wenn Start-Datum überschritten wird
    if (startDatum < zielDatum) {

        var jahre = 0,
            monate = 0,
            tage = 0,
            stunden = 0,
            minuten = 0,
            sekunden = 0;

        // Jahre
        while (startDatum < zielDatum) {
            jahre++;
            startDatum.setFullYear(startDatum.getFullYear() + 1);
        }
        startDatum.setFullYear(startDatum.getFullYear() - 1);
        jahre--;

        // Monate
        while (startDatum < zielDatum) {
            monate++;
            startDatum.setMonth(startDatum.getMonth() + 1);
        }
        startDatum.setMonth(startDatum.getMonth() - 1);
        monate--;

        // Tage
        while (startDatum.getTime() + (24 * 60 * 60 * 1000) < zielDatum) {
            tage++;
            startDatum.setTime(startDatum.getTime() + (24 * 60 * 60 * 1000));
        }

        // Stunden
        stunden = Math.floor((zielDatum - startDatum) / (60 * 60 * 1000));
        startDatum.setTime(startDatum.getTime() + stunden * 60 * 60 * 1000);

        // Minuten
        minuten = Math.floor((zielDatum - startDatum) / (60 * 1000));
        startDatum.setTime(startDatum.getTime() + minuten * 60 * 1000);

        // Sekunden
        sekunden = Math.floor((zielDatum - startDatum) / 1000);

        // Anzeige formatieren
        (jahre != 1) ? jahre = jahre + " Jahre,  " : jahre = jahre + " Jahr,  ";
        (monate != 1) ? monate = monate + " Monate,  " : monate = monate + " Monat,  ";
        (tage != 1) ? tage = tage + " Tage,  " : tage = tage + " Tag,  ";
        (stunden != 1) ? stunden = stunden + " Stunden,  " : stunden = stunden + " Stunde,  ";
        (minuten != 1) ? minuten = minuten + " Minuten  und  " : minuten = minuten + " Minute  und  ";
        if (sekunden < 10) sekunden = "0" + sekunden;
        (sekunden != 1) ? sekunden = sekunden + " Sekunden" : sekunden = sekunden + " Sekunde";

        document.countupform.countupinput.value =
            jahre + monate + tage + stunden + minuten + sekunden;

    }
    // Anderenfalls alles auf Null setzen
    else document.countupform.countupinput.value =
        "0 Jahre,  0 Monate,  0 Tage,  0 Stunden,  0 Minuten  und  00 Sekunden";

    setTimeout('countup()', 200);
}




var eventdate = new Date("October 20, 2019 17:38:27 GMT");
d = new Date();
count = Math.floor((eventdate.getTime() - d.getTime()) / 1000);
count = Math.floor(count / (60 * 60 * 24));
//document.write(-count);
document.getElementById('tageJ').innerHTML = -count;