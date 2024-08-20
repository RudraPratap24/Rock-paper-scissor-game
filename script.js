let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let count_cp = 0;
let count_p = 0;
const sample = ["rock", "paper", "scissor"];
let icon = document.querySelectorAll(".icon");

// icon.addEventListener("click", () => {
//     const random = Math.floor(Math.random() * sample.length);
//     console.log(sample[random]);
// })

rock.addEventListener("click", () => {
    const random = Math.floor(Math.random() * sample.length);
    console.log(sample[random]);
    if(sample[random] === "paper") {
        count_cp++;
        document.querySelector("#computer_score").innerText = `${count_cp}`;
        document.querySelector("#result").style.backgroundColor = "red";
        document.querySelector("#result").innerText = "You Lost! Paper Beats Rock";
        // cur_score.innerText = `${count_cp}`;
    } else if( sample[random] === "scissor") {
        count_p++;
        document.querySelector("#player_score").innerText =`${count_p}`;
        document.querySelector("#result").style.backgroundColor = "green";
        document.querySelector("#result").innerText = "You Won! Rock Beats scissor"
        
    } else {
        document.querySelector("#result").innerText = "Its A Draw";
        document.querySelector("#result").style.backgroundColor = "cadetblue";
    }
    
})


paper.addEventListener("click", () => {
    const random = Math.floor(Math.random() * sample.length);
    console.log(sample[random]);
    if(sample[random] === "scissor") {
        count_cp++;
        document.querySelector("#computer_score").innerText = `${count_cp}`;
        document.querySelector("#result").style.backgroundColor = "red";
        document.querySelector("#result").innerText = "You lost! scissor beats paper"
        // cur_score.innerText = `${count_cp}`;
    } else if( sample[random] === "rock") {
        count_p++;
        document.querySelector("#player_score").innerText =`${count_p}`;
        document.querySelector("#result").style.backgroundColor = "green"
        document.querySelector("#result").innerText = "You Won! Paper beats rock";
        
    } else {
        document.querySelector("#result").innerText = "Its A Draw";
        document.querySelector("#result").style.backgroundColor = "cadetblue";
    }
   
})
scissor.addEventListener("click", () => {
    const random = Math.floor(Math.random() * sample.length);
    console.log(sample[random]);
    if(sample[random] === "rock") {
        count_cp++;
        document.querySelector("#computer_score").innerText = `${count_cp}`;
        document.querySelector("#result").style.backgroundColor = "red";
        document.querySelector("#result").innerText = "You Lost! Rock Beats Scissor";
        // cur_score.innerText = `${count_cp}`;
    } else if( sample[random] === "paper") {
        count_p++;
        document.querySelector("#player_score").innerText =`${count_p}`;
        document.querySelector("#result").style.backgroundColor = "green";
        document.querySelector("#result").innerText = "You Won! Scissor beats Paper"
        
    } else {
        document.querySelector("#result").innerText = "Its A Draw";
        document.querySelector("#result").style.backgroundColor = "cadetblue";
    }
    
})