let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let monsterHealth;
let inventory = ['stick', 'dagger', 'sword'];

// buttons
const btnEl1 = document.querySelector('#button1');
const btnEl2 = document.querySelector('#button2');
const btnEl3 = document.querySelector('#button3');

//span nested in strongEl
const xpText = document.querySelector('#xpText');
const healthText = document.querySelector('#healthText');
const goldText = document.querySelector('#goldText');
const monsterName = document.querySelector('#monsterName');
const monsterHealth2 = document.querySelector('#monseterHealth');
const monsterHealthText = document.querySelector("#monsterHealth");


//go store
function goStore() {
    console.log("Going to store.");
  }
  
  //go cave
  function goCave() {
    console.log("Going to cave.");
  }
  
  //fight dragon
  function fightDragon() {
    console.log("Fighting dragon.");
  }

