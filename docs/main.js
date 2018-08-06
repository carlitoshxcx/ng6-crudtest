(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clientes/clientes.component */ "./src/app/clientes/clientes.component.ts");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "./src/app/cadastro/cadastro.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'clientes',
        component: _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_2__["ClientesComponent"]
    },
    {
        path: 'cadastro',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__["CadastroComponent"]
    },
    {
        path: 'editar/:id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__["CadastroComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <app-menu></app-menu>\n  <div id=\"content\" *ngIf=\"navUrl !== '/'\">\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container #content {\n  width: 75vw;\n  background: #2f6fa4;\n  margin: 10px auto 0 auto;\n  padding: 30px 5vw;\n  border-radius: 3px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        var _this = this;
        this.router = router;
        this.title = 'app';
        this.navUrl = '';
        router.events.subscribe(function (_) {
            if (_.url !== undefined) {
                _this.navUrl = _.url;
            }
        });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "./src/app/cadastro/cadastro.component.ts");
/* harmony import */ var _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./clientes/clientes.component */ "./src/app/clientes/clientes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
                _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_9__["CadastroComponent"],
                _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_10__["ClientesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["StorageServiceModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_5__["NgxMaskModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cadastro/cadastro.component.html":
/*!**************************************************!*\
  !*** ./src/app/cadastro/cadastro.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"cadastro\">\n  <form [formGroup]=\"cadastroForm\" (ngSubmit)=\"onSubmit()\">\n\n    <div class=\"dadospessoais\" formGroupName=\"dadospessoais\">\n      <div class=\"input\">\n        <div class=\"nome\">\n          <label for=\"nome\">Nome do Cliente:</label>\n          <input formControlName=\"nome\" required>\n        </div>\n      </div>\n      <div class=\"input\">\n        <div class=\"cpf\">\n          <label for=\"cpf\">CPF:</label>\n          <input formControlName=\"cpf\" mask=\"000.000.000-00\" required>\n        </div>\n        <div class=\"datadenascimento\">\n          <label for=\"datadenascimento\">Data de Nascimento:</label>\n          <input formControlName=\"datadenascimento\" mask=\"00/00/0000\" required>\n        </div>\n      </div>\n      <div class=\"input\">\n        <div class=\"endereco\">\n          <label for=\"endereco\">Endereço:</label>\n          <input formControlName=\"endereco\" required>\n        </div>\n      </div>\n    </div>\n    <hr>    \n\n    <div class=\"dadosveiculo\" formGroupName=\"dadosveiculo\">\n      <div class=\"select\">\n        <label for=\"tipos\">Tipo do veículo:</label>\n        <select (change)=\"selectChanged($event)\" formControlName=\"tipo\" id=\"tipo\" required>\n          <option *ngFor=\"let tipo of tipos$\" [value]=\"tipo.codigo\">{{ tipo.nome }}</option>\n        </select>\n      </div>\n      <div class=\"select\">\n        <label for=\"marcas\">Marca:</label>\n        <select (change)=\"selectChanged($event)\" formControlName=\"marca\" id=\"marca\" required>\n          <option *ngFor=\"let marca of marcas$\" [value]=\"marca.codigo\">{{ marca.nome }}</option>\n        </select>\n      </div>\n      <div class=\"select\">\n        <label for=\"modelos\">Modelo:</label>\n        <select (change)=\"selectChanged($event)\" formControlName=\"modelo\" id=\"modelo\" required>\n          <option *ngFor=\"let modelo of modelos$\" [value]=\"modelo.codigo\">{{ modelo.nome }}</option>\n        </select>\n      </div>\n      <div class=\"select\">\n        <label for=\"anos\">Ano:</label>\n        <select (change)=\"selectChanged($event)\" formControlName=\"ano\" id=\"ano\" required>\n          <option *ngFor=\"let ano of anos$\" [value]=\"ano.codigo\">{{ ano.nome }}</option>\n        </select>\n      </div>\n    </div>\n    \n    <div *ngIf=\"veiculo$.Marca\">\n      <hr>\n      <div class=\"info\">Dados do veículo:</div>\n      <div class=\"veiculoselecionado\">\n        <ul>\n          <li><span class=\"nome\">Marca</span><span class=\"value\">{{ veiculo$.Marca }}</span></li>\n          <li><span class=\"nome\">Modelo</span><span class=\"value\">{{ veiculo$.Modelo }}</span></li>\n          <li><span class=\"nome\">Ano</span><span class=\"value\">{{ veiculo$.AnoModelo }}</span></li>\n          <li><span class=\"nome\">Combustível</span><span class=\"value\">{{ veiculo$.Combustivel }}</span></li>\n          <li><span class=\"nome\">Código Fipe</span><span class=\"value\">{{ veiculo$.CodigoFipe }}</span></li>\n          <li><span class=\"nome\">Valor</span><span class=\"value\">{{ veiculo$.Valor }}</span></li>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"controles\">\n      <button type=\"reset\" (click)=\"resetForm()\"><i class=\"material-icons\">clear_all</i>Limpar</button>\n      <button type=\"submit\" [disabled]=\"!cadastroForm.valid || !veiculo$.Marca\"><i class=\"material-icons\">check_circle</i>Salvar</button>\n    </div>\n\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/cadastro/cadastro.component.scss":
/*!**************************************************!*\
  !*** ./src/app/cadastro/cadastro.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#cadastro hr {\n  width: 99%;\n  height: 1px;\n  background: #6398c4;\n  margin: 20px 0px 20px 0px;\n  border: none; }\n\n#cadastro .info {\n  font-size: 18px;\n  color: #ffffff; }\n\n#cadastro .dadospessoais .input {\n  margin: 0 0 15px 0; }\n\n#cadastro .dadospessoais .input label {\n    font-size: 20px; }\n\n#cadastro .dadospessoais .input input {\n    width: 95%;\n    height: 25px;\n    padding: 0 2%;\n    color: #062945;\n    border: none;\n    border-radius: 3px; }\n\n#cadastro .dadospessoais .input .cpf,\n  #cadastro .dadospessoais .input .datadenascimento {\n    width: 48%;\n    display: inline-block; }\n\n#cadastro .dadospessoais .input .cpf input,\n    #cadastro .dadospessoais .input .datadenascimento input {\n      text-align: center;\n      display: block; }\n\n#cadastro .dadospessoais .input .cpf {\n    margin-right: 3.4%; }\n\n#cadastro .dadosveiculo .select {\n  width: 25%;\n  display: inline-block; }\n\n#cadastro .dadosveiculo .select label {\n    font-size: 20px; }\n\n#cadastro .dadosveiculo .select select {\n    width: 93%; }\n\n#cadastro .veiculoselecionado {\n  background: #104671;\n  border-radius: 3px;\n  margin: 0px 0px;\n  padding: 10px 0px;\n  transition: all 0.5s; }\n\n#cadastro .veiculoselecionado ul {\n    margin: 0;\n    padding: 0;\n    text-align: center; }\n\n#cadastro .veiculoselecionado ul li {\n      width: 32.4%;\n      margin: 5px 0px;\n      padding: 0px;\n      list-style: none;\n      text-align: center;\n      vertical-align: text-top;\n      display: inline-block; }\n\n#cadastro .veiculoselecionado ul li .nome {\n        font-size: 16px;\n        display: block; }\n\n#cadastro .veiculoselecionado ul li .value {\n        font-size: 20px;\n        color: #fff77e; }\n\n#cadastro .controles {\n  text-align: center; }\n\n#cadastro .controles button {\n    width: 160px;\n    background: #2e6fa4;\n    border: 1px solid #fff;\n    border-radius: 3px;\n    padding: 0px 15px 0px 10px;\n    margin: 30px 30px 10px 30px;\n    text-decoration: none;\n    font-family: 'teko';\n    font-size: 20px;\n    line-height: 45px;\n    display: inline-block;\n    transition: all 0.5s;\n    cursor: pointer; }\n\n#cadastro .controles button .material-icons {\n      margin-right: 5px;\n      line-height: 26px;\n      vertical-align: text-top; }\n\n#cadastro .controles button:disabled, #cadastro .controles button:disabled:hover {\n      border: 1px solid #2f5371; }\n\n#cadastro .controles button:disabled, #cadastro .controles button:disabled *, #cadastro .controles button:disabled:hover, #cadastro .controles button:disabled:hover * {\n      background: #2e6fa4;\n      color: #2f5371;\n      cursor: not-allowed; }\n\n#cadastro .controles button:hover {\n      background: #0f4f83;\n      border: 1px solid #0e4877; }\n\n#cadastro .controles button:hover, #cadastro .controles button:hover * {\n      transition: all 0.7s;\n      color: #fff77e; }\n"

/***/ }),

/***/ "./src/app/cadastro/cadastro.component.ts":
/*!************************************************!*\
  !*** ./src/app/cadastro/cadastro.component.ts ***!
  \************************************************/
/*! exports provided: CadastroComponent, Cadastro, DadosPessoais, DadosVeiculo, Veiculo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroComponent", function() { return CadastroComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cadastro", function() { return Cadastro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DadosPessoais", function() { return DadosPessoais; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DadosVeiculo", function() { return DadosVeiculo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Veiculo", function() { return Veiculo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _datastorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../datastorage.service */ "./src/app/datastorage.service.ts");
/* harmony import */ var _veiculosfipe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../veiculosfipe.service */ "./src/app/veiculosfipe.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CadastroComponent = /** @class */ (function () {
    function CadastroComponent(ar, ds, vf, fb) {
        var _this = this;
        this.ar = ar;
        this.ds = ds;
        this.vf = vf;
        this.fb = fb;
        this.cliente = '';
        this.selecione = { nome: "selecione", codigo: "" };
        this.carregando = { nome: "carregando...", codigo: "" };
        this.tipos$ = [
            this.selecione,
            { nome: "carros", codigo: "carros" },
            { nome: "motos", codigo: "motos" },
            { nome: "caminhoes", codigo: "caminhoes" }
        ];
        this.marcas$ = [this.selecione];
        this.modelos$ = [this.selecione];
        this.anos$ = [this.selecione];
        this.veiculo$ = new Veiculo();
        this.selected = new DadosVeiculo();
        this.ar.params.subscribe(function (params) { return _this.cliente = params.id; });
    }
    CadastroComponent.prototype.ngOnInit = function () {
        if (this.cliente) {
            this.cadastroForm = this.editForm(this.cliente, this.fb);
        }
        else {
            this.cadastroForm = this.createForm(this.fb);
        }
    };
    CadastroComponent.prototype.createForm = function (fb) {
        return fb.group({
            dadospessoais: fb.group(new DadosPessoais()),
            dadosveiculo: fb.group(new DadosVeiculo()),
            veiculo: fb.group(new Veiculo())
        });
    };
    CadastroComponent.prototype.editForm = function (cliente, fb) {
        var cadastro = this.ds.pick(cliente);
        this.veiculo$ = new Veiculo(cadastro.veiculo);
        return fb.group({
            dadospessoais: fb.group(new DadosPessoais(cadastro.dadospessoais)),
            dadosveiculo: fb.group(new DadosVeiculo(cadastro.dadosveiculo)),
            veiculo: fb.group(this.veiculo$)
        });
    };
    CadastroComponent.prototype.selectChanged = function ($event) {
        var _this = this;
        var value = $event.target.value;
        var target = $event.srcElement.id;
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
                this.vf.getMarcas(this.selected.tipo).subscribe(function (marcas) {
                    var _ = [_this.selecione];
                    _this.marcas$ = _.concat(marcas);
                });
                break;
            case "marca":
                this.selected.modelo = '';
                this.selected.ano = '';
                this.modelos$ = [this.carregando];
                this.anos$ = [this.selecione];
                this.veiculo$ = new Veiculo();
                this.vf.getModelos(this.selected.tipo, this.selected.marca).subscribe(function (modelos) {
                    var _ = [_this.selecione];
                    _this.modelos$ = _.concat(modelos["modelos"]);
                });
                break;
            case "modelo":
                this.selected.ano = '';
                this.anos$ = [this.carregando];
                this.veiculo$ = new Veiculo();
                this.vf.getAnos(this.selected.tipo, this.selected.marca, this.selected.modelo).subscribe(function (anos) {
                    var _ = [_this.selecione];
                    _this.anos$ = _.concat(anos);
                });
                break;
            case "ano":
                this.veiculo$ = new Veiculo();
                this.vf.getValor(this.selected.tipo, this.selected.marca, this.selected.modelo, this.selected.ano).subscribe(function (veiculo) { return _this.veiculo$ = new Veiculo(veiculo); });
                break;
        }
    };
    CadastroComponent.prototype.inputCpf = function ($event) { };
    CadastroComponent.prototype.inputData = function ($event) { };
    CadastroComponent.prototype.onSubmit = function () {
        var result = Object.assign({}, this.cadastroForm.value);
        result.dadospessoais = Object.assign({}, result.dadospessoais);
        result.dadosveiculo = Object.assign({}, result.dadosveiculo);
        result.veiculo = this.veiculo$;
        if (this.cliente) {
            alert("Cliente alterado com sucesso!");
            this.ds.update(this.cliente, result);
        }
        else {
            alert("Cliente adicionado com sucesso!");
            this.ds.add(result);
            this.resetForm();
        }
    };
    CadastroComponent.prototype.resetForm = function () {
        this.veiculo$ = new Veiculo();
        this.cadastroForm.reset(this.fb.group({
            dadospessoais: this.fb.group(new DadosPessoais()),
            dadosveiculo: this.fb.group(new DadosVeiculo()),
            veiculo: this.fb.group(new Veiculo())
        }));
    };
    CadastroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cadastro',
            template: __webpack_require__(/*! ./cadastro.component.html */ "./src/app/cadastro/cadastro.component.html"),
            styles: [__webpack_require__(/*! ./cadastro.component.scss */ "./src/app/cadastro/cadastro.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _datastorage_service__WEBPACK_IMPORTED_MODULE_3__["DatastorageService"],
            _veiculosfipe_service__WEBPACK_IMPORTED_MODULE_4__["VeiculosfipeService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CadastroComponent);
    return CadastroComponent;
}());

var Cadastro = /** @class */ (function () {
    function Cadastro() {
    }
    return Cadastro;
}());

var DadosPessoais = /** @class */ (function () {
    function DadosPessoais(dadospessoais) {
        if (dadospessoais === void 0) { dadospessoais = {}; }
        this.nome = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])];
        this.cpf = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])];
        this.datadenascimento = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])];
        this.endereco = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])];
        this.nome = [(dadospessoais.nome || ''), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])];
        this.cpf = [(dadospessoais.cpf || ''), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])];
        this.datadenascimento = [(dadospessoais.datadenascimento || ''), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])];
        this.endereco = [(dadospessoais.endereco || ''), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])];
    }
    return DadosPessoais;
}());

var DadosVeiculo = /** @class */ (function () {
    function DadosVeiculo(dadosveiculo) {
        if (dadosveiculo === void 0) { dadosveiculo = {}; }
        this.tipo = '';
        this.marca = '';
        this.modelo = '';
        this.ano = '';
        this.tipo = dadosveiculo.tipo || '';
        this.marca = dadosveiculo.marca || '';
        this.modelo = dadosveiculo.modelo || '';
        this.ano = dadosveiculo.ano || '';
    }
    return DadosVeiculo;
}());

var Veiculo = /** @class */ (function () {
    function Veiculo(veiculo) {
        if (veiculo === void 0) { veiculo = {}; }
        this.AnoModelo = '';
        this.CodigoFipe = '';
        this.Combustivel = '';
        this.Marca = '';
        this.MesReferencia = '';
        this.Modelo = '';
        this.SiglaCombustivel = '';
        this.TipoVeiculo = '';
        this.Valor = '';
        this.AnoModelo = veiculo.AnoModelo || '';
        this.CodigoFipe = veiculo.CodigoFipe || '';
        this.Combustivel = veiculo.Combustivel || '';
        this.Marca = veiculo.Marca || '';
        this.MesReferencia = veiculo.MesReferencia || '';
        this.Modelo = veiculo.Modelo || '';
        this.SiglaCombustivel = veiculo.SiglaCombustivel || '';
        this.TipoVeiculo = veiculo.TipoVeiculo || '';
        this.Valor = veiculo.Valor || '';
    }
    return Veiculo;
}());



/***/ }),

/***/ "./src/app/clientes/clientes.component.html":
/*!**************************************************!*\
  !*** ./src/app/clientes/clientes.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"clientes\">\n  <div *ngIf=\"!clientes[0]\" class=\"semclientes\">\n    <p>Não há clientes cadastrados.</p>\n  </div>\n  <ul *ngIf=\"clientes[0]\">\n    <li *ngFor=\"let cliente of clientes; let idx = index\" [id]=\"idx\">\n      <div class=\"cliente\">\n        <div class=\"actions\">\n          <a routerLink=\"/editar/{{idx}}\"><i class=\"material-icons\">edit</i>Editar</a>\n          <button (click)=\"delete(idx)\"><i class=\"material-icons\">delete_forever</i>Excluir</button>\n        </div>\n        <div class=\"dadospessoais\">\n          <ul>\n            <li><span class=\"nome\">Nome:</span><span class=\"value\">{{ cliente.dadospessoais.nome }}</span></li>\n            <li><span class=\"nome\">CPF:</span><span class=\"value\">{{ cliente.dadospessoais.cpf | mask: '000.000.000-00'}}</span></li>\n            <li><span class=\"nome\">Data de Nascimento:</span><span class=\"value\">{{ cliente.dadospessoais.datadenascimento | mask: '00/00/0000'}}</span></li>\n            <li><span class=\"nome\">Endereco:</span><span class=\"value\">{{ cliente.dadospessoais.endereco }}</span></li>\n          </ul>\n        </div>\n        <!-- <div class=\"dadosveiculo\">\n          <ul>\n            <li><span class=\"nome\">Tipo:</span><span class=\"value\">{{ cliente.dadosveiculo.tipo }}</span></li>\n            <li><span class=\"nome\">Marca:</span><span class=\"value\">{{ cliente.dadosveiculo.marca }}</span></li>\n            <li><span class=\"nome\">Modelo:</span><span class=\"value\">{{ cliente.dadosveiculo.modelo }}</span></li>\n            <li><span class=\"nome\">Ano:</span><span class=\"value\">{{ cliente.dadosveiculo.ano }}</span></li>\n          </ul>\n        </div> -->\n        <div class=\"veiculo\">\n          <ul>\n            <li>\n              <span class=\"nome\">Marca:</span><span class=\"value\">{{ cliente.veiculo.Marca }}</span>\n            </li>\n            <li>\n              <span class=\"nome\">Modelo:</span><span class=\"value\">{{ cliente.veiculo.Modelo }}</span>\n            </li>\n            <li>\n              <span class=\"nome\">Ano:</span>\n              <span class=\"value\">{{ cliente.veiculo.AnoModelo }}</span>\n            </li>\n            <li>\n              <span class=\"nome\">Combustível:</span>\n              <span class=\"value\">{{ cliente.veiculo.Combustivel }}</span>\n            </li>\n            <li>\n              <span class=\"nome\">Código Fipe:</span>\n              <span class=\"value\">{{ cliente.veiculo.CodigoFipe }}</span>\n            </li>\n            <li>\n              <span class=\"nome\">Valor:</span>\n              <span class=\"value\">{{ cliente.veiculo.Valor }}</span>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/clientes/clientes.component.scss":
/*!**************************************************!*\
  !*** ./src/app/clientes/clientes.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#clientes .semclientes p {\n  text-align: center; }\n\n#clientes ul {\n  margin: 0;\n  padding: 0; }\n\n#clientes ul li {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    vertical-align: text-top;\n    display: inline-block; }\n\n#clientes ul li:last-child .cliente {\n      margin-bottom: 0px; }\n\n#clientes ul li .cliente {\n      margin: 0 0 30px 0;\n      background: #266090;\n      border-radius: 3px;\n      padding: 10px 0px;\n      transition: all 0.5s; }\n\n#clientes ul li .cliente:hover .actions {\n        display: block; }\n\n#clientes ul li .cliente .actions {\n        display: none;\n        position: absolute;\n        width: 120px;\n        right: 15%; }\n\n#clientes ul li .cliente .actions button, #clientes ul li .cliente .actions a {\n          width: 80px;\n          background: #2e6fa4;\n          border: 1px solid #fff;\n          border-radius: 3px;\n          padding: 0px 10px 0px 5px;\n          margin: 15px 0px 5px 0px;\n          text-decoration: none;\n          font-family: 'teko';\n          font-size: 15px;\n          line-height: 35px;\n          display: block;\n          float: right;\n          transition: all 0.5s;\n          cursor: pointer; }\n\n#clientes ul li .cliente .actions button .material-icons, #clientes ul li .cliente .actions a .material-icons {\n            margin-right: 5px;\n            font-size: 18px;\n            line-height: 18px;\n            vertical-align: text-top; }\n\n#clientes ul li .cliente .actions button:disabled, #clientes ul li .cliente .actions button:disabled:hover, #clientes ul li .cliente .actions a:disabled, #clientes ul li .cliente .actions a:disabled:hover {\n            border: 1px solid #2f5371; }\n\n#clientes ul li .cliente .actions button:disabled, #clientes ul li .cliente .actions button:disabled *, #clientes ul li .cliente .actions button:disabled:hover, #clientes ul li .cliente .actions button:disabled:hover *, #clientes ul li .cliente .actions a:disabled, #clientes ul li .cliente .actions a:disabled *, #clientes ul li .cliente .actions a:disabled:hover, #clientes ul li .cliente .actions a:disabled:hover * {\n            background: #2e6fa4;\n            color: #2f5371;\n            cursor: not-allowed; }\n\n#clientes ul li .cliente .actions button:hover, #clientes ul li .cliente .actions a:hover {\n            background: #0f4f83;\n            border: 1px solid #0e4877; }\n\n#clientes ul li .cliente .actions button:hover, #clientes ul li .cliente .actions button:hover *, #clientes ul li .cliente .actions a:hover, #clientes ul li .cliente .actions a:hover * {\n            transition: all 0.7s;\n            color: #fff77e; }\n\n#clientes ul li .cliente .actions a {\n          width: 63px;\n          text-align: center; }\n\n#clientes ul li .cliente .dadospessoais ul,\n      #clientes ul li .cliente .dadosveiculo ul,\n      #clientes ul li .cliente .veiculo ul {\n        margin: 0;\n        padding: 0; }\n\n#clientes ul li .cliente .dadospessoais ul li,\n        #clientes ul li .cliente .dadosveiculo ul li,\n        #clientes ul li .cliente .veiculo ul li {\n          width: auto;\n          list-style: none;\n          vertical-align: text-top;\n          display: inline-block; }\n\n#clientes ul li .cliente .dadospessoais ul li .nome, #clientes ul li .cliente .dadospessoais ul li .value,\n          #clientes ul li .cliente .dadosveiculo ul li .nome,\n          #clientes ul li .cliente .dadosveiculo ul li .value,\n          #clientes ul li .cliente .veiculo ul li .nome,\n          #clientes ul li .cliente .veiculo ul li .value {\n            padding: 0 20px; }\n\n#clientes ul li .cliente .dadospessoais ul li .nome,\n          #clientes ul li .cliente .dadosveiculo ul li .nome,\n          #clientes ul li .cliente .veiculo ul li .nome {\n            margin-right: 5px;\n            font-size: 16px;\n            display: block; }\n\n#clientes ul li .cliente .dadospessoais ul li .value,\n          #clientes ul li .cliente .dadosveiculo ul li .value,\n          #clientes ul li .cliente .veiculo ul li .value {\n            font-size: 20px;\n            color: #fff77e; }\n\n#clientes ul li .cliente .dadospessoais {\n        padding-bottom: 10px;\n        border-bottom: 1px solid #2e6fa4; }\n\n#clientes ul li .cliente .veiculo {\n        padding-top: 10px; }\n"

/***/ }),

/***/ "./src/app/clientes/clientes.component.ts":
/*!************************************************!*\
  !*** ./src/app/clientes/clientes.component.ts ***!
  \************************************************/
/*! exports provided: ClientesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesComponent", function() { return ClientesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datastorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../datastorage.service */ "./src/app/datastorage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientesComponent = /** @class */ (function () {
    function ClientesComponent(ds) {
        this.ds = ds;
        this.updateClientes();
    }
    ClientesComponent.prototype.ngOnInit = function () { };
    ClientesComponent.prototype.updateClientes = function () {
        this.clientes = this.ds.get();
    };
    ClientesComponent.prototype.edit = function (value) {
        // let value = $event.target.value;
        // let target = $event.srcElement.value;
        console.log("value", value);
        // console.log("target", target);
    };
    ClientesComponent.prototype.delete = function (value) {
        var _confirm = confirm("Voc\u00EA confirma a exclus\u00E3o do cliente \"" + this.clientes[value].dadospessoais.nome + "\"?");
        if (_confirm) {
            this.ds.remove(value);
            this.updateClientes();
            alert("Cliente excluído com sucesso");
        }
    };
    ClientesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clientes',
            template: __webpack_require__(/*! ./clientes.component.html */ "./src/app/clientes/clientes.component.html"),
            styles: [__webpack_require__(/*! ./clientes.component.scss */ "./src/app/clientes/clientes.component.scss")]
        }),
        __metadata("design:paramtypes", [_datastorage_service__WEBPACK_IMPORTED_MODULE_1__["DatastorageService"]])
    ], ClientesComponent);
    return ClientesComponent;
}());



/***/ }),

/***/ "./src/app/datastorage.service.ts":
/*!****************************************!*\
  !*** ./src/app/datastorage.service.ts ***!
  \****************************************/
/*! exports provided: DatastorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatastorageService", function() { return DatastorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var STORAGE_KEY = 'clientes';
var DatastorageService = /** @class */ (function () {
    function DatastorageService(storage) {
        this.storage = storage;
    }
    DatastorageService.prototype.get = function () {
        return this.storage.get(STORAGE_KEY) || [];
    };
    DatastorageService.prototype.pick = function (index) {
        var data = this.storage.get(STORAGE_KEY);
        var picked = data.reduce(function (data, item, idx) {
            if (idx == index) {
                data = item;
            }
            return data;
        }, {});
        return picked;
    };
    DatastorageService.prototype.add = function (item) {
        var data = this.storage.get(STORAGE_KEY) || [];
        data.push(item);
        this.storage.set(STORAGE_KEY, data);
    };
    DatastorageService.prototype.update = function (index, cadastro) {
        var data = this.storage.get(STORAGE_KEY);
        var dataUpdated = data.reduce(function (data, item, idx) {
            if (idx == index) {
                data.push(cadastro);
            }
            else {
                data.push(item);
            }
            return data;
        }, []);
        this.storage.set(STORAGE_KEY, dataUpdated);
    };
    DatastorageService.prototype.remove = function (index) {
        var data = this.storage.get(STORAGE_KEY);
        var dataUpdated = data.reduce(function (data, item, idx) {
            if (idx != index) {
                data.push(item);
            }
            return data;
        }, []);
        this.storage.set(STORAGE_KEY, dataUpdated);
    };
    DatastorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE"])),
        __metadata("design:paramtypes", [Object])
    ], DatastorageService);
    return DatastorageService;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav [class.pageactive]=\"navUrl != '/'\">\n    <ul>\n      <li>\n        <a routerLink=\"clientes\" [class.selected]=\"navUrl == '/clientes'\">\n          <i class=\"material-icons\">directions_car</i>\n          <span>Clientes</span>\n        </a>\n      </li>\n      <li>\n        <a routerLink=\"cadastro\" [class.selected]=\"navUrl == '/cadastro'\">\n          <i class=\"material-icons\">add_circle</i>\n          <span>Cadastrar um novo veículo</span>\n        </a>\n      </li>\n    </ul>\n</nav>"

/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav ul {\n  margin: 0;\n  padding: 0;\n  transition: all 0.5s; }\n  nav ul li {\n    text-align: center;\n    display: block;\n    transition: all 0.5s; }\n  nav ul li:first-child, nav ul li:last-child {\n      transition: all 0.5s; }\n  nav ul li:first-child {\n      margin-top: 100px;\n      margin-bottom: 50px; }\n  nav ul li:last-child {\n      margin-top: 50px;\n      margin-bottom: 100px; }\n  nav ul li a {\n      width: 280px;\n      background: #4295d8;\n      border: 1px solid #fff;\n      border-radius: 3px;\n      padding: 10px 15px;\n      margin: 0 20px;\n      text-decoration: none;\n      font-size: 24px;\n      line-height: 50px;\n      display: inline-block;\n      transition: all 0.5s; }\n  nav ul li a.selected {\n        background: #2f6fa4;\n        border: 1px solid #1d5889; }\n  nav ul li a .material-icons {\n        margin-right: 5px;\n        line-height: 30px;\n        vertical-align: text-top; }\n  nav ul li a span {\n        line-height: 40px; }\n  nav ul li a:hover {\n        background: #b5deff;\n        border: 1px solid #fff; }\n  nav ul li a:hover, nav ul li a:hover * {\n        transition: all 0.7s;\n        color: #0e4f83; }\n  nav.pageactive ul {\n  text-align: center; }\n  nav.pageactive ul li {\n    display: inline-block; }\n  nav.pageactive ul li:first-child {\n      margin-top: 20px;\n      margin-bottom: 20px; }\n  nav.pageactive ul li:last-child {\n      margin-top: 20px;\n      margin-bottom: 20px; }\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    function MenuComponent(router) {
        var _this = this;
        this.router = router;
        this.navUrl = '';
        router.events.subscribe(function (_) {
            if (_.url !== undefined) {
                _this.navUrl = _.url;
            }
        });
    }
    MenuComponent.prototype.ngOnInit = function () { };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/veiculosfipe.service.ts":
/*!*****************************************!*\
  !*** ./src/app/veiculosfipe.service.ts ***!
  \*****************************************/
/*! exports provided: VeiculosfipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VeiculosfipeService", function() { return VeiculosfipeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VeiculosfipeService = /** @class */ (function () {
    function VeiculosfipeService(http) {
        this.http = http;
        this.baseUrl = 'https://parallelum.com.br/fipe/api/v1';
    }
    VeiculosfipeService.prototype.getMarcas = function (tipo) {
        return this.http.get(this.baseUrl + "/" + tipo + "/marcas");
    };
    VeiculosfipeService.prototype.getModelos = function (tipo, marca) {
        return this.http.get(this.baseUrl + "/" + tipo + "/marcas/" + marca + "/modelos");
    };
    VeiculosfipeService.prototype.getAnos = function (tipo, marca, modelo) {
        return this.http.get(this.baseUrl + "/" + tipo + "/marcas/" + marca + "/modelos/" + modelo + "/anos");
    };
    VeiculosfipeService.prototype.getValor = function (tipo, marca, modelo, ano) {
        return this.http.get(this.baseUrl + "/" + tipo + "/marcas/" + marca + "/modelos/" + modelo + "/anos/" + ano);
    };
    VeiculosfipeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], VeiculosfipeService);
    return VeiculosfipeService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/carloseduardogomes/Google Drive/carlim/_VAGAS_2018/rhizom/test/ng6-crudtest/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map