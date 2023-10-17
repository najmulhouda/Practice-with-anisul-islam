const selectFontSize = document.getElementById("selectFontSize");
const selectBgColor = document.getElementById("selectBgColor");
const resetButton = document.getElementById("resetButton");
const mainElement = document.querySelector("main");


const setValue = (fontSize , bgColor) =>{
    selectFontSize.value = fontSize;
    selectBgColor.value = bgColor;
    mainElement.style.fontSize = fontSize;
    mainElement.style.backgroundColor = bgColor;
}


// load data from local storage
const initialSetup = () =>{
    const fontSize = localStorage.getItem("fontSize");
    const bgColor = localStorage.getItem("bgColor");
    if(fontSize && bgColor){
        setValue(fontSize , bgColor);
    }else if(!fontSize && !bgColor){
        setValue("16px" , "aqua");
    }
    else if(fontSize && !bgColor){
        setValue(fontSize , "aqua");
    }
    else if(!fontSize && bgColor){
        setValue("16px" , bgColor);
    }
}


const changeFontSize = (event) => {
    const selectedFontSize = event.target.value;
    mainElement.style.fontSize = selectedFontSize;
    localStorage.setItem("fontSize", selectedFontSize);


}

const changeBgColor = (event) => {
    const selectedBgColor = event.target.value;
    mainElement.style.backgroundColor = selectedBgColor;
    localStorage.setItem("bgColor", selectedBgColor);
}


selectFontSize.addEventListener("change", changeFontSize);
selectBgColor.addEventListener("change", changeBgColor);

resetButton.addEventListener("click", () => {
    mainElement.style.fontSize = "16px";
    mainElement.style.backgroundColor = "aqua";
    localStorage.removeItem("fontSize");
    localStorage.removeItem("bgColor");  
    setValue("16px" , "aqua ")
})

initialSetup();