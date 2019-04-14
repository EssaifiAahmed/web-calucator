function typing(number){
  var write = document.forms.inputnumber;
  var getinput = write.value;
   write.value = getinput+number;
 }
 
 function clear(){
     var write = document.forms.inputnumber;
     write.value = null;
 }

 function calculating(){
   var write = document.forms.inputnumber;
   var getinput = write.value;
   write.value = eval(getinput);
 }
 
