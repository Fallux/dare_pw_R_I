console.log("kgviojfk");
let red = document.getElementById("r");
let green = document.getElementById("g");
let blue = document.getElementById("b");

function roodFunction(){
    if (red.style.opacity==='1'){
        red.style.opacity = '0';
    }
    else{
        red.style.opacity= '1';
    }
}
function groenFunction(){
    if (green.style.opacity==='1'){
        green.style.opacity = '0';
    }
    else{
        green.style.opacity= '1';
    }
}
function readData() {
    fetch('library.json')
    .then(response => response.json())
    .then(data =>{
      console.log(data);
    if (data.knopRed === true) {
        roodFunction();  
        console.log("roodwerkt"); 
    }else{
        data.knopRed === false;
    }
    console.log(data.knopGreen) 
    if (data.knopGreen === true) {
        groenFunction();  
        // console.log("werkt"); 
    }
    console.log(data.knopBlue)
         setTimeout(readData, 500); 
    });
}
readData();