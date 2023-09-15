var photos = ["images/397.jpg","images/398.jpg","images/399.jpg","images/400.jpg"];
var imgTag = document.querySelector("img");

count = 0;

function next (){
    count++;
    if(count >= photos.length){
        count = 0;
        imgTag.src = photos[count];
    }
    else{
        imgTag.src = photos[count];
    }

}

function previous(){
    count--;
    if(count <= 0){
        count = photos.length - 1;
        imgTag.src = photos[count];
    }
    else{
        imgTag.src = photos[count];
    }

}