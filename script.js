document.getElementById("screen").value

function calculation(value){
    document.getElementById("screen").value+=value;
}
function cleardisplay(){
    document.getElementById("screen").value=""; 
}
function home(){
     var a=document.getElementById("screen").value;
     var b=eval(a);
     document.getElementById("screen").value=b;
}