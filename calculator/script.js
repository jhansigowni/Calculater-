function appendToScreen(value) {
    document.getElementById("result").value += value;
 }
 
 function clearScreen() {
    document.getElementById("result").value = '';
 }
 
 function deleteFromScreen() {
    var screen = document.getElementById("result").value;
    document.getElementById("result").value = screen.substring(0, screen.length - 1);
 }
 
 function calculate() {
    var screen = document.getElementById("result").value;
    var result = eval(screen);
    document.getElementById("result").value = result;
 }
 
 