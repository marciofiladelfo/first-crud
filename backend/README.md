Rodar projeto

### mongo

### nodemon app.js

Sequencia de instalações do projeto

## Nodejs

# Mongodb

Em um terminal, emita o seguinte comando para importar a chave GPG pública do MongoDB de https://www.mongodb.org/static/pgp/server-4.4.asc:

### wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -

A operação deve responder com um OK.

Instale o gnupg e suas bibliotecas necessárias usando o seguinte comando:

### sudo apt-get install gnupg

Crie um arquivo de lista para MongoDB.

### Crie o arquivo de lista /etc/apt/sources.list.d/mongodb-org-4.4.list para sua versão do Ubuntu.

Edite o arquivo /etc/apt/sources.list.d/mongodb-org-4.4.list para Ubuntu 20.04 (Focal):

### echo "deb [arch = amd64, arm64] https://repo.mongodb.org/apt/ubuntu focal / mongodb-org / 4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list

Recarregue o banco de dados do pacote local.

### sudo apt-get update

Instale a versão mais recente do MongoDB.
Para instalar a versão estável mais recente, emita o seguinte

### sudo apt-get install -y mongodb-org

<--------------------------------------------->

# Mongo Compass

Download MongoDB Compass

### wget https://downloads.mongodb.com/compass/mongodb-compass_1.23.0_amd64.deb

Install MongoDB Compass

### sudo dpkg -i mongodb-compass_1.23.0_amd64.deb

Start MongoDB Compass

### mongodb-compass

<--------------------------------------------->

Sequencia para criar o projeto

Criar o arquivo package

### npm init

Gerencia as requisições, rotas e URLs, entre outrps

### npm install --save express

Instalar biblioteca para reiniciar servidor automaticamente quando houver alterações no projeto

### npm install -g --save nodemon

Instalar o banco de dados Mongodb

### npm install --save mongodb

Instalar Mongoose - Tradutor do banco de dados Mongodb para objetos JavaScript.

### npm install --save mongoose

Permissão de acesso através da biblioteca cors

### npm install --save cors

Gerar backup do banco de dados Mongodb

### mongodump --db celke --out c:\data\db

Restaurar backup do banco de dados Mongodb

### mongorestore --db celke c:\data\db\celke
