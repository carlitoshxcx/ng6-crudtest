import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";

import { DatastorageService } from "../datastorage.service";
import { VeiculosfipeService } from "../veiculosfipe.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})

export class CadastroComponent implements OnInit {

  cliente: string = '';
  
  selecione: Object = { nome: "selecione", codigo: "" };
  carregando: Object = { nome: "carregando...", codigo: "" };

  tipos$: Array<Object> = [
    this.selecione,
    { nome: "carros", codigo: "carros" },
    { nome: "motos", codigo: "motos" },
    { nome: "caminhoes", codigo: "caminhoes" }
  ];
  marcas$: Array<Object> = [this.selecione];
  modelos$: Array<Object> = [this.selecione];
  anos$: Array<Object> = [this.selecione];
  veiculo$: Veiculo = new Veiculo();
  
  cadastroForm: FormGroup;
  selected: DadosVeiculo = new DadosVeiculo();

  constructor(
    private ar: ActivatedRoute,
    private ds: DatastorageService, 
    private vf: VeiculosfipeService, 
    private fb: FormBuilder) { 
    this.ar.params.subscribe(params => this.cliente = params.id);
  }

  ngOnInit() {
    if (this.cliente) {
      this.cadastroForm = this.editForm(this.cliente, this.fb);
    } else {
      this.cadastroForm = this.createForm(this.fb);
    }
  }

  createForm(fb: FormBuilder) {
    return fb.group({
      dadospessoais: fb.group(new DadosPessoais()),
      dadosveiculo: fb.group(new DadosVeiculo()),
      veiculo: fb.group( new Veiculo())
    });
  }

  editForm(cliente: string, fb: FormBuilder) {
    const cadastro = this.ds.pick(cliente);
    this.veiculo$ = new Veiculo(cadastro.veiculo);
    return fb.group({
      dadospessoais: fb.group(new DadosPessoais(cadastro.dadospessoais)),
      dadosveiculo: fb.group(new DadosVeiculo(cadastro.dadosveiculo)),
      veiculo: fb.group(this.veiculo$)
    });
  }

  selectChanged($event){
    let value = $event.target.value;
    let target = $event.srcElement.id;

    this.selected[target] = value;
  
    switch (target) {
      case "tipo":
        this.selected.marca = '';
        this.selected.modelo = '';
        this.selected.ano = '';
        this.marcas$ = [this.carregando];
        this.modelos$ = [this.selecione];
        this.anos$ = [this.selecione];
        this.veiculo$ = new Veiculo();
        this.vf.getMarcas(this.selected.tipo).subscribe(marcas => {
          let _: Array<Object> = [this.selecione];
          this.marcas$ = _.concat(marcas);
        });
        break;

      case "marca":
        this.selected.modelo = '';
        this.selected.ano = '';
        this.modelos$ = [this.carregando];
        this.anos$ = [this.selecione];
        this.veiculo$ = new Veiculo();
        this.vf.getModelos(this.selected.tipo, this.selected.marca).subscribe(modelos => {
          let _: Array<Object> = [this.selecione];
          this.modelos$ = _.concat(modelos["modelos"]);
        });
        break;

      case "modelo":
        this.selected.ano = '';
        this.anos$ = [this.carregando];
        this.veiculo$ = new Veiculo();
        this.vf.getAnos(this.selected.tipo, this.selected.marca, this.selected.modelo).subscribe(anos => {
          let _: Array<Object> = [this.selecione];
          this.anos$ = _.concat(anos);
        });
        break;

      case "ano":
        this.veiculo$ = new Veiculo();
        this.vf.getValor(this.selected.tipo, this.selected.marca, this.selected.modelo, this.selected.ano).subscribe(veiculo => this.veiculo$ = new Veiculo(veiculo) );
        break;
    }
  }

  inputCpf($event){}
  inputData($event){}

  onSubmit() {
    const result: Cadastro = Object.assign({}, this.cadastroForm.value);
    
    result.dadospessoais = Object.assign({}, result.dadospessoais);
    result.dadosveiculo = Object.assign({}, result.dadosveiculo);
    result.veiculo = this.veiculo$;

    if (this.cliente) {
      alert("Cliente alterado com sucesso!");
      this.ds.update(this.cliente, result);
    } else {
      alert("Cliente adicionado com sucesso!");
      this.ds.add(result);
      this.resetForm(); 
    }
  }

  resetForm() {
    this.veiculo$ = new Veiculo();
    this.cadastroForm.reset(this.fb.group({
      dadospessoais: this.fb.group(new DadosPessoais()),
      dadosveiculo: this.fb.group(new DadosVeiculo()),
      veiculo: this.fb.group(new Veiculo())
    }));
  }

}

export class Cadastro {
  dadospessoais: DadosPessoais;
  dadosveiculo: DadosVeiculo;
  veiculo: Veiculo;
}

export class DadosPessoais {
  constructor(dadospessoais: any = {}){
    this.nome = [(dadospessoais.nome || ''), Validators.compose([Validators.minLength(4), Validators.required]) ];
    this.cpf = [(dadospessoais.cpf || ''), Validators.compose([Validators.minLength(11), Validators.required]) ];
    this.datadenascimento = [(dadospessoais.datadenascimento || ''), Validators.compose([Validators.minLength(8), Validators.required]) ];
    this.endereco = [(dadospessoais.endereco || ''), Validators.compose([Validators.minLength(5), Validators.required]) ];
  }
  nome: any = ['', Validators.compose([Validators.minLength(4), Validators.required]) ];
  cpf: any = ['', Validators.compose([Validators.minLength(11), Validators.required]) ];
  datadenascimento: any = ['', Validators.compose([Validators.minLength(8), Validators.required]) ];
  endereco: any = ['', Validators.compose([Validators.minLength(5), Validators.required]) ];
}

export class DadosVeiculo {
  constructor(dadosveiculo: any = {}){
    this.tipo = dadosveiculo.tipo || '';
    this.marca = dadosveiculo.marca || '';
    this.modelo = dadosveiculo.modelo || '';
    this.ano = dadosveiculo.ano || '';
  }
  tipo: string = '';
  marca: string = '';
  modelo: string = '';
  ano: string = '';
}

export class Veiculo {
  constructor(veiculo: any = {}){
    this.AnoModelo = veiculo.AnoModelo || '';
    this.CodigoFipe = veiculo.CodigoFipe  || '';
    this.Combustivel = veiculo.Combustivel  || '';
    this.Marca = veiculo.Marca  || '';
    this.MesReferencia = veiculo.MesReferencia  || '';
    this.Modelo = veiculo.Modelo  || '';
    this.SiglaCombustivel = veiculo.SiglaCombustivel  || '';
    this.TipoVeiculo = veiculo.TipoVeiculo  || '';
    this.Valor = veiculo.Valor  || '';
  }
  AnoModelo: string ='';
  CodigoFipe: string ='';
  Combustivel: string ='';
  Marca: string ='';
  MesReferencia: string ='';
  Modelo: string ='';
  SiglaCombustivel: string ='';
  TipoVeiculo: string ='';
  Valor: string ='';
}