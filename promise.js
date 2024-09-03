//promises topic
let promise=new Promise(function(resolve,reject){
    const x="statement";
    const y="statement for promises";
    if(x===y){
        resolve();
    }
    else{
         reject();
    }
});
promise.then(function(){
    document.write("success");
})
  .catch(function(){
    document.write("statements are not same");
 });