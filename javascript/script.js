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
//function doHomework(){
  //const p=new Promise(function(resolve,reject){
    //setTimeout(()=>{
      //let done=true;
      //if(done){
        //console.log("homework is done")
        //resolve("homework is not done")
      //}else{
       // reject("homework is not done")
     // }

    //},5000)
  //} n
//)
//return p
//function dinner() {
 // console.log("Dinner time 🍽️");

  //setTimeout(() => {
    //console.log("Dinner finished ✅");
   // goToPlayground();
 // }, 2000);
//}

//function goToPlayground() {
  //console.log("At playground ⚽");

  //setTimeout(() => {
    //console.log("Done playing 🏃‍♂️");
   // sleep();
 // }, 1500);
//}

//function sleep() {
  //console.log("Sleeping 😴💤");
//}

//dinner();

//}
//function dinner() {
  ///return new Promise((resolve) => {
    //console.log("Dinner time 🍽️");
    //setTimeout(() => {
      //console.log("Dinner finished ✅");
     // resolve();
   // }, 2000);
 // });
//}

//function goToPlayground() {
  //return new Promise((resolve) => {
    //console.log("At playground ⚽");
    //setTimeout(() => {
     // console.log("Done playing ");
    //  resolve();
  //  }, 1500);
 // });
//}

//function sleep() {
  //return new Promise((resolve) => {
    //console.log("Sleeping ");
    //resolve();
  //});
//}


//dinner()
  //.then(goToPlayground)
//  .then(sleep);

//console.log("first line")
//setTimeout(()=>{
//console.log("time 1 ")
//},0)
//const p=new Promise((resolve,reject)=>{
//resolve()

//}
//)
//p.then(()=>{
  //console.log("inside promise ")
//}

//)
//const p2=new Promise((resolve,reject)=>{
//resolve()
//}

//)
//p.then(()=>{
//  console.log("inside promise ")
//})
//const p3=new Promise ((resolve,reject)=>{
//resolve()  
//})
//p.then(()=>{
//  console.log("inside promise ")
//})
//console.log("last line ")
//function orderFood() {
    //return new Promise(function(resolve, reject) {
        //setTimeout(() => {
       //     console.log("Food Ordered");
     //       resolve("Food Ordered");
   //     }, 1000);
 //   });
//}

//function prepareFood() {
    //return new Promise(function(resolve, reject) {
        //setTimeout(() => {
        //    console.log("Food Prepared");
      //      resolve("Food Prepared");
    //    }, 3000);
  //  });
//}

//function deliverFood() {
  //  return new Promise(function(resolve, reject) {
       // setTimeout(() => {
     //       console.log("Food Delivered");
       //     resolve("Food Delivered");
   //     }, 2000);
  //  });
//}

//orderFood()
//.then((data) => {
   // console.log(data);
  //  return prepareFood();
//})
//.then((data) => {
    //console.log(data);
  //  return deliverFood();
//})
//.then((data) => {
  //  console.log(data);
//})
//.catch((err) => {
  //  console.log(err);
//});

//async function order() {
    //const data = await orderFood();
    //console.log(data);
    //await prepareFood();
  //  await deliverFood();
//}

//order();
//console.log("1st line");

//try {
    // let sample = 324
    // console.log(sample)
   //
   // let age = 10
   // if (age < 18) {
     //   throw new Error("Access Denied")
    //}
//}
//catch (error) {
  //  console.log(error)
//}
//finally {
  //  console.log("finally block")
//}

//console.log("last line")
async function getData() {
    try {
        const response = await fetch("https://dummyjson.com/products");

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

        data.products.forEach((product) => {
            console.log("Price:", product.price);
        });

    } catch (error) {
        console.error("Error occurred:", error);
    }
}

getData();
