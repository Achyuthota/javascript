let str="welcome to string topic  .";
document.write(str);
let str1="java full stack  ";
document.write(str1);
let str2=str.length;    //string length 1
document.write(str2)
let len=str1.length;    //string length 2
document.write(len)

//concatination
let result=str+str1;
document.write(result)

//single quotes ''
let str3="this is \'session\'";
document.write(str3);


//promises topic
let promise=new promise(function(resolve,reject){
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