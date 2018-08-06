import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class VeiculosfipeService {

  private baseUrl: string = 'https://parallelum.com.br/fipe/api/v1';

  constructor(private http: HttpClient) { }

  getMarcas(tipo:string){
    return this.http.get(`${this.baseUrl}/${tipo}/marcas`);
  }

  getModelos(tipo:string, marca:string){
    return this.http.get(`${this.baseUrl}/${tipo}/marcas/${marca}/modelos`);
  }

  getAnos(tipo:string, marca:string, modelo: string){
    return this.http.get(`${this.baseUrl}/${tipo}/marcas/${marca}/modelos/${modelo}/anos`);
  }
  
  getValor(tipo: string, marca: string, modelo: string, ano: string){
    return this.http.get(`${this.baseUrl}/${tipo}/marcas/${marca}/modelos/${modelo}/anos/${ano}`);
  }

}
