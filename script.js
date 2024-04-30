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

function feedPet(){
    if (pet.hunger < 10) {
        pet.hunger++;
        pet.boredom--;
        updateMetrics();
        document.getElementById("pet-img").setAttribute("src", "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYng1eWthbHI1YTFmMHMzdzkxaHp4d2Ryc2N5ZXE0cjlldjhraXVkdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/WLohQRn2Iqp9WOBPT2/giphy.gif"); // Change pet image to eating
        if (pet.hunger >= 8) {
            setTimeout(() => {
                document.getElementById("pet-img").setAttribute("src", "https://media.giphy.com/media/zBjObo9umi0wbrCRdP/giphy.gif"); // Change pet image to dancing after eating
            }, 2000); // Change back to dancing after 2 seconds
        }
    } else {
        pet.hunger = 0; // Reset hunger
        updateMetrics();
        document.getElementById("pet-img").setAttribute("src", "https://media.giphy.com/media/zBjObo9umi0wbrCRdP/giphy.gif"); // change image to dancing 
        document.getElementById("pet-img").classList.add("crying");
        setTimeout(() => {
            document.getElementById("pet-img").classList.remove("crying");
        }, 500);
    }
}


function play() {
    if (pet.boredom < 10) {
        pet.boredom++;
        pet.hunger++;
        updateMetrics();
        document.getElementById("pet-img").setAttribute("src", "https://media.giphy.com/media/kKdXxIa4QdKzC/giphy.gif");
        if (pet.boredom === 8) {
            document.getElementById("pet-img").setAttribute("src", "https://media.giphy.com/media/4Z3agcuCNFBeI/giphy.gif");
        }
    } else {
        pet.boredom = 0; //reset
        updateMetrics();
        document.getElementById("pet-img").setAttribute("src", "https://media.giphy.com/media/zBjObo9umi0wbrCRdP/giphy.gif"); // change image to dancing 
        document.getElementById("pet-img").classList.add("crying");
        setTimeout(() => {
            document.getElementById("pet-img").classList.remove("crying");
        }, 500);
    }
}

function sleep() {
    if (pet.sleepiness > 0) {
        pet.sleepiness--;
        pet.hunger++;
        pet.boredom++;
        updateMetrics();
        if (pet.sleepiness === 2) {
            document.querySelector('.background').style.backgroundImage = "url('pictures/night-space.png')";
            document.getElementById("pet-img").setAttribute("src", "pictures/im-so-tired.gif"); // Change pet image
        }
    } else if (pet.sleepiness < 0){
        pet.sleepiness = 5; // Reset sleepiness to a positive value
        updateMetrics();
        document.querySelector('.background').style.backgroundImage = "url('pictures/space-background.jpg')";
        document.getElementById("pet-img").setAttribute("src", "https://media.giphy.com/media/zBjObo9umi0wbrCRdP/giphy.gif"); // change image to dancing 
        document.getElementById("pet-img").classList.add("crying");
        setTimeout(() => {
            document.getElementById("pet-img").classList.remove("crying");
        }, 500);
    } else {
        pet.sleepiness = -10; // Reset sleepiness to a positive value
        updateMetrics();
        document.querySelector('.background').style.backgroundImage = "url('pictures/space-background.jpg')";
        document.getElementById("pet-img").setAttribute("src", "https://media.giphy.com/media/zBjObo9umi0wbrCRdP/giphy.gif"); // change image to dancing 
        document.getElementById("pet-img").classList.add("crying");
        setTimeout(() => {
            document.getElementById("pet-img").classList.remove("crying");
        }, 500);
    }
}



function increaseAge() {
    pet.age++;
    updateMetrics();
}

function increaseMetrics() {
    if (pet.hunger < 10) {
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

function resetGame() {
    pet.boredom = 5;
    pet.age = 0;
    pet.hunger = 5;
    pet.sleepiness = 5;
    updateMetrics();
}

function checkStatus() {
    if (pet.hunger === 0 || pet.boredom === 0 || pet.sleepiness === 0) {
        alert("Oh no! Your pet has died!");
        clearInterval(interval);
    }
}


function win() {
    if (pet.hunger === 10 || pet.boredom === 10 || pet.sleepiness === 10) {
        alert("Oh YESS! Your pet is winning!");
        clearInterval(interval);
            setTimeout(() => {
                document.getElementById("pet-img").setAttribute("src", "https://media.giphy.com/media/XlGQ2sBz4gvIAv0FVa/giphy.gif"); // Change pet image to dancing after eating
            }, 2000); // Change back to dancing after 2 seconds
    }
}


let interval = setInterval(() => {
    increaseAge();
    increaseMetrics();
    checkStatus();
}, 5000);
