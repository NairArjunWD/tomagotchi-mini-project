
let i = 0;
let j = 10;
let k = 10;
let l = 10;


class Tomagotchi {
    constructor(id) {
        this.id = id;
        this.age = i;
        this.hunger = j;
        this.sleepiness = k;
        this.boredom = l;
    }
}

// All Tomagotchi ############################################
let pokemon1 = new Tomagotchi(0); // Blaziken
// let pokemon2 = new Tomagotchi(1); // Swampert
// let pokemon3 = new Tomagotchi(2); // Sceptile
// let pokemon4 = new Tomagotchi(3); // Gardevoir
// let pokemon5 = new Tomagotchi(4); // Salamance
// let pokemon6 = new Tomagotchi(5); // Metacross
console.log(pokemon1)
// console.log(pokemon2)
// console.log(pokemon3)
// console.log(pokemon4)
// console.log(pokemon5)
// console.log(pokemon6)

// let test=(console.log(Tomagotchi.age[i]))

// document.getElementById("nameInput").placeholder = "Enter name";

//GAME #######################################################
const game = () => {
    // Age ***********************************************
    const age = setInterval(function () {
        i++;
        if (i === 0) {
            clearInterval(age); 
            console.log('Egg')
        } else if (i >= 1 && i <= 13){
            document.getElementById("img").src = 'https://cdn.bulbagarden.net/upload/a/a2/Spr_7s_255_m.png';
            console.log('Child')
        } else if (i >= 14 && i <= 33){
            document.getElementById("img").src = 'https://cdn.bulbagarden.net/upload/5/5a/Spr_7s_256_m.png';
            console.log('Teen')
        } else if (i >= 34 && i <= 69){
            document.getElementById("img").src = 'https://cdn.bulbagarden.net/upload/b/be/Spr_7s_257_m.png';
            console.log('Adult')
        } else if (i >= 70 && i <= 98){
            document.getElementById("img").src = 'https://cdn.bulbagarden.net/upload/0/04/Spr_7s_257_m_s.png';
            console.log('Elderly')
        } else if(i === 99){
            console.log('Are you ready to say goodbye?')
        }else{
            document.getElementById("img").src = 'https://cdn.bulbagarden.net/upload/7/7a/FL_Pokemon_Tower.png';
            clearInterval(age); // stops the interval
            console.log('Dead')
        }

        document.getElementById('age').innerText = i;
    }, 1000)
    

    // Feeding *********************************************
    const hungry = setInterval(function () {
        j--;
        if (j === 0) {

            clearInterval(hungry); // stops the interval
            console.log('interval stops')
            alert('Great job! You starved it! Are you proud of yourself?')
        }
        
        document.getElementById('hunger').innerText = j;
    }, 1000)

    // Sleepiness *******************************************
    const sleepiness = setInterval(function () {
        k--;
        if (k === 0) {

            clearInterval(sleepiness); // stops the interval
            console.log('interval stops')
            alert('Died from exhaustion? Ya, they get tired you horrible human being!')
        }

        document.getElementById('sleepiness').innerText = k;
    }, 1000)

    // Boredom **********************************************
    const boredom = setInterval(function () {
        l--;
        if (l === 0) {

            clearInterval(boredom); // stops the interval
            console.log('interval stops')
            alert('Your existence has caused it to die of boredom.')
        }

        document.getElementById('boredom').innerText = l;
    }, 1000)
    

    // BUTTON *************************************************
    let feed = document.getElementById("feed");
    feed.addEventListener('click', function(){
        j = 10;
        document.getElementById('hunger').innerHTML
        console.log(feed)
    })

    let sleep = document.getElementById("sleep");
    sleep.addEventListener('click', function () {
        k = 10;
        document.getElementById('hunger').innerHTML
        console.log(feed)
    })

    let play = document.getElementById("play");
    play.addEventListener('click', function () {
        l = 10;
        document.getElementById('hunger').innerHTML
        console.log(feed)
    })

    //DISPLAY NAME ******************************************

    let inputName = prompt("Enter the name of your Tomagotchi: ");

    if (inputName!=null){
        document.getElementById('display').innerText = inputName;
    }

    // LIGHT SWITCH *****************************************

    function lightSwitch() {
        document.body.style.backgroundColor = 'green';
        return false;
    }

    let switchToggle = document.getElementById('test');

    switchToggle.addEventListener('click',lightSwitch());

    

}

// game()