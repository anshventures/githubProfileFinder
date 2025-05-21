var search = document.querySelector(".findProfilebtn");
var githubusername = document.querySelector(".githubusername");
var card = document.querySelector(".card")

function getProfileData(username) {
  return fetch(`https://api.github.com/users/${username}`)
    .then((raw =>{
      if(!raw.ok) throw new Error("User Not Found");
      else return raw.json();
    } ));
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
          🧪 <span class="italic">GitHub's official mascot. I love Octocats and long walks through version control.</span>
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
  
})


search.addEventListener("click",function(){
  let a = githubusername.value.trim()
  let username = a;
getProfileData(username).then((data)=>{
  console.log(data)
  UserDetails(data);
}).catch(function(error){
  card.innerHTML = `<p class="text-red-400 text-lg">❌ ${error.message}</p>`;
})
;


});