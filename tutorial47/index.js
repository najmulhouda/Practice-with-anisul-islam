// const input = document.querySelector("input[name='name']");
// input.addEventListener("change", changeHandler);

// function changeHandler(event) {
//   // console.log(event)
//   // console.log(event.type)
//   // console.log(event.target)
//   // console.log(event.target.className)
//      console.log(event.target.value);
// }


const programs = document.querySelectorAll("input[name='program']");

console.log(programs);

Array.from(programs).map(program => {
        program.addEventListener("change", programHandler);
        
})

function programHandler (event){
        if(event.target.checked){
                console.log(event.target.value);
        }
}