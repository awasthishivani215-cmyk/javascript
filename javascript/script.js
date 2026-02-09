const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log("form submitted")
}
const form=document.querySelector('form')
form.addEventListener('submit',handleSubmit)
//let count = 1

//let interval = setInterval(() => {
  //  console.log(count);
    //count ++;
    //if (count > 90) {
      //  clearInterval(interval);
    //}
//},100); 

//function print(name,callback) {
  //  console.log("hello"+name);
    //callback()

//}
//function sayBye() {
  //  console.log("bye");
//}
//function saybye() {
  //  console.log("bye")
    //setTimeout(saybye,1000)
    
//}
//print("shiva",sayBye)

//console.log("starting homework");

//setTimeout(() => {
 //console.log("Homework done");   
 //console.log("starting dinner");

//setTimeout(() => {
   // console.log("dinner done");
  //  console.log("get ready to go ");


//setTimeout(() => {
  //  console.log("going to playground");
   //     } , 1000);
 //   }, 1000);
//}, 1000);


//function finishHomework(callback) {
  //console.log("Starting homework...");
  //setTimeout(() => {
   // console.log("Homework done!");
   // callback();
 // }, 2000);
//}

//function eatDinner(callback) {
  //console.log("Starting dinner...");
  //setTimeout(() => {
    //console.log("Dinner done!");
   // callback();
  //}, 1500);
//}

//function goToPlayground() {
  //console.log("Going to the playground!");
//}

//finishHomework(() => {
  //eatDinner(() => { 
  //  goToPlayground();
//  });
//});
//const p=new Promise(function(resolve,reject){
  //setTimeout{()=>{
    //let done=false;
    //if(done){
      //resolve={(name:"alex,age=34")}
    //}else{
      //reject{(message:"networkissue")}
    //}
  //},2000)



//})
function eatDinner() {
  console.log("Dinner start 🍽️");

  setTimeout(() => {
    console.log("Dinner done ✅");
    goToPlayground();
  }, 2000);
}

function goToPlayground() {
  console.log("Going to playground 🏃‍♂️⚽");
}

eatDinner();
function dinner() {
  console.log("Dinner time 🍽️");

  setTimeout(() => {
    console.log("Dinner finished ✅");
    goToPlayground();
  }, 2000);
}

function goToPlayground() {
  console.log("At playground ⚽");

  setTimeout(() => {
    console.log("Done playing 🏃‍♂️");
    sleep();
  }, 1500);
}

function sleep() {
  console.log("Sleeping 😴💤");
}

dinner();


