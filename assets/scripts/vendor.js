const monsterHealthBar = document.getElementById("monster-health");
const playerHealthBar = document.getElementById("player-health");
const bonusLifeEl = document.getElementById("bonus-life");

const attackBtn = document.getElementById("attack-btn");
const strongAttackBtn = document.getElementById("strong-attack-btn");
const healBtn = document.getElementById("heal-btn");
const logBtn = document.getElementById("log-btn");

function adjustHealthBars(maxLife) {
  monsterHealthBar.max = maxLife;
  monsterHealthBar.value = maxLife;
  playerHealthBar.max = maxLife;
  playerHealthBar.value = maxLife;
}

function dealMonsterDamage(damage) {
  const dealtDamage = Math.floor(Math.random() * damage);
  monsterHealthBar.value = +monsterHealthBar.value - dealtDamage;
  if (dealtDamage === 15) {
    alert("Critical hit to monster!");
  } else if (dealtDamage === 0) {
    alert("Missed hit to monster");
  }
  return dealtDamage;
}

function dealPlayerDamage(damage) {
  const dealtDamage = Math.floor(Math.random() * damage);
  playerHealthBar.value = +playerHealthBar.value - dealtDamage;
  if (dealtDamage === 20) {
    alert("Critical hit to you!");
  } else if (dealtDamage === 0) {
    alert("Missed hit to you");
  } else if (playerHealthBar.value < 40) {
    alert("Low health!");
  }
  return dealtDamage;
}

function increasePlayerHealth(healValue) {
  playerHealthBar.value = +playerHealthBar.value + healValue;
}

function resetGame(value) {
  playerHealthBar.value = value;
  monsterHealthBar.value = value;
}

function removeBonusLife() {
  bonusLifeEl.parentNode.removeChild(bonusLifeEl);
}

function setPlayerHealth(health) {
  playerHealthBar.value = health;
}
