

// pop up function
function popUp(txt, x, y, size, lifetime) {
    this.txt = txt;
    this.x = x;
    this.y = y;
    this.aX = (random(-100, 100)/100);
    this.aY = (random(0, 700)/100);
    this.size = size;
    this.lifeTime = lifetime
};
popUp.prototype.draw = function() {
    fill(25, 25, 25, this.lifeTime/100);
    text(this.txt, this.x, this.y, this.size);
};
popUp.prototype.update = function() {
    this.lifeTime-=1;
    this.y-=this.aY;
    this.x+=this.aX;
    this.aX*=0.95;
    this.aY*=0.95;
};

// rectangular button
function button(x, y, w, h, col, d, txt) {
    fill(0, 0, 0);
    rect(x - 3, y - 3, w + 6, h + 6);
    if(mouseX > x && mouseY > y && mouseX < x + w && mouseY < y + h) {
        fill(col[0] + 10, col[1] + 10, col[2] + 10)
        if(clicked) {
            d();
        }
    } else {
        fill(col[0], col[1], col[2])
    }
    rect(x, y, w, h);
    fill(255, 255, 255);
    textAlign("center")
    text(txt[0], x + w/2, y + h/2 + txt[1]/2 - 3, txt[1]);
};
// collision function
function collideRect(x, y, w, h, t, alive) {
    if(t.x + t.size > x && t.x - t.size < x + w && t.y + t.size > y && t.y - t.size < y + h) {
        t.x -= t.aX;
        t.y -= t.aY;
        if(!(t.x + t.size < x + t.spd * 2 || t.x - t.size > x + w - t.spd * 2)) {
            if(t.y < y + h/2) {
                t.y = y - t.size;
            } else {
                t.y = y + h + t.size;
            }
        }
        if(!(t.y + t.size < y + t.spd * 2 || t.y - t.size > y + h - t.spd * 2)) {
            if(t.x < x + w/2) {
                t.x = x - t.size;
            } else {
                t.x = x + w + t.size;
            }
        }
    }
};
for(var i = 0; i < 10; i+=1) {
    grass.push([random(0, canvas.width) + cam.x, random(0, canvas.height) + cam.y])
}
// enery thing
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fill(46, 135, 30)
    rect(0, 0, canvas.width, canvas.height)
    switch(scene) {
        case "adventure":
            setting();
            {
            fill(120, 105, 75)
            arc(-18550 - cam.x, 0 - cam.y, 150, 150, -Math.PI, 0);
            fill(0, 0, 0)
            arc(-18550 - cam.x, 0 - cam.y, 90, 90, -Math.PI, 0);
            fill(0, 0, 0, 0.2)
            arc(-18550 - cam.x, 0 - cam.y, 95, 95, -Math.PI, 0);
            arc(-18550 - cam.x, 0 - cam.y, 100, 100, -Math.PI, 0);
            arc(-18550 - cam.x, 0 - cam.y, 105, 105, -Math.PI, 0);
            if(dist(-18550, 50, player.x, player.y) < 200) {
                textAlign("center")
                fill(0, 0, 0);
                text("Spacebar to enter Desert Dungeon", canvas.width/2, canvas.height - 30, 30)
                if(keys[32]) {
                    scene = "doungen1"
                    player.x = 0;
                    player.y = 0;
                    dNpcs = [];
                    for(var i = 0; i < 5; i+=1) {
                        dNpcs.push(new npc(random(-2180, -1000), random(-50, 70), "Dungeon Goblin", "enemy"))
                    }
                    for(var i = 0; i < 15; i+=1) {
                        dNpcs.push(new npc(random(-3200, -2000), random(-700, 700), "Dungeon Goblin", "enemy"))
                    }
                    dNpcs.push(new npc(-2600, 0, "Dungeon Goblin Boss", "enemy"))
                }
            } 
            } // desert dungeon
            {
            fill(205, 205, 245)
            arc(16550 - cam.x, 0 - cam.y, 150, 150, -Math.PI, 0);
            fill(0, 0, 0)
            arc(16550 - cam.x, 0 - cam.y, 90, 90, -Math.PI, 0);
            fill(0, 0, 0, 0.2)
            arc(16550 - cam.x, 0 - cam.y, 95, 95, -Math.PI, 0);
            arc(16550 - cam.x, 0 - cam.y, 100, 100, -Math.PI, 0);
            arc(16550 - cam.x, 0 - cam.y, 105, 105, -Math.PI, 0);
            if(dist(16550, 50, player.x, player.y) < 200) {
                textAlign("center")
                fill(0, 0, 0);
                text("Spacebar to enter Snow Dungeon", canvas.width/2, canvas.height - 30, 30)
                if(keys[32]) {
                    scene = "doungen2"
                    player.x = 0;
                    player.y = 0;
                    dNpcs = [];
                    for(var i = 0; i < 5; i+=1) {
                        dNpcs.push(new npc(random(-3200, -2000), random(-700, 700), "Dungeon Yeti", "enemy"))
                    }
                    for(var i = 0; i < 10; i+=1) {
                        dNpcs.push(new npc(random(-3200, -2000), random(-700, 700), "Dungeon Snowman", "enemy"))
                    }
                    dNpcs.push(new npc(-2600, 0, "Dungeon Yeti Boss", "enemy"))
                }
            } 
            } // snow dungeon
            {
            fill(0, 0, 0);
            rect(-233 - cam.x, -647 - cam.y, 66, 556);
            rect(-233 - cam.x, -703 - cam.y, 1006, 67);
            rect(-233 - cam.x, 97 - cam.y, 66, 557);
            rect(-233 - cam.x, 597 - cam.y, 1006, 67);
            rect(766 - cam.x, -703 - cam.y, 66, 1366);
            rect(-233 - cam.x, 657 - cam.y, 1065, 106);
            rect(-173 - cam.x, -643 - cam.y, 946, 106);
            rect(-233 - cam.x, -153 - cam.y, 66, 106);
            fill(105, 59, 17);
            rect(-230 - cam.x, -650 - cam.y, 60, 550);
            rect(-230 - cam.x, -700 - cam.y, 1000, 61);
            rect(-230 - cam.x, 100 - cam.y, 60, 551);
            rect(-230 - cam.x, 600 - cam.y, 1000, 61);
            rect(769 - cam.x, -700 - cam.y, 60, 1360);
            fill(95, 49, 7);
            rect(-230 - cam.x, 660 - cam.y, 1059, 100);
            rect(-170 - cam.x, -640 - cam.y, 940, 100);
            rect(-230 - cam.x, -150 - cam.y, 60, 100);
            collideRect(-230, -650, 60, 575, player);
            collideRect(-230, 100, 60, 550, player);
            collideRect(-230, 600, 1059, 130, player);
            collideRect(-230, -700, 1000, 130, player);
            collideRect(770, -700, 60, 1360, player)
            } // walls
            {
            fill(0, 0, 0);
            rect(47 - cam.x, -28 - cam.y, 206, 56);
            rect(47 - cam.x, -128 - cam.y, 46, 156);
            rect(207 - cam.x, -128 - cam.y, 46, 156);
            rect(87 - cam.x, -138 - cam.y, 46, 156);
            rect(167 - cam.x, -138 - cam.y, 46, 156);
            rect(127 - cam.x, -148 - cam.y, 46, 156);
            rect(47 - cam.x, 21 - cam.y, 206, 56);
            fill(100, 50, 12);
            rect(50 - cam.x, -25 - cam.y, 200, 50);
            fill(115, 59, 22);
            rect(50 - cam.x, -125 - cam.y, 40, 150);
            rect(210 - cam.x, -125 - cam.y, 40, 150);
            fill(120, 64, 27)
            rect(90 - cam.x, -135 - cam.y, 40, 150);
            rect(170 - cam.x, -135 - cam.y, 40, 150);
            fill(125, 69, 32)
            rect(130 - cam.x, -145 - cam.y, 40, 150);
            fill(105, 55, 17)
            rect(50 - cam.x, 24 - cam.y, 200, 50);
            fill(0, 0, 0);
            ellipse(100 - cam.x, 65 - cam.y, 23, 23, 0);
            fill(0, 0, 200);
            ellipse(100 - cam.x, 65 - cam.y, 20, 20, 0);
            if(dist(100, 80, player.x, player.y) < 100 && !talking) {
                textAlign("center")
                fill(0, 0, 0);
                text("Spacebar to talk to Bob the Gaurd", canvas.width/2, canvas.height - 30, 30)
                if(keys[32]) {
                    talking = true;
                    if(player.upgrades < 40) {
                        talkingTo = "Gaurd 1"
                    } else if(player.upgrades >= 40) {
                        talkingTo = "Gaurd 2"
                    }else if(player.upgrades >= 70) {
                        talkingTo = "Gaurd 3"
                    }
                }
            } 
            collideRect(50, -125, 200, 175, player);
            } // gaurd building
            {
            fill(0, 0, 0);
            rect(297 - cam.x, -28 - cam.y, 206, 56);
            rect(297 - cam.x, -128 - cam.y, 46, 156);
            rect(457 - cam.x, -128 - cam.y, 46, 156);
            rect(337 - cam.x, -138 - cam.y, 46, 156);
            rect(417 - cam.x, -138 - cam.y, 46, 156);
            rect(377 - cam.x, -148 - cam.y, 46, 156);
            rect(297 - cam.x, 21 - cam.y, 206, 56);
                
            fill(100, 50, 12);
            rect(300 - cam.x, -25 - cam.y, 200, 50);
            fill(115, 59, 22);
            rect(300 - cam.x, -125 - cam.y, 40, 150);
            rect(460 - cam.x, -125 - cam.y, 40, 150);
            fill(120, 64, 27)
            rect(340 - cam.x, -135 - cam.y, 40, 150);
            rect(420 - cam.x, -135 - cam.y, 40, 150);
            fill(125, 69, 32)
            rect(380 - cam.x, -145 - cam.y, 40, 150);
            fill(105, 55, 17)
            rect(300 - cam.x, 24 - cam.y, 200, 50);
            fill(0, 0, 0);
            ellipse(350 - cam.x, 65 - cam.y, 23, 23, 0);
            fill(0, 0, 200);
            ellipse(350 - cam.x, 65 - cam.y, 20, 20, 0);
            if(dist(350, 80, player.x, player.y) < 100) {
                textAlign("center")
                fill(0, 0, 0);
                text("Spacebar to buy with Todd", canvas.width/2, canvas.height - 30, 30)
                if(keys[32]) {
                    scene = "shop"
                }
            }
            collideRect(300, -125, 200, 175, player);
            } // shop building
            {
            fill(0, 0, 0);
            rect(47 - cam.x, -428 - cam.y, 46, 156);
            rect(207 - cam.x, -428 - cam.y, 46, 156);
            rect(87 - cam.x, -438 - cam.y, 46, 156);
            rect(167 - cam.x, -438 - cam.y, 46, 156);
            rect(127 - cam.x, -448 - cam.y, 46, 156);
            rect(47 - cam.x, -279 - cam.y, 206, 56);
            fill(100, 50, 12);
            rect(50 - cam.x, -325 - cam.y, 200, 50);
            fill(115, 59, 22);
            rect(50 - cam.x, -425 - cam.y, 40, 150);
            rect(210 - cam.x, -425 - cam.y, 40, 150);
            fill(120, 64, 27)
            rect(90 - cam.x, -435 - cam.y, 40, 150);
            rect(170 - cam.x, -435 - cam.y, 40, 150);
            fill(125, 69, 32)
            rect(130 - cam.x, -445 - cam.y, 40, 150);
            fill(105, 55, 17)
            rect(50 - cam.x, -276 - cam.y, 200, 50);
            fill(0, 0, 0);
            ellipse(100 - cam.x, -235 - cam.y, 23, 23, 0);
            fill(0, 0, 200);
            ellipse(100 - cam.x, -235 - cam.y, 20, 20, 0);
            if(dist(100, -220, player.x, player.y) < 100) {
                textAlign("center")
                fill(0, 0, 0);
                text("Spacebar to buy with Zeminia", canvas.width/2, canvas.height - 30, 30)
                if(keys[32]) {
                    scene = "enchant"
                }
            }
            collideRect(50, -425, 200, 175, player);
            } // enchanters building
            {
            fill(0, 0, 0);
            rect(297 - cam.x, -428 - cam.y, 206, 56);
            rect(297 - cam.x, -428 - cam.y, 46, 156);
            rect(457 - cam.x, -428 - cam.y, 46, 156);
            rect(337 - cam.x, -438 - cam.y, 46, 156);
            rect(417 - cam.x, -438 - cam.y, 46, 156);
            rect(377 - cam.x, -448 - cam.y, 46, 156);
            rect(297 - cam.x, -279 - cam.y, 206, 56);

                
            fill(100, 50, 12);
            rect(300 - cam.x, -325 - cam.y, 200, 50);
            fill(115, 59, 22);
            rect(300 - cam.x, -425 - cam.y, 40, 150);
            rect(460 - cam.x, -425 - cam.y, 40, 150);
            fill(120, 64, 27)
            rect(340 - cam.x, -435 - cam.y, 40, 150);
            rect(420 - cam.x, -435 - cam.y, 40, 150);
            fill(125, 69, 32)
            rect(380 - cam.x, -445 - cam.y, 40, 150);
            fill(105, 55, 17)
            rect(300 - cam.x, -276 - cam.y, 200, 50);
            fill(0, 0, 0);
            ellipse(350 - cam.x, -235 - cam.y, 23, 23, 0);
            fill(0, 0, 200);
            ellipse(350 - cam.x, -235 - cam.y, 20, 20, 0);
            if(dist(350, -220, player.x, player.y) < 100) {
                textAlign("center")
                fill(0, 0, 0);
                text("Spacebar to buy with Bliskana", canvas.width/2, canvas.height - 30, 30)
                if(keys[32]) {
                    scene = "swordShop"
                }
            }
            collideRect(300, -425, 200, 175, player);
            } // building
            textAlign("center")
            for(var i = 0; i < npcs.length; i+=1) {
                if(npcs[i].x - cam.x >= -npcs[i].size && npcs[i].y - cam.y >= -npcs[i].size && npcs[i].x - cam.x <= canvas.width + npcs[i].size && npcs[i].y - cam.y <= canvas.height + npcs[i].size) {
                    npcs[i].draw();
                }
                npcs[i].update();
                for(var j = 0; j < npcs.length; j+=1) {
                    if(i !== j) {
                        npcs[i].collide(npcs[j], i, j)
                    }
                }
                collideRect(-230, -650, 60, 575, npcs[i]);
                collideRect(-230, 100, 60, 550, npcs[i]);
                collideRect(-230, 600, 1000, 130, npcs[i]);
                collideRect(-230, -700, 1000, 130, npcs[i]);
                collideRect(770, -700, 60, 1360, npcs[i])
                collideRect(50, -425, 200, 175, npcs[i]);
                collideRect(300, -425, 200, 175, npcs[i]);
                collideRect(50, -125, 200, 175, npcs[i]);
                collideRect(300, -125, 200, 175, npcs[i]);
                if(npcs[i].hp <= 0) {
                    if(npcs[i].playerHit >= 0) {
                        changeGems(npcs[i].gems);
                        if(quest[5] === "6" && quest[7] === "S" && quest[8] == "l" && quest[9] == "i" && npcs[i].type === "Slime Lv. 1") {
                            slimesKilled+=1;
                            quest = "Kill 6 Slimes || " + slimesKilled + "/" + 6
                            if(slimesKilled >= 6) {
                                quest = "None";
                                slimesKilled = 0;
                                changeGems(300)
                                player.hp+=10;
                                popUps.push(new popUp("Quest Complete", canvas.width/2 - random(-10, 10), canvas.height/4 + random(-20, 20), 
     50, 300))
                                popUps.push(new popUp("+300 Gems", canvas.width/2 - random(-10, 10), canvas.height/4 + random(70, 90), 
     20, 300))
                            }
                        } else if(quest[5] === "1" && quest[6] === "0" && quest[8] == "G" && quest[9] === "o" && quest[10] === "b" && npcs[i].type === "Goblin") {
                            goblinsKilled+=1;
                            quest = "Kill 10 Goblins || " + goblinsKilled + "/" + 10
                            if(goblinsKilled >= 10) {
                                quest = "None";
                                goblinsKilled = 0;
                                changeGems(1000)
                                player.hp+=30;
                                popUps.push(new popUp("Quest Complete", canvas.width/2 - random(-10, 10), canvas.height/4 + random(-20, 20), 
     50, 300))
                                popUps.push(new popUp("+1000 Gems", canvas.width/2 - random(-10, 10), canvas.height/4 + random(70, 90), 
     20, 300))
                            }
                        }
                        if(npcs[i].team === "enemy") {
                            player.exp+=npcs[i].exp;
                        }
                    }
                    npcs.splice(i, 1);
                }
            }
            for(var i = 0; i < projectiles.length; i+=1) {
                projectiles[i].draw();
                projectiles[i].update();
                projectiles[i].collide(player);
                for(var j = 0; j < npcs.length; j+=1) {
                    projectiles[i].collide(npcs[j])
                }
                if(projectiles[i].life <= 0) {
                    projectiles.splice(i, 1)
                }
            }
            textAlign("center");
            for(var i = 0; i < popUps.length; i+=1) {
                popUps[i].draw();
                popUps[i].update();
                if(popUps[i].lifeTime <= 0) {
                    popUps.splice(i, 1);
                }
            }
            player.draw();
            cam = {
                x: lerp(cam.x, player.x - canvas.width/2, 0.04),
                y: lerp(cam.y, player.y - canvas.height/2, 0.04),
            }
            if(player.hp <= 0) {
                player.x = 200;
                player.y = 0;
                player.hp = player.maxHp;
            }
            spawn();
            if(player.upgradeOn < player.upgrades) {
                fill(0, 0, 0, 0.5);
                rect(0, 0, canvas.width, canvas.height);
                fill(0, 0, 0);
                textAlign("center");
                text("Choose an upgrade", canvas.width/2, 50, 50);
                if(player.upgradeOn !== 5) {
                    if(player.upgradeOn % 2 == 0) {
                        button(canvas.width/2 - 200, 150, 190, 50, [50, 50, 50], function() {
                            player.manaRegen+=0.005;
                            player.upgradeOn+=1;
                            buy.play();
                            clicked = false;
                        }, ["Mana Regen", 20]);
                        button(canvas.width/2 + 10, 150, 190, 50, [50, 50, 50], function() {
                            player.maxMana+=50;
                            player.upgradeOn+=1;
                            buy.play();
                            clicked = false;
                        }, ["Max Mana", 20]);
                        button(canvas.width/2 + 10, 210, 190, 50, [50, 50, 50], function() {
                            player.maxHp = parseInt(player.maxHp);
                            player.maxHp+=50;
                            player.hp = player.maxHp
                            player.upgradeOn+=1;
                            buy.play();
                            clicked = false;
                        }, ["Max Hp", 20]);
                        button(canvas.width/2 - 200, 210, 190, 50, [50, 50, 50], function() {
                            player.hpRegen+=0.005;
                            player.upgradeOn+=1;
                            buy.play();
                            clicked = false;
                        }, ["Hp Regen", 20]);
                    } else {
                        button(canvas.width/2 - 200, 150, 190, 50, [50, 50, 50], function() {
                            player.strength+=5;
                            player.upgradeOn+=1;
                            clicked = false;
                        }, ["Strength", 20]);
                        if(player.spd < 8) {
                            button(canvas.width/2 + 10, 150, 190, 50, [50, 50, 50], function() {
                                player.spd+=0.2;
                                player.upgradeOn+=1;
                                buy.play();
                                clicked = false;
                            }, ["Speed", 20]);
                        } else {
                            button(canvas.width/2 + 10, 150, 190, 50, [50, 50, 50], function() {
                                buy.play();
                                clicked = false;
                            }, ["Speed [MAXED]", 20]);
                        }
                        button(canvas.width/2 + 10, 210, 190, 50, [50, 50, 50], function() {
                            player.maxStamina = parseInt(player.maxStamina);
                            player.maxStamina+=50;
                            player.stamina = player.maxStamina;
                            player.upgradeOn+=1;
                            buy.play();
                            clicked = false;
                        }, ["Max Stamina", 20]);
                        button(canvas.width/2 - 200, 210, 190, 50, [50, 50, 50], function() {
                            player.staminaRegen+=0.005;
                            player.upgradeOn+=1;
                            buy.play();
                            clicked = false;
                        }, ["Hp Regen", 20]);
                    }
                } else if(player.upgradeOn % 5 === 0) {
                    button(canvas.width/2 - 200, 150, 190, 50, [50, 50, 50], function() {
                        player.maxMana = parseInt(player.maxMana);
                        player.maxMana+=200;
                        player.mana = player.maxMana;
                        player.upgradeOn+=1;
                        buy.play();
                        clicked = false;
                    }, ["A lot of Max Mana", 20]);
                    button(canvas.width/2 + 10, 150, 190, 50, [50, 50, 50], function() {
                        player.maxHp = parseInt(player.maxHp);
                        player.maxHp+=200;
                        player.hp = player.maxHp
                        player.upgradeOn+=1;
                        buy.play();
                        clicked = false;
                    }, ["A lot of Max Hp", 20]);
                }
            }
            if(talking) {
                fill(0, 0, 0);
                rect(canvas.width/2 - 503, canvas.height/2 - 203, 1006, 406.5);
                fill(60, 60, 60);
                rect(canvas.width/2 - 500, canvas.height/2 - 200, 1000, 400);
                fill(0, 0, 0);
                rect(canvas.width/2 - 500, canvas.height/2 - 200, 1000, 39);
                fill(70, 70, 70);
                rect(canvas.width/2 - 500, canvas.height/2 - 200, 1000, 36);
                fill(0, 0, 0);
                rect(canvas.width/2 - 500, canvas.height/2 + 141, 1000, 59);
                button(canvas.width/2 + 470, canvas.height/2 - 195, 25, 25, [70, 70, 70], function() {
                    talking = false;
                    dialougeLayer = 1;
                }, ["X", 20])
                fill(65, 65, 65);
                rect(canvas.width/2 - 500, canvas.height/2 + 144, 1000, 56);
                if(talkingTo === "Gaurd 1" || talkingTo === "Gaurd 2" || talkingTo === "Gaurd 3" || talkingTo === "Gaurd 4") {
                    button(canvas.width/2 - 490, canvas.height/2 + 150, 90, 44, [80, 80, 80], function() {
                        talkingTo = "Gaurd 1";
                    }, ["Quest 1", 20]);
                    if(player.upgrades >= 30) {
                        button(canvas.width/2 - 390, canvas.height/2 + 150, 90, 44, [80, 80, 80], function() {
                            talkingTo = "Gaurd 2";
                        }, ["Quest 2", 20]);
                    }
                    if(player.upgrades >= 60) {
                        button(canvas.width/2 - 290, canvas.height/2 + 150, 90, 44, [80, 80, 80], function() {
                            talkingTo = "Gaurd 3";
                        }, ["Quest 3", 20]);
                    }
                }
                fill(0, 0, 0);
                textAlign("left");
                text(dialouges[talkingTo][dialougeLayer.toString()].says, canvas.width/2 - 455, canvas.height/2 - 170, 30);
                for(var i = 0; i < dialouges[talkingTo][dialougeLayer.toString()].canSay.length; i+=1) {
                    button(canvas.width/2 - 475, canvas.height/2 - 150 + i * 55, 250, 40, [50, 50, 50], function() {
                        if(dialouges[talkingTo][dialougeLayer.toString()].canSay[i][1] === "next") {
                            dialougeLayer += 1;
                        } else if(dialouges[talkingTo][dialougeLayer.toString()].canSay[i][1] === "exit") {
                            talking = false;
                            dialougeLayer = 1;
                        } else if(dialouges[talkingTo][dialougeLayer.toString()].canSay[i][1] === "q1") {
                            quest = "Kill 6 Slimes"
                            slimesKilled = 0;
                            goblinsKilled = 0;
                            ghostsKilled = 0;
                            talking = false;
                            dialougeLayer = 1;
                        } else if(dialouges[talkingTo][dialougeLayer.toString()].canSay[i][1] === "q2") {
                            quest = "Kill 10 Goblins"
                            slimesKilled = 0;
                            goblinsKilled = 0;
                            ghostsKilled = 0;
                            talking = false;
                            dialougeLayer = 1;
                        } else if(dialouges[talkingTo][dialougeLayer.toString()].canSay[i][1] === "q3") {
                            quest = "Clear 3 Doungens"
                            slimesKilled = 0;
                            goblinsKilled = 0;
                            ghostsKilled = 0;
                            talking = false;
                            dialougeLayer = 1;
                        }
                    }, [dialouges[talkingTo][dialougeLayer.toString()].canSay[i][0], 20])
                }
            }
            fill(0, 0, 0);
            textAlign("center");
            text("Base", canvas.width/2 - cos(atan2(player.y - 15, player.x - 95)) * 400, canvas.height/2 - sin(atan2(player.y - 15, player.x - 195)) * 400, 15)
            text("Desert Dungeon", canvas.width/2 - cos(atan2(player.y - 0, player.x + 18550)) * 400, canvas.height/2 - sin(atan2(player.y - 0, player.x + 18550)) * 400 + 7.5, 15)
            text("Snow Dungeon", canvas.width/2 - cos(atan2(player.y - 0, player.x - 16550)) * 400, canvas.height/2 - sin(atan2(player.y - 0, player.x - 16550)) * 400 + 7.5, 15)
        break;
        case "shop":
            button(20, 150, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                if(gems >= 100) {
                    changeGems(-100);
                    popUps.push(new popUp("Purchase Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                    buy.play();
                    bandagesT1+=1;
                }
            }, ["Bandage Tier 1 [100 Gems]", 20]);
            button(canvas.width/2 + 20, 150, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                if(gems >= 100) {
                    changeGems(-100)
                    popUps.push(new popUp("Purchase Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                    buy.play();
                    manaPotionT1+=1;
                }
            }, ["Mana Potion Tier 1 [100 Gems]", 20]);
            if(owns[4] == "0") {
                button(20, 210, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                    if(gems >= 5000) {
                        changeGems(-5000);
                        popUps.push(new popUp("Purchase Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                        buy.play();
                        player.armor = "bronze armor";
                        player.armorPoints = 200;
                        owns[4] = "1";
                    }
                }, ["Bronze Armor [10000]", 20]);
            } else {
                button(20, 210, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                    popUps.push(new popUp("Switch Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                    buy.play();
                    player.armor = "bronze armor";
                    player.armorPoints = 200;
                }, ["Bronze Armor [OWNED]", 20]);
            }
            if(owns[5] == "0") {
                button(20 + canvas.width/2, 210, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                    if(gems >= 10000) {
                        changeGems(-10000);
                        popUps.push(new popUp("Purchase Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                        buy.play();
                        player.armor = "iron armor";
                        player.armorPoints = 2000;
                        owns[5] = "1";
                    }
                }, ["Iron Armor [40000]", 20]);
            } else {
                button(20 + canvas.width/2, 210, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                    popUps.push(new popUp("Switch Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                    buy.play();
                    player.armor = "iron armor";
                    player.armorPoints = 2000;
                }, ["Iron Armor [OWNED]", 20]);
            }
            if(owns[6] == "0") {
                button(20, 270, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                    if(gems >= 80000) {
                        changeGems(-80000);
                        popUps.push(new popUp("Purchase Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                        buy.play();
                        player.armor = "gold armor";
                        player.armorPoints = 10000;
                        owns[6] = "1";
                    }
                }, ["Gold Armor [80000]", 20]);
            } else {
                button(20, 270, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                    popUps.push(new popUp("Switch Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                    buy.play();
                    player.armor = "gold armor";
                    player.armorPoints = 10000;
                }, ["Gold Armor [OWNED]", 20]);
            }
            if(owns[7] == "0") {
                button(canvas.width/2 + 20, 270, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                    if(gems >= 100000) {
                        changeGems(-100000);
                        popUps.push(new popUp("Purchase Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                        buy.play();
                        player.armor = "diamond armor";
                        player.armorPoints = 50000;
                        owns[7] = "1"
                    }
                }, ["Diamond Armor [200000]", 20]);
            } else {
                button(canvas.width/2 + 20, 270, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                    popUps.push(new popUp("Switch Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                    buy.play();
                    player.armor = "diamond armor";
                    player.armorPoints = 50000;
                }, ["Diamond Armor [OWNED]", 20]);
            }
            button(20, canvas.height - 60, 100, 50, [102, 51, 0], function() {
                scene = "adventure"
                buy.play();
            }, ["Back", 20]);
            for(var i = 0; i < popUps.length; i+=1) {
                popUps[i].draw();
                popUps[i].update();
                if(popUps[i].lifeTime <= 0) {
                    popUps.splice(i, 1);
                }
            }
        break;
        case "enchant":
            minigunUpgrade();
            if(player.inventory[1].substring(0, 14) === "Ring of Slimes") {
                if(player.inventory[1] === "Ring of Slimes Lv. 1") {
                    button(canvas.width/2 + 20, 150, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                        if(gems >= 10000) {
                            changeGems(-10000)
                            popUps.push(new popUp("Skill Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                            player.inventory[1] = "Ring of Slimes Lv. 2";
                            buy.play();
                        }
                    }, ["Ring of Slimes Lv. 2 [10000 Gems]", 20]);
                } else if(player.inventory[1] === "Ring of Slimes Lv. 2") {
                    button(canvas.width/2 + 20, 150, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                        if(gems >= 15000) {
                            changeGems(-15000)
                            popUps.push(new popUp("Skill Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                            player.inventory[1] = "Ring of Slimes Lv. 3";
                            buy.play();
                        }
                    }, ["Ring of Slimes Lv. 3 [15000 Gems]", 20]);
                } else if(player.inventory[1] === "Ring of Slimes Lv. 3") {
                    button(canvas.width/2 + 20, 150, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                        if(gems >= 20000) {
                            changeGems(-20000)
                            popUps.push(new popUp("Skill Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                            player.inventory[1] = "Ring of Slimes Lv. 4";
                            buy.play();
                        }
                    }, ["Ring of Slimes Lv. 4 [20000 Gems]", 20]);
                } else if(player.inventory[1] === "Ring of Slimes Lv. 4") {
                    button(canvas.width/2 + 20, 150, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                        if(gems >= 40000) {
                            changeGems(-40000)
                            popUps.push(new popUp("Skill Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                            player.inventory[1] = "Ring of Slimes Lv. 5";
                            buy.play();
                        }
                    }, ["Ring of Slimes Lv. 5 [40000 Gems]", 20]);
                } else if(player.inventory[1] === "Ring of Slimes Lv. 5") {
                    button(canvas.width/2 + 20, 150, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                        if(gems >= 40000) {
                            changeGems(-40000)
                            popUps.push(new popUp("Skill Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                            player.inventory[1] = "Ring of Slimes Lv. 6";
                            buy.play();
                        }
                    }, ["Ring of Slimes Lv. 6 [40000 Gems]", 20]);
                } else if(player.inventory[1] === "Ring of Slimes Lv. 6") {
                    button(canvas.width/2 + 20, 150, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                        buy.play();
                    }, ["Ring of Slimes [MAXED]", 20]);
                }
            } else {
                button(canvas.width/2 + 20, 150, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                    if(gems >= 5000) {
                        changeGems(-5000)
                        popUps.push(new popUp("Skill Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                        player.inventory[1] = "Ring of Slimes Lv. 1";
                        buy.play();
                    }
                }, ["Ring of Slimes Lv. 1 [5000 Gems]", 20]);
            }
            if(player.spellInventory[5] == "None") {
              button(20, 220, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                  if(gems >= 1500) {
                      changeGems(-1500)
                      popUps.push(new popUp("Skill Learned", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                      player.spellInventory[5] = "Mana Burst";
                      buy.play();
                  }
              }, ["Mana Burst [1500 Gems]", 20]);
            } else {
              button(20, 220, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                popUps.push(new popUp("Skill Already Learned", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
              }, ["Mana Burst [LEARNED]", 20]);
            }
            if(player.spellInventory[6] == "None") {
              button(canvas.width/2 + 20, 220, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                  if(gems >= 2500) {
                      changeGems(-2500)
                      popUps.push(new popUp("Skill Learned", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                      player.spellInventory[6] = "Lightning Ball";
                      buy.play();
                  }
              }, ["Lightning Ball [2500 Gems]", 20]);
            } else {
              button(canvas.width/2 + 20, 220, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                popUps.push(new popUp("Skill Already Learned", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
              }, ["Lighting Ball [LEARNED]", 20]);
            }
            button(20, canvas.height - 60, 100, 50, [102, 51, 0], function() {
                scene = "adventure"
                buy.play();
            }, ["Back", 20]);
            for(var i = 0; i < popUps.length; i+=1) {
                popUps[i].draw();
                popUps[i].update();
                if(popUps[i].lifeTime <= 0) {
                    popUps.splice(i, 1);
                }
            }
        break;
        case "swordShop":
            if(owns[0] == "0") {
                button(20, 150, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                    if(gems >= 2000) {
                        popUps.push(new popUp("Purchase Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                        player.weponDamage = 5;
                        player.weponCollision = [30, 45, 60, 75, 90, 105, 120];
                        player.wepon = "Long Sword"
                        changeGems(-2000)
                        player.inventory[0] = "Long Sword"
                        buy.play();
                        owns[0] = "1";
                    }
                }, ["Long Sword [2000 Gems]", 20]);
            } else {
                button(20, 150, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                    popUps.push(new popUp("Switch Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                    player.weponDamage = 5;
                    player.weponCollision = [30, 45, 60, 75, 90, 105, 120];
                    player.wepon = "Long Sword"
                    player.inventory[0] = "Long Sword"
                    buy.play();
                }, ["Long Sword [OWNED]", 20]);
            }
            if(owns[1] == "0") {
                button(20 + canvas.width/2, 150, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                    if(gems >= 20000) {
                        changeGems(-20000)
                        popUps.push(new popUp("Purchase Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                        player.weponDamage = 10;
                        player.weponCollision = [30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180];
                        player.wepon = "Penatrator"
                        player.inventory[0] = "Penatrator"
                        buy.play();
                        owns[1] = "1";
                    }
                }, ["Penatrator [20000 Gems]", 20]);
            } else {
                button(20 + canvas.width/2, 150, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                    popUps.push(new popUp("Switch Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                    player.weponDamage = 10;
                    player.weponCollision = [30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180];
                    player.wepon = "Penatrator"
                    player.inventory[0] = "Penatrator"
                    buy.play();
                }, ["Penatrator [OWNED]", 20]);
            }
            if(owns[8] == "0") {
                button(20, 220, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                    if(gems >= 150000) {
                        changeGems(-150000)
                        popUps.push(new popUp("Purchase Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                        player.weponDamage = 75;
                        player.weponCollision = [30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225];
                        player.wepon = "Dagmor"
                        player.inventory[0] = "Dagmor"
                        buy.play();
                        owns[8] = "1";
                    }
                }, ["Dagmor [100000 Gems]", 20]);
            } else {
                button(20, 220, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                    popUps.push(new popUp("Switch Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                    player.weponDamage = 75;
                    player.weponCollision = [30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225];
                    player.wepon = "Dagmor"
                    player.inventory[0] = "Dagmor"
                    buy.play();
                }, ["Dagmor [OWNED]", 20]);
            }
            if(owns[9] == "0") {
                button(20 + canvas.width/2, 220, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                    if(gems >= 3000000000) {
                        changeGems(-3000000000)
                        popUps.push(new popUp("Purchase Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                        player.weponDamage = 2000;
                        player.weponCollision = [30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255];
                        player.wepon = "Dragon Slayer"
                        player.inventory[0] = "Dragon Slayer"
                        buy.play();
                        owns[9] = "1";
                    }
                }, ["Dragon Slayer [3000000000 Gems]", 20]);
            } else {
                button(20 + canvas.width/2, 220, canvas.width/2 - 35, 50, [102, 51, 0], function() {
                    popUps.push(new popUp("Switch Sucsessful", canvas.width/2 - random(-canvas.width/3, canvas.width/3), canvas.height/2 + random(-canvas.height/3, canvas.height/3), 50, 300))
                    player.weponDamage = 2000;
                    player.weponCollision = [30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255];
                    player.wepon = "Dragon Slayer"
                    player.inventory[0] = "Dragon Slayer"
                    buy.play();
                }, ["Dragon Slayer [OWNED]", 20]);
            }
            button(20, canvas.height - 60, 100, 50, [102, 51, 0], function() {
                scene = "adventure";
                 buy.play();
            }, ["Back", 20]);
            for(var i = 0; i < popUps.length; i+=1) {
                popUps[i].draw();
                popUps[i].update();
                if(popUps[i].lifeTime <= 0) {
                    popUps.splice(i, 1);
                }
            }
        break;
        case "doungen1":
            if(player.x > -3400 && player.y > -720 && player.x < -1700 && player.y < 880 || player.x > -1980 && player.y > -140 && player.x < -300 && player.y < 160 || player.x > -400 && player.y > -320 && player.x < 480 && player.y < 480) {
                    
            } else {
                player.hp = -1;
            }
            fill(60, 40, 40);
            rect(0, 0, canvas.width, canvas.height);
            fill(100, 60, 60);
            rect(-400 - cam.x, -400 - cam.y, 800, 160);
            rect(-400 - cam.x, 400 - cam.y, 800, 160)
            rect(400 - cam.x, -400 - cam.y, 160, 880)
            rect(-480 - cam.x, -400 - cam.y, 160, 340)
            rect(-480 - cam.x, 80 - cam.y, 160, 480)
            
            rect(-1880 - cam.x, -230 - cam.y, 1400, 160);
            rect(-1880 - cam.x, 90 - cam.y, 1400, 160)

            rect(-3400 - cam.x, -800 - cam.y, 1520, 160);
            rect(-3400 - cam.x, 800 - cam.y, 1600, 160);
            rect(-3480 - cam.x, -800 - cam.y, 160, 1720);
            rect(-1880 - cam.x, -800 - cam.y, 160, 740);
            rect(-1880 - cam.x, 80 - cam.y, 160, 800);
            collideRect(-3400, -800, 1520, 160, player);
            collideRect(-3400, 800, 1600, 160, player);
            collideRect(-3480, -800, 160, 1720, player);
            collideRect(-1880, -800, 160, 740, player);
            collideRect(-1880, 80, 160, 800, player);
            
            collideRect(-400, -400, 800, 160, player);
            collideRect(-400, 400, 800, 160, player);
            collideRect(400, -400, 160, 880, player);
            collideRect(-480, -400, 160, 340, player);
            collideRect(-480, 80, 160, 480, player);
            
            collideRect(-1880, -230, 1400, 160, player);
            collideRect(-1880, 90, 1400, 160, player);
            textAlign("center");
            for(var i = 0; i < dNpcs.length; i+=1) {
                if(dNpcs[i].x - cam.x >= -dNpcs[i].size && dNpcs[i].y - cam.y >= -dNpcs[i].size && dNpcs[i].x - cam.x <= canvas.width + dNpcs[i].size && dNpcs[i].y - cam.y <= canvas.height + dNpcs[i].size) {
                    dNpcs[i].draw();
                }
                dNpcs[i].update();
                if(dNpcs[i].x > -3400 && dNpcs[i].y > -720 && dNpcs[i].x < -1700 && dNpcs[i].y < 880 || dNpcs[i].x > -1980 && dNpcs[i].y > -140 && dNpcs[i].x < -300 && dNpcs[i].y < 160 || dNpcs[i].x > -400 && dNpcs[i].y > -320 && dNpcs[i].x < 480 && dNpcs[i].y < 480) {
                    
                } else {
                    dNpcs[i].hp = -1;
                }
                for(var j = 0; j < dNpcs.length; j+=1) {
                    if(i !== j) {
                        dNpcs[i].collide(dNpcs[j], i, j)
                    }
                }
                collideRect(-3400, -800, 1520, 160, dNpcs[i]);
            collideRect(-3400, 800, 1600, 160, dNpcs[i]);
            collideRect(-3480, -800, 160, 1720, dNpcs[i]);
            collideRect(-1880, -800, 160, 740, dNpcs[i]);
            collideRect(-1880, 80, 160, 800, dNpcs[i]);
            
            collideRect(-400, -400, 800, 160, dNpcs[i]);
            collideRect(-400, 400, 800, 160, dNpcs[i]);
            collideRect(400, -400, 160, 880, dNpcs[i]);
            collideRect(-480, -400, 160, 340, dNpcs[i]);
            collideRect(-480, 80, 160, 480, dNpcs[i]);
            
            collideRect(-1880, -230, 1400, 160, dNpcs[i]);
            collideRect(-1880, 90, 1400, 160, dNpcs[i]);
                if(dNpcs[i].hp <= 0) {
                    if(dNpcs[i].playerHit >= 0) {
                        changeGems(dNpcs[i].gems);
                        if(dNpcs[i].team === "enemy") {
                            player.exp+=dNpcs[i].exp;
                        }
                    }
                    dNpcs.splice(i, 1);
                }
            }
            for(var i = 0; i < projectiles.length; i+=1) {
                projectiles[i].draw();
                projectiles[i].update();
                for(var j = 0; j < dNpcs.length; j+=1) {
                    projectiles[i].collide(dNpcs[j])
                }
                projectiles[i].collide(player);
                if(projectiles[i].life <= 0) {
                    projectiles.splice(i, 1)
                }
            }
            textAlign("center");
            for(var i = 0; i < popUps.length; i+=1) {
                popUps[i].draw();
                popUps[i].update();
                if(popUps[i].lifeTime <= 0) {
                    popUps.splice(i, 1);
                }
            }
            player.draw();
            cam = {
                x: lerp(cam.x, player.x - canvas.width/2, 0.04),
                y: lerp(cam.y, player.y - canvas.height/2, 0.04),
            }
            if(eD <= 0) {
                player.x = -18550;
                player.y = 0;
                popUps.push(new popUp("Doungen Cleared [+50000 Gems]", canvas.width/2 - random(-canvas.width/6, canvas.width/6), canvas.height/2 + random(-canvas.height/6, canvas.height/6), 50, 300));
                changeGems(50000);
                player.exp+=1000;
                scene = "adventure";
                grass = [];
                for(var i = 0; i < 10; i+=1) {
                    grass.push([random(0, canvas.width) + cam.x, random(0, canvas.height) + cam.y])
                }
                if(quest[0] == "C" && quest[1] == "l" && quest[6] == "3" && quest[8] == "D" && quest[9] == "o") {
                    doungensCleared+=1;
                    quest = "Clear 3 Doungens: " + doungensCleared + "/" + "3"
                    if(doungensCleared >= 3) {
                        popUps.push(new popUp("Quest Complete [+200000 Gems]", canvas.width/2 - random(-canvas.width/6, canvas.width/6), canvas.height/2 + random(-canvas.height/6, canvas.height/6), 50, 300));
                        changeGems(200000);
                        quest = "None";
                    }
                }
            }
            if(player.upgradeOn < player.upgrades) {
                fill(0, 0, 0, 0.5);
                rect(0, 0, canvas.width, canvas.height);
                fill(0, 0, 0);
                textAlign("center");
                text("Choose an upgrade", canvas.width/2, 50, 50);
                if(player.upgradeOn !== 5) {
                    if(player.upgradeOn % 2 == 0) {
                        button(canvas.width/2 - 200, 150, 190, 50, [50, 50, 50], function() {
                            player.manaRegen+=0.005;
                            player.upgradeOn+=1;
                            buy.play();
                            clicked = false;
                        }, ["Mana Regen", 20]);
                        button(canvas.width/2 + 10, 150, 190, 50, [50, 50, 50], function() {
                            player.maxMana+=50;
                            player.upgradeOn+=1;
                            buy.play();
                            clicked = false;
                        }, ["Max Mana", 20]);
                        button(canvas.width/2 + 10, 210, 190, 50, [50, 50, 50], function() {
                            player.maxHp = parseInt(player.maxHp);
                            player.maxHp+=50;
                            player.hp = player.maxHp
                            player.upgradeOn+=1;
                            buy.play();
                            clicked = false;
                        }, ["Max Hp", 20]);
                        button(canvas.width/2 - 200, 210, 190, 50, [50, 50, 50], function() {
                            player.hpRegen+=0.005;
                            player.upgradeOn+=1;
                            buy.play();
                            clicked = false;
                        }, ["Hp Regen", 20]);
                    } else {
                        button(canvas.width/2 - 200, 150, 190, 50, [50, 50, 50], function() {
                            player.strength+=5;
                            player.upgradeOn+=1;
                            clicked = false;
                        }, ["Strength", 20]);
                        if(player.spd < 8) {
                            button(canvas.width/2 + 10, 150, 190, 50, [50, 50, 50], function() {
                                player.spd+=0.2;
                                player.upgradeOn+=1;
                                buy.play();
                                clicked = false;
                            }, ["Speed", 20]);
                        } else {
                            button(canvas.width/2 + 10, 150, 190, 50, [50, 50, 50], function() {
                                buy.play();
                                clicked = false;
                            }, ["Speed [MAXED]", 20]);
                        }
                        button(canvas.width/2 + 10, 210, 190, 50, [50, 50, 50], function() {
                            player.maxStamina = parseInt(player.maxStamina);
                            player.maxStamina+=50;
                            player.stamina = player.maxStamina;
                            player.upgradeOn+=1;
                            buy.play();
                            clicked = false;
                        }, ["Max Stamina", 20]);
                        button(canvas.width/2 - 200, 210, 190, 50, [50, 50, 50], function() {
                            player.staminaRegen+=0.005;
                            player.upgradeOn+=1;
                            buy.play();
                            clicked = false;
                        }, ["Hp Regen", 20]);
                    }
                } else if(player.upgradeOn % 5 === 0) {
                    button(canvas.width/2 - 200, 150, 190, 50, [50, 50, 50], function() {
                        player.maxMana = parseInt(player.maxMana);
                        player.maxMana+=200;
                        player.mana = player.maxMana;
                        player.upgradeOn+=1;
                        buy.play();
                        clicked = false;
                    }, ["A lot of Max Mana", 20]);
                    button(canvas.width/2 + 10, 150, 190, 50, [50, 50, 50], function() {
                        player.maxHp = parseInt(player.maxHp);
                        player.maxHp+=200;
                        player.hp = player.maxHp
                        player.upgradeOn+=1;
                        buy.play();
                        clicked = false;
                    }, ["A lot of Max Hp", 20]);
                }
            }
            if(player.hp <= 0) {
                player.x = 200;
                player.y = 0;
                player.hp = player.maxHp;
                scene = "adventure"
                grass = [];
                for(var i = 0; i < 10; i+=1) {
                    grass.push([random(0, canvas.width) + cam.x, random(0, canvas.height) + cam.y])
                }
            }
        break;
        case "doungen2":
            if(player.x > -3400 && player.y > -720 && player.x < -1700 && player.y < 880 || player.x > -1980 && player.y > -140 && player.x < -300 && player.y < 160 || player.x > -400 && player.y > -320 && player.x < 480 && player.y < 480) {
                    
            } else {
                player.hp = -1;
            }
            fill(40, 40, 60);
            rect(0, 0, canvas.width, canvas.height);
            fill(60, 60, 100);
            rect(-400 - cam.x, -400 - cam.y, 800, 160);
            rect(-400 - cam.x, 400 - cam.y, 800, 160)
            rect(400 - cam.x, -400 - cam.y, 160, 880)
            rect(-480 - cam.x, -400 - cam.y, 160, 340)
            rect(-480 - cam.x, 80 - cam.y, 160, 480)
            
            rect(-1880 - cam.x, -230 - cam.y, 1400, 160);
            rect(-1880 - cam.x, 90 - cam.y, 1400, 160)

            rect(-3400 - cam.x, -800 - cam.y, 1520, 160);
            rect(-3400 - cam.x, 800 - cam.y, 1600, 160);
            rect(-3480 - cam.x, -800 - cam.y, 160, 1720);
            rect(-1880 - cam.x, -800 - cam.y, 160, 740);
            rect(-1880 - cam.x, 80 - cam.y, 160, 800);
            collideRect(-3400, -800, 1520, 160, player);
            collideRect(-3400, 800, 1600, 160, player);
            collideRect(-3480, -800, 160, 1720, player);
            collideRect(-1880, -800, 160, 740, player);
            collideRect(-1880, 80, 160, 800, player);
            
            collideRect(-400, -400, 800, 160, player);
            collideRect(-400, 400, 800, 160, player);
            collideRect(400, -400, 160, 880, player);
            collideRect(-480, -400, 160, 340, player);
            collideRect(-480, 80, 160, 480, player);
            
            collideRect(-1880, -230, 1400, 160, player);
            collideRect(-1880, 90, 1400, 160, player);
            textAlign("center");
            for(var i = 0; i < dNpcs.length; i+=1) {
                if(dNpcs[i].x - cam.x >= -dNpcs[i].size && dNpcs[i].y - cam.y >= -dNpcs[i].size && dNpcs[i].x - cam.x <= canvas.width + dNpcs[i].size && dNpcs[i].y - cam.y <= canvas.height + dNpcs[i].size) {
                    dNpcs[i].draw();
                }
                dNpcs[i].update();
                if(dNpcs[i].x > -3400 && dNpcs[i].y > -720 && dNpcs[i].x < -1700 && dNpcs[i].y < 880 || dNpcs[i].x > -1980 && dNpcs[i].y > -140 && dNpcs[i].x < -300 && dNpcs[i].y < 160 || dNpcs[i].x > -400 && dNpcs[i].y > -320 && dNpcs[i].x < 480 && dNpcs[i].y < 480) {
                    
                } else {
                    dNpcs[i].hp = -1;
                }
                for(var j = 0; j < dNpcs.length; j+=1) {
                    if(i !== j) {
                        dNpcs[i].collide(dNpcs[j], i, j)
                    }
                }
                collideRect(-3400, -800, 1520, 160, dNpcs[i]);
            collideRect(-3400, 800, 1600, 160, dNpcs[i]);
            collideRect(-3480, -800, 160, 1720, dNpcs[i]);
            collideRect(-1880, -800, 160, 740, dNpcs[i]);
            collideRect(-1880, 80, 160, 800, dNpcs[i]);
            
            collideRect(-400, -400, 800, 160, dNpcs[i]);
            collideRect(-400, 400, 800, 160, dNpcs[i]);
            collideRect(400, -400, 160, 880, dNpcs[i]);
            collideRect(-480, -400, 160, 340, dNpcs[i]);
            collideRect(-480, 80, 160, 480, dNpcs[i]);
            
            collideRect(-1880, -230, 1400, 160, dNpcs[i]);
            collideRect(-1880, 90, 1400, 160, dNpcs[i]);
                if(dNpcs[i].hp <= 0) {
                    if(dNpcs[i].playerHit >= 0) {
                        changeGems(dNpcs[i].gems);
                        if(dNpcs[i].team === "enemy") {
                            player.exp+=dNpcs[i].exp;
                        }
                    }
                    dNpcs.splice(i, 1);
                }
            }
            for(var i = 0; i < projectiles.length; i+=1) {
                projectiles[i].draw();
                projectiles[i].update();
                for(var j = 0; j < dNpcs.length; j+=1) {
                    projectiles[i].collide(dNpcs[j])
                }
                projectiles[i].collide(player);
                if(projectiles[i].life <= 0) {
                    projectiles.splice(i, 1)
                }
            }
            textAlign("center");
            for(var i = 0; i < popUps.length; i+=1) {
                popUps[i].draw();
                popUps[i].update();
                if(popUps[i].lifeTime <= 0) {
                    popUps.splice(i, 1);
                }
            }
            player.draw();
            cam = {
                x: lerp(cam.x, player.x - canvas.width/2, 0.04),
                y: lerp(cam.y, player.y - canvas.height/2, 0.04),
            }
            if(eD <= 0) {
                player.x = 16550;
                player.y = 0;
                popUps.push(new popUp("Doungen Cleared [+500000 Gems]", canvas.width/2 - random(-canvas.width/6, canvas.width/6), canvas.height/2 + random(-canvas.height/6, canvas.height/6), 50, 300));
                changeGems(500000);
                player.exp+=1000;
                grass = [];
                for(var i = 0; i < 10; i+=1) {
                    grass.push([random(0, canvas.width) + cam.x, random(0, canvas.height) + cam.y])
                }
                scene = "adventure"
                if(quest[0] == "C" && quest[1] == "l" && quest[6] == "3" && quest[8] == "D" && quest[9] == "o") {
                    doungensCleared+=1;
                    quest = "Clear 3 Doungens: " + doungensCleared + "/" + "3"
                    if(doungensCleared >= 3) {
                        popUps.push(new popUp("Quest Complete [+200000 Gems]", canvas.width/2 - random(-canvas.width/6, canvas.width/6), canvas.height/2 + random(-canvas.height/6, canvas.height/6), 50, 300));
                        changeGems(200000);
                        quest = "None";
                    }
                }
            }
            if(player.upgradeOn < player.upgrades) {
                fill(0, 0, 0, 0.5);
                rect(0, 0, canvas.width, canvas.height);
                fill(0, 0, 0);
                textAlign("center");
                text("Choose an upgrade", canvas.width/2, 50, 50);
                if(player.upgradeOn !== 5) {
                    if(player.upgradeOn % 2 == 0) {
                        button(canvas.width/2 - 200, 150, 190, 50, [50, 50, 50], function() {
                            player.manaRegen+=0.005;
                            player.upgradeOn+=1;
                            buy.play();
                            clicked = false;
                        }, ["Mana Regen", 20]);
                        button(canvas.width/2 + 10, 150, 190, 50, [50, 50, 50], function() {
                            player.maxMana+=50;
                            player.upgradeOn+=1;
                            buy.play();
                            clicked = false;
                        }, ["Max Mana", 20]);
                        button(canvas.width/2 + 10, 210, 190, 50, [50, 50, 50], function() {
                            player.maxHp = parseInt(player.maxHp);
                            player.maxHp+=50;
                            player.hp = player.maxHp
                            player.upgradeOn+=1;
                            buy.play();
                            clicked = false;
                        }, ["Max Hp", 20]);
                        button(canvas.width/2 - 200, 210, 190, 50, [50, 50, 50], function() {
                            player.hpRegen+=0.005;
                            player.upgradeOn+=1;
                            buy.play();
                            clicked = false;
                        }, ["Hp Regen", 20]);
                    } else {
                        button(canvas.width/2 - 200, 150, 190, 50, [50, 50, 50], function() {
                            player.strength+=5;
                            player.upgradeOn+=1;
                            clicked = false;
                        }, ["Strength", 20]);
                        if(player.spd < 8) {
                            button(canvas.width/2 + 10, 150, 190, 50, [50, 50, 50], function() {
                                player.spd+=0.2;
                                player.upgradeOn+=1;
                                buy.play();
                                clicked = false;
                            }, ["Speed", 20]);
                        } else {
                            button(canvas.width/2 + 10, 150, 190, 50, [50, 50, 50], function() {
                                buy.play();
                                clicked = false;
                            }, ["Speed [MAXED]", 20]);
                        }
                        button(canvas.width/2 + 10, 210, 190, 50, [50, 50, 50], function() {
                            player.maxStamina = parseInt(player.maxStamina);
                            player.maxStamina+=50;
                            player.stamina = player.maxStamina;
                            player.upgradeOn+=1;
                            buy.play();
                            clicked = false;
                        }, ["Max Stamina", 20]);
                        button(canvas.width/2 - 200, 210, 190, 50, [50, 50, 50], function() {
                            player.staminaRegen+=0.005;
                            player.upgradeOn+=1;
                            buy.play();
                            clicked = false;
                        }, ["Hp Regen", 20]);
                    }
                } else if(player.upgradeOn % 5 === 0) {
                    button(canvas.width/2 - 200, 150, 190, 50, [50, 50, 50], function() {
                        player.maxMana = parseInt(player.maxMana);
                        player.maxMana+=200;
                        player.mana = player.maxMana;
                        player.upgradeOn+=1;
                        buy.play();
                        clicked = false;
                    }, ["A lot of Max Mana", 20]);
                    button(canvas.width/2 + 10, 150, 190, 50, [50, 50, 50], function() {
                        player.maxHp = parseInt(player.maxHp);
                        player.maxHp+=200;
                        player.hp = player.maxHp
                        player.upgradeOn+=1;
                        buy.play();
                        clicked = false;
                    }, ["A lot of Max Hp", 20]);
                }
            }
            if(player.hp <= 0) {
                player.x = 200;
                player.y = 0;
                player.hp = player.maxHp;
                scene = "adventure";
                grass = [];
                for(var i = 0; i < 10; i+=1) {
                    grass.push([random(0, canvas.width) + cam.x, random(0, canvas.height) + cam.y])
                }
            }
        break;
        case "spellbook":
            fill(40, 40, 40);
            rect(0, 0, canvas.width, canvas.height);
            for(var i = 0; i < 4; i+=1) {
                for(var j = 0; j < 3; j+=1) {
                    fill(0, 0, 0);
                    rect(canvas.width/2 + 225 - (i * 220), 355 + j * 100, 210, 70);
                    fill(35, 35, 35);
                    rect(canvas.width/2 + 230 - (i * 220), 360 + j * 100, 200, 60);
                    fill(255, 255, 255);
                    ctx.textAlign = "center"
                    text(player.spellInventory[i + j * 4], canvas.width/2 + 330 - (i * 220), 405 + j * 100, 30);

                    
                    button(canvas.width/2 + 230 - (i * 220), 415 + j * 100, 50, 30, [35, 35, 35], function() {
                        player.atkE = player.spellInventory[i + j * 4];
                    }, ["E", 20]);
                    button(canvas.width/2 + 280 - (i * 220), 415 + j * 100, 50, 30, [35, 35, 35], function() {
                        player.atkF = player.spellInventory[i + j * 4];
                    }, ["F", 20]);
                    button(canvas.width/2 + 330 - (i * 220), 415 + j * 100, 50, 30, [35, 35, 35], function() {
                        player.atkQ = player.spellInventory[i + j * 4];
                    }, ["Q", 20]);
                    button(canvas.width/2 + 380 - (i * 220), 415 + j * 100, 50, 30, [35, 35, 35], function() {
                        player.atkC = player.spellInventory[i + j * 4];
                    }, ["C", 20]);
                }
            }
            button(canvas.width/2 - 420, 110, 200, 30, [35, 35, 35], function() {
                
            }, [player.atkE, 20]);
            text("E", canvas.width/2 - 320, 180, 30);
            button(canvas.width/2 - 210, 110, 200, 30, [35, 35, 35], function() {
                
            }, [player.atkF, 20]);
            text("F", canvas.width/2 - 110, 180, 30);
            button(canvas.width/2, 110, 200, 30, [35, 35, 35], function() {
                
            }, [player.atkQ, 20]);
            text("Q", canvas.width/2 + 100, 180, 30);
            button(canvas.width/2 + 210, 110, 200, 30, [35, 35, 35], function() {
                
            }, [player.atkC, 20]);
            text("C", canvas.width/2 + 310, 180, 30);
        break;
    }
    if(scene == "spellbook") {
        button(canvas.width - 110, 10, 100, 50, [100, 100, 100], function() {
            scene = lastS;
        }, ["Exit", 17])
    } else {
        button(canvas.width - 110, 10, 100, 50, [100, 100, 100], function() {
            lastS = scene;
            scene = "spellbook";
        }, ["Spell Book", 17])
    }
    clicked = false;
    gemCounter = lerp(gemCounter, gems, 0.05);
    fill(10, 5, 7);
    textAlign("left");
    text("Gems: " + round(gemCounter) + " Lvl: " + round(player.upgrades), 10, 35, 20);
    text("Quest: " + quest, 10, 55, 20);
    text("Position: " + round(player.x/10) + ", " + round(player.y/10), 10, 75, 20)
    text("Base Position: 195, 15", 10, 95, 20);
    if(keys[66] && itemCoolDown <= 0) {
        if(manaPotionT1 > 0) {
            player.mana+=player.maxMana/10;
            manaPotionT1-=1;
            player.mana = constrain(player.mana, -1, player.maxMana)
            itemCoolDown = 100;
        }
    }
    if(keys[77] && itemCoolDown <= 0) {
        if(bandageT1 > 0) {
            player.hp+=player.maxHp/10;
            bandagesT1-=1;
            player.hp = constrain(player.hp, -1, player.maxHp)
            itemCoolDown = 100;
        }
    }
    if(frameCount % 500 === 0) {
        localStorage.setItem("x", parseInt(player.x));
        localStorage.setItem("y", parseInt(player.y));       
        localStorage.setItem("hp", parseInt(player.hp));
        localStorage.setItem("maxHp", parseInt(player.maxHp));
        localStorage.setItem("mana", parseInt(player.mana));
        localStorage.setItem("maxMana", parseInt(player.maxMana));
        localStorage.setItem("manaRegen", parseInt(player.manaRegen));
        localStorage.setItem("maxStamina", parseInt(player.maxStamina));
        localStorage.setItem("stamina", parseInt(player.stamina));
        localStorage.setItem("staminaRegen", parseInt(player.staminaRegen));
        localStorage.setItem("lvl", parseInt(player.lvl));
        localStorage.setItem("exp", parseInt(player.exp));
        localStorage.setItem("strength", parseInt(player.strength));
        localStorage.setItem("hpRegen", parseInt(player.hpRegen));
        localStorage.setItem("atkE", player.atkE);
        localStorage.setItem("atkC", player.atkC);
        localStorage.setItem("atkF", player.atkF);
        localStorage.setItem("atkQ", player.atkQ);
        localStorage.setItem("spd", player.spd);
        localStorage.setItem("bandagesT1", bandagesT1);
        localStorage.setItem("manaPotionT1", manaPotionT1)
        localStorage.setItem("weponDamage", player.weponDamage);
        localStorage.setItem("wepon", player.wepon);
        localStorage.setItem("atkE", player.atkE)
        localStorage.setItem("reload", player.reload)
        localStorage.setItem("weponCollision", player.weponCollision);
        localStorage.setItem("armor", player.armor);
        localStorage.setItem("armorPoint", player.armorPoint)
        localStorage.setItem("inventory", player.inventory);
        localStorage.setItem("upgrades", player.upgrades);
        localStorage.setItem("upgradeOn", player.upgradeOn);
        localStorage.setItem("owned", owns);
        localStorage.setItem("version", version);
        localStorage.setItem("spellInventory", player.spellInventory)
    }
    slimes = 0;
    Goblins = 0;
    orcs = 0;
    elves = 0;
    yetis = 0;
    ghosts = 0;
    allySlimes = 0;
    GoblinBoss = 0;
    rockPeople = 0;
    rockGiant = 0;
    snowmen = 0;
    guards = 0;
    moltenMonsters = 0;
    swordElves = 0;
    itemCoolDown-=1;
    frameCount+=1;
    eD = 0;
};

start();
