function sendMessage(){

let input = document.querySelector("input");
let chat = document.querySelector(".chat");

let text = input.value;

if(text=="") return;


chat.innerHTML += `
<div class="msg user">
${text}
</div>
`;


chat.innerHTML += `
<div class="msg ai">
🤖 Message received. AI connection next step me add hoga.
</div>
`;

input.value="";

}
