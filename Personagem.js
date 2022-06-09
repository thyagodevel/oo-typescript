"use strict";
//identificação
class Personagem {
    constructor() {
        //atributos tipados
        this.nome = '';
        this.energia = 0;
        this.vida = 0;
        this.ataque = 0;
        this.defesa = 0;
    }
}
//novo objeto estanciado da classe
let sansa = new Personagem();
sansa.nome = 'Sansa Stark';
sansa.ataque = 10;
sansa.defesa = 20;
sansa.energia = 50;
sansa.vida = 100;
console.log('Person: ', sansa);
//novo objeto estanciado da classe
let jon = new Personagem();
jon.nome = 'Jon Snow';
jon.ataque = 80;
jon.defesa = 70;
jon.energia = 90;
jon.vida = 40;
console.log('Person: ', jon);
