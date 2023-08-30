// initialize count the as 0 listen for click on the increment button is clicked increament the count
// when the button is clicked cjhange the count-el in the html to reflect the new count
// using camelcase

let countEle =  document.getElementById('count-el');
let count = 0;
function increment(){
    count = count + 1;
    // document.getElementById('count-el').innerText = count;
    countEle.innerHTML = count;
    // console.log(count);
    // console.log("button was clicked.")
};