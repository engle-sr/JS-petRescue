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

const baxter = createPet("Baxter", "senior house cat");
const bailey = createPet("Bailey", "black lab");
const kitty = createPet("Kitty", "dumpster cat");
const abby = createPet("Abby", "yellow lab");
const snape = createPet("Snape", "garden snake"); 

baxter.visitReady = 5;
bailey.visitReady = 4;


const allPets = [
    baxter,
    bailey,
    kitty,
    abby,
    snape
];
//console.log(allPets);

const showPets = function (petArray) {
    pets.innerHTML = "";

    for (let pet of petArray) {
        let status = "ready for visits!";
        if (pet.visitReady <=3) {
            status = "almost ready for visits!";
        }
    const li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}`;
    pets.append(li);
    }
};

statusButton.addEventListener("click", function () {
    showPets(allPets);
});




