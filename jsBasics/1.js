var str='';
function chessBoard(w,h){
  var a = 1;
for(var i=1;i<=h;i++){  
for(var j=0;j<=w;j++){
if(j!=w){
if(j%2==a) {str+="#";}
else {str=str+" ";}
}
if(j==w) {str=str+"\n";
         if (a==1){a=0;}
         else(a=1);}
}
}
return str;
}
console.log(chessBoard(8,4));