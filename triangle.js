let x;
let y;
let z;

document.getElementById("submitBtn").onclick = function(){
    x = document.getElementById("side-btn1").value;
    x = Number(x);
    y = document.getElementById("side-btn2").value;
    y = Number(y);
    z = document.getElementById("side-btn3").value;
    z = Number(z);
    let perimeter = (x + y + z)/2;
    let area = Math.ceil(Math.sqrt(perimeter *(perimeter-x)
    *(perimeter-y)*(perimeter-z)));
    document.getElementById("displayC").innerHTML = 
    "The area of triangle is:" + " " + area + " " + "centimer square"

}