javascript: 
(function() {
var inputTextList = document.querySelectorAll("input[type='text']");
for (i=0; i<5; i++){
    inputTextList[i].value=8;
}
document.getElementsByClassName("ui-autocomplete-input")[0].value="BLAP8003";    
})()