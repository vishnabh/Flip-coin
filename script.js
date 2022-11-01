let heads = 0;
let tails = 0;

let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    
      

    if(i){
        setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards";
        },100)
        heads++;
    }
    else{
        setTimeout(function(){
            coin.style.animation = "spin-tails 3s forwards";
            coin.style.color = "green";
        },100)
        tails++;
    }
    setTimeout(updatestatus,3000);
    disableButton(3000);
});

function updatestatus(){
    document.querySelector("#heads-count").textContent = `Heads : ${heads}`;
    document.querySelector("#tails-count").textContent = `Tails : ${tails}`;
};

function disableButton(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    },3000);
};

resetBtn.addEventListener("click",() => {
    coin.style.transform = "rotateX(0)";
    heads = 0;
    tails = 0;
    updatestatus();
});