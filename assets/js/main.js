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
    fetch('assets/js/library.json')
    .then(response => response.json())
    .then(data =>{
      console.log(data);
    console.log(data.pw_library[1].knopRed)
    console.log(data.pw_library[1].knopGreen) 
    if (data.pw_library[1].knopGreen === true) {
        groenFunction();  
        console.log("werkt"); 
    }
    console.log(data.pw_library[1].knopBlue)
          
    });
}
readData();