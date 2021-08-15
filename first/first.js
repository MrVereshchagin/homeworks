"use strict"

const input = document.querySelector(".input");
const heroesList = document.querySelectorAll("li");

function searchMatch(e) {
    const value = input.value.trim();
    if(value != "") {
        heroesList.forEach(element => {
            if(element.innerText.search(value) == -1) {
                element.classList.add("hide");
            } else {
                element.classList.remove("hide"); 
            }
        });
    } else {
        heroesList.forEach(element => element.classList.remove("hide"));
    }
};

input.addEventListener("keydown", searchMatch);
input.addEventListener("keyup", searchMatch);



/*
let input = document.querySelector("#search");
input.oninput = function() {
    let val = this.value.trim();
    let heroesItems = document.querySelectorAll('.characters li');
    if(val != '') {
        heroesItems.forEach(element => {
            if (element.innerText.search(val) == -1) {
                element.classList.add('hide');
            } else {
                element.classList.remove('hide');
            };
        });
    } else {
        heroesItems.forEach(element => element.classList.remove('hide'));
    }
};
*/

/*
let heroes = document.querySelectorAll('li');
let myHeroes = [];

heroes.forEach(element => myHeroes.push(element.innerText));
*/

/*
document.querySelector('#search').oninput = function () {
    let val = this.value.trim();
    let heroesList = document.querySelectorAll('li');
    if (val != '') {
        heroesList.forEach(hero => {
            if (hero.innerText.search(val) == -1) {
                hero.classList.add('hide');
            } else {
                hero.classList.remove('hide');
            }
        })
    }
}
*/




/*
const heroes = [
    {
        "name": "Sarah Connor",
        "id": "911911"
    },
    {
        "name": "John Connor",
        "id": "811811" 
    },
    {
        "name": "Kyle Reese",
        "id": "711711"
    },
    {
        "name": "Miles Dyson",
        "id": "611611"
    },
    {
        "name": "Marcus Wright",
        "id": "511511"
    },
    {
        "name": "Sky Net",
        "id": "000000"
    }
];
*/