var lisner = document.querySelector('#demo')
lisner.addEventListener('mouseover', function(){
    lisner.classList.add('styler');
});
document.querySelector('#demo').addEventListener('mouseout', function(){
    lisner.classList.remove('styler');
});