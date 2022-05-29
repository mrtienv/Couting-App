let count = 0;
let countEl = document.getElementById("count-el");


// Function to increment
function increment() {
    count +=1;
    countEl.textContent = count;
}

let saveEl = document.getElementById("save-el");

// Function to save increment values
let sum = 0;
let total = document.getElementById("total");

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr;
    sum += count;
    total.textContent = sum;
    console.log(sum);
    count = 0;
    countEl.textContent = count;
}   pase