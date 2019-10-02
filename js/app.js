
let i = 0;
let j = 10;
let k = 10;
let l = 10;


class Tomagotchi {
    constructor(name, age) {
        this.name = name;
        this.pokemon = [1, 2, 3, 4, 5]
        this.age = ['infant', 'child', 'adult', 'elderly', 'dead'];
        this.hunger = j;
        this.sleepiness = 10;
        this.boredom = 10;
    }
    aging() {
        this.age++
    }
}

let test=(console.log(Tomagotchi.age))

//game
const game = () => {

    // Aging
    const aging = setInterval(function(){
        i++;
        document.getElementById('age').innerText = i;
    }, 2000)
    // aging;


    // Feeding
    const $hunger = $('#hunger');

    const hungry = setInterval(function () {
        j--;
        
        document.getElementById('hunger').innerText = j;
    }, 2000)

    $hunger.text(`Hunger: ${this.hunger}`)

}

// game()