const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
    const pet = {
        name: name,
        species: species,
        visitReady: 1, //scale of 1-5 1 (notReady...5veryReady)
        ready: function () {
            console.log(`${name} is ready for visits`);
            this.ready = 5;
        },
        nope: function () {
            if (this.visitReady === 1) {
                console.log(`Not ready for visits.`);
                this.ready;
            } else {
                console.log(`Woohoo, ${this.name} is ready for visits!`);
                this.visitReady += 1;
            }
        }
};

return pet;
};

const baxter = createPet("Baxter", "cat-Unknown");
const bailey = createPet("Bailey", "dog-Black Lab");
const kitty = createPet("Kitty", "cat-Unknown");
const abby = createPet("Abby", "dog-Yellow Lab");
const snape = createPet("Snape", "snake-Garden Snake"); 

console.log(baxter, bailey, kitty, abby, snape);

baxter.ready();
bailey.nope();

console.log(baxter, bailey);



