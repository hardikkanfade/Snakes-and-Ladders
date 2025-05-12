let user1 = 1;
let user1val = document.querySelector(`.box${user1}`);
let dice = document.querySelector("#throwDice");

let msg=document.querySelector(".msg");

const normal = ()=>{
  msg.innerText = "Throw Again";
  msg.style.backgroundColor = "yellow";
};
const ladder = () =>{
  msg.innerText = "WoW , you got a ladder";
  msg.style.backgroundColor = "green";
};
const snake = () =>{
  msg.innerText = "Oops ! you have got bitten by a snake";
  msg.style.backgroundColor = "red";
};
const winner = ()=>{
  msg.innerText = "Congratulations!!!! You Won";
  msg.style.backgroundColor = "#c17c74";
};

let img=document.createElement("img");
  img.src="rock.png";
  img.classList.add("images")
const generateNo = () =>{
  let newNo = 0;
  let no = Math.floor(Math.random()*6);
  dice.innerText = no +1;
  newNo = no +1 ;
  // console.log(newNo);
  user1val.classList.remove("images");
  user1 = user1 + newNo;
  if(user1===4) user1 =25 ,ladder() ;
  else if(user1===13) user1=46 ,ladder();
  else if(user1===33) user1=49,ladder();
  else if(user1===42) user1=63,ladder();
  else if(user1===50) user1=69,ladder();
  else if(user1===62) user1=81,ladder();
  else if(user1===74) user1=92,ladder();
  else if(user1===27) user1=5,snake();
  else if(user1===40) user1=3,snake();
  else if(user1===43) user1=18,snake();
  else if(user1===54) user1=31,snake();
  else if(user1===66) user1=45,snake();
  else if(user1===76) user1=58,snake();
  else if(user1===89) user1=53,snake();
  else if(user1===99) user1=41,snake();
  else if(user1>100)  user1 -= newNo;
  else if(user1===100) winner();
  else normal();
  console.log(user1);
  user1val = document.querySelector(`.box${user1}`);
  img.classList.add("images")

  user1val.append(img);

};
  user1val.append(img);
  dice.addEventListener("click",generateNo);

