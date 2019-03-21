# Database

Para facilitar o desenvolvimento, foi selecionado o banco de dados [Couchdb](http://couchdb.apache.org/) para persistir os dados.
Esse banco foi selecionado pelos seguintes montivos:
* É um banco NoSQL
* Permite o desenvolvimento offline
* Realizar o sync automatico com o banco de dados remoto
* Foi criado para ser autoescalavel
* Foi criado para trabalhar com altas demandas de operação e storage.

Para facilitar o desenvolvimento será utilizado o [Pouchdb](https://pouchdb.com/), que é uma abstraçao do CouchDB para o desenvolvimento mobile ou web.
A lib utilizada no projeto é a [pouchdb-react-native](https://www.npmjs.com/package/pouchdb-react-native).