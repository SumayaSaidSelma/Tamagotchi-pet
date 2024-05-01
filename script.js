let pet = {
    name: "",
    eat: 0,
    sleep: 3,
    play: 2,
    age: 0
};

function submitName() {
    pet.name = document.getElementById("name").value;
    document.getElementById("name").disabled = true;
    document.getElementById("welcome").textContent = `Welcome ${pet.name} to the game!`;
}

function updateMetrics() {
    document.getElementById("eat").textContent = pet.eat;
    document.getElementById("sleep").textContent = pet.sleep;
    document.getElementById("play").textContent = pet.play;
    document.getElementById("age").textContent = pet.age;
}

function eatPet(){
    if (pet.eat < 10) {
        pet.eat++;
        pet.play--;
        updateMetrics();
        document.getElementById("pet-img").setAttribute("src", "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYng1eWthbHI1YTFmMHMzdzkxaHp4d2Ryc2N5ZXE0cjlldjhraXVkdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/WLohQRn2Iqp9WOBPT2/giphy.gif"); // Change pet image to dancing
        if (pet.eat === 9) {
                document.getElementById("pet-img").setAttribute("src", "pictures/huging-banana.png"); // Change pet image to hungry after need to eat
        }
    } else {
        pet.eat = 0; // Reset hunger
        updateMetrics();
    }
}


function play() {
    if (pet.play < 10) {
        pet.play++;
        pet.eat++;
        pet.sleep++;
        updateMetrics();
        document.getElementById("pet-img").setAttribute("src", "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYng1eWthbHI1YTFmMHMzdzkxaHp4d2Ryc2N5ZXE0cjlldjhraXVkdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/WLohQRn2Iqp9WOBPT2/giphy.gif"); // chnage image to dancing 
        if (pet.play === 8) {
            document.getElementById("pet-img").setAttribute("src", "pictures/im-so-tired-stuart.gif"); // chnage image to tired 
        }
    } else {
        pet.play = 0; //reset
        updateMetrics();
    }
}

function sleep() {
    if (pet.sleep > 0) {
        pet.sleep--;
        pet.eat--;
        pet.play++;
        updateMetrics();
        document.getElementById("pet-img").setAttribute("src", "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYng1eWthbHI1YTFmMHMzdzkxaHp4d2Ryc2N5ZXE0cjlldjhraXVkdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/WLohQRn2Iqp9WOBPT2/giphy.gif"); // chnage image to dancing 
        document.querySelector('.background').style.backgroundImage = "url('pictures/gjwF3CaJSee2Hr3LUodYyJ-1200-80.jpg')";
        if (pet.sleep === 10) {
            document.querySelector('.background').style.backgroundImage = "url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNndmdHd2NjltdDA0aXg5d3ZpNmY0bjBtYTl4dnl2ajA5djE1MWdnNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l1Et7Qw1XjvunS0Io/giphy.gif')";
            document.getElementById("pet-img").setAttribute("src", "pictures/minion-sleeping.png"); // change image to sleeping 
        }
        } else {
        pet.sleep = 5; // Reset sleepiness to a positive value
        updateMetrics();
        document.getElementById("pet-img").setAttribute("src", "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYng1eWthbHI1YTFmMHMzdzkxaHp4d2Ryc2N5ZXE0cjlldjhraXVkdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/WLohQRn2Iqp9WOBPT2/giphy.gif"); // chnage image to dancing 
        document.querySelector('.background').style.backgroundImage = "url('pictures/gjwF3CaJSee2Hr3LUodYyJ-1200-80.jpg')";
       
    }
}



function increaseAge() {
    pet.age++;
    updateMetrics();
}

function increaseMetrics() {
    if (pet.eat < 10) {
        pet.eat--;
    }
    if (pet.sleep < 10) {
        pet.sleep++;
    }
    if (pet.play < 10) {
        pet.play++;
    }
    updateMetrics();
}

function resetGame() {
    pet.play = 2;
    pet.age = 0;
    pet.eat = 0;
    pet.sleep = 3;
    updateMetrics();
    document.getElementById("pet-img").setAttribute("src", "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYng1eWthbHI1YTFmMHMzdzkxaHp4d2Ryc2N5ZXE0cjlldjhraXVkdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/WLohQRn2Iqp9WOBPT2/giphy.gif"); // chnage image to dancing 
    document.querySelector('.background').style.backgroundImage = "url('pictures/gjwF3CaJSee2Hr3LUodYyJ-1200-80.jpg')";
}

function checkStatus() {
    if (pet.eat === 0 || pet.play === 0 || pet.sleep === 0) {
        alert("Oh no! Your pet has died!");
        clearInterval(interval);
    }
}


function win() {
    if (pet.eat === 10 && pet.play === 10|| pet.play === 10 && pet.sleep === 10 || pet.sleep === 10 && pet.play === 10) {
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
