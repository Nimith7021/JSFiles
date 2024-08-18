// let players = ["Sachin","Virat","Ganguly","VVS"]
// for(let i = 0 ;i<players.length;i++){
//     console.log(i + " " + players[i]);
// }

// players.forEach((player,index)=>console.log(index + " " + player))


let players = ['Sachin','Ganguly','VVS','Kohli']
let playerList = document.getElementById("playerList");
let html = ``;
players.forEach(player=>{
    html+=`<li>${player}</li>`
    playerList.innerHTML = html
})


function AddPlayer(){
    let name = m1.n1.value;
    html=`<li>${name}</li>`
    playerList.innerHTML =html
}

playerList.addEventListener("click",(e)=>{
    console.log(e.target)
    e.target.remove()
})

