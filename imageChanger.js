// var imgURL = chrome.extension.getURL("images/goku_blue.png");
// document.getElementById("demo").src = imgURL;

 // document.getElementById("demo").style.backgroundImage = `url("images/goku_blue.png")`; working fine

var images = [];
console.log( document.getElementById('demo') );
for(let i=0;i<=3;i++){
    let imgSrc = `url("images/${i}.jpg")`;
    //console.log(imgSrc);
    images.push(imgSrc);
}

var imgPath;

var i=0;
function timer(){
    console.log(i+" "+images[i]);
    if(i<images.length){
        document.body.style.backgroundImage = images[i]; 
        i++;
    }
    else{
        i=0;
        document.body.style.backgroundImage = images[i]; 
    }
}
setInterval(timer,2000);


// var h = window.innerHeight;
// var w = window.innerWidth;
// //document.body.style.backgroundImage = `url("https://source.unsplash.com/random/${w}x${h}")`; // working fine