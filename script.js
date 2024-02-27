let imgBox = document.getElementById("imgBox")
let qrImg = document.getElementById("qrImg")
let qrText = document.getElementById("qrText")


function generateQR(){
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
    + qrText.value;

    let inputText = document.getElementById("qrText");
    inputText.style.display = "none";

    let paragraph = document.querySelector(".container p");
    paragraph.textContent = "QR Code Generated:";
    paragraph.style.fontWeight = "bold";

    imgBox.classList.add("show-img")

}

function resetQR() {
let inputText = document.getElementById("qrText");
inputText.value = ""; // Clear the input field

let qrImg = document.getElementById("qrImg");
qrImg.src = ""; // Clear the image source

let imgBox = document.getElementById("imgBox");
imgBox.classList.remove("show-img");

let paragraph = document.querySelector(".container p");
paragraph.textContent = "Enter your text or URL";
paragraph.style.fontWeight = "normal";

// Show the input text field again
inputText.style.display = "block";
}