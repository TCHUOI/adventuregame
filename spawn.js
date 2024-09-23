function inRange(x, x2, y, y2) {
  return player.x > x - canvas.width && player.x < x2 + canvas.width && player.y > y - canvas.height && player.y < y2 + canvas.height;
}

function spawn() {
  if(frameCount % 10 === 0) {
    //npcs.push(new npc(random(-4500, -3600), random(-1200, 1200), "Rock Person Lv. 1", "enemy"));
    if(slimes < maxEnemies["slimes"] && inRange(-1000, -400, -500, 500)) {
        npcs.push(new npc(random(-1000, -400), random(-500, 500), "Slime Lv. 1", "enemy"));
    }
    if(Goblins < maxEnemies["goblins"] && inRange(-5300, -4400, -500, 500)) {
        if(random(0, 100) < 90) {
            npcs.push(new npc(random(-5300, -4400), random(-500, 500), "Goblin", "enemy"));
        } else {
            npcs.push(new npc(random(-5300, -4400), random(-500, 500), "Goblin", "nuetral"));
        }
        //npcs.push(new npc(random(-4000, -4000), random(-100, 100), "Goblin", "enemy"));
    }
    if(ghosts < maxEnemies["ghosts"] && inRange(3000, 9600, -1500, 1500)) {
        npcs.push(new npc(random(3000, 9600), random(-1500, 1500), "ghost", "enemy"));
    }
    if(rockPeople < maxEnemies["rockPeople"] && inRange(-15500, -9600, -1500, 1500)) {
        npcs.push(new npc(random(-15500, -9600), random(-1500, 1500), "Rock Person Lv. 1", "enemy"));
    }
    if(orcs < maxEnemies["orcs"] && inRange(-14500, -8600, -500, 500)) {
        npcs.push(new npc(random(-14500, -8600), random(-500, 500), "Orc", "enemy"));
    }
    if(yetis < maxEnemies["yetis"] && inRange(2500, 15600, -1500, 1500)) {
        npcs.push(new npc(random(2500, 15600), random(-1500, 1500), "Yeti", "enemy"));
    }
    if(snowmen < maxEnemies["snowmen"] && inRange(2500, 15600, -1500, 1500)) {
        npcs.push(new npc(random(2500, 15600), random(-1500, 1500), "Snowman", "enemy"));
    }
    if(elves < maxEnemies["elves"] && inRange(-2000, 2000, -10000, -11000)) {
        npcs.push(new npc(random(-2000, 2000), random(-10000, -11000), "Elf", "enemy"))
    }
    if(swordElves < maxEnemies["sword eleves"] && inRange(-2000, 2000, -10000, -11000)) {
        npcs.push(new npc(random(-2000, 2000), random(-10000, -11000), "Elf Warrior", "enemy"))
    }
    if(moltenMonsters < maxEnemies["molten monsters"] && inRange(-2000, -2000, 10000, 11000)) {
        npcs.push(new npc(random(-2000, 2000), random(10000, 11000), "Molten Monster", "enemy"))
    }
  }
  if(frameCount % 500 === 0) {
    if(GoblinBoss < 2 && player.upgrades >= 20 && inRange(-10350, -9550, -100, 100)) {
        npcs.push(new npc(random(-10350, -9550), random(-100, 100), "GoblinBoss", "enemy"));
    }
    if(rockGiants < 2 && player.upgrades >= 30 && inRange(-10950, -9050, -100, 100)) {
        npcs.push(new npc(random(-10950, -9050), random(-100, 100), "Rock Giant Lv. 1", "enemy"));
    }
    if(kingSlimes < 2 && player.upgrades > 10 && inRange(-1500, -900, -600, 600)) {
        npcs.push(new npc(random(-1500, -900), random(-600, 600), "KingSlime Lv. 1", "enemy"));
    }
  }
}
