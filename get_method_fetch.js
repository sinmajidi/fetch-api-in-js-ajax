window.onload=function(){
   //with header
   const url='https://jsonplaceholder.ir/users'
   const option={
      method:'GET',
      headers:{
         'accept':'application/json',
         'content-type':'application/json;charset-UTF-8'
      },
      }
   fetch(url,option).then(response => response.json())
  .then(json => console.log(json[0].name));


 //without header,the data variable named json
fetch("https://jsonplaceholder.ir/users")
  .then(response => response.json())
  .then(json => console.log(json[0].name));

//without header,the data variable named data
  fetch("https://jsonplaceholder.ir/users")
  .then(response => response.json())
  .then(data => console.log(data[0].name));


//an other example
  fetch("https://jsonplaceholder.ir/posts/6")
  .then(response => response.json())
  .then(json => console.log(json));





}