// Q1. Create a Promise that resolves after 2 seconds with the message "Hello from Promise!"
// ✨ Try using setTimeout() to simulate a delay.

// let pr = new Promise ((res,rej)=>{
//   setTimeout(function(){
//     res();
//   },2000)
// })

// pr.then(function(){
//     console.log("Hello from Promise!")
// })


// Q2. Create a Promise that randomly either resolves or rejects
// If Math.random() > 0.5 → resolve with "Success"
// Else → reject with "Failed"

// let pr2 = new Promise((res,rej)=>{
//     let chance = Math.random()<0.5;
//     if(chance) res();
//     else rej();
// })
// pr2.then(function(){
//     console.log("Success");
// }).catch(function(){
//     console.log("Failed")
// })

// Q3. Write a function getData() that returns a Promise. The promise should resolve with "Data received" after 1 second.

// function getData(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res();
//         },1000)
//     })
// }

// getData().then(function(){
//     console.log("Data Received")
// })


// Q4. Use .then() to log the result of a resolved Promise

// let p = Promise.resolve("I am resolved");
// p.then(function(data){
//     console.log(data);
// })

/// Log the result using .then()


// Q5. Use .catch() to handle a rejected Promise

//  let p = Promise.reject("Something went wrong");

// p.catch(function(data){
//     console.log(data);
// })

// /// Handle the error using .catch()


// Q6. Chain two .then() blocks:
// Create a promise that resolves with a number (e.g. 5) and in the first .then() add 10, then in the second .then() multiply the result by 2. Log the final result.

//  let p = new Promise((res,rej)=>{
//      res(5);

//  })
//  p.then(function(data){
//  return data+10;
//  })
// .then(function(newdata){
//     console.log(newdata*2);
// })

// Q7. Convert the following callback code into a Promise-based version:

// function downloadFile(){
//     return new Promise((res,rej)=>{
//         setTimeout(function(){
//             res("file Downloaded");
//         },2000)
//     })
// }

// downloadFile()
// .then(function(data){
//     console.log(data);
// })


// Q8. Write a fake login function using Promises.
// If username is "admin" and password is "1234", resolve with "Login successful"
// Else, reject with "Invalid credentials"


// function fakelogin(){
//  return new Promise((res,rej)=>{
//     let username = prompt("Enter username!");
//     let password = prompt("Enter password");
//     if(username === "admin" && password === "1234"){
//         res("Login Successful")
//     }
//     else rej("Invalid credentials");
//  })
// }
// fakelogin()
// .then(function(data){
//     console.log(data);
// })
// .catch(function(data){
//     console.log(data);
// })


// let p = new Promise((resolve, reject) => {
//   resolve("First");
//   reject("Second");
// });

// p.then(res => console.log(res))
//  .catch(err => console.log(err));



// function orderfood(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{

//         let chance = Math.random() < .7;
//         if(chance){
//             console.log("🍕 Pizza Delivered")
//         }
//         else {
//             console.log("❌ Delivery Failed")
//         }
        
//         },2000)
       
//     })
// }
// orderfood().then(function(data){
//     console.log(data)
// })


// function getUser(){
//     return new Promise((res,rej)=>{
//         res({id:1,name:"ansh"});
//     })
// }

// function getPosts(userID){
//     return new Promise((res,rej)=>{
//     res(["title01","title02","title03"]);
//     })
// }

// function getComments(cmts){
//     return new Promise((res,rej)=>{
//     res("you are amazing","I love this Post");
//     })
// }

// getUser()
// .then(function(data){
//     console.log(data)
// return getPosts(data.id)
// })
// .then(function(titles){
//     console.log(titles)
// return getComments()
// })
// .then(function(cmts){
//     console.log(cmts)
// })


// function getUserInfo(){
//     return new Promise(function(res,rej){
//         setTimeout(function(){
//          res([{name:"ansh"},{id:1}])
//         },1000)
       
//     })
// }
// function getUserPics(id){
//     return new Promise(function(res,rej){
//          setTimeout(function(){
//         res(["pic01,","pic02"]);
//         },1000)
       
        
//     })
// }
// getUserInfo().then(function(data){
// console.log(data);
// return getUserPics(data.id);

// })
// .then(function(data){
//     console.log(data)
// })



var search = document.querySelector(".findProfilebtn");
var githubusername = document.querySelector(".githubusername");
var card = document.querySelector(".card")

function getProfileData(username) {
  return fetch(`https://api.github.com/users/${username}`)
    .then((raw => raw.json()));
}

function getProfileRepo(username){
return fetch(`https://api.github.com/users/${username}/repos`)
.then((raw)=> raw.json());

}
function UserDetails(data){
 let details =  `<div class="flex items-center space-x-4">
        <img
          src="${data.avatar_url}"
          alt="octocat avatar"
          class="w-20 h-20 rounded-full"
        />
        <div>
          <h2 class="text-xl font-semibold">${data.name}</h2>
          <p class="text-gray-400">${data.login}</p>
        </div>
      </div>

      <div class="mt-4 space-y-2" >
        <p class="text-gray-300">
          🧪 <span class="italic">${data.bio}</span>
        </p>
        <div class="flex gap-4 mt-4 text-sm text-gray-400">
          <span>📁 <strong class="text-white">${data.public_repos}</strong> </span>
          <span>👥 <strong class="text-white">${data.followers}</strong> </span>
          <span>🔄 <strong class="text-white">${data.following}</strong></span>
        </div>
        <div class="mt-4">
          🌐 <a href="https://github.com/octocat" target="_blank" class="text-blue-400 hover:underline">View GitHub Profile</a>
        </div>`
      card.innerHTML = details;
}
getProfileRepo("async").then((data)=>{
  console.log(data);
})


search.addEventListener("click",function(){
  let username = githubusername.value;
getProfileData(username).then((data)=>{
  console.log(data)
  UserDetails(data);
});

})