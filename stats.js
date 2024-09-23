// playlist for the bois: https://open.spotify.com/playlist/3i6twnnYkkdmpeNHU91SXZ
var scenes = document.getElementsByClassName('scene');
var scene = "adventure";
var levelTab = 0;
var gemCounter = 0;
var npcs = [];
var dNpcs = [];
var popUps = [];
var eD = 0;
var lastS = "";
var grass = [];
var owns = localStorage.getItem("owned") || "0,0,0,0,0,0,0,0,0,0,0,0,0";
var buy = new Audio("buy.mp3");
gems = parseInt(localStorage.getItem("gems")) || 0;
var version = localStorage.getItem("version") || 1.02;
if(!(version == 1.02)) {
    owns = ownsH.split(",")
    for(var i = owns.length; i < 13; i+=1) {
        owns.push(0)
    }
    alert("Your version is " + version + ". You are upgrading to version 1.02. [This may delete progress or cause unintetional bugs]");
    version = 1.02;
} else {
    owns = owns.split(",")
}
var name = "Thomas";
var slimes = 0;
var guards = 0;
var Goblins = 0;
var ghosts = 0;
var elves = 0;
var yetis = 0;
var slimes2 = 0;
var slimes3 = 0;
var snowmen = 0;
var rockGiants = 0;
var rockPeople = 0;
var allySlimes = 0;
var GoblinBoss = 0;
var swordElves = 0;
var moltenMonsters = 0;
var frameCount = 0;
var orcs = 0;
var kingSlimes = 0;
var allySoldiers = 0;
var quest = "None";
var slimesKilled = 0;
var goblinsKilled = 0;
var ghostsKilled = 0;
var doungensCleared = 0;
var doungenGolbinKilled = 0;
var talking = false;
var talkingTo = "";
var dialougeLayer = 1;
var bandagesT1 = parseInt(localStorage.getItem("bandagesT1")) || 0;
var manaPotionT1 = parseInt(localStorage.getItem("manaPotionT1")) || 0;
var itemCoolDown = 0;
var dialouges = {
    "Gaurd 1": {
        "1": {
            says: "Gaurd: Hello!",
            canSay: [["Hi ", "next"], ["Uh, wrong person.", "exit"]]
        },
        "2": {
            says: "Gaurd: Your a warrior?",
            canSay: [["Yep.", "next"], ["No sorry. Cya.", "exit"]]
        },
        "3": {
            says: "Gaurd: Perfect I could use some help killing those Pesky Slimes.",
            canSay: [["Sure.", "next"], ["Yea no.", "exit"]]
        },
        "4": {
            says: "Gaurd: Thank's just defeat 6 Slimes for me.",
            canSay: [["Got it", "q1"]]
        },
    },
    "Gaurd 2": {
        "1": {
            says: "Gaurd: Hi!",
            canSay: [["Hello.", "next"], ["Goodbye.", "exit"]]
        },
        "2": {
            says: "Gaurd: Your the new and rising warrior right?",
            canSay: [["Yes sirr", "next"], ["No sorry. Cya.", "exit"]]
        },
        "3": {
            says: "Gaurd: Oh well then can you help me with something?",
            canSay: [["Ok, whats the problem?", "next"], ["Sorry, no .", "exit"]]
        },
        "4": {
            says: "Gaurd: I heard the goblins are planning an attack.",
            canSay: [["Oh they are?", "next"], ["Oh, no byee", "exit"]]
        },
        "5": {
            says: "Gaurd: Can ya teach them a lesson",
            canSay: [["Sure thing.", "q2"], ["No they are to strong!", "exit"]]
        },
    },
    "Gaurd 3": {
        "1": {
            says: "Gaurd: Hey.",
            canSay: [["Hey.", "next"], ["Goodbye.", "exit"]]
        },
        "2": {
            says: "Gaurd: Your still here?",
            canSay: [["Yea", "next"], ["No.", "exit"]]
        },
        "3": {
            says: "Gaurd: Oh well then can you help me with something agian?",
            canSay: [["Ok, whats the problem?", "next"], ["Sorry, no.", "exit"]]
        },
        "4": {
            says: "Gaurd: I heard the dungeons are crawling with creatures.",
            canSay: [["oh okay.", "next"], ["Oh, no byee", "exit"]]
        },
        "5": {
            says: "Gaurd: Can ya beat some for me?",
            canSay: [["Sure thing.", "q3"], ["No they are to powerful!", "exit"]]
        },
    }
}
if(name !== "Thomas") {
    alert("Error: Crash, Reason: Unknown, you just incountered a bug we are fixing when you exit out of this your code should disappear sorry for the inconvenience.")
}
var projectiles = [];
var projectileStats = {
    "boltOrb 1": {
        size: 5,
        dmg: 30,
        range: 400,
        decayRate: 400,
        spd: 3,
        cost: 20,
        knockback: 2,
        effect: [],
        reload: 100,
    },
    "minigun": {
        size: 5,
        dmg: 10,
        range: 500,
        decayRate: 500,
        spd: 5,
        cost: 5,
        knockback: 1,
        effect: [],
        reload: 20,
    },
    "minigun2": {
        size: 7.5,
        dmg: 30,
        range: 600,
        decayRate: 200,
        spd: 7.5,
        cost: 20,
        knockback: 1.5,
        effect: [],
        reload: 12,
    },
    "minigun3": {
        size: 9,
        dmg: 60,
        range: 750,
        decayRate: 250,
        spd: 9,
        cost: 150,
        knockback: 2,
        effect: [["fire", 45, 0.25]],
        reload: 7,
    },
    "minigun4": {
        size: 12,
        dmg: 10,
        range: 1500,
        decayRate: 200,
        spd: 12,
        cost: 520,
        knockback: 2.5,
        effect: [["fire", 90, 10]],
        reload: 5,
    },
    "boltOrb 2": {
        size: 15,
        dmg: 1000000,
        range: 500,
        decayRate: 500,
        spd: 2.5,
        cost: 5,
        knockback: 4,
        effect: [],
        reload: 40,
    },
    "snowball": {
        size: 10,
        dmg: 1000,
        range: 500,
        decayRate: 500,
        spd: 4,
        cost: 0,
        knockback: 10,
        effect: [],
        reload: 75,
    },
    "snowball2": {
        size: 20,
        dmg: 6000,
        range: 1000,
        decayRate: 100,
        spd: 6,
        cost: 0,
        knockback: 15,
        effect: [],
        reload: 50,
    },
    "decayParticle": {
        size: 5,
        dmg: 0,
        range: 150,
        decayRate: 0,
        spd: 1,
        cost: 0,
        knockback: 0,
        effect: [],
        reload: 1,
    },
    "fireParticle1": {
        size: 5,
        dmg: 10,
        range: 150,
        decayRate: 20,
        spd: 0.3,
        cost: 0,
        knockback: 0.5,
        effect: [["fire", 20, 1]],
        reload: 1,
    },
    "fireParticle2": {
        size: 10,
        dmg: 10,
        range: 150,
        decayRate: 20,
        spd: 0.6,
        cost: 0,
        knockback: 1,
        effect: [["fire", 50, 0.25]],
        reload: 1,
    },
    "fireParticle3": {
        size: 15,
        dmg: 1,
        range: 150,
        decayRate: 20,
        spd: 1,
        cost: 0,
        knockback: 1.5,
        effect: [["fire", 100, 0.1]],
        reload: 1,
    },
    "fireBall 1": {
        size: 25,
        dmg: 100,
        range: 650,
        decayRate: 50,
        spd: 6,
        cost: 40,
        knockback: 4,
        effect: [["fire", 1000, 0.05]],
        reload: 5,
    },
    "elf arrow": {
        size: 15,
        dmg: 10000,
        range: 650,
        decayRate: 200,
        spd: 7,
        cost: 0,
        knockback: 7,
        effect: [],
        reload: 25,
    },
    "arrow": {
        size: 5,
        dmg: 10,
        range: 200,
        decayRate: 50,
        spd: 3,
        cost: 0,
        knockback: 3,
        effect: [],
        reload: 50,
    },
    "lightning": {
        size: 250,
        dmg: 1,
        range: 1,
        decayRate: 0,
        spd: 0,
        cost: 0,
        knockback: 0.01,
        effect: [["lightning", 1, 1]],
        reload: 0,
    },
    "Lightning Ball": {
        size: 200,
        dmg: 1,
        range: 1000,
        decayRate: 1,
        spd: 5,
        cost: 700,
        knockback: 0.01,
        effect: [["lightningS", 1, 1]],
        reload: 500,
    },
    "lightningS": {
        size: 300,
        dmg: 1,
        range: 1,
        decayRate: 1,
        spd: 0,
        cost: 0,
        knockback: 0.01,
        effect: [["lightning", 1, 1]],
        reload: 0,
    },
    "Mana Burst": {
        size: 10,
        dmg: 10,
        range: 1000,
        decayRate: 0,
        spd: 5,
        cost: 0,
        knockback: 30,
        effect: [["lightning", 1, 1]],
        reload: 300,
    },
}
