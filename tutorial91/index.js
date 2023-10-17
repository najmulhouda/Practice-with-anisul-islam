const selectFontSize = document.getElementById("selectFontSize");
const selectBgColor = document.getElementById("selectBgColor");
const selectFontFamily = document.getElementById("selectFontFamily");
const resetButton = document.getElementById("resetButton");
const mainElement = document.querySelector("main");


const setValue = (fontSize , bgColor , fontFamily) =>{
    selectFontSize.value = fontSize;
    selectBgColor.value = bgColor;
    selectFontFamily.value = fontFamily;
    mainElement.style.fontSize = fontSize;
    mainElement.style.backgroundColor = bgColor;
    mainElement.style.fontFamily = fontFamily;
}


// load data from local storage
const initialSetup = () =>{
    const fontSize = localStorage.getItem("fontSize");
    const bgColor = localStorage.getItem("bgColor");
    const fontFamily = localStorage.getItem("fontFamily");
    if(fontSize && bgColor && fontFamily){
        setValue(fontSize , bgColor , fontFamily);
    }else if(!fontSize && !bgColor && !fontFamily){
        setValue("16px" , "aqua" , "'Noto Sans KR', sans-serif");
    }
    else if(fontSize && !bgColor && !fontFamily){
        setValue(fontSize , "aqua" , "'Noto Sans KR', sans-serif");
    }
    else if(!fontSize && bgColor    && !fontFamily){
        setValue("16px" , bgColor    , "'Noto Sans KR', sans-serif");
    }
    else if(!fontSize && !bgColor    && fontFamily){
        setValue("16px" , "aqua"    , fontFamily);
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
const changeFontFamily = (event) => {
    const selectedFontFamily = event.target.value;
    mainElement.style.fontFamily = selectedFontFamily;
    localStorage.setItem("fontFamily", selectedFontFamily);
}

selectFontSize.addEventListener("change", changeFontSize);
selectBgColor.addEventListener("change", changeBgColor);
selectFontFamily.addEventListener("change", changeFontFamily);

resetButton.addEventListener("click", () => {
    mainElement.style.fontSize = "16px";
    mainElement.style.backgroundColor = "aqua";
    mainElement.style.fontFamily = "Alumni sans Collegiote One";
    localStorage.removeItem("fontSize");
    localStorage.removeItem("bgColor");  
    localStorage.removeItem("fontFamily");  
    setValue("16px" , "aqua" , "Alumni sans Collegiote One");
})

initialSetup();