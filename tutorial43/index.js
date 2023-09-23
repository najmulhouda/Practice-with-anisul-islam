

for( var i = 0; i < 5; i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click", function () {
        var text = this.innerHTML;
        document.querySelector("h1").innerHTML = text + " is clicked";
    })

}