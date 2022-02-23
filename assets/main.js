const socket = io();

const messages = document.getElementById("messages");
const form = document.getElementById("form");
const input = document.getElementById("input");
const nameBlock = document.querySelector(".name");

const userName = prompt('Enter User name');
// const userName = 1;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value) {
        socket.emit('chat message', {
            message: input.value, 
            name: userName
        });
        input.value = ''
    }
})

socket.on('chat message', (data) => {
    
    const item = document.createElement('div')
    if (userName === data.name) {
        item.className = 'my_message'
    } else {
        item.className = 'friend_message'
    }
    item.innerHTML = `
        <div class="text-box">
            <span>${data.name}:  </span>
            <span>${data.message}</span>
        </div>    
        `
        messages.appendChild(item)
    console.log(data)
})


nameBlock.innerHTML = userName
