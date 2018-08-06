import { Component, OnInit } from '@angular/core';

import { DatastorageService } from "../datastorage.service";
import { Cadastro } from "../cadastro/cadastro.component";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})

export class ClientesComponent implements OnInit {

  clientes: Array<Cadastro>;

  constructor(private ds: DatastorageService) {
    this.updateClientes();
  }

  ngOnInit() {}

  updateClientes(){
    this.clientes = this.ds.get();
  }

  edit(value) {
    // let value = $event.target.value;
    // let target = $event.srcElement.value;
    console.log("value", value);
    // console.log("target", target);
  }

  delete(value) {
    const _confirm = confirm(`Você confirma a exclusão do cliente "${this.clientes[value].dadospessoais.nome}"?`);

    if (_confirm) {
      this.ds.remove(value);
      this.updateClientes();
      alert("Cliente excluído com sucesso");
    }
  }

}
