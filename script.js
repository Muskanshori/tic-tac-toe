console.log("welcome to tic tac toe")
// let music = new Audio("music.mp3");
let audioturn=  new Audio("gameover.mp3")
let turn ="X"
let gameover=false;

//function to cange the turn
const changeturn=()=>{

    return turn ==="X"?"0":"X"
}

//function to check for a win
const checkwin=()=>{
    let boxtext = document.getElementsByClassName('box');
     let wins= [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [0,4,5],
        [2,4,6],
     ]
     wins.forEach(e=>{

        if((boxtext[e[0]].innerText==boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText==boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText!=="")){
        document.querySelector('.info').innerText = boxtext[e[0]].innerText + ' won '
        gameover=true
        document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width="191px"
        }
     });
}

//game logic

let boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText= turn;
            turn = changeturn();
            audioturn.play();

            checkwin();
            if (!gameover) {
            document.getElementsByClassName("info")[0].innerText = "turn for" + turn;
            }
            
        }
    });
});
//add click listner to reset button
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""
    });
    turn="X";
    gameover = false;
    document.getElementsByClassName("info")[0].innerText = "turn for" + turn;
    document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width="0px"
})




