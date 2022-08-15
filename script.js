
let random=Math.floor(Math.random() * 100) + 1;
console.log(random);

// let inputIn = document.querySelector('input-in');

// console.log(input.value);

// p.textContent = input.value;

let inputIn = document.querySelector('.input-in');
let button = document.querySelector('button');
let p = document.querySelector('.out');
let output =document.querySelector('.answer');

button.onclick = function () {    
    // console.log(inpuIn.value);
    // let a =inpuIn.value;
    let a = inputIn.value;
    console.log(a);
    p.innerHTML = a;
    inputIn.value = '';
    let b = a.length;
    console.log(b);   
    
    if ((b % 2==0) & (random % 2==0)){
        console.log(output.innerHTML="yes");
    }
    else if ((b % 2!=0) & (random % 2!=0)) {
        console.log(output.innerHTML="yes");
    }
    else 
        console.log(output.innerHTML="no");
}






