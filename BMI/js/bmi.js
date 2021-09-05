const inputWeight = document.querySelector("#weight_input");
const inputHeight = document.querySelector("#height_input");
const buttonSubmit = document.querySelector("#btn_submit");
const leftPart = document.querySelector(".left");
const rightPart = document.querySelector(".right");
const message = document.querySelector(".message");

let bmi = null;

buttonSubmit.addEventListener('click', function(){
    console.log('hello')
    let weight = inputWeight.value;
    let height = inputHeight.value/100;
    bmi = (weight/(height*height));
    console.log(bmi);

    if(bmi<18.5) {
        leftPart.style.backgroundImage = "url('thin.jpg')";
        leftPart.style.backgroundSize = "contain";
        
        message.innerHTML = "";
        message.innerHTML += "<h2>Gravity can't hold you! Please eat more!</h2>"
    } else if (bmi>25) {
        leftPart.style.backgroundImage = "url('fat.jpg')";
        leftPart.style.backgroundSize = "contain";
       
        message.innerHTML = "";
        message.innerHTML += "<h2>No burger for you tonight!</h2>"
    } else {
        leftPart.style.backgroundImage = "url('fit.jpg')";
        leftPart.style.backgroundSize = "contain";
        
        message.innerHTML = "";
        message.innerHTML += "<h2>Congrat! You fit your pants!</h2>"
    }
    // leftPart.style.backgroundRepeat ="repeat";
    // leftPart.style.backgroundPosition = "25% 25%";
})
