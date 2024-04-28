let pet = {
    name: "",
    hunger: 5,
    sleepiness: 5,
    boredom: 5,
    age: 0
};

function submitName() {
    pet.name = document.getElementById("pet-name").value;
    document.getElementById("pet-name").disabled = true;
    document.getElementById("welcome").textContent = `Welcome ${pet.name} to the game!`;
}

function updateMetrics() {
    document.getElementById("hunger").textContent = pet.hunger;
    document.getElementById("sleepiness").textContent = pet.sleepiness;
    document.getElementById("boredom").textContent = pet.boredom;
    document.getElementById("age").textContent = pet.age;
}

function feed() {
    if (pet.hunger < 10) {
        pet.hunger++;
        updateMetrics();
        document.getElementById("pet-img").classList.add("eating");
        setTimeout(() => {
            document.getElementById("pet-img").classList.remove("eating");
        }, 500);
    } else {
        pet.hunger = 0; // Reset hunger
        updateMetrics();
        document.getElementById("pet-img").setAttribute("src", "pictures/im-so-tired-stuart.gif");
        document.getElementById("pet-img").classList.add("crying");
        setTimeout(() => {
            document.getElementById("pet-img").classList.remove("crying");
        }, 500);
    }
}

function turnOffLights() {
    if (pet.sleepiness > 1) {
        pet.sleepiness--;
        updateMetrics();
        document.getElementById("pet-img").classList.add("waking-up");
        setTimeout(() => {
            document.getElementById("pet-img").classList.remove("waking-up");
        }, 1000);
        document.querySelector('.background').style.backgroundImage = "pictures/night-space.png";
    }
}


function play() {
    if (pet.boredom > 1) {
        pet.boredom--;
        updateMetrics();
    }
}


function sleep() {
    if (pet.sleepiness < 10) {
        pet.sleepiness++;
        updateMetrics();
        document.getElementById("pet-img").classList.add("sleeping");
        setTimeout(() => {
            document.getElementById("pet-img").classList.remove("sleeping");
        }, 1000);
        document.querySelector('.background').style.backgroundImage = "pictures/night-space.png";
        document.getElementById("pet-img").setAttribute("src", "pictures/im-so-tired.gif"); // Change pet image
    }
}



function increaseAge() {
    pet.age++;
    updateMetrics();
}

function increaseMetrics() {
    if (pet.hunger > 1) {
        pet.hunger--;
    }
    if (pet.sleepiness < 10) {
        pet.sleepiness++;
    }
    if (pet.boredom < 10) {
        pet.boredom++;
    }
    updateMetrics();
}

function checkStatus() {
    if (pet.hunger === 10 || pet.sleepiness === 10 || pet.boredom === 10) {
        alert("Oh no! Your pet has died!");
        clearInterval(interval);
    }
}

let interval = setInterval(() => {
    increaseAge();
    increaseMetrics();
    checkStatus();
}, 5000);

