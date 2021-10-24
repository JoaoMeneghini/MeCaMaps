import { min } from 'mathjs'
import { maps } from './distances'

export default class Grafo {
  constructor() {
      this.dist = {};
      this.prev = {};
  }

  AchaMenorCaminho(v1, v2){
      this.dist[v1] = {};
      let chaves = Object.keys(maps);
      for (let vertices in chaves) {
          if (chaves[vertices] !== v1) {
              this.dist[v1][chaves[vertices]] = Infinity   //Cria a matriz de distâncias com inf e zero
          }
          else {
              this.dist[v1][chaves[vertices]] = 0
          }
        };

      let a = v1;
      let Q  = Object.assign({}, this.dist[v1]);
      let s = [];

      while (!s.includes(v2)) {

          let menor = min(Object.values(Q));
          let keys = Object.keys(Q);

          for (let i in keys) {
                if (menor === this.dist[v1][keys[i]]) {
                    a = keys[i]
                }
          };

          delete Q[a];
          s.push(a);

          for (let viz in maps[a]) {
          //Determina distâncias
                let alt = this.dist[v1][a] + maps[a][viz][0];
                let distancia = this.dist[v1][viz];
                if (alt < distancia) {
                    this.dist[v1][viz] = alt;
                    Q[viz] = alt;
                    this.prev[viz] = [a, maps[a][viz][1]]
              }
          };
      };
      let b = v2;
      let path = [];

      while (b !== v1) {
          let c = this.prev[b];    //Determina caminho
          path.push(c[1]);
          b = c[0];
      };

      path.reverse();

      return [this.dist,path] ;
  }
}

