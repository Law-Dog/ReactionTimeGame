function click() {

    for (var i = 49; i > 15; i = i - 1) {
        console.log(i);
        document.getElementById("small").style.height = `${i}vh`;
        document.getElementById("small").style.width = `${i}%`;
    }
}