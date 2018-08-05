var myImage = document.querySelector("img"); // Captura o elemento img.

myImage.onclick = function () {
    var myScr = myImage.getAttribute("src"); // A função get captura o valor do atributo src do elemento img definido acima.
    if (myScr === "imagens/favicon.png") { // Compara o conteúdo do atributo capturado.
        myImage.setAttribute("src", "imagens/cachorroMeme.png"); // A função set atualiza o valor do atributo src do elemento img capturado.
    }else {
        myImage.setAttribute("src", "imagens/favicon.png");
    }
}

var myButton = document.querySelector("button");

var myHeading = document.querySelector("h1");

function setUserneme() {
    var myName = prompt("Entre com seu nome.");
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "Que site legal, " + myName;
}

if (!localStorage.getItem("name")) {
    setUserneme();
} else {
    var storedName = localStorage.getItem("name");
    myHeading.innerHTML = "Que site legal, " + storedName;
}

myButton.onclick = function () {
    setUserneme();
}