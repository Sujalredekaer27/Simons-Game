let gameSeq=[];
let userSeq=[];

let started = false;
let level = 0;

let btns = ["orange","pink","purple","green"]
let h2 = document.querySelector('h2')
//game started
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started")
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash")
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`)
    // console.log(`${randIdx},${randColor},${randBtn}`)
    
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){

    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        let back = document.querySelector('body');
        back.classList.add("background");
        setTimeout(function(){
            back.classList.remove("background")
        },200);
        h2.innerHTML=`<b><i>game over score is${level-1}</i></b><br> Press any key to start the game again`;
        reset();

    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor)
    checkAns(userSeq.length-1)
}

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
        btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level=0;
}