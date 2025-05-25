let tall1, tall2, tall3, tall4;

function genererTall() {
    return Math.floor(Math.random() * 10) + 1;
}

let poeng = 0;

function addNumber(a, b) {
    return a + b;
}

function addNumber1(a, b) {
    return a * b;
}

function addNumber2(a, b) {
    return a - b;
}

function addNumber3(a, b, c) {
    return a + b + c;
}

function addNumber4(a, b, c) {
    return a + b - c;
}

function streakPoeng() {
    if (poeng === 10) {
        const hurra = document.getElementById("hurra");
        hurra.innerText = "Hurra! Du klarte 10 poeng, bra jobbet! 🎉";
        hurra.style.color = "blue"; // Valgfritt for ekstra effekt
    }else if (poeng == 20){
        const hurra = document.getElementById("hurra");
        hurra.innerText = "Hurra! Du klarte 20 poeng, bra jobbet! 🎉";
        hurra.style.color = "blue"; // Valgfritt for ekstra effekt
    }
 
    setTimeout(() => {
        hurra.innerText = "";
    }, 3000);
}



function genererNyOppgave() {
    tall1 = genererTall();
    tall2 = genererTall();
    tall3 = genererTall();
    tall4 = genererTall();
    tall5 = genererTall();
    tall6 = genererTall();
    tall7 = genererTall();
    tall8 = genererTall();

    document.getElementById("oppgave").innerText = `Hva er ${tall1} + ${tall2}?`;
    document.getElementById("tilbakemelding").innerText = "";
    document.getElementById("brukerSvar").value = "";


    document.getElementById("oppgave2").innerText = `Hva er ${tall3} x ${tall4}?`;
    document.getElementById("tilbakemelding1").innerText = "";
    document.getElementById("brukerSvar1").value = "";


    document.getElementById("oppgave3").innerText = `Hva er ${tall5} - ${tall6}?`;
    document.getElementById("tilbakemelding2").innerText = "";
    document.getElementById("brukerSvar2").value = "";


    document.getElementById("oppgave4").innerText = `Hva er ${tall7} + ${tall8} + ${tall2}?`;
    document.getElementById("tilbakemelding3").innerText = "";
    document.getElementById("brukerSvar3").value = "";


    document.getElementById("oppgave5").innerText = `Hva er ${tall1} + ${tall4} - ${tall6}?`;
    document.getElementById("tilbakemelding4").innerText = "";
    document.getElementById("brukerSvar4").value = "";
}


// function genererNyOppgave1() {
    // tall3 = genererTall();
    // tall4 = genererTall();

    // document.getElementById("oppgave2").innerText = `Hva er ${tall3} * ${tall4}?`;
    // document.getElementById("tilbakemelding1").innerText = "";
    // document.getElementById("brukerSvar1").value = "";
// }

function sjekkSvar() {

    let riktigeISjekk = 0; // teller riktig svar i denne runden
    const antallOppgaver = document.querySelectorAll('input[type="number"]').length;

    const brukerSvar = parseFloat(document.getElementById("brukerSvar").value);
    const riktigSum = addNumber(tall1, tall2);
    const tilbakemelding = document.getElementById("tilbakemelding");

    if (isNaN(brukerSvar)) {
        tilbakemelding.innerText = "Skriv inn et tall.";
        tilbakemelding.style.color = "orange";
    } else if (brukerSvar === riktigSum) {
        tilbakemelding.innerText = "✅ Riktig!";
        tilbakemelding.style.color = "green";
        poeng++;
        streakPoeng();
        riktigeISjekk++;
    } else {
        tilbakemelding.innerText = `❌ Feil. Riktig svar er ${riktigSum}.`;
        tilbakemelding.style.color = "red";
    }

// oppgave 2
    const brukerSvar1 = parseFloat(document.getElementById("brukerSvar1").value);
    const riktigSum1 = addNumber1(tall3, tall4);
    const tilbakemelding1 = document.getElementById("tilbakemelding1");

    if (isNaN(brukerSvar1)) {
        tilbakemelding1.innerText = "Skriv inn et tall.";
        tilbakemelding1.style.color = "orange";
    } else if (brukerSvar1 === riktigSum1) {
        tilbakemelding1.innerText = "✅ Riktig!";
        tilbakemelding1.style.color = "green";
        poeng++;
        streakPoeng();
        riktigeISjekk++;
    } else {
        tilbakemelding1.innerText = `❌ Feil. Riktig svar er ${riktigSum1}.`;
        tilbakemelding1.style.color = "red";
    }

    // oppgvane 3
    const brukerSvar2 = parseFloat(document.getElementById("brukerSvar2").value);
    const riktigSum2 = addNumber2(tall5, tall6);
    const tilbakemelding2 = document.getElementById("tilbakemelding2");

    if (isNaN(brukerSvar2)) {
        tilbakemelding2.innerText = "Skriv inn et tall.";
        tilbakemelding2.style.color = "orange";
    } else if (brukerSvar2 === riktigSum2) {
        tilbakemelding2.innerText = "✅ Riktig!";
        tilbakemelding2.style.color = "green";
        poeng++;
        streakPoeng();
        riktigeISjekk++;
    } else {
        tilbakemelding2.innerText = `❌ Feil. Riktig svar er ${riktigSum2}.`;
        tilbakemelding2.style.color = "red";
    }

    // oppgvane 4
    const brukerSvar3 = parseFloat(document.getElementById("brukerSvar3").value);
    const riktigSum3 = addNumber3(tall7, tall8,tall2);
    const tilbakemelding3 = document.getElementById("tilbakemelding3");

    if (isNaN(brukerSvar3)) {
        tilbakemelding3.innerText = "Skriv inn et tall.";
        tilbakemelding3.style.color = "orange";
    } else if (brukerSvar3 === riktigSum3) {
        tilbakemelding3.innerText = "✅ Riktig!";
        tilbakemelding3.style.color = "green";
        poeng++;
        streakPoeng();
        riktigeISjekk++;
    } else {
        tilbakemelding3.innerText = `❌ Feil. Riktig svar er ${riktigSum3}.`;
        tilbakemelding3.style.color = "red";
    }

  // oppgvane 4
    const brukerSvar4 = parseFloat(document.getElementById("brukerSvar4").value);
    const riktigSum4 = addNumber4(tall1, tall4, tall6);
    const tilbakemelding4 = document.getElementById("tilbakemelding4");

    if (isNaN(brukerSvar4)) {
        tilbakemelding4.innerText = "Skriv inn et tall.";
        tilbakemelding4.style.color = "orange";
    } else if (brukerSvar4 === riktigSum4) {
        tilbakemelding4.innerText = "✅ Riktig!";
        tilbakemelding4.style.color = "green";
        poeng++;
        streakPoeng();
        riktigeISjekk++;
    } else {
        tilbakemelding4.innerText = `❌ Feil. Riktig svar er ${riktigSum4}.`;
        tilbakemelding4.style.color = "red";
    }

    oppdaterPoeng();

    // 👉 Gi tilbakemelding på runden
    const rundeTilbakemelding = document.getElementById("rundeTilbakemelding");
    rundeTilbakemelding.innerText = `Du fikk ${riktigeISjekk} av ${antallOppgaver} riktige.`;
    rundeTilbakemelding.style.fontWeight = "bold";
    rundeTilbakemelding.style.marginTop = "10px";

    // 👉 Ny oppgave etter 2 sekunder
    setTimeout(() => {
        genererNyOppgave();
        rundeTilbakemelding.innerText = ""; // fjern meldingen
    }, 1000);
}

function oppdaterPoeng() {
    document.getElementById("Poeng").innerText = `Poeng: ${poeng}`;

}

function avsluttSpill() {
    // Vis sluttpoeng
    const sluttMelding = document.getElementById("sluttMelding");
    sluttMelding.innerText = `🧠 Spillet er over! Du endte med totalt ${poeng} poeng. God innsats!`;
    sluttMelding.style.fontWeight = "bold";
    sluttMelding.style.color = "blue";

    // Deaktiver inputfelter og knapper
    document.getElementById("brukerSvar").disabled = true;
    document.getElementById("brukerSvar1").disabled = true;
    document.getElementById("brukerSvar2").disabled = true;
    document.getElementById("brukerSvar3").disabled = true;
    document.getElementById("brukerSvar4").disabled = true;

    // Skjul eller deaktiver knapper
    document.querySelectorAll("button").forEach(btn => {
        if (btn.innerText !== "Avslutt") {
            btn.disabled = true;
        }
    });
}

// Kjør ved oppstart
oppdaterPoeng();
genererNyOppgave();


