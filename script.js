
let status = {
    happiness: 50,
    hunger: 50,
    sleepiness: 50
};

const pet = document.getElementById('pet');
const happyBar = document.getElementById('happy-bar');
const hungryBar = document.getElementById('hungry-bar');
const sleepyBar = document.getElementById('sleepy-bar');
const feedBtn = document.getElementById('feed-btn');
const playBtn = document.getElementById('play-btn');
const sleepBtn = document.getElementById('sleep-btn');

function update() {
    happyBar.style.width = `${status.happiness}%`;
    hungryBar.style.width = `${status.hunger}%`;
    sleepyBar.style.width = `${status.sleepiness}%`;
    
    if (status.happiness < 30 || status.hunger > 70 || status.sleepiness > 70) {
        pet.style.backgroundColor  = 'lightgreen'; 
    } else {
        pet.style.backgroundColor  = 'lightred'; 
    }
}

function over_time() {
    status.hunger = Math.min(100, status.hunger + 5);
    status.sleepiness = Math.min(100, status.sleepiness + 5);
    status.happiness = Math.max(0, status.happiness - 2);
    update();
}

setInterval(over_time, 3000);

feedBtn.addEventListener('click', () => {
    status.hunger = Math.max(0, status.hunger - 30);
    status.sleepiness = Math.min(100, status.sleepiness + 10);
    update();
    
    setTimeout(() => {
        status.happiness = Math.min(100, status.happiness + 5);
        update();
    }, 1000);
});

playBtn.addEventListener('click', () => {
    status.happiness = Math.min(100, status.happiness + 30);
    status.hunger = Math.min(100, status.hunger + 10);
    status.sleepiness = Math.min(100, status.sleepiness + 10);
    update();
    
    setTimeout(() => {
        status.sleepiness = Math.min(100, status.sleepiness + 5);
        update();
    }, 1500);
});

sleepBtn.addEventListener('click', () => {
    status.sleepiness = Math.max(0, status.sleepiness - 30);
    status.happiness = Math.max(0, status.happiness - 10);
    status.hunger = Math.min(100, status.hunger + 10);
    update();
    
    setTimeout(() => {
        status.hunger = Math.min(100, status.hunger + 5);
        update();
    }, 2000);
});

update();