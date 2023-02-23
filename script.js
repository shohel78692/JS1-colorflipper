 const number = document.querySelector('#num');
 const button = document.querySelector('#btn');
    const body = document.querySelector('body');

    let array = ["red", "pink", "orange", "blue", "purple" ]

 function changeColor(){
        const random = Math.floor(Math.random() * array.length);
        body.style.backgroundColor = array[random];
        button.style.backgroundColor = array[random];
    }