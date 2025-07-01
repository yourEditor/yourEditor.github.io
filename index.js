const radButton = document.querySelector('#radButton')
let radImg = document.querySelector('#radImg')
const imgPath = document.querySelector('#imgPath')
const magTitle = document.querySelector('#magTitle')
const isStar = document.querySelector('.isStar')
const isStarText = document.querySelector('.isStarText')

const rank1 = document.querySelector('.rank1')
const rank2 = document.querySelector('.rank2')
const rank3 = document.querySelector('.rank3')
const rank4 = document.querySelector('.rank4')
const rank5 = document.querySelector('.rank5')

const ranktitle1 = document.querySelector('.ranktitle1')
const ranktitle2 = document.querySelector('.ranktitle2')
const ranktitle3 = document.querySelector('.ranktitle3')
const ranktitle4 = document.querySelector('.ranktitle4')
const ranktitle5 = document.querySelector('.ranktitle5')


const storage = [
    "mangaPictures/necromancer.jpg",     //0
    "mangaPictures/mystMyght.jpg",       //1
    "mangaPictures/executioner.jpg",     //2
    "mangaPictures/theLast.jpg",         //3
    "mangaPictures/theKnight.jpg",       //4

    "mangaPictures/conqueringThe.jpg",   //5
    "mangaPictures/absolute.jpg",        //6
    "mangaPictures/theGreat.jpg",        //7
    "mangaPictures/reincarnated.jpg",    //8
    "mangaPictures/theLazyLord.jpg",     //9

    "mangaPictures/timeLimited.jpg",     //10
    "mangaPictures/logIntoThe.jpg",      //11
    "mangaPictures/theWorldAfter.jpg",   //12
    "mangaPictures/theArtOf.jpg",        //13
    "mangaPictures/myBlasted.webp",      //14

    "mangaPictures/the100th.jpg",        //15
    "mangaPictures/dandadan.jpg",        //16
    "mangaPictures/theNovelsExtra.jpg",  //17
    "mangaPictures/secondLife.jpg",      //18
    "mangaPictures/theIndomitable.jpg",  //19

    "mangaPictures/sss-class.jpg",       //20
    "mangaPictures/theRegressed.jpg",    //21
    "mangaPictures/mercenary.jpg",       //22
    "mangaPictures/theLegendOf.jpg",     //23
    "mangaPictures/kaijuNo8.jpg",        //24

    "mangaPictures/returnedBy.jpg",     //25
    "mangaPictures/theStellar.webp",     //26
    "mangaPictures/returnOfThe.jpg",     //27 
    "mangaPictures/theInfinite.jpg",     //28 
    "mangaPictures/theReturnOf.jpg",     //29 

    "mangaPictures/JujutsuKaisen.jpg",   //30 
    "mangaPictures/theMartialGo.jpg",    //31
    "mangaPictures/nanoMachine.jpg",     //32
    "mangaPictures/iKillThe.jpg",        //33
    "mangaPictures/theAcademys.jpg",     //34

    "mangaPictures/i'mTheMax.jpg",       //35
    "mangaPictures/regressingAs.jpg",    //36
    "mangaPictures/afterTen.jpg",        //37
    "mangaPictures/theSwordmaster.jpg",  //38
    "mangaPictures/childhoodFriends.jpg",//39

    "mangaPictures/soloLeveling2.jpg",   //40
    "mangaPictures/soloLeveling.jpg",    //41
    "mangaPictures/theExtra's.jpg",      //42
    "mangaPictures/pickMeUp.jpg",        //43
    "mangaPictures/magicAcademy.jpg",    //44

    "mangaPictures/omniscient.jpg",      //45
    "mangaPictures/theGreatest.jpg",     //46
    "mangaPictures/theRebornYou.webp",   //47
    "mangaPictures/theBeginning.webp",   //48 
    "mangaPictures/revenge.jpg"          //49
]

imgPath.style.pointerEvents = 'none'
rank1.src = "mangaPictures/revenge.jpg"
rank2.src = "mangaPictures/theBeginning.webp"
rank3.src = "mangaPictures/theRebornYou.webp"
rank4.src = "mangaPictures/theGreatest.jpg"
rank5.src = "mangaPictures/omniscient.jpg"

ranktitle1.innerText = "Revenge of the Baskerville Bloodhound"
ranktitle2.innerText = "The Begining After the End"
ranktitle3.innerText = "The Reborn Young Lord is an Assassin"
ranktitle4.innerText = "The Greatest Estate Developer"
ranktitle5.innerText = "Omniscient Reader's Viewpoint"

radButton.addEventListener('click', function (evt) {
    isStar.classList.add("star")
    radImg.classList.add("rapid")
    radButton.classList.remove("has-background-link-80")
    radButton.classList.add("star")
    isStarText.classList.remove("has-text-link-80")
    isStarText.classList.add("starText")
    radImg.src = ""
    magTitle.innerText = "Random Manga"

    setTimeout(function () {
        let num = Math.floor(Math.random() * storage.length)
        let manga = storage[num]
        // alert(manga)
        radImg.src = manga

        imgPath.style.pointerEvents = 'all'
        if (num == 0) {
            imgPath.href = "https://comick.io/comic/catastrophic-necromancer";
            imgPath.title = "Necromancer, the Ultimate Scourge!"
            magTitle.innerText = "Necromancer, the Ultimate Scourge!"
        }
        if (num == 1) {
            imgPath.href = "https://comick.io/comic/the-chaotic-god-of-extraordinary-strength";
            imgPath.title = "Myst, Might, Mayhem"
            magTitle.innerText = "Myst, Might, Mayhem"
        }
        if (num == 2) {
            imgPath.href = "https://comick.io/comic/executioner";
            imgPath.title = "Executioner"
            magTitle.innerText = "Executioner"
        }
        if (num == 3) {
            imgPath.href = "https://comick.io/comic/the-last-adventurer";
            imgPath.title = "The Last Adventurer"
            magTitle.innerText = "The Last Adventurer"
        }
        if (num == 4) {
            imgPath.href = "https://comick.io/comic/eternally-regressing-knight";
            imgPath.title = "The Knight Only Lives Today"
            magTitle.innerText = "The Knight Only Lives Today"
        }
        if (num == 5) {
            imgPath.href = "https://comick.io/comic/conquering-the-academy-with-just-a-sashimi-knife";
            imgPath.title = "Conquering the Academy with Just a Sashimi Knife."
            magTitle.innerText = "Conquering the Academy with Just a Sashimi Knife."
        }
        if (num == 6) {
            imgPath.href = "https://comick.io/comic/absolute-regression";
            imgPath.title = "Absolute Regression"
            magTitle.innerText = "Absolute Regression"
        }
        if (num == 7) {
            imgPath.href = "https://comick.io/comic/the-great-mage-of-the-hero-s-party-reincarnates";
            imgPath.title = "The Great Mage of the Hero's Party Reincarnates"
            magTitle.innerText = "The Great Mage of the Hero's Party Reincarnates"
        }
        if (num == 8) {
            imgPath.href = "https://comick.io/comic/reincarnated-as-a-genius-prodigy-of-a-prestigious-family";
            imgPath.title = "Reincarnated as a Genius Prodigy of a Prestigious Family"
            magTitle.innerText = "Reincarnated as a Genius Prodigy of a Prestigious Family"
        }
        if (num == 9) {
            imgPath.href = "https://comick.io/comic/04-the-lazy-lord-masters-the-sword";
            imgPath.title = "The Lazy Lord Masters the Sword"
            magTitle.innerText = "The Lazy Lord Masters the Sword"
        }
        if (num == 10) {
            imgPath.href = "https://comick.io/comic/01-time-limited-genius-dark-knight";
            imgPath.title = "Time-Limited Genius Dark Knight"
            magTitle.innerText = "Time-Limited Genius Dark Knight"
        }
        if (num == 11) {
            imgPath.href = "https://comick.io/comic/apex-future-martial-arts";
            imgPath.title = "Log into the Future"
            magTitle.innerText = "Log into the Future"
        }
        if (num == 12) {
            imgPath.href = "https://comick.io/comic/02-the-world-after-the-fall";
            imgPath.title = "The World After the Fall"
            magTitle.innerText = "The World After the Fall"
        }
        if (num == 13) {
            imgPath.href = "https://comick.io/comic/01-standard-of-reincarnation";
            imgPath.title = "The Art of Reincarnation"
            magTitle.innerText = "The Art of Reincarnation"
        }
        if (num == 14) {
            imgPath.href = "https://comick.io/comic/02-damn-reincarnation";
            imgPath.title = "My Blasted Reincarnated Life"
            magTitle.innerText = "My Blasted Reincarnated Life"
        }
        if (num == 15) {
            imgPath.href = "https://comick.io/comic/the-100th-regression-of-the-max-level-player";
            imgPath.title = "The 100th Regression of the Max-Level Player"
            magTitle.innerText = "The 100th Regression of the Max-Level Player"
        }
        if (num == 16) {
            imgPath.href = "https://comick.io/comic/dandadan";
            imgPath.title = "Dandadan"
            magTitle.innerText = "Dandadan"
        }
        if (num == 17) {
            imgPath.href = "https://comick.io/comic/01-the-novel-s-extra-2022";
            imgPath.title = "The Novel’s Extra"
            magTitle.innerText = "The Novel’s Extra"
        }
        if (num == 18) {
            imgPath.href = "https://comick.io/comic/01-second-life-ranker";
            imgPath.title = "Second Life Ranker"
            magTitle.innerText = "Second Life Ranker"
        }
        if (num == 19) {
            imgPath.href = "https://comick.io/comic/the-indomitable-martial-king";
            imgPath.title = "The Indomitable Martial King"
            magTitle.innerText = "The Indomitable Martial King"
        }
        if (num == 20) {
            imgPath.href = "https://comick.io/comic/02-sss-class-suicide-hunter";
            imgPath.title = "SSS-Class Revival Hunter"
            magTitle.innerText = "SSS-Class Revival Hunter"
        }
        if (num == 21) {
            imgPath.href = "https://comick.io/comic/01-mercenary-enrollment";
            imgPath.title = "Mercenary Enrollment"
            magTitle.innerText = "Mercenary Enrollment"
        }
        if (num == 22) {
            imgPath.href = "https://comick.io/comic/the-regressed-mercenarys-machinations";
            imgPath.title = "The Regressed Mercenary's Machinations"
            magTitle.innerText = "The Regressed Mercenary's Machinations"
        }
        if (num == 23) {
            imgPath.href = "https://comick.io/comic/00-legend-of-the-northern-blade";
            imgPath.title = "The Legend of the Northern Blade"
            magTitle.innerText = "The Legend of the Northern Blade"
        }
        if (num == 24) {
            imgPath.href = "https://comick.io/comic/kaiju-no-8";
            imgPath.title = "Kaiju No. 8"
            magTitle.innerText = "Kaiju No. 8"
        }
        if (num == 25) {
            imgPath.href = "https://comick.io/comic/00-regressing-with-the-king-s-power";
            imgPath.title = "Returned by the King"
            magTitle.innerText = "Returned by the King"
        }
        if (num == 26) {
            imgPath.href = "https://comick.io/comic/00-star-embracing-swordmaster";
            imgPath.title = "The Stellar Swordmaster"
            magTitle.innerText = "The Stellar Swordmaster"
        }
        if (num == 27) {
            imgPath.href = "https://comick.io/comic/02-return-of-the-blossoming-blade";
            imgPath.title = "Return of the Blossoming Blade"
            magTitle.innerText = "Return of the Blossoming Blade"
        }
        if (num == 28) {
            imgPath.href = "https://comick.io/comic/01-infinite-mage";
            imgPath.title = "The Infinite Mage"
            magTitle.innerText = "The Infinite Mage"
        }
        if (num == 29) {
            imgPath.href = "https://comick.io/comic/00-the-return-of-the-disaster-class-hero";
            imgPath.title = "The Return of the Disaster-Class Hero"
            magTitle.innerText = "The Return of the Disaster-Class Hero"
        }
        if (num == 30) {
            imgPath.href = "https://comick.io/comic/00-jujutsu-kaisen";
            imgPath.title = "Jujustu Kaisen"
            magTitle.innerText = "Jujustu Kaisen"
        }
        if (num == 31) {
            imgPath.href = "https://comick.io/comic/the-god-of-war-who-regressed-to-level-2";
            imgPath.title = "The Martial God Who Regressed Back to Level 2"
            magTitle.innerText = "The Martial God Who Regressed Back to Level 2"
        }
        if (num == 32) {
            imgPath.href = "https://comick.io/comic/03-nano-machine";
            imgPath.title = "Nano Machine"
            magTitle.innerText = "Nano Machine"
        }
        if (num == 33) {
            imgPath.href = "https://comick.io/comic/i-killed-an-academy-player";
            imgPath.title = "I Killed the Main Player"
            magTitle.innerText = "I Killed the Main Player"
        }
        if (num == 34) {
            imgPath.href = "https://comick.io/comic/00-academy-genius-swordsman";
            imgPath.title = "The Academy's Genius Swordsman"
            magTitle.innerText = "The Academy's Genius Swordsman"
        }
        if (num == 35) {
            imgPath.href = "https://comick.io/comic/00-solo-max-level-newbie";
            imgPath.title = "I’m the Max-Level Newbie"
            magTitle.innerText = "I’m the Max-Level Newbie"
        }
        if (num == 36) {
            imgPath.href = "https://comick.io/comic/regressing-as-the-reincarnated-bastard-of-the-sword-clan";
            imgPath.title = "Regressing As The Reincarnated Bastard Of The Sword Clan"
            magTitle.innerText = "Regressing As The Reincarnated Bastard Of The Sword Clan"
        }
        if (num == 37) {
            imgPath.href = "https://comick.io/comic/00-player-who-returned-10-000-years-later";
            imgPath.title = "After Ten Millennia in Hell"
            magTitle.innerText = "After Ten Millennia in Hell"
        }
        if (num == 38) {
            imgPath.href = "https://comick.io/comic/02-swordmaster-s-youngest-son";
            imgPath.title = "The Swordmaster's Son"
            magTitle.innerText = "The Swordmaster's Son"
        }
        if (num == 39) {
            imgPath.href = "https://comick.io/comic/childhood-friend-of-the-zenith";
            imgPath.title = "Childhood Friend of the Zenith"
            magTitle.innerText = "Childhood Friend of the Zenith"
        }
        if (num == 40) {
            imgPath.href = "https://comick.io/comic/na-honjaman-level-up-ragnarok";
            imgPath.title = "Solo Leveling: Ragnarok"
            magTitle.innerText = "Solo Leveling: Ragnarok"
        }
        if (num == 41) {
            imgPath.href = "https://comick.io/comic/00-solo-leveling";
            imgPath.title = "Solo Leveling"
            magTitle.innerText = "Solo Leveling"
        }
        if (num == 42) {
            imgPath.href = "https://comick.io/comic/the-extra-s-academy-survival-guide";
            imgPath.title = "The Extra’s Academy Survival Guide"
            magTitle.innerText = "The Extra’s Academy Survival Guide"
        }
        if (num == 43) {
            imgPath.href = "https://comick.io/comic/02-pick-me-up-1";
            imgPath.title = "Pick Me Up"
            magTitle.innerText = "Pick Me Upi"
        }
        if (num == 44) {
            imgPath.href = "https://comick.io/comic/quick-teleporting-genius-from-magic-school";
            imgPath.title = "Magic Academy’s Genius Blinker"
            magTitle.innerText = "Magic Academy’s Genius Blinker"
        }
        if (num == 45) {
            imgPath.href = "https://comick.io/comic/03-omniscient-reader-s-viewpoint";
            imgPath.title = "Omniscient Reader's Viewpoint"
            magTitle.innerText = "Omniscient Reader's Viewpoint"
        }
        if (num == 46) {
            imgPath.href = "https://comick.io/comic/04-the-greatest-estate-developer";
            imgPath.title = "The Greatest Estate Developer"
            magTitle.innerText = "The Greatest Estate Developer"
        }
        if (num == 47) {
            imgPath.href = "https://comick.io/comic/the-reborn-young-lord-is-an-assassin";
            imgPath.title = "The Reborn Young Lord Is an Assassin"
            magTitle.innerText = "The Reborn Young Lord Is an Assassin"
        }
        if (num == 48) {
            imgPath.href = "https://comick.io/comic/00-the-beginning-after-the-end-1";
            imgPath.title = "The Beginning After the End"
            magTitle.innerText = "The Beginning After the End"
        }
        if (num == 49) {
            imgPath.href = "https://comick.io/comic/03-return-of-the-iron-blooded-hound";
            imgPath.title = "Revenge of the Baskerville Bloodhound"
            magTitle.innerText = "Revenge of the Baskerville Bloodhound"
        }

        radImg.classList.remove("rapid")
        isStar.classList.remove("star")
        radButton.classList.add("has-background-link-80")
        radButton.classList.remove("star")
        isStarText.classList.add("has-text-link-80")
        isStarText.classList.remove("starText")
    }, 3000)
    //    radButton.classList.add('is-loading')
})