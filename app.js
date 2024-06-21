let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");  
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")


let turnO = true;       //true->O           false->X

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};


const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("o-text");
        box.classList.remove("x-text");
    }
};

const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerText = "O";
            box.classList.add("o-text");
        }
        else{
            box.innerText = "X";
            box.classList.add("x-text");
        }
        turnO = (!turnO);
        box.disabled = true;

        checkWinner();
    });
});


const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if((pos1Val != "") && (pos2Val != "") && (pos3Val != "")){
            if((pos1Val === pos2Val) && (pos2Val === pos3Val)){
                console.log("Winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};


const showWinner = (winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner} \n🥳🎉`;
    disableBoxes();
    msgContainer.classList.remove("hide");
};


