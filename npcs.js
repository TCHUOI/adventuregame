// npc function
function npc(x, y, type, team) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.team = team;
    this.lastAttack = 0;
    this.aX = 0;
    this.aY = 0;
    this.rChange = random(-1.5, 1.5);
    this.effects = [];
    this.closest = [this.x + 0.43, this.y + 0.56, 0];
    switch(this.type) {
        case "Guard":
            this.hp = 100;
            this.maxHp = this.hp;
            this.dmgWay = "hit";
            this.dmg = 20;
            this.size = 15;
            this.reload = 20;
            this.spd = 1.5;
            this.range = 500;
            this.atkRange = 50;
            this.exp = 0;
            this.weight = 0.95;
            this.knockBack = 2;
            this.gems = 0;
            this.blockChance = 0;
        break;
        case "Slime Lv. 1":
            this.hp = 40;
            this.maxHp = this.hp;
            this.dmgWay = "hit";
            this.dmg = 10;
            this.size = 15;
            this.reload = 50;
            this.spd = 4.8;
            this.range = 500;
            this.atkRange = 50;
            this.exp = 10;
            this.weight = 0.95;
            this.jumpCool = 100;
            this.knockBack = 3;
            this.gems = 19;
            this.blockChance = 0;
        break;
        case "Slime Lv. 2":
            this.hp = 220;
            this.maxHp = this.hp;
            this.dmgWay = "hit";
            this.dmg = 40;
            this.size = 25;
            this.reload = 25;
            this.spd = 9.6;
            this.range = 1000;
            this.atkRange = 90;
            this.exp = 13;
            this.weight = 0.94;
            this.jumpCool = 80;
            this.knockBack = 6;
            this.gems = 25;
            this.blockChance = 1;
        break;
        case "Slime Lv. 3":
            this.hp = 440;
            this.maxHp = this.hp;
            this.dmgWay = "hit";
            this.dmg = 80;
            this.size = 20;
            this.reload = 25;
            this.spd = 9.6;
            this.range = 1000;
            this.atkRange = 80;
            this.exp = 35;
            this.weight = 0.94;
            this.jumpCool = 80;
            this.knockBack = 6;
            this.gems = 25;
            this.blockChance = 2;
        break;
        case "Slime Lv. 4":
            this.hp = 1340;
            this.maxHp = this.hp;
            this.dmgWay = "hit";
            this.dmg = 780;
            this.size = 25;
            this.reload = 25;
            this.spd = 9.6;
            this.range = 1000;
            this.atkRange = 120;
            this.exp = 111;
            this.weight = 0.94;
            this.jumpCool = 80;
            this.knockBack = 6;
            this.gems = 25;
            this.blockChance = 2;
        break;
        case "Slime Lv. 5":
            this.hp = 10340;
            this.maxHp = this.hp;
            this.dmgWay = "hit";
            this.dmg = 25880;
            this.size = 70;
            this.reload = 25;
            this.spd = 13.8;
            this.range = 1000;
            this.atkRange = 200;
            this.exp = 1103;
            this.weight = 0.94;
            this.jumpCool = 80;
            this.knockBack = 6;
            this.gems = 25;
            this.blockChance = 2;
        break;
        case "KingSlime Lv. 1":
            this.hp = 1000;
            this.maxHp = this.hp;
            this.dmgWay = "hit";
            this.dmg = 100;
            this.size = 35;
            this.reload = 40;
            this.spd = 14.4;
            this.range = 1200;
            this.atkRange = 100;
            this.exp = 132;
            this.weight = 0.93;
            this.jumpCool = 80;
            this.knockBack = 12;
            this.gems = 269;
            this.blockChance = 3;
        break;
        case "Rock Giant Lv. 1":
            this.hp = 7500;
            this.maxHp = this.hp;
            this.dmgWay = "hit";
            this.dmg = 30000;
            this.size = 60;
            this.reload = 320;
            this.spd = 4;
            this.range = 1000;
            this.atkRange = 160;
            this.exp = 6110;
            this.weight = 0.98;
            this.jumpCool = 80;
            this.knockBack = 20;
            this.gems = 1213;
            this.blockChance = 50;
        break;
        case "Rock Person Lv. 1":
            this.hp = 25000;
            this.maxHp = this.hp;
            this.dmgWay = "hit";
            this.dmg = 4800;
            this.size = 30;
            this.reload = 80;
            this.spd = 2;
            this.range = 1000;
            this.atkRange = 140;
            this.exp = 2103;
            this.weight = 0.98;
            this.jumpCool = 80;
            this.knockBack = 10;
            this.gems = 152;
            this.blockChance = 25;
        break;
        case "ghost":
            this.hp = 28000;
            this.maxHp = this.hp;
            this.dmgWay = "hit";
            this.dmg = 1480;
            this.size = 25;
            this.reload = 15;
            this.spd = 4.8;
            this.range = 900;
            this.atkRange = 90;
            this.exp = 312;
            this.weight = 0.99;
            this.knockBack = 6;
            this.gems = 1028;
            this.blockChance = 10;
        break;
        case "Goblin":
            /**
            this.hp = 50;
            this.maxHp = this.hp;
            this.dmgWay = "hit";
            this.dmg = 0;
            this.size = 20;
            this.reload = 30;
            this.spd = 1.9;
            this.range = 800;
            this.atkRange = 70;
            this.exp = 1;
            this.weight = 0.995;
            this.knockBack = 6;
            this.gems = 1;
            **/
            
            this.hp = 300;
            this.maxHp = this.hp;
            this.dmgWay = "hit";
            this.dmg = 240;
            this.size = 20;
            this.reload = 30
            this.spd = 1.9;
            this.range = 3200;
            this.atkRange = 70;
            this.exp = 123;
            this.weight = 0.99;
            this.knockBack = 6;
            this.gems = 215;
            this.blockChance = 15;
            
        break;
        case "Dungeon Goblin":
            this.hp = 6400;
            this.maxHp = this.hp;
            this.dmgWay = "hit";
            this.dmg = 464;
            this.size = 20;
            this.reload = 25
            this.spd = 1.5;
            this.range = 800;
            this.atkRange = 50;
            this.exp = 3560;
            this.weight = 0.98;
            this.knockBack = 9;
            this.gems = 56;
            this.blockChance = 20;
        break;
        case "Dungeon Goblin Boss":
            this.hp = 100000;
            this.maxHp = this.hp;
            this.dmgWay = "hit";
            this.dmg = 968;
            this.size = 40;
            this.reload = 25
            this.spd = 2.3;
            this.range = 800;
            this.atkRange = 120;
            this.exp = 5300;
            this.weight = 0.98;
            this.knockBack = 9;
            this.gems = 3323;
            this.daggerR = 100;
            this.blockChance = 70;
        break;
        case "Dungeon Yeti Boss":
            this.hp = 800000;
            this.maxHp = this.hp;
            this.dmgWay = "hit";
            this.dmg = 10000;
            this.size = 65;
            this.reload = 100;
            this.spd = 1.3;
            this.range = 1900;
            this.atkRange = 150;
            this.knockBack = 18;
            this.exp = 5075;
            this.weight = 0.99;
            this.gems = 26120;
            this.blockChance = 50;
        break;
        case "Dungeon Yeti":
            this.hp = 10000;
            this.maxHp = this.hp;
            this.dmgWay = "hit";
            this.dmg = 4600;
            this.size = 40;
            this.reload = 130;
            this.spd = 1.3;
            this.range = 1900;
            this.atkRange = 70;
            this.knockBack = 9;
            this.exp = 2575;
            this.weight = 0.99;
            this.gems = 26120;
            this.blockChance = 50;
        break;
        case "Dungeon Snowman":
            this.hp = 4800;
            this.maxHp = this.hp;
            this.dmgWay = "shoot";
            this.dmg = "snowball2";
            this.size = 25;
            this.reload = 130;
            this.spd = 1.3;
            this.range = 1900;
            this.atkRange = 60;
            this.knockBack = 9;
            this.exp = 1675;
            this.weight = 0.99;
            this.gems = 41210;
            this.blockChance = 10;
        break;
        case "GoblinBoss":
            this.hp = 36000;
            this.maxHp = this.hp;
            this.dmgWay = "hit";
            this.dmg = 100;
            this.size = 40;
            this.reload = 100;
            this.spd = 3.2;
            this.range = 700;
            this.atkRange = 90;
            this.exp = 310;
            this.knockBack = 15;
            this.weight = 0.99;
            this.gems = 9342;
            this.blockChance = 30;
        break;
        case "Orc":
            this.hp = 2500;
            this.maxHp = this.hp;
            this.dmgWay = "hit";
            this.dmg = 600;
            this.size = 25;
            this.reload = 40;
            this.spd = 3;
            this.range = 500;
            this.atkRange = 70;
            this.exp = 2910;
            this.weight = 0.99;
            this.knockBack = 9;
            this.gems = 830;
            this.blockChance = 30;
        break;
        case "Soldier":
            this.hp = 2000;
            this.maxHp = this.hp;
            this.dmgWay = "shoot";
            this.dmg = 50;
            this.size = 25;
            this.reload = 100;
            this.spd = 2;
            this.range = 600;
            this.atkRange = 50;
            this.knockBack = 5;
            this.exp = 0;
            this.weight = 0;
            this.gems = 0;
            this.blockChance = 40;
        break;
        case "Yeti":
            this.hp = 15000;
            this.maxHp = this.hp;
            this.dmgWay = "hit";
            this.dmg = 3000;
            this.size = 30;
            this.reload = 130;
            this.spd = 1.3;
            this.range = 1900;
            this.atkRange = 70;
            this.knockBack = 9;
            this.exp = 775;
            this.weight = 0.99;
            this.gems = 2612;
            this.blockChance = 5;
        break;
        case "Snowman":
            this.hp = 6000;
            this.maxHp = this.hp;
            this.dmgWay = "shoot";
            this.dmg = "snowball";
            this.size = 20;
            this.reload = 130;
            this.spd = 1.3;
            this.range = 1900;
            this.atkRange = 150;
            this.knockBack = 9;
            this.exp = 575;
            this.weight = 0.99;
            this.gems = 2000;
            this.blockChance = 1;
            this.accruacy = 0.1;
        break;
        case "Elf":
            this.hp = 70000;
            this.maxHp = this.hp;
            this.dmgWay = "shoot";
            this.dmg = "elf arrow";
            this.size = 25;
            this.reload = 60;
            this.spd = 2;
            this.range = 1800;
            this.atkRange = 150;
            this.knockBack = 9;
            this.exp = 1632;
            this.weight = 0.9;
            this.gems = 812;
            this.blockChance = 1;
            this.accruacy = 0.01;
        break;
        case "Elf Warrior":
            this.hp = 100000;
            this.maxHp = this.hp;
            this.dmgWay = "hit";
            this.dmg = 12000;
            this.size = 25;
            this.reload = 140;
            this.spd = 2;
            this.range = 1800;
            this.atkRange = 200;
            this.knockBack = 13;
            this.exp = 1561;
            this.weight = 0.9;
            this.gems = 925;
            this.blockChance = 1;
            this.accruacy = 0.01;
        break;
        case "Molten Monster":
            this.hp = 1500000;
            this.maxHp = this.hp;
            this.dmgWay = "hit";
            this.dmg = 200000;
            this.size = 40;
            this.reload = 120;
            this.spd = 3;
            this.range = 1800;
            this.atkRange = 100;
            this.knockBack = 5;
            this.exp = 25452;
            this.weight = 0.97;
            this.gems = 2012;
            this.blockChance = 90;
            this.accruacy = 0.01;
            this.rocks = [[this.x + random(-100, 100), this.y + random(-100, 100)], [this.x + random(-100, 100), this.y + random(-100, 100)], [this.x + random(-100, 100), this.y + random(-100, 100)], [this.x + random(-100, 100), this.y + random(-100, 100)], [this.x + random(-100, 100), this.y + random(-100, 100)], [this.x + random(-100, 100), this.y + random(-100, 100)]]
            this.rocksT = [[this.x + random(-100, 100), this.y + random(-100, 100)], [this.x + random(-100, 100), this.y + random(-100, 100)], [this.x + random(-100, 100), this.y + random(-100, 100)], [this.x + random(-100, 100), this.y + random(-100, 100)], [this.x + random(-100, 100), this.y + random(-100, 100)], [this.x + random(-100, 100), this.y + random(-100, 100)]]
        break;
        case "Molten Boss":
            this.hp = 20000000;
            this.maxHp = this.hp;
            this.dmgWay = "hit";
            this.dmg = 1600000;
            this.size = 60;
            this.reload = 200;
            this.spd = 4;
            this.range = 1800;
            this.atkRange = 120;
            this.knockBack = 10;
            this.exp = 254520;
            this.weight = 0.97;
            this.gems = 20120;
            this.blockChance = 90;
            this.accruacy = 0.01;
            this.rocks = [[this.x + random(-100, 100), this.y + random(-100, 100)], [this.x + random(-100, 100), this.y + random(-100, 100)], [this.x + random(-100, 100), this.y + random(-100, 100)], [this.x + random(-100, 100), this.y + random(-100, 100)], [this.x + random(-100, 100), this.y + random(-100, 100)], [this.x + random(-100, 100), this.y + random(-100, 100)], [this.x + random(-100, 100), this.y + random(-100, 100)], [this.x + random(-100, 100), this.y + random(-100, 100)], [this.x + random(-100, 100), this.y + random(-100, 100)], [this.x + random(-100, 100), this.y + random(-100, 100)], [this.x + random(-100, 100), this.y + random(-100, 100)], [this.x + random(-100, 100), this.y + random(-100, 100)]]
            this.rocksT = [[this.x + random(-100, 100), this.y + random(-100, 100)], [this.x + random(-100, 100), this.y + random(-100, 100)], [this.x + random(-100, 100), this.y + random(-100, 100)], [this.x + random(-100, 100), this.y + random(-100, 100)], [this.x + random(-100, 100), this.y + random(-100, 100)], [this.x + random(-100, 100), this.y + random(-100, 100)], [this.x + random(-100, 100), this.y + random(-100, 100)], [this.x + random(-100, 100), this.y + random(-100, 100)], [this.x + random(-100, 100), this.y + random(-100, 100)], [this.x + random(-100, 100), this.y + random(-100, 100)], [this.x + random(-100, 100), this.y + random(-100, 100)], [this.x + random(-100, 100), this.y + random(-100, 100)]]
        break;
    }
    this.player = player;
    this.playerHit = 0;
    this.r = 0;
};
npc.prototype.draw = function() {
    this.r = atan2(this.player.y - this.y, this.player.x - this.x);
    if(this.player == undefined) {
        this.player = player;
    }
    if(this.type == "Slime Lv. 1" || this.type == "KingSlime Lv. 1" || this.type === "Slime Lv. 2") {
        fill(0, 0, 0);
        arc(this.x - cam.x, this.y - cam.y + this.size/2 + 2, this.size + 3, this.size * 1.6 + 6, -Math.PI, 0);
        if(this.team === "enemy") {
            fill(255, 0, 0, 0.7);
        } else if(this.team == "ally") {
            fill(0, 0, 255, 0.7);
        } else {
            fill(100, 100, 100, 0.7)
        }
        arc(this.x - cam.x, this.y - cam.y + this.size/2, this.size, this.size * 1.6, -Math.PI, 0);
    } else if(this.type === "Slime Lv. 3") {
        fill(30, 30, 30);
        arc(this.x - cam.x, this.y - cam.y + this.size/2 + 2, this.size + 3, this.size * 1.6 + 6, -Math.PI, 0);
        if(this.team === "enemy") {
            fill(255, 100, 0, 0.7);
        } else if(this.team == "ally") {
            fill(0, 100, 255, 0.7);
        } else {
            fill(150, 150, 150, 0.7)
        }
        arc(this.x - cam.x, this.y - cam.y + this.size/2, this.size, this.size * 1.6, -Math.PI, 0);
    } else if(this.type == "Slime Lv. 4" || this.type == "Slime Lv. 5") {
        fill(30, 30, 30);
        arc(this.x - cam.x, this.y - cam.y + this.size/2 + 2.5, this.size + 3, this.size * 1.6 + 6, -Math.PI, 0);
        if(this.team === "enemy") {
            fill(255, 0, 0, 0.7);
        } else if(this.team == "ally") {
            fill(0, 0, 255, 0.7);
        } else {
            fill(100, 100, 100, 0.7)
        }
        arc(this.x - cam.x, this.y - cam.y + this.size/2, this.size, this.size * 1.6, -Math.PI, 0);
    }  else if(this.type == "Dungeon Goblin Boss") {
        strokeWeight(10);
        stroke(120, 100, 100);
        line(this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 2,
             this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 2,
             this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 2 + cos(this.r + 1 + this.rChange) * (this.size) * 3,
             this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 2 + sin(this.r + 1 + this.rChange) * (this.size) * 3)
        fill(0, 0, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0);
        ellipse(this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        ellipse(this.x - cam.x + (cos(this.r + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r + 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        fill(50, 170, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size, this.size, 0);
        ellipse(this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
        ellipse(this.x - cam.x + (cos(this.r + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r + 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
        if(this.team == "enemy") {
            fill(200, 0, 0);
        } else if(this.team == "ally") {
            fill(0, 0, 200);
        } else {
            fill(100, 100, 100)
        }
        ellipse(this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 0.7, this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 0.7, this.size/5, this.size/5, 0);
        ellipse(this.x - cam.x + (cos(this.r + 0.5 + this.rChange) * this.size) * 0.7, this.y - cam.y + (sin(this.r + 0.5 + this.rChange) * this.size) * 0.7, this.size/5, this.size/5, 0);
    } else if(this.type == "Goblin" || this.type === "GoblinBoss") {
        strokeWeight(10);
        stroke(100, 100, 100);
        line(this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 2,
             this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 2,
             this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 2 + cos(this.r + 1 + this.rChange) * (this.size) * 3,
             this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 2 + sin(this.r + 1 + this.rChange) * (this.size) * 3)
        fill(0, 0, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0);
        ellipse(this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        ellipse(this.x - cam.x + (cos(this.r + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r + 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0);
        fill(0, 200, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size, this.size, 0);
        ellipse(this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
        ellipse(this.x - cam.x + (cos(this.r + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r + 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size, this.size, 0);
        if(this.team == "enemy") {
            fill(200, 0, 0);
        } else if(this.team == "ally") {
            fill(0, 0, 200);
        } else {
            fill(100, 100, 100)
        }
        ellipse(this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 0.7, this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 0.7, this.size/5, this.size/5, 0);
        ellipse(this.x - cam.x + (cos(this.r + 0.5 + this.rChange) * this.size) * 0.7, this.y - cam.y + (sin(this.r + 0.5 + this.rChange) * this.size) * 0.7, this.size/5, this.size/5, 0);
    } else if(this.type == "Dungeon Goblin") {
        strokeWeight(10);
        stroke(100, 100, 100);
        line(this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 2,
             this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 2,
             this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 2 + cos(this.r + 1 + this.rChange) * (this.size) * 3,
             this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 2 + sin(this.r + 1 + this.rChange) * (this.size) * 3)
        fill(0, 0, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0);
        ellipse(this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        ellipse(this.x - cam.x + (cos(this.r + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r + 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0); 
        fill(50, 170, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size, this.size, 0);
        ellipse(this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
        ellipse(this.x - cam.x + (cos(this.r + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r + 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size, this.size, 0);
        if(this.team == "enemy") {
            fill(250, 0, 0);
        } else if(this.team == "ally") {
            fill(0, 0, 250);
        } else {
            fill(70, 70, 70)
        }
        ellipse(this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 0.7, this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 0.7, this.size/5, this.size/5, 0);
        ellipse(this.x - cam.x + (cos(this.r + 0.5 + this.rChange) * this.size) * 0.7, this.y - cam.y + (sin(this.r + 0.5 + this.rChange) * this.size) * 0.7, this.size/5, this.size/5, 0);
    } else if(this.type == "Dungeon Goblin Boss") {
        strokeWeight(10);
        stroke(120, 100, 100);
        line(this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 2,
             this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 2,
             this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 2 + cos(this.r + 1 + this.rChange) * (this.size) * 3,
             this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 2 + sin(this.r + 1 + this.rChange) * (this.size) * 3)
        fill(0, 0, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0);
        ellipse(this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        ellipse(this.x - cam.x + (cos(this.r + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r + 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        fill(50, 170, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size, this.size, 0);
        ellipse(this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
        ellipse(this.x - cam.x + (cos(this.r + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r + 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
        if(this.team == "enemy") {
            fill(250, 0, 0);
        } else if(this.team == "ally") {
            fill(0, 0, 250);
        } else {
            fill(70, 70, 70)
        }
        ellipse(this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 0.7, this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 0.7, this.size/5, this.size/5, 0);
        ellipse(this.x - cam.x + (cos(this.r + 0.5 + this.rChange) * this.size) * 0.7, this.y - cam.y + (sin(this.r + 0.5 + this.rChange) * this.size) * 0.7, this.size/5, this.size/5, 0);
    } else if(this.type == "Dungeon Yeti Boss") {
        strokeWeight(10);
        stroke(120, 100, 100);
        line(this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 2,
             this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 2,
             this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 2 + cos(this.r + 1 + this.rChange) * (this.size) * 3,
             this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 2 + sin(this.r + 1 + this.rChange) * (this.size) * 3)
        fill(0, 0, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0);
        ellipse(this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        ellipse(this.x - cam.x + (cos(this.r + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r + 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        fill(200, 200, 230);
        ellipse(this.x - cam.x, this.y - cam.y, this.size, this.size, 0);
        ellipse(this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
        ellipse(this.x - cam.x + (cos(this.r + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r + 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
    } else if(this.type == "Orc") {
        strokeWeight(10);
        stroke(100, 100, 100);
        line(this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 2,
             this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 2,
             this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 2 + cos(this.r + 1 + this.rChange) * (this.size) * 3,
             this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 2 + sin(this.r + 1 + this.rChange) * (this.size) * 3)
        fill(0, 0, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0);
        ellipse(this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        ellipse(this.x - cam.x + (cos(this.r + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r + 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        fill(200, 50, 20);
        ellipse(this.x - cam.x, this.y - cam.y, this.size, this.size, 0);
        ellipse(this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
        ellipse(this.x - cam.x + (cos(this.r + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r + 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
    } else if(this.type == "Rock Giant Lv. 1" || this.type === "Rock Person Lv. 1") {
        fill(0, 0, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0);
        ellipse(this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        ellipse(this.x - cam.x + (cos(this.r + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r + 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        fill(100, 100, 100);
        ellipse(this.x - cam.x, this.y - cam.y, this.size, this.size, 0);
        ellipse(this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
        ellipse(this.x - cam.x + (cos(this.r + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r + 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
        stroke(0, 0, 0);
        strokeWeight(3);
        line(this.x - cam.x - cos(this.r) * this.size * 0.5, this.y - cam.y - sin(this.r) * this.size * 0.5, this.x - cam.x + cos(this.r) * this.size * 0.35, this.y - cam.y + sin(this.r) * this.size * 0.3);
    } else if(this.type == "ghost") {
        fill(250, 250, 250, 0.1);
        ellipse(this.x - cam.x, this.y - cam.y, this.size, this.size, 0);
        stroke(0, 0, 0, 0.1);
        strokeWeight(3);
        eEllipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0);
    } else if(this.type == "Guard") {
        strokeWeight(10);
        stroke(100, 100, 100);
        line(this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 2,
             this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 2,
             this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 2 + cos(this.r + 1 + this.rChange) * (this.size) * 3,
             this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 2 + sin(this.r + 1 + this.rChange) * (this.size) * 3);
        fill(0, 0, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0);
        ellipse(this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        ellipse(this.x - cam.x + (cos(this.r + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r + 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        fill(0, 0, 200);
        ellipse(this.x - cam.x, this.y - cam.y, this.size, this.size, 0);
        ellipse(this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
        ellipse(this.x - cam.x + (cos(this.r + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r + 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
    } else if(this.type == "Yeti") {
        fill(0, 0, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0);
        ellipse(this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        ellipse(this.x - cam.x + (cos(this.r + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r + 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        fill(200, 200, 200);
        ellipse(this.x - cam.x, this.y - cam.y, this.size, this.size, 0);
        ellipse(this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
        ellipse(this.x - cam.x + (cos(this.r + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r + 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
    } else if(this.type == "Snowman") {
        fill(0, 0, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0);
        fill(200, 200, 200);
        ellipse(this.x - cam.x, this.y - cam.y, this.size, this.size, 0);
    } else if(this.type == "Elf") {
        fill(0, 0, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0);
        fill(0, 200, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size, this.size, 0);
        stroke(135, 83, 0);
        strokeWeight(5);
        fill(0, 0, 0, 0)
        eArc(this.x - cam.x + cos(atan2(player.y - this.y, player.x - this.x)) * 20, this.y - cam.y + sin(atan2(player.y - this.y, player.x - this.x)) * 20, this.size, this.size, -Math.PI/2 + atan2(player.y - this.y, player.x - this.x), Math.PI/2 + atan2(player.y - this.y, player.x - this.x));
    } else if(this.type == "Elf Warrior") {
        strokeWeight(10);
        stroke(100, 100, 100);
        line(this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 2,
             this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 2,
             this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 2 + cos(this.r + 1 + this.rChange) * (this.size) * 3,
             this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 2 + sin(this.r + 1 + this.rChange) * (this.size) * 3)
        fill(0, 0, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0);
        ellipse(this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        ellipse(this.x - cam.x + (cos(this.r + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r + 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        fill(0, 200, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size, this.size, 0);
        ellipse(this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
        ellipse(this.x - cam.x + (cos(this.r + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r + 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
    } else if(this.type == "Dungeon Yeti") {
        fill(0, 0, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0);
        ellipse(this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        ellipse(this.x - cam.x + (cos(this.r + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r + 0.5 + this.rChange) * this.size) * 2, this.size/2.5 + 3, this.size/2.5 + 3, 0);
        fill(200, 200, 200);
        ellipse(this.x - cam.x, this.y - cam.y, this.size, this.size, 0);
        ellipse(this.x - cam.x + (cos(this.r - 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r - 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
        ellipse(this.x - cam.x + (cos(this.r + 0.5 + this.rChange) * this.size) * 2, this.y - cam.y + (sin(this.r + 0.5 + this.rChange) * this.size) * 2, this.size/2.5, this.size/2.5, 0);
    } else if(this.type == "Dungeon Snowman") {
        fill(0, 0, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0);
        fill(200, 200, 200);
        ellipse(this.x - cam.x, this.y - cam.y, this.size, this.size, 0);
    } else if(this.type === "Molten Monster") {
        fill(0, 0, 0);
        ellipse(this.x - cam.x, this.y - cam.y, this.size + 3, this.size + 3, 0);
        fill(200, 150, 30);
        ellipse(this.x - cam.x, this.y - cam.y, this.size, this.size, 0);
        for(var i = 0; i < this.rocks.length; i+=1) {
            fill(150, 50, 10);
            ellipse(this.rocks[i][0] - cam.x, this.rocks[i][1] - cam.y, 13, 13, 0);
        }
    }
    if(this.type == "Dungeon Goblin Boss") {
        fill(0, 0, 0);
        rect(7, 37, canvas.width - 14, 15);
        textAlign("center");
        text("Charlie leader of the Goblins", canvas.width/2, 25, 30)
        fill(255, 0, 0);
        rect(10, 40, canvas.width - 20, 9);
        fill(0, 255, 0)
        rect(10, 40, constrain((this.hp/this.maxHp), 0, 1) * (canvas.width - 20), 9);
    } else if(this.type == "Dungeon Yeti Boss") {
        fill(0, 0, 0);
        rect(7, 37, canvas.width - 14, 15);
        textAlign("center");
        text("Timothy leader of the Yetis", canvas.width/2, 25, 30)
        fill(255, 0, 0);
        rect(10, 40, canvas.width - 20, 9);
        fill(0, 255, 0)
        rect(10, 40, constrain((this.hp/this.maxHp), 0, 1) * (canvas.width - 20), 9);
        if(this.daggerR <= 0) {
            var r = atan2(this.y - player.y, this.x - player.x);
            projectiles.push(new projectile(this.x, this.y, r - Math.PI - random(0.1, 0.1), "fireBall 1", "enemy"));
            this.daggerR = 100;
        }
        this.daggerR-=1;
    } else {
        textAlign("center");
        fill(0, 0, 0);
        rect(this.x - cam.x - this.size - 2, this.y - cam.y + this.size + 3, this.size * 2 + 4, 9)
        text(this.type, this.x - cam.x, this.y - cam.y - this.size - 10, 20)
        fill(255, 0, 0);
        rect(this.x - cam.x - this.size, this.y - cam.y + this.size + 5, this.size * 2, 5)
        fill(0, 255, 0)
        rect(this.x - cam.x - this.size, this.y - cam.y + this.size + 5, constrain((this.hp/this.maxHp), 0, 1) * (this.size * 2), 5);
    }
};
npc.prototype.update = function() {
    this.x+=this.aX;
    this.y+=this.aY;
    this.aX*=this.weight;
    this.aY*=this.weight;
    if(this.team !== "ally" && player.attacking && player.stamina >= 1 && player.selectedInventory === 0) {
        for(var i = 0; i < player.weponCollision.length; i+=1) {
            if(dist(this.x, this.y, player.x + cos(player.r) * player.weponCollision[i], player.y + sin(player.r) * player.weponCollision[i]) < 10 + this.size/2 + player.weponSpd * 5) {
                var r = atan2(this.y - player.y, this.x - player.x);
                this.hp-=player.weponDamage * (player.strength/100);
                this.playerHit = 100;
                this.aX = cos(r) * 4;
                this.aY = sin(r) * 4;
                break;
            }
        }
    }
    if(frameCount % round(random(1000, 30000)) == 0) {
        this.rChange = random(0.5, -0.5)
    }
    if(dist(this.x, this.y, this.player.x, this.player.y) < this.range) {
        if(dist(this.x, this.y, this.player.x, this.player.y) < this.closest[2] * 0.5) {
            this.closest[0] = this.player.x;
            this.closest[1] = this.player.y;
            this.closest[2] = dist(this.x, this.y, this.player.x, this.player.y)
        }
        if(frameCount % 100 === 0) {
            this.closest[0] = this.player.x + round(random(-this.size - this.player.size - 50, this.size + this.player.size + 50));
            this.closest[1] = this.player.y + round(random(-this.size - this.player.size - 50, this.size + this.player.size + 50))
        }
        if(this.team !== "ally") {
            if(this.dmgWay == "hit") {
                if(dist(this.x, this.y, this.player.x, this.player.y) < this.atkRange && this.lastAttack <= 0) {
                    this.player.hp-=this.dmg;
                    this.lastAttack = this.reload;
                    var r = atan2(this.y - this.player.y, this.x - this.player.x);
                    this.player.aX = -cos(r) * this.knockBack;
                    this.player.aY = -sin(r) * this.knockBack;
                } 
            } else if(this.dmgWay == "shoot") {
                if(this.lastAttack <= 0) {
                    var r = atan2(this.y - player.y, this.x - player.x);
                    projectiles.push(new projectile(this.x, this.y, r - Math.PI - random(this.accruacy, -this.accruacy), this.dmg, this.team));
                    this.lastAttack = this.reload;
                }
            }
        }
    }
    if(dist(this.x, this.y, player.x, player.y) < this.closest[2] && this.type !== "Guard") {
        this.closest[0] = player.x;
        this.closest[1] = player.y;
        this.closest[2] = dist(this.x, this.y, player.x, player.y)
        if(this.team !== "ally") {
            if(this.dmgWay === "hit") {
                if(dist(this.x, this.y, player.x, player.y) < this.atkRange && this.lastAttack <= 0) {
                    player.hp-=constrain(this.dmg - player.armorPoint, 1, 9007199250000);
                    this.lastAttack = this.reload;
                    var r = atan2(this.y - player.y, this.x - player.x);
                    player.aX = -cos(r) * this.knockBack;
                    player.aY = -sin(r) * this.knockBack;
                }
            } else if(this.dmgWay == "shoot") {
                if(this.lastAttack <= 0) {
                    var r = atan2(this.y - player.y - 10, this.x - player.x - 10);
                    projectiles.push(new projectile(this.x, this.y, r - Math.PI - random(-0.1, 0.1) - this.rChange, this.dmg, this.team));
                    this.lastAttack = this.reload;
                }
            }
        }
        if(frameCount % 100 === 0) {
            this.closest[0] = player.x + round(random(-this.size - this.player.size - 300, this.size + this.player.size + 300));
            this.closest[1] = player.y + round(random(-this.size - this.player.size - 300, this.size + this.player.size + 300))
        }
    }
    if(this.team !== "ally") {
        if(this.type == "Slime Lv. 1") {
            slimes+=1;
        } else if(this.type == "Slime Lv. 2") {
            slimes2+=1;
        } else if(this.type == "Slime Lv. 3") {
            slimes3+=1;
        } else if(this.type == "Goblin") {
            Goblins+=1;
        } else if(this.type == "GoblinBoss") {
            GoblinBoss+=1;
        } else if(this.type == "ghost") {
            ghosts+=1;
        } else if(this.type == "Zombie") {
            zombies+=1;
        } else if(this.type == "Rock Giant Lv. 1") {
            rockGiants+=1;
        } else if(this.type == "Molten Monster") {
            moltenMonsters+=1;
            for(var i = 0; i < this.rocks.length; i+=1) {
                this.rocks[i][0] = lerp(this.rocks[i][0], this.rocksT[i][0], 0.02)
                this.rocks[i][1] = lerp(this.rocks[i][1], this.rocksT[i][1], 0.02)
            }
            if(frameCount % 10 == 0) {
                this.rocksT = [[this.x + random(-100, 100), this.y + random(-100, 100)], [this.x + random(-100, 100), this.y + random(-100, 100)], [this.x + random(-100, 100), this.y + random(-100, 100)], [this.x + random(-100, 100), this.y + random(-100, 100)], [this.x + random(-100, 100), this.y + random(-100, 100)], [this.x + random(-100, 100), this.y + random(-100, 100)]]
            }
        } else if(this.type == "KingSlime Lv. 1") {
            if(this.team == "enemy") {
                kingSlimes+=1;
            } else if(this.team == "ally") {
                allySlimes+=1;
            }
        } else if(this.type == "Rock Person Lv. 1") {
            rockPeople+=1;
        } else if(this.type == "Orc") {
            orcs+=1;
        } else if(this.type == "Yeti") {
            yetis+=1;
        } else if(this.type == "Snowman") {
            snowmen+=1;
        } else if(this.type == "Elf") {
            elves+=1;
        } else if(this.type == "Elf Warrior") {
            swordElves+=1;
        } else if(this.type == "Dungeon Goblin") {
            eD+=1;
        } else if(this.type == "Dungeon Goblin Boss") {
            eD+=1;
        } else if(this.type == "Dungeon Yeti Boss") {
            eD+=1;
        } else if(this.type == "Dungeon Yeti") {
            eD+=1;
        } else if(this.type == "Dungeon Snowman") {
            eD+=1;
        }
    } else {
        if(this.type == "Slime Lv. 1") {
            allySlimes+=1;
        } else if(this.type == "Slime Lv. 2") {
            allySlimes+=1
        } else if(this.type == "Slime Lv. 3") {
            allySlimes+=1
        } else if(this.type == "Guard") {
            guards+=1;
        }
    }
    for(var i = 0; i < this.effects.length; i+=1) {
        if(this.effects[i][0] == "fire") {
            this.hp-=this.effects[i][2];
            this.effects[i][1]-=1;
            if(round(random(0, 100)) < 20) {
                var r = random(0, 360);
                projectiles.push(new projectile(this.x + cos(r) * (this.size * 2), this.y + sin(r) * (this.size * 2), r, "fireParticle" + round(random(1, 3)).toString(), "ally"))
            }
            if(this.effects[i][1] <= 0) {
                this.effects.splice(i, 1);
            }
        } else if(this.effects[i][0] == "decay") {
            this.hp-=this.effects[i][2];
            this.effects[i][1]-=1;
            if(round(random(0, 100)) < 70) {
                var r = random(0, 360);
                projectiles.push(new projectile(this.x + cos(r) * (this.size * random(0, 2)), this.y + sin(r) * (this.size * random(0, 2)), r, "decayParticle", this.team))
            }
            if(this.effects[i][1] <= 0) {
                this.effects.splice(i, 1);
            }
        } else if(this.effects[i][0] == "lightningS") {
            this.hp-=this.effects[i][2];
            this.effects[i][1]-=1;
            projectiles.push(new projectile(this.x, this.y, 0, "lightning", "ally"))
            if(this.effects[i][1] <= 0) {
                this.effects.splice(i, 1);
            }
        }
    } 
    if(this.type === "Slime Lv. 1" || this.type === "KingSlime Lv. 1" || this.type === "Slime Lv. 2" || this.type === "Slime Lv. 3" || this.type === "Slime Lv. 4" || this.type === "Slime Lv. 5" || this.type === "Slime Lv. 6" || this.type === "Slime Lv. 7" || this.type === "Slime Lv. 8") {
        this.jumpCool-=1;
        if(this.jumpCool <= 0) {
            if(this.closest[0] < this.x || random(0, 100) < 10) {
                this.aX-=this.spd + random(-0.1, 0.1);
            } else if(this.closest[0] > this.x || random(0, 100) < 10) {
                this.aX+=this.spd + random(-0.1, 0.1);
            }
            if(this.closest[1] < this.y || random(0, 100) < 10) {
                this.aY-=this.spd + random(-0.1, 0.1);
            } else if(this.closest[1] > this.y || random(0, 100) < 10) {
                this.aY+=this.spd + random(-0.1, 0.1);
            }
            if(this.type == "Slime Lv. 1") {
                this.jumpCool = 180 + random(-10, 10);
            } else if(this.type === "KingSlime Lv. 1") {
                this.jumpCool = 280 + random(-10, 10);
            } else if(this.type === "Slime Lv. 2") {
                this.jumpCool = 170 + random(-10, 10);
            } else if(this.type === "Slime Lv. 3") {
                this.jumpCool = 160 + random(-10, 10);
            } else if(this.type === "Slime Lv. 4") {
                this.jumpCool = 75 + random(-10, 10);
            } else if(this.type === "Slime Lv. 5") {
                this.jumpCool = 175 + random(-10, 10);
            }
        }
    } else {
        if(dist(this.x, this.y, this.player.x, this.player.y) < this.range) {
            this.x+=cos(this.r + this.rChange) * this.spd;
            this.y+=sin(this.r + this.rChange) * this.spd;
        }
    }
    this.lastAttack-=1;
    this.playerHit-=1;
    this.closest[2] = this.range;
    if(this.player.hp <= 0 && this.type !== "Guard") {
        this.player = player;
    } else if(this.player.hp <= 0 && this.type === "Guard") {
      this.closest = [0, 0, 500];
    }
};
npc.prototype.collide = function(n, i, j) {
    if(this.type == "Guard" && dist(n.x, n.y, 0, 0) < this.range || dist(n.x, n.y, this.x, this.y) < this.range && this.type !== "Guard") {
        if(this.team !== n.team) {
            this.player = n;
        }

      
        if(dist(n.x, n.y, this.x, this.y) < this.size + n.size + 20) {
            if(dist(n.x, n.y, this.x, this.y) < this.size + n.size) {
                n.x+=(n.x - this.x)/15;
                n.y+=(n.y - this.y)/15;
                this.x+=(this.x - n.x)/15;
                this.y+=(this.y - n.y)/15;
            }
            if(this.team !== n.team && dist(n.x, n.y, this.x, this.y) < this.closest[2]) {
                this.closest[2] = dist(n.x, n.y, this.x, this.y);
                this.player = npcs[j];
            }
            if(this.team !== n.team) {
                if(this.lastAttack <= 0 && dist(n.x, n.y, this.x, this.y) < this.atkRange && this.dmgWay == "hit") {
                    var r = atan2(this.y - n.y, this.x - n.x);
                    n.hp-=this.dmg;
                    n.aX = -cos(r) * this.knockBack;
                    n.aY = -sin(r) * this.knockBack;
                    this.lastAttack = this.reload;
                }
                if(n.lastAttack <= 0 && dist(n.x, n.y, this.x, this.y) < n.atkRange && n.dmgWay == "hit") {
                    var r = atan2(this.y - n.y, this.x - n.x);
                    this.hp-=n.dmg;
                    this.aX = cos(r) * n.knockBack;
                    this.aY = sin(r) * n.knockBack;
                    n.lastAttack = n.reload;
                }
            }
        }
    }
};
