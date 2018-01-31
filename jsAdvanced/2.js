//a
function random(sumWith) {
  return new Promise(function(resolve) {
  var timeout = Math.random()*3000;
  setTimeout(function(){
    resolve(Math.random()*3 + sumWith);
}, timeout)
}).then(function(result){ return result+=result;}).
   then( function(result){return result+=result;}).
   then( function(result){return result+=result;}).
   then(function(result){console.log(result);})
}
random(2);

//b
function random() {
  return new Promise(function(resolve) {
  var timeout = Math.random()*3000;
  setTimeout(function(){
    resolve(Math.random()*3);
 }, timeout)
    })
                  }
  Promise.all([random(), random(),random(),
            random(),random(),random(),random()]).then(values => { 
  console.log(values); 
});