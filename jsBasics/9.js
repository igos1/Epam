function replaceQuotes(str){
  var reg=/'/;
  for(var i=0;i<str.length;i++){
 if(str[i].match(reg)!=null){str[i]='"';}
  }
  return str;
}
console.log(replaceQuotes("I`m the 'hero'"));