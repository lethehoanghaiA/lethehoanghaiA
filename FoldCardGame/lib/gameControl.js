const card = document.querySelector(".card");
const card_back = document.querySelector(".back");
const card_front = document.querySelector(".front");
const board = document.querySelector('.board')
const start_btn = document.querySelector('.start');
const loadingTimeBar = document.getElementById('loadingTimeBar');

//Variables to process the game
let countPairs = 0;
let idCard = null;
let idElement = null;
let point =0;
let isChecking = true;
let startRun = null;
let widthLoadingBar = 0;

// pic src: https://www.elitetraveler.com/luxury-transport/automotive/the-best-luxury-cars-of-2019
const img_lib = [
    './lib/arrinera.jpg',
    './lib/black.jpg',
    './lib/bugati.jpg',
    './lib/ferrari.jpg',
    './lib/hennessey.jpg',
    './lib/huracan.jpg',
    './lib/mclarenF1.jpg',
    './lib/mclarren.jpg',
    './lib/noble.jpg',
    './lib/pagani.jpg',
    './lib/porsche.jpg',
    './lib/redbugati.jpg',
    './lib/saleen.jpg'
]

let card_colletion = [];

// start_btn.addEventListener('click', startGame);

//Modal pop up menu when start game
// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal = start_btn
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
start_btn.onclick = function() {
  modal.style.display = "block";

}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";

}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  console.log(event.target);
  if (event.target == modal ) {
    console.log(true);
    modal.style.display = "none";

  }
}

var submitStartBtn = document.getElementById("submit-btn");

//Set directly to the button
// submitStartBtn.addEventListener('click', startGame);
var playerName;
var numsOfCard, timeLeft, initialTime;
//with the player name: update when fill form
// timeLeft update every one minute
//Score update every FOUND a new PAIR 
// https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp
// https://www.codegrepper.com/code-examples/javascript/javascript+get+2nd+child+element
const infoName = document.querySelector('.infoName');  
const infoTime = document.querySelector('.infoTime');  
const infoScore = document.querySelector('.infoScore');  

function startGame(){
    console.log("new game")
    console.log('okay man');

    // get value game input from the modal
    playerName = document.getElementById("playerName").value;
    numsOfCard = document.getElementById("level").value;
    initialTime = document.getElementById("time").value*60;
    timeLeft = initialTime;

    infoName.innerHTML = playerName;
    infoTime.innerHTML = timeLeft;

    countPairs = 0;

    createNewCardCollection();
    renderUI(); //add playerName and Time count down
    
    // Set time dem nguoc cho tro choi
    startRun = setInterval(function(){
        timeLeft--; 
        infoTime.innerHTML =timeLeft;

        loadingTimeBar.style.width = (timeLeft/initialTime)*100 + '%';

        if (timeLeft ==0) {
            clearInterval(startRun);
            alert('End game!! You lost')
        }
    },1000);    
}

function createNewCardCollection() {
    //img_lib.concat(img_lib);
    for(let i = 0; i<numsOfCard; i++){
        let card= {
            _id : i,
            link : img_lib[i],
        }
        card_colletion.push(card);
        card_colletion.push(card);
    }
    shuffle(card_colletion);
}

function shuffle(array) {
    let currentIndex = array.length; 
    let temporaryValue; 
    let randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) { 
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
}

function renderUI() {
    board.innerHTML ="";
    let i = 0;
    while(card_colletion.length > 0) {
        const t = card_colletion.pop();
        board.innerHTML += `
        <div class="flip-card" id ="${i}" onclick= "revealCard(${t._id},${i})" >
            <div class="card" >
                <div class="front" >
                    <img src="./lib/backface2.png" alt="">
                </div>
                <div class="back">
                    <img src="${t.link}" alt="">
                </div>
            </div>
        </div>        
        `;
        i++;
    }
}

//how to toggle class? https://www.w3schools.com/howto/howto_js_toggle_class.asp
function revealCard(id,i) {
    let thisCard = document.getElementById(i);
    thisCard.classList.toggle("flipped");
    if(idElement == null){ //if this is first card reveal
        idElement = i;
        idCard = id;
        console.log("First idCard: " + idCard + ", idEle: "+idElement);

    } else {
        let getPreviousCard = document.getElementById(idElement); //idEle save from last reveal
        
        console.log("Second id:" + id + ", i :" + i);

        if (id == idCard && idElement != i) {
            countPairs += 2;
            setTimeout(function(){
                thisCard.classList.add("hidden");
                getPreviousCard.classList.add("hidden");
            },1000);

            //update point and show on screen
            infoScore.innerHTML = countPairs*10;

            if(countPairs == numsOfCard*2) {
                let finalPoint = countPairs*10 + timeLeft;
                alert(`Congratulation!! you win. Your score is ${finalPoint}.`);
                clearInterval(startRun);
            }
           
        } else {
            setTimeout(function(){
                thisCard.classList.toggle("flipped");
                getPreviousCard.classList.toggle("flipped");
            },1000);
        }
        //reset idCard
        idCard = null;
        idElement = null;
    }
}


//short function to check id
//checkId = (id, idCard) => id == idCard

// I intend to create a class CARD but failed
// class card {
//     constructor(id, link) {
//         this._id = id;
//         this.link = link;
//     }
//     get _id() {
//         return this.id;
//     }
// }