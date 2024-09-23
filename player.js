var player = 0;
// player function
function Player() {
    /**
    localStorage.setItem("hp", 100);
    localStorage.setItem("maxHp", 100);
    localStorage.setItem("exp", 0);
    localStorage.setItem("lvl", 0);
    localStorage.setItem("mana", 100);
    localStorage.setItem("maxMana", 100);
    localStorage.setItem("manaRegen", 0.01);
    localStorage.setItem("atkE", "boltOrb 1");
    localStorage.setItem("strength", 0);
    localStorage.setItem("spd", 1);
    localStorage.setItem("maxStamina", 100);
    localStorage.setItem("staminaRegen", 0.02);
    localStorage.setItem("hpRegen", 0.02);
    localStorage.setItem("upgrades", 1);
    localStorage.setItem("upgradeOn", 1);
    localStorage.setItem("reload", 100);
    localStorage.setItem("inventory", "Iron Sword,none,none,none");
    localStorage.setItem("wepon", "Iron Sword")
    localStorage.setItem("weponCollision", "30,45,60,75")
    localStorage.setItem("weponDamage", 3);
    localStorage.setItem("armor", "none");
    localStorage.setItem("spellInventory", "boltOrb 1,None,None,None,None,None,None,None,None,None,None,None")
    gems = 0;
    **/
    
    this.x = parseInt(localStorage.getItem("x")) || 200;
    this.y = parseInt(localStorage.getItem("y")) || 0;
    this.armor = localStorage.getItem("armor") || "none";
    this.armorPoint = localStorage.getItem("armorPoint") || 0;
    this.spd = parseInt(localStorage.getItem("spd")) || 1;
    this.maxStamina = parseInt(localStorage.getItem("maxStamina")) || 100;
    this.staminaRegen = parseInt(localStorage.getItem("staminaRegen")) || 0.04;
    this.team = "ally";
    this.player = true;
    this.stamina = parseInt(localStorage.getItem("stamina")) || 100;
    this.size = 20;
    this.atkCool = 0;
    this.atacking = false;
    this.reload = localStorage.getItem("reload") || 100;
    this.r = 0;
    this.reach = 60;
    this.atkSize = 50;
    this.atkE = localStorage.getItem("atkE") || "boltOrb 1";
    this.atkF = localStorage.getItem("atkF") || "None";
    this.atkC = localStorage.getItem("atkC") || "None";
    this.atkQ = localStorage.getItem("atkQ") || "None";
    this.aX = 0;
    this.aY = 0;

    this.hp = parseInt(localStorage.getItem("hp")) || 100;
    this.maxHp = parseInt(localStorage.getItem("maxHp")) || 100;
    this.mana = parseInt(localStorage.getItem("mana")) || 100;
    this.maxMana = parseInt(localStorage.getItem("maxMana")) || 100;
    this.manaRegen = parseInt(localStorage.getItem("manaRegen")) || 0.01;
    this.lvl = parseInt(localStorage.getItem("lvl")) || 1;
    this.exp = parseInt(localStorage.getItem("exp")) || 0;
    this.strength = parseInt(localStorage.getItem("strength")) || 100;
    this.hpRegen = parseInt(localStorage.getItem("hpRegen")) || 0.02;
    this.weponDamage = parseInt(localStorage.getItem("weponDamage")) || 3;
    this.wepon = localStorage.getItem("wepon") || "Iron Sword"
    this.weponCollision = localStorage.getItem("weponCollision") || "30,45,60,75";
    this.weponCollision = this.weponCollision.split(",");
    this.inventory = localStorage.getItem("inventory") || "Iron Sword,none,none,none"
    this.inventory = this.inventory.split(",")
    this.inventory[0] = this.inventory[0].replace("[", "");
    this.upgradeOn = parseInt(localStorage.getItem("upgradeOn")) || 1;
    this.upgrades = parseInt(localStorage.getItem("upgrades")) || 1;
    this.selectedInventory = 0;
    this.spellInventory = localStorage.getItem("spellInventory") || "boltOrb 1,None,None,None,None,None,None,None,None,None,None,None";
    this.spellInventory = this.spellInventory.split(",");
    for(var i = 0; i < this.weponCollision.length; i+=1) {
        this.weponCollision[i] = parseInt(this.weponCollision[i]);
    }
    this.attacking = false;
    this.weponSpd = 0;
    this.chooseUpgrade = false;
    this.dashCool = 100;
};
player = new Player();
Player.prototype.draw = function() {
    this.attacking = false;
    //if(dragged && this.stamina > 0.1) {
        this.attacking = true;
        //this.stamina-=0.1;
    //}
    if(keys[16] && this.dashCool <= 0 && this.stamina >= 50) {
        this.stamina-=50;
        player.aX = cos(player.r) * 30;
        player.aY = sin(player.r) * 30;
        this.dashCool = 100;
    }
    this.dashCool-=1;
    this.x+=this.aX;
    this.y+=this.aY;
    this.aX*=0.95;
    this.aY*=0.95;
    this.weponSpd = Math.abs(this.r - (atan2((this.y - cam.y) - mouseY, (this.x - cam.x) - mouseX) + Math.PI));
    this.r = atan2((this.y - cam.y) - mouseY, (this.x - cam.x) - mouseX) + Math.PI;
    fill(0, 0, 0);
    ellipse(this.x - cam.x, this.y - cam.y, 23, 23, 0);
    fill(255, 200, 155);
    ellipse(this.x - cam.x, this.y - cam.y, 20, 20, 0);
    if(this.armor == "bronze armor") {
        fill(0, 0, 0);
        arc(this.x - cam.x, this.y - cam.y + 2, 22, 20, -Math.PI, 0);
        rect(this.x - cam.x - 8, this.y - cam.y - 2, 16, 19);
        fill(209, 132, 23);
        arc(this.x - cam.x, this.y - cam.y - 2, 20, 18, -Math.PI, 0);
        rect(this.x - cam.x - 5, this.y - cam.y - 2, 10, 15);
    } else if(this.armor == "iron armor") {
        fill(0, 0, 0);
        arc(this.x - cam.x, this.y - cam.y + 2, 22, 20, -Math.PI, 0);
        rect(this.x - cam.x - 8, this.y - cam.y - 2, 16, 19);
        fill(227, 227, 227);
        arc(this.x - cam.x, this.y - cam.y - 2, 20, 18, -Math.PI, 0);
        rect(this.x - cam.x - 5, this.y - cam.y - 2, 10, 15);
    } else if(this.armor == "gold armor") {
        fill(0, 0, 0);
        arc(this.x - cam.x, this.y - cam.y + 2, 22, 20, -Math.PI, 0);
        rect(this.x - cam.x - 8, this.y - cam.y - 2, 16, 19);
        fill(224, 191, 0);
        arc(this.x - cam.x, this.y - cam.y - 2, 20, 18, -Math.PI, 0);
        rect(this.x - cam.x - 5, this.y - cam.y - 2, 10, 15);
    } else if(this.armor == "diamond armor") {
        fill(0, 0, 0);
        arc(this.x - cam.x, this.y - cam.y + 2, 22, 20, -Math.PI, 0);
        rect(this.x - cam.x - 8, this.y - cam.y - 2, 16, 19);
        fill(50, 50, 200);
        arc(this.x - cam.x, this.y - cam.y - 2, 20, 18, -Math.PI, 0);
        rect(this.x - cam.x - 5, this.y - cam.y - 2, 10, 15);
    }
    fill(0, 0, 0);
    rect(this.x - cam.x - this.size - 2, this.y - cam.y + this.size + 10, this.size * 2 + 4, 9)
    fill(255, 0, 0);
    rect(this.x - cam.x - this.size, this.y - cam.y + this.size + 12, this.size * 2, 5);
    fill(0, 255, 0);
    rect(this.x - cam.x - this.size, this.y - cam.y + this.size + 12, constrain((this.hp/this.maxHp), 0, 1) * (this.size * 2), 5)
    button(15, canvas.height - 170, 55, 55, [100, 100, 100], function() {
        if(manaPotionT1 > 0) {
            player.mana+=player.maxMana/10;
            manaPotionT1-=1;
            player.mana = constrain(player.mana, -1, player.maxMana)
            itemCoolDown = 100;
        }
    }, [bandagesT1 + " [M]", 20])
    button(100, canvas.height - 170, 55, 55, [100, 100, 100], function() {
        if(bandagesT1 > 0) {
            player.hp+=player.maxHp/10;
            bandagesT1-=1;
            player.hp = constrain(player.hp, -1, player.maxHp)
            itemCoolDown = 100;
        }
    }, [manaPotionT1 + " [B]", 20])
    fill(0, 0, 0);
    rect(12, canvas.height - 33, 206, 31)
    rect(12, canvas.height - 68, 206, 31);
    rect(12, canvas.height - 103, 206, 31);
    fill(100, 100, 100);
    rect(15, canvas.height - 30, 200, 25)
    rect(15, canvas.height - 65, 200, 25);
    rect(15, canvas.height - 100, 200, 25);
    fill(0, 0, 200);
    rect(15, canvas.height - 30, (this.mana/this.maxMana) * 200, 25);
    fill(200, 150, 30);
    rect(15, canvas.height - 65, (this.stamina/this.maxStamina) * 200, 25);
    fill(250, 200, 40);
    rect(15, canvas.height - 100, (this.exp/(((this.lvl * this.lvl)/(this.lvl * 0.25)) * 10)) * 200, 25);
    if(this.inventory[this.selectedInventory] === "Iron Sword") {
        strokeWeight(7);
        if(this.attacking) {
            stroke(101, 67, 33);
        } else {
            stroke(101, 67, 33, 0.5);
        }
        line(player.x + cos(player.r) * 45 - cam.x, player.y + sin(player.r) * 45 - cam.y, player.x + cos(player.r) * 25 - cam.x, player.y + sin(player.r) * 25 - cam.y);
        strokeWeight(10)
        if(this.attacking) {
            stroke(100, 100, 100);
        } else {
            stroke(100, 100, 100, 0.5);
        }
        fill(100, 100, 100)
        triangle(player.x + cos(player.r) * 105 - cam.x, player.y + sin(player.r) * 105 - cam.y,
                player.x + cos(player.r) * 84 - cam.x + cos(player.r + 1.5) * 5, player.y + sin(player.r) * 84 - cam.y + sin(player.r + 1.5) * 5,
                player.x + cos(player.r) * 84 - cam.x + cos(player.r - 1.5) * 5, player.y + sin(player.r) * 84 - cam.y + sin(player.r - 1.5) * 5);
        line(player.x + cos(player.r) * 45 - cam.x, player.y + sin(player.r) * 45 - cam.y, player.x + cos(player.r) * 85 - cam.x, player.y + sin(player.r) * 85 - cam.y);
        fill(255, 200, 155);
        ellipse(player.x + cos(player.r) * 30 - cam.x, player.y + sin(player.r) * 30 - cam.y, 10, 10, 0)
    } else if(this.inventory[this.selectedInventory] === "Long Sword") {
        strokeWeight(7);
        if(this.attacking) {
            stroke(101, 67, 33);
        } else {
            stroke(101, 67, 33, 0.5);
        }
        line(player.x + cos(player.r) * 55 - cam.x, player.y + sin(player.r) * 55 - cam.y, player.x + cos(player.r) * 25 - cam.x, player.y + sin(player.r) * 25 - cam.y);
        strokeWeight(10);
        if(this.attacking) {
            stroke(100, 100, 100);
        } else {
            stroke(100, 100, 100, 0.5);
        }
        fill(220, 175, 120);
        ellipse(player.x + cos(player.r) * 35 - cam.x, player.y + sin(player.r) * 35 - cam.y, 10, 10, 0);
        fill(100, 100, 100)
        triangle(player.x + cos(player.r) * 145 - cam.x, player.y + sin(player.r) * 145 - cam.y,
                player.x + cos(player.r) * 124 - cam.x + cos(player.r + 1.5) * 5, player.y + sin(player.r) * 124 - cam.y + sin(player.r + 1.5) * 5,
                player.x + cos(player.r) * 124 - cam.x + cos(player.r - 1.5) * 5, player.y + sin(player.r) * 124 - cam.y + sin(player.r - 1.5) * 5);
        line(player.x + cos(player.r) * 55 - cam.x, player.y + sin(player.r) * 55 - cam.y, player.x + cos(player.r) * 125 - cam.x, player.y + sin(player.r) * 125 - cam.y);
        fill(255, 200, 155);
        ellipse(player.x + cos(player.r) * 40 - cam.x, player.y + sin(player.r) * 40 - cam.y, 10, 10, 0)
    } else if(this.inventory[this.selectedInventory] === "Dragon Slayer") {
        strokeWeight(10);
        if(this.attacking) {
            stroke(88, 53.6, 26.4);
        } else {
            stroke(101, 67, 33, 0.5);
        }
        line(player.x + cos(player.r) * 60 - cam.x, player.y + sin(player.r) * 60 - cam.y, player.x + cos(player.r) * 30 - cam.x, player.y + sin(player.r) * 30 - cam.y);
        if(this.attacking) {
            stroke(10, 10, 10);
        } else {
            stroke(10, 10, 10, 0.5);
        }
        fill(220, 175, 120);
        ellipse(player.x + cos(player.r) * 40 - cam.x, player.y + sin(player.r) * 40 - cam.y, 10, 10, 0)
        strokeWeight(20);
        line(player.x + cos(player.r) * 60 - cam.x, player.y + sin(player.r) * 60 - cam.y, player.x + cos(player.r) * 225 - cam.x, player.y + sin(player.r) * 225 - cam.y);
        fill(10, 10, 10)
        triangle(player.x + cos(player.r) * 245 - cam.x, player.y + sin(player.r) * 245 - cam.y,
                player.x + cos(player.r) * 224 - cam.x + cos(player.r + 1.5) * 10, player.y + sin(player.r) * 224 - cam.y + sin(player.r + 1.5) * 10,
                player.x + cos(player.r) * 224 - cam.x + cos(player.r - 1.5) * 10, player.y + sin(player.r) * 224 - cam.y + sin(player.r - 1.5) * 10);
        fill(255, 200, 155);
        ellipse(player.x + cos(player.r) * 45 - cam.x, player.y + sin(player.r) * 45 - cam.y, 10, 10, 0)
    } else if(this.inventory[this.selectedInventory] === "Dagmor") {
        strokeWeight(10);
        if(this.attacking) {
            stroke(88, 53.6, 26.4);
        } else {
            stroke(101, 67, 33, 0.5);
        }
        line(player.x + cos(player.r) * 60 - cam.x, player.y + sin(player.r) * 60 - cam.y, player.x + cos(player.r) * 30 - cam.x, player.y + sin(player.r) * 30 - cam.y);
        if(this.attacking) {
            stroke(30, 30, 30);
        } else {
            stroke(30, 30, 30, 0.5);
        }
        fill(220, 175, 120);
        ellipse(player.x + cos(player.r) * 40 - cam.x, player.y + sin(player.r) * 40 - cam.y, 10, 10, 0)
        strokeWeight(20);
        line(player.x + cos(player.r) * 60 - cam.x, player.y + sin(player.r) * 60 - cam.y, player.x + cos(player.r) * 195 - cam.x, player.y + sin(player.r) * 195 - cam.y);
        fill(30, 30, 30)
        triangle(player.x + cos(player.r) * 215 - cam.x, player.y + sin(player.r) * 215 - cam.y,
                player.x + cos(player.r) * 194 - cam.x + cos(player.r + 1.5) * 10, player.y + sin(player.r) * 194 - cam.y + sin(player.r + 1.5) * 10,
                player.x + cos(player.r) * 194 - cam.x + cos(player.r - 1.5) * 10, player.y + sin(player.r) * 194 - cam.y + sin(player.r - 1.5) * 10);
        fill(255, 200, 155);
        ellipse(player.x + cos(player.r) * 45 - cam.x, player.y + sin(player.r) * 45 - cam.y, 10, 10, 0)
    } else if(this.inventory[this.selectedInventory] === "Penatrator") {
        strokeWeight(10);
        if(this.attacking) {
            stroke(88, 53.6, 26.4);
        } else {
            stroke(101, 67, 33, 0.5);
        }
        line(player.x + cos(player.r) * 60 - cam.x, player.y + sin(player.r) * 60 - cam.y, player.x + cos(player.r) * 30 - cam.x, player.y + sin(player.r) * 30 - cam.y);
        if(this.attacking) {
            stroke(150, 150, 150);
        } else {
            stroke(150, 150, 150, 0.5);
        }
        fill(220, 175, 120);
        ellipse(player.x + cos(player.r) * 40 - cam.x, player.y + sin(player.r) * 40 - cam.y, 10, 10, 0)
        strokeWeight(20);
        line(player.x + cos(player.r) * 60 - cam.x, player.y + sin(player.r) * 60 - cam.y, player.x + cos(player.r) * 180 - cam.x, player.y + sin(player.r) * 180 - cam.y);
        fill(150, 150, 150)
        triangle(player.x + cos(player.r) * 195 - cam.x, player.y + sin(player.r) * 195 - cam.y,
                player.x + cos(player.r) * 179 - cam.x + cos(player.r + 1.5) * 10, player.y + sin(player.r) * 179 - cam.y + sin(player.r + 1.5) * 10,
                player.x + cos(player.r) * 179 - cam.x + cos(player.r - 1.5) * 10, player.y + sin(player.r) * 179 - cam.y + sin(player.r - 1.5) * 10);
        fill(255, 200, 155);
        ellipse(player.x + cos(player.r) * 45 - cam.x, player.y + sin(player.r) * 45 - cam.y, 10, 10, 0)
    } else if(this.inventory[this.selectedInventory] === "Ring of Slimes Lv. 1") {
        stroke(0, 0, 200);
        strokeWeight(3);
        eEllipse(player.x + cos(player.r) * 30 - cam.x, player.y + sin(player.r) * 30 - cam.y, 5, 5, 0);
        if(clicked) {
            if(this.mana >= 500) {
                if(allySlimes < 4) {
                    this.mana-=500;
                    if(scene == "adventure") {
                        for(var i = 0; i < 1; i+=1) {
                            npcs.push(new npc(player.x + random(-100, 100), player.y + random(-100, 100), "Slime Lv. 1", "ally"));
                        }
                    } else {
                        for(var i = 0; i < 1; i+=1) {
                            dNpcs.push(new npc(player.x + random(-100, 100), player.y + random(-100, 100), "Slime Lv. 1", "ally"));
                        }
                    }
                } else {
                    popUps.push(new popUp("Reached unit cap", canvas.width/2, canvas.height/4, 100, 200));
                }
            } else {
                popUps.push(new popUp("Not enough mana", canvas.width/2, canvas.height/4, 100, 200));
            }
        }
    } else if(this.inventory[this.selectedInventory] === "Ring of Slimes Lv. 2") {
        stroke(0, 0, 200);
        strokeWeight(3);
        eEllipse(player.x + cos(player.r) * 32.5 - cam.x, player.y + sin(player.r) * 32.5 - cam.y, 7.5, 7.5, 0);
        if(clicked) {
            if(this.mana >= 2500) {
                if(allySlimes < 30) {
                    this.mana-=2500;
                    if(scene == "adventure") {
                        for(var i = 0; i < 3; i+=1) {
                            npcs.push(new npc(player.x + random(-100, 100), player.y + random(-100, 100), "Slime Lv. 2", "ally"));
                        }
                    } else {
                        for(var i = 0; i < 3; i+=1) {
                            dNpcs.push(new npc(player.x + random(-100, 100), player.y + random(-100, 100), "Slime Lv. 2", "ally"));
                        }
                    }
                } else {
                    popUps.push(new popUp("Reached unit cap", canvas.width/2, canvas.height/4, 100, 200));
                }
            } else {
                popUps.push(new popUp("Not enough mana", canvas.width/2, canvas.height/4, 100, 200));
            }
        }
    } else if(this.inventory[this.selectedInventory] === "Ring of Slimes Lv. 3") {
        stroke(0, 0, 250);
        strokeWeight(4);
        eEllipse(player.x + cos(player.r) * 32.5 - cam.x, player.y + sin(player.r) * 32.5 - cam.y, 7.5, 7.5, 0);
        if(clicked) {
            if(this.mana >= 4000) {
                if(allySlimes < 100) {
                    this.mana-=4000;
                    if(scene == "adventure") {
                        for(var i = 0; i < 3; i+=1) {
                            npcs.push(new npc(player.x + random(-100, 100), player.y + random(-100, 100), "Slime Lv. 2", "ally"));
                        }
                        for(var i = 0; i < 2; i+=1) {
                            npcs.push(new npc(player.x + random(-100, 100), player.y + random(-100, 100), "Slime Lv. 1", "ally"));
                        }
                        npcs.push(new npc(player.x + random(-100, 100), player.y + random(-100, 100), "KingSlime Lv. 1", "ally"));
                    } else {
                        for(var i = 0; i < 3; i+=1) {
                            dNpcs.push(new npc(player.x + random(-100, 100), player.y + random(-100, 100), "Slime Lv. 2", "ally"));
                        }
                        for(var i = 0; i < 2; i+=1) {
                            dNpcs.push(new npc(player.x + random(-100, 100), player.y + random(-100, 100), "Slime Lv. 1", "ally"));
                        }
                        dNpcs.push(new npc(player.x + random(-100, 100), player.y + random(-100, 100), "KingSlime Lv. 1", "ally"));
                    }
                } else {
                    popUps.push(new popUp("Reached unit cap", canvas.width/2, canvas.height/4, 100, 200));
                }
            } else {
                popUps.push(new popUp("Not enough mana", canvas.width/2, canvas.height/4, 100, 200));
            }
        }
    } else if(this.inventory[this.selectedInventory] === "Ring of Slimes Lv. 4") {
        stroke(0, 0, 200);
        strokeWeight(4);
        eEllipse(player.x + cos(player.r) * 32.5 - cam.x, player.y + sin(player.r) * 32.5 - cam.y, 7.5, 7.5, 0);
        if(clicked) {
            if(this.mana >= 8000) {
                if(allySlimes < 175) {
                    this.mana-=8000;
                    if(scene == "adventure") {
                        for(var i = 0; i < 12; i+=1) {
                            npcs.push(new npc(player.x + random(-100, 100), player.y + random(-100, 100), "Slime Lv. 3", "ally"));
                        }
                        for(var i = 0; i < 3; i+=1) {
                            npcs.push(new npc(player.x + random(-100, 100), player.y + random(-100, 100), "KingSlime Lv. 1", "ally"));
                        } 
                    } else {
                        for(var i = 0; i < 12; i+=1) {
                            dNpcs.push(new npc(player.x + random(-100, 100), player.y + random(-100, 100), "Slime Lv. 3", "ally"));
                        }
                        for(var i = 0; i < 3; i+=1) {
                            dNpcs.push(new npc(player.x + random(-100, 100), player.y + random(-100, 100), "KingSlime Lv. 1", "ally"));
                        } 
                    }
                } else {
                    popUps.push(new popUp("Reached unit cap", canvas.width/2, canvas.height/4, 100, 200));
                }
            } else {
                popUps.push(new popUp("Not enough mana", canvas.width/2, canvas.height/4, 100, 200));
            }
        }
    } else if(this.inventory[this.selectedInventory] === "Ring of Slimes Lv. 5") {
        stroke(0, 0, 250);
        strokeWeight(4);
        eEllipse(player.x + cos(player.r) * 32.5 - cam.x, player.y + sin(player.r) * 32.5 - cam.y, 5, 5, 0);
        if(clicked) {
            if(this.mana >= 16000) {
                if(allySlimes < 350) {
                    this.mana-=16000;
                    if(scene == "adventure") {
                        for(var i = 0; i < 6; i+=1) {
                            npcs.push(new npc(player.x + random(-100, 100), player.y + random(-100, 100), "Slime Lv. 4", "ally"));
                        }
                    } else {
                        for(var i = 0; i < 6; i+=1) {
                            dNpcs.push(new npc(player.x + random(-100, 100), player.y + random(-100, 100), "Slime Lv. 4", "ally"));
                        }
                    }
                } else {
                    popUps.push(new popUp("Reached unit cap", canvas.width/2, canvas.height/4, 100, 200));
                }
            } else {
                popUps.push(new popUp("Not enough mana", canvas.width/2, canvas.height/4, 100, 200));
            }
        }
    } else if(this.inventory[this.selectedInventory] === "Ring of Slimes Lv. 6") {
        stroke(0, 0, 250);
        strokeWeight(7);
        eEllipse(player.x + cos(player.r) * 37.5 - cam.x, player.y + sin(player.r) * 37.5 - cam.y, 15, 15, 0);
        if(clicked) {
            if(this.mana >= 64000) {
                if(allySlimes < 5) {
                    this.mana-=64000;
                    if(scene == "adventure") {
                        npcs.push(new npc(player.x + random(-100, 100), player.y + random(-100, 100), "Slime Lv. 5", "ally"));
                    } else {
                        dNpcs.push(new npc(player.x + random(-100, 100), player.y + random(-100, 100), "Slime Lv. 5", "ally"));
                    }
                } else {
                    popUps.push(new popUp("Reached unit cap", canvas.width/2, canvas.height/4, 100, 200));
                }
            } else {
                popUps.push(new popUp("Not enough mana", canvas.width/2, canvas.height/4, 100, 200));
            }
        }
    }
    fill(0, 0, 0, 0.5);
    for(var i = 0; i < 4; i+=1) {
        if(this.selectedInventory !== i) {
            fill(0, 0, 0, 0.2);
        } else {
            fill(0, 0, 0, 0.4);
        }
        if(keys[49 + i]) {
            this.selectedInventory = i;
        }
        rect(canvas.width - 210, canvas.height - 60 - i * 60, 200, 50);
        textAlign("left")
        fill(255, 255, 255);
        text(this.inventory[i], canvas.width - 200, canvas.height - 25 - i * 60, 20)
    }
    if(this.exp > (this.lvl * this.lvl)/(this.lvl * 0.25) * 10) {
        this.exp = 0;
        this.lvl+=1;
        this.maxHp = parseInt(this.maxHp);
        this.maxHp+=(this.lvl * this.lvl) * 0.2;
        this.hpRegen += this.lvl/400;
        this.maxMana+=(this.lvl * this.lvl) * 0.2;
        this.mana = this.maxMana;
        this.manaRegen += this.lvl/125;
        this.maxStamina+=(this.lvl * this.lvl)/10;
        this.stamina = this.maxStamina;
        this.staminaRegen += this.lvl/1000;
        this.strength+=this.lvl/250;
        this.hp = parseInt(this.maxHp);
        this.upgrades+=1;
    }
    if(keys[87] || keys[38]) {
        this.y-=this.spd;
    } else if(keys[83] || keys[40]) {
        this.y+=this.spd;
    }
    if(keys[65] || keys[37]) {
        this.x-=this.spd;
    } else if(keys[68] || keys[39]) {
        this.x+=this.spd;
    }
    if(this.mana < this.maxMana) {
        this.mana+=this.manaRegen;
    }
    if(this.hp < this.maxHp) {
        this.hp+=this.hpRegen;
    }
    if(this.stamina < this.maxStamina) {
        this.stamina+=this.staminaRegen;
    }
    var atk = "None"
    if(keys[69] && this.atkE !== "None") {
      atk = this.atkE;
    }
    if(keys[70] && this.atkF !== "None") {
      atk = this.atkF;
    }
    if(keys[81] && this.atkQ !== "None") {
      atk = this.atkQ;
    }
    if(keys[67] && this.atkC !== "None") {
      atk = this.atkC;
    }
    if(atk != "None") {
      if(this.atkCool <= 0 && atk == "Mana Burst" && this.mana >= 200) {
        this.mana-=200;
        for(var j = 0; j < 10; j++) {
          for(var i = -10; i < 10; i++) {
            this.atkCool = 300;
            this.atacking = true;
            projectiles.push(new projectile(player.x, player.y, player.r + (i * 0.1), "minigun2", "ally"))
          }
        }
      } else if(this.atkCool <= 0 && this.mana >= projectileStats[atk].cost) {
          this.mana-= projectileStats[atk].cost;
          this.atkCool = projectileStats[atk].reload;
          this.atacking = true;
          projectiles.push(new projectile(player.x, player.y, player.r + random(-0.1, 0.1), atk, "ally"))
      }
    }
    this.atkCool-=1;
    this.hp = constrain(this.hp, -1, this.maxHp)

};
