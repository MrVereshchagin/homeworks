"use strict"

const body = document.body;

const heroes = [
    {name: "Sarah", surname: "Connor", id: "911911"},
    {name: "John", surname: "Connor", id: "811811"},
    {name: "Kyle", surname: "Reese", id: "711711"},
    {name: "Miles", surname: "Dyson", id: "611611"},
    {name: "Marcus", surname: "Wright", id: "511511"},
    {name: "Sky", surname: "Net", id: "000000"}
];


const heroesItems = (name, surname, id) => {
    return `
      <li> <input type="checkbox" class="checkbox"/> ${name} ${surname}, ${id}</li>  
    `;
};

const generateHeroes = heroes.map(hero => {
    return heroesItems(hero.name, hero.surname, hero.id);
}).join("");

const divHeroes = document.querySelector(".game_window-1");

const ul = `
  <ul class="list"></ul>
`;

divHeroes.innerHTML = ul;

const list = document.querySelector(".list");
list.innerHTML = generateHeroes;

const myHeroes = document.querySelectorAll("li");

myHeroes.forEach(elem => {
    elem.classList.add("decorate");
    elem["checked"] = false;
});

const input = `
  <input class="search" type="text" name="letters" placeholder="Search target!"></input>
`;

divHeroes.insertAdjacentHTML("afterbegin", input);

const searchTarget = document.querySelector("input");

function searchFromHeroes(e) {
  const value = e.target.value;
  if(value != "") {
     myHeroes.forEach(elem => {
       if(elem.innerText.search(value) == -1) {
        elem.classList.add("hide");
       } else {
        elem.classList.remove("hide");
       }
     });
  } else {
    myHeroes.forEach(elem => {
      elem.classList.remove("hide");
    });
  }
}

searchTarget.addEventListener("keydown", searchFromHeroes);
searchTarget.addEventListener("keyup", searchFromHeroes);


