function input(value){
  document.getElementById('formula').value += value;
}
function calc(){
  var formula = document.getElementById('formula').value
  document.getElementById('formula').value = eval(formula);
}
function init(){
  document.getElementById('formula').value = "";
}
