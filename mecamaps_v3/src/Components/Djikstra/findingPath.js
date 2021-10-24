import  { Grafo } from './grafo';

const main = () => {

    let b = new Grafo();

    //Cria matriz do grafo
    let i = 'B'
    let f = 'F'
    let values = b.AchaMenorCaminho(i, f);
    let c1 = values[1];
    let d1 = values[0];
    console.log(d1[i][f]);
    console.log(c1);

  }

  main()
