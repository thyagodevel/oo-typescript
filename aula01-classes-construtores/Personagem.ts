//identificação
class Personagem {
  //atributos tipados
  //nome: string = '';
  //energia: number = 0;
  //vida: number = 0;
  //ataque: number = 0;
  //defesa: number = 0;

  constructor(
      //continuam sendo atributos tipados
      public nome: string, 
      public energia: number, 
      public vida: number, 
      public ataque: number, 
      public defesa: number
    ) {
    // define que os atributos DESTA classe deve ser iniciado com esses valores ou valores obrigatórios;
    //this.energia = 50;
    //this.ataque = 50;
    //this.nome = nome;
  }
}

//novo objeto estanciado da classe
let sansa = new Personagem('Sansa Stark', 100, 40, 20, 20);

//sansa.ataque = 10;
//sansa.defesa = 20;
//sansa.energia = 50;
//sansa.vida = 100;

console.log('Person: ', sansa);

//novo objeto estanciado da classe
let jon = new Personagem('Json Snow', 80, 90, 100, 100);

//jon.ataque = 80;
//jon.defesa = 70;
//jon.energia = 90;
//jon.vida = 40;

console.log('Person: ', jon);