// Menambahkan event listener untuk validasi saat mouse masuk
document.getElementsByTagName("input")[1].addEventListener("mouseover", validasi1);
// Menambahkan event listener untuk validasi saat mouse meninggalkan input
document.getElementsByTagName("input")[1].addEventListener("mouseleave", validasi2);
// Menambahkan event listener untuk tombol konversi
document.getElementsByTagName("button")[0].addEventListener("click", convert);
// Menambahkan event listener untuk tombol reset
document.getElementsByTagName("button")[1].addEventListener("click", reset);
// Menambahkan event listener untuk tombol reverse
document.getElementsByTagName("button")[2].addEventListener("click", reverse);

// Fungsi untuk validasi saat mouse masuk
function validasi1() {
    document.getElementsByTagName("input")[1].setAttribute("disabled", true);
    document.getElementById("result").textContent = "Tombol reverse untuk \menukar konversi";
}

// Fungsi untuk validasi saat mouse meninggalkan input
function validasi2() {
    document.getElementsByTagName("input")[1].removeAttribute("disabled");
    document.getElementById("result").textContent = " ";
}

// Fungsi untuk melakukan konversi suhu
function convert() {
    let idinput = document.getElementsByTagName("input")[0].id;
    if (idinput === "input1") {
        let celsius = parseFloat(document.getElementById("input1").value);
        if (!isNaN(celsius)) {
            let hit = (celsius * 9 / 5);
            let fahrenheit = hit + 32;
            document.getElementById("input2").value = fahrenheit.toFixed(1);

            let resultText = "°F = (°C x 9/5) + 32\r\n= (" + celsius + " x 9/5) + 32\r\n= " + hit + " + 32\r\n= " + fahrenheit.toFixed(1) + " °F";
            document.getElementById("result").textContent = resultText;
        } else {
            document.getElementById("result").textContent = "Mohon input suhu terlebih dahulu";
        }
    } else if (idinput === "input2") {
        let fahrenheit = parseFloat(document.getElementById("input2").value);
        if (!isNaN(fahrenheit)) {
            let hit = (fahrenheit - 32);
            let celcius = (hit * 5 / 9);
            document.getElementById("input1").value = celcius.toFixed(1);

            let resultText = "°C = (°F - 32) x 5/9\r\n= (" + fahrenheit + " - 32) x 5/9\r\n= " + hit + " * 5/9\r\n= " + celcius.toFixed(1) + " °C";
            document.getElementById("result").textContent = resultText;
        } else {
            document.getElementById("result").textContent = "Mohon input suhu terlebih dahulu";
        }
    }
}

// Fungsi untuk mereset input
function reset() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("result").textContent = " ";
}

// Fungsi untuk menukar input
function reverse() {
    let idinput = document.getElementsByTagName("input")[0].id;
    let valInput1 = document.getElementsByTagName("input")[0].value;
    let valInput2 = document.getElementsByTagName("input")[1].value;

    if (idinput === "input1") {
        // Menukar input 1 dan input 2
        document.getElementsByTagName("input")[0].id = "input2";
        document.getElementsByTagName("input")[0].name = "input2";
        document.getElementsByTagName("input")[0].value = valInput2;
        document.getElementsByTagName("label")[0].textContent = "F";

        document.getElementsByTagName("input")[1].id = "input1";
        document.getElementsByTagName("input")[1].name = "input1";
        document.getElementsByTagName("input")[1].value = valInput1;
        document.getElementsByTagName("label")[1].textContent = "C";

        // Melakukan konversi sesuai dengan input yang baru
        let fahrenheit = parseFloat(document.getElementById("input2").value);
        if (!isNaN(fahrenheit)) {
            let hit = (fahrenheit - 32);
            let celcius = (hit * 5 / 9);
            document.getElementById("input1").value = celcius.toFixed(2);

            let resultText = "°Celsius = (°Fahrenheit - 32) x 5/9\r\n= (" + fahrenheit + " - 32) x 5/9\r\n= " + hit + " * 5/9\r\n= " + celcius.toFixed(2) + " °Celsius";
            document.getElementById("result").textContent = resultText;
        } else {
            document.getElementById("result").textContent = "Mohon input suhu terlebih dahulu";
        }

    } else if (idinput == "input2") {
        // Menukar input 1 dan input 2
        document.getElementsByTagName("input")[0].id = "input1";
        document.getElementsByTagName("input")[0].name = "input1";
        document.getElementsByTagName("input")[0].value = valInput2;
        document.getElementsByTagName("label")[0].textContent = "C";

        document.getElementsByTagName("input")[1].id = "input2";
        document.getElementsByTagName("input")[1].name = "input2";
        document.getElementsByTagName("input")[1].value = valInput1;
        document.getElementsByTagName("label")[1].textContent = "F";

        // Melakukan konversi sesuai dengan input yang baru
        let celsius = parseFloat(document.getElementById("input1").value);
        if (!isNaN(celsius)) {
            let hit = (celsius * 9 / 5);
            let fahrenheit = hit + 32;
            document.getElementById("input2").value = fahrenheit.toFixed(2);

            let resultText = "°Fahrenheit = (°Celsius x 9/5) + 32\r\n= (" + celsius + " x 9/5) + 32\r\n= " + hit + " + 32\r\n= " + fahrenheit.toFixed(2) + " °Fahrenheit";
            document.getElementById("result").textContent = resultText;
        } else {
            document.getElementById("result").textContent = "Mohon input suhu terlebih dahulu";
        }
    }
}