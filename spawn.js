function spawn() {
  if(frameCount % 10 === 0) {
    //npcs.push(new npc(random(-4500, -3600), random(-1200, 1200), "Rock Person Lv. 1", "enemy"));
    if(slimes < 20) {
        npcs.push(new npc(random(-2000, -400), random(-750, 750), "Slime Lv. 1", "enemy"));
    }
    if(Goblins < 30 && player.upgrades >= 10) {
        if(random(0, 100) < 90) {
            npcs.push(new npc(random(-5300, -4400), random(-500, 500), "Goblin", "enemy"));
        } else {
            npcs.push(new npc(random(-5300, -4400), random(-500, 500), "Goblin", "nuetral"));
        }
        //npcs.push(new npc(random(-4000, -4000), random(-100, 100), "Goblin", "enemy"));
    }
    if(ghosts < 10 && player.upgrades >= 20) {
        npcs.push(new npc(random(3000, 9600), random(-1500, 1500), "ghost", "enemy"));
    }
    if(rockPeople < 3 && player.upgrades >= 25) {
        npcs.push(new npc(random(-15500, -9600), random(-1500, 1500), "Rock Person Lv. 1", "enemy"));
    }
    if(orcs < 10) {
        npcs.push(new npc(random(-14500, -8600), random(-500, 500), "Orc", "enemy"));
    }
    if(yetis < 5) {
        npcs.push(new npc(random(2500, 15600), random(-1500, 1500), "Yeti", "enemy"));
    }
    if(snowmen < 15) {
        npcs.push(new npc(random(2500, 15600), random(-1500, 1500), "Snowman", "enemy"));
    }
    if(elves < 10) {
        npcs.push(new npc(random(-2000, 2000), random(-10000, -11000), "Elf", "enemy"))
    }
    if(swordElves < 10) {
        npcs.push(new npc(random(-2000, 2000), random(-10000, -11000), "Elf Warrior", "enemy"))
    }
    if(moltenMonsters < 10) {
        npcs.push(new npc(random(-2000, 2000), random(10000, 11000), "Molten Monster", "enemy"))
    }
  }
  if(frameCount % 500 === 0) {
    if(GoblinBoss < 2 && player.upgrades >= 20) {
        npcs.push(new npc(random(-10350, -9550), random(-100, 100), "GoblinBoss", "enemy"));
    }
    if(rockGiants < 2 && player.upgrades >= 30) {
        npcs.push(new npc(random(-10950, -9050), random(-100, 100), "Rock Giant Lv. 1", "enemy"));
    }
    if(kingSlimes < 2 && player.upgrades > 10) {
        npcs.push(new npc(random(-1500, -900), random(-600, 600), "KingSlime Lv. 1", "enemy"));
    }
  }
}
