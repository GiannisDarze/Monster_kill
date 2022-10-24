const ATTACK_VALUE = 16;
const STRONG_ATTACK_VALUE = 31;
const MONSTER_ATTACK_VALUE = 81;
const HEALING_VALUE = 26;

let enterGame = prompt("Set the HP of the characters");
if (isNaN(enterGame) || enterGame <= 0) {
  alert("You didn't put a valid number. The game will start with 100 HP");
  enterGame = 100;
}

let maxLife = parseInt(enterGame);
let currentMonsterHealth = maxLife;
let currentPlayerHealth = maxLife;
let bonusLife = true;

adjustHealthBars(maxLife);

function reset() {
  currentMonsterHealth = maxLife;
  currentPlayerHealth = maxLife;
  resetGame(maxLife);
}

function endingRound() {
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You won!!!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    if (bonusLife) {
      removeBonusLife();
      bonusLife = false;
      currentPlayerHealth = setPlayerHealth(maxLife);
      alert("AWAKEN");
    }
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert("It's a draw");
  }
}

function battleCondition(mode) {
  if (mode === "ATTACK") {
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage;
  } else {
    const damage = dealMonsterDamage(STRONG_ATTACK_VALUE);
    currentMonsterHealth -= damage;
  }
}

function healingHandler() {
  increasePlayerHealth(HEALING_VALUE);
  currentPlayerHealth += HEALING_VALUE;
  endingRound();
}

function attackHandler() {
  battleCondition("ATTACK");
  endingRound();
}

function strongAttackHandler() {
  battleCondition("STRONG_ATTACK");
  endingRound();
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healingHandler);
