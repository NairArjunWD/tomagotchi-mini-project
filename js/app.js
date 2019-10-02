
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
    // aging() {
    //     this.age[i]
    //     for (i = 0; i <= 4; i ++){
    //         if (i=0){
    //             console.log('Infant')
    //         } else if (i=1){
    //             console.log('Child')
    //         } else if (i = 2) {
    //             console.log('Adult')
    //         } else if (i = 3) {
    //             console.log('Elderly')
    //         } else{
    //             console.log('Dead')
    //         }
    //     }
    // }
    // aging()
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
        if (i === 100) {
            clearInterval(age); // stops the interval
            console.log('Dead')
        } else if (i === 70){
            console.log('Elderly')
        } else if (i === 34){
            console.log('Adult')
        } else if (i === 14){
            console.log('Teen')
        } else if (i <= 1){
            console.log('Child')
        } else {
            console.log('Egg')
        }

        document.getElementById('age').innerText = i;
    }, 1000)
    

    // Feeding *********************************************
    const hungry = setInterval(function () {
        j--;
        if (j === 0) {

            clearInterval(hungry); // stops the interval
            console.log('interval stops')
            
        }
        
        document.getElementById('hunger').innerText = j;
    }, 1000)

    // Sleepiness *******************************************
    const sleepiness = setInterval(function () {
        k--;
        if (k === 0) {

            clearInterval(sleepiness); // stops the interval
            console.log('interval stops')

        }

        document.getElementById('sleepiness').innerText = k;
    }, 1000)

    // Boredom **********************************************
    const boredom = setInterval(function () {
        l--;
        if (l === 0) {

            clearInterval(boredom); // stops the interval
            console.log('interval stops')

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

    // let values = document.querySelector('#submit');
    // let displays = document.querySelector('p');
    // let inputs = document.querySelector('#nameInput')
    // function displayName() {
    //     document.getElementById('nameInput').innerHTML = displays;
    //     console.log(inputs);
    // }

    
    // values.addEventListener('click', displayName)

    let inputName = prompt("Enter the name of your Tomagotchi: ");

    if (inputName!=null){
        document.getElementById('display').innerText = inputName;
    }



    

}

game()