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
      <ul>
        <li> ${name} ${surname} ${id} </li>

      </ul>  
    `;
};

const generateHeroes = heroes.map(hero => {
    return heroesItems(hero.name, hero.surname, hero.id);
});

const divHeroes = document.querySelector(".game_window");


divHeroes.innerHTML = generateHeroes;

const myHeroes = document.querySelectorAll("li");

myHeroes.forEach(elem => {
    elem.classList.add("decorate");
});