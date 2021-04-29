const topforEle= Math.trunc(Math.random()*200)+1;

const heightforEle=Math.trunc(Math.random()*70)+1;
const widthforEle=Math.trunc(Math.random()*50)+1;
const leftforEle=Math.trunc(Math.random()*600)+1;
let scorecard=document.querySelector(".scorevalue");
const restartButton= document.querySelector(".restart");

let score=0;
let time=10000;

// console.log(value);
// console.log(value2);
let elementsView = document.getElementById("elementView"); 
const startGame = () => {
    
    elementsView.hidden = false;
    startTime();
    const buttons=document.querySelectorAll(".button");
    console.log(buttons);
    for(let i=0;i<buttons.length;i++){
        buttons[1].style.left=`${leftforEle}px`;
        buttons[1].style.width=`${widthforEle}px`;

        buttons[0].style.height=`${heightforEle}px`;
        buttons[0].style.top=`${topforEle}px`;
        buttons[2].style.left=`${leftforEle}px`;
        buttons[3].style.width=`${widthforEle}px`;
        buttons[5].style.left=`${leftforEle}px`;
        buttons[5].style.height=`${heightforEle}px`;
        buttons[4].style.width=`${widthforEle}px`;
        buttons[4].style.left=`${topforEle}px`;
        
        buttons[6].style.top=`${topforEle}px`;
        buttons[6].style.width=`${widthforEle}px`;
        buttons[7].style.top=`${leftforEle}px`;
        buttons[7].style.height=`${heightforEle}px`;
        buttons[8].style.left=`${topforEle}px`;
        buttons[8].style.width=`${widthforEle}px`;
        buttons[9].style.top=`${topforEle}px`;
        buttons[9].style.height=`${heightforEle}px`;
        buttons[10].style.left=`${topforEle}px`;
        buttons[10].style.width=`${widthforEle}px`;
        buttons[11].style.top=`${topforEle}px`;
        buttons[11].style.height=`${heightforEle}px`;
        buttons[12].style.left=`${leftforEle}px`;
        buttons[12].style.width=`${widthforEle}px`;
        buttons[13].style.top=`${topforEle}px`;
        buttons[13].style.height=`${heightforEle}px`;

        
        buttons[14].style.left=`${topforEle}px`;
        buttons[14].style.width=`${widthforEle}px`;

        
        buttons[15].style.top=`${leftforEle}px`;
        buttons[15].style.height=`${widthforEle}px`;
        
        buttons[15].style.left=`${topforEle}px`;
        buttons[15].style.width=`${widthforEle}px`;
        buttons[16].style.top=`${topforEle}px`;
        buttons[16].style.height=`${heightforEle}px`;
        buttons[17].style.left=`${leftforEle}px`;
        buttons[17].style.height=`${widthforEle}px`;
        buttons[18].style.top=`${topforEle}px`;
        buttons[18].style.width=`${widthforEle}px`;
        buttons[19].style.left=`${leftforEle}px`;
        buttons[19].style.height=`${heightforEle}px`;
        buttons[20].style.top=`${topforEle}px`;
        buttons[20].style.width=`${widthforEle}px`;

        
        buttons[21].style.top=`${topforEle}px`;
        buttons[21].style.height=`${heightforEle}px`;

        
        buttons[22].style.left=`${topforEle}px`;
        buttons[22].style.width=`${widthforEle}px`;

        
        buttons[23].style.top=`${topforEle}px`;
        buttons[23].style.height=`${heightforEle}px`;

        


        
        buttons[24].style.left=`${leftforEle}px`;
        buttons[24].style.width=`${heightforEle}px`;

        
        buttons[25].style.top=`${topforEle}px`;
        buttons[25].style.height=`${heightforEle}px`;

        
        buttons[26].style.left=`${topforEle}px`;
        buttons[26].style.width=`${heightforEle}px`;

        
        buttons[27].style.top=`${topforEle}px`;
        buttons[27].style.height=`${heightforEle}px`;

        
        buttons[28].style.left=`${leftforEle}px`;
        buttons[28].style.width=`${widthforEle}px`;

        
        buttons[29].style.top=`${topforEle}px`;
        buttons[29].style.height=`${heightforEle}px`;


        //const timezone = setTimeout(buttonClickHandle,time);   

        // After clicking element should removed.
        buttons[i].addEventListener('click',buttonClickHandler )
        }
}

let timeCounter = 10;
let timeInterval;
let timeString = document.getElementById("timeCounter");

const startTime = () => {
    timeString.innerHTML = "Select any Item in "+timeCounter+ "Sec"
    timeInterval = setInterval(updateTime, 1000);
}

const updateTime = () => {
    timeString.innerHTML = "Select any Item in "+timeCounter+ "Sec"
    timeCounter--;
    if (timeCounter < 0)
        stopTime();
}

const stopTime = () => {
    clearInterval(timeInterval);
    elementsView.hidden = true;
    timeString.innerHTML = "FINAL"
    restartButton.hidden = false;
}

  
const buttonClickHandler = function(event){
    event.target.remove();
    score++;
    scorecard.textContent=score;
      
}

const reStartGame = function()
{
    score = 0;
    scorecard.textContent=score;
    location.reload();
}



restartButton.addEventListener('click',reStartGame)
      
