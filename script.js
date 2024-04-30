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
        document.getElementById("pet-img").setAttribute("src", "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYng1eWthbHI1YTFmMHMzdzkxaHp4d2Ryc2N5ZXE0cjlldjhraXVkdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/WLohQRn2Iqp9WOBPT2/giphy.gif"); // Change pet image to dancing
        if (pet.hunger === 9) {
                document.getElementById("pet-img").setAttribute("src", "pictures/huging-banana.png"); // Change pet image to hungry after need to eat
        }
    } else {
        pet.hunger = 0; // Reset hunger
        updateMetrics();
    }
}


function play() {
    if (pet.boredom < 10) {
        pet.boredom++;
        pet.hunger++;
        pet.sleepiness++;
        updateMetrics();
        document.getElementById("pet-img").setAttribute("src", "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYng1eWthbHI1YTFmMHMzdzkxaHp4d2Ryc2N5ZXE0cjlldjhraXVkdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/WLohQRn2Iqp9WOBPT2/giphy.gif"); // chnage image to dancing 
        if (pet.boredom === 8) {
            document.getElementById("pet-img").setAttribute("src", "pictures/im-so-tired-stuart.gif"); // chnage image to tired 
        }
    } else {
        pet.boredom = 0; //reset
        updateMetrics();
    }
}

function sleep() {
    if (pet.sleepiness > 0) {
        pet.sleepiness--;
        pet.hunger--;
        pet.boredom++;
        updateMetrics();
        document.getElementById("pet-img").setAttribute("src", "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYng1eWthbHI1YTFmMHMzdzkxaHp4d2Ryc2N5ZXE0cjlldjhraXVkdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/WLohQRn2Iqp9WOBPT2/giphy.gif"); // chnage image to dancing 
        document.querySelector('.background').style.backgroundImage = "url('pictures/gjwF3CaJSee2Hr3LUodYyJ-1200-80.jpg')";
        if (pet.sleepiness === 10) {
            document.querySelector('.background').style.backgroundImage = "url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNndmdHd2NjltdDA0aXg5d3ZpNmY0bjBtYTl4dnl2ajA5djE1MWdnNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l1Et7Qw1XjvunS0Io/giphy.gif')";
            document.getElementById("pet-img").setAttribute("src", "pictures/minion-sleeping.png"); // change image to sleeping 
        }
        } else {
        pet.sleepiness = 5; // Reset sleepiness to a positive value
        updateMetrics();
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
    document.getElementById("pet-img").setAttribute("src", "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYng1eWthbHI1YTFmMHMzdzkxaHp4d2Ryc2N5ZXE0cjlldjhraXVkdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/WLohQRn2Iqp9WOBPT2/giphy.gif"); // chnage image to dancing 
    document.querySelector('.background').style.backgroundImage = "url('pictures/gjwF3CaJSee2Hr3LUodYyJ-1200-80.jpg')";
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
                document.getElementById("pet-img").setAttribute("src", "https://media.giphy.com/media/XlGQ2sBz4gvIAv0FVa/giphy.gif"); // Change pet image to circle wining image 
            }, 2000); // Change back to dancing after 2 seconds
    }
}


let interval = setInterval(() => {
    increaseAge();
    increaseMetrics();
    checkStatus();
}, 5000);
