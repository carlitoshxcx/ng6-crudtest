# Ng6Crudtest

<br>

### Cadastro de clientes

Fazer uma aplicação web usando Angular versão 6 com um CRUD simples salvando em localstorage. <br>
O aplicativo deverá ter uma tela de listagem, uma tela de cadastro e uma tela de editar. <br>
O delete pode ser feito a partir da própria listagem. <br>
O cadastro deverá ser de um cliente com as seguintes informações:<br>

	- Nome
	- CPF
	- Data de nascimento
	- Endereço
	- Veículo

O veículo deverá ser escolhido a partir de uma combo box, que deverá buscar a listagem de veículos (marca e modelo) a partir de uma api pública: https://deividfortuna.github.io/fipe/

A tela de novo cliente deverá ser um formulário com validações nos campos de cpf e todos os campos deverão ser obrigatórios. A edição pode ser na mesma tela de cadastro, mas deverá ter as mesmas validações.

<br>

## Server
Execute `ng serve -o` no terminal. <br>
O App será exibido no endereço `http://localhost:4200/`.
