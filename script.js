const hex_numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
let hex_code1 = "#000000";
let hex_code2 = "#000000";

document.querySelector(".generate").addEventListener("click", () => {
    generateRandomHex()
})

function generateRandomHex() {
    hex_code1 = "", hex_code2 = "";
    for (let i = 0; i < 6; i++) {
        hex_code1 += hex_numbers[Math.floor(Math.random() * hex_numbers.length)];
        hex_code2 += hex_numbers[Math.floor(Math.random() * hex_numbers.length)];
    }
    document.getElementsByTagName("span")[0].innerHTML = "#" + hex_code1;
    document.getElementsByTagName("span")[1].innerHTML = "#" + hex_code2;
    document.body.style.background = `linear-gradient(45deg, #${hex_code1}, #${hex_code2})`
}

document.querySelector(".copy").addEventListener("click", () => {
    copyHex();
})

function copyHex() {
    const gradient = `background: linear-gradient: (45deg, #${hex_code1}, #${hex_code2})`
    navigator.clipboard.writeText(gradient);
}