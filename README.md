#  Zoo API (API de Gerenciamento de Zoológico)

Backend do sistema de gerenciamento de zoológico, desenvolvido com Node.js (Express) e PostgreSQL.

O ambiente de desenvolvimento utiliza Docker Compose para orquestrar o banco de dados.

## Como Iniciar o Projeto

Siga os passos abaixo para colocar o servidor e o banco de dados em funcionamento:

1. Pré-requisitos

Certifique-se de ter instalado em seu ambiente:

Node.js (versão LTS recomendada)

npm (gerenciador de pacotes do Node)

Docker e Docker Compose (necessário para o banco de dados)

2. Configuração de Variáveis de Ambiente

Todas as credenciais de banco de dados e portas são lidas do arquivo .env (que está configurado para ser ignorado pelo Git).

Crie um arquivo chamado .env na raiz do projeto com o seguinte conteúdo:
```bash
#Configurações do Aplicativo (Node.js)
APP_PORT=5000

# Configurações do Banco de Dados (PostgreSQL)
DB_USER=postgres
DB_PASSWORD=zoo123
DB_NAME=zoo_management
DB_HOST=localhost
DB_PORT=5435
```


3. Instalação de Dependências

Instale os pacotes Node.js necessários (Express, pg, dotenv):
```bash
npm install
```

4. Inicialização do Banco de Dados (PostgreSQL)

Usamos o Docker Compose para subir o container do PostgreSQL.

Subir o Container:
```bash
npm run db:up
```

Este comando inicia o container zoo_postgres_db em background. Na primeira vez que ele é executado, ele:

Cria o volume persistente para os dados.

Executa o script ./schema.sql para criar as tabelas animais e cuidados.

Verificar Status do Container:
```bash
docker ps
```

Confirme se o container zoo_postgres_db está com o status Up.

5. Iniciar o Servidor API

Com o banco de dados rodando, inicie o servidor Express:
```bash
npm start
```
## O servidor estará disponível em http://localhost:5000


6. Testar a Conexão com o Banco de Dados

Para confirmar que a aplicação Node.js está se comunicando corretamente com o PostgreSQL via porta 5435:

Acesse a rota de teste no seu navegador ou ferramenta API (como Postman/Insomnia):

GET http://localhost:5000/db-test


Resposta Esperada:
```json
{
  "status": "Success",
  "message": "Conexão com o PostgreSQL bem-sucedida! O banco de dados está pronto para ser usado."
}
```

### Scripts Úteis (package.json)

| Comando |Descrição|
| ----------| ----- |
|npm start|Inicia o servidor Node.js (Express).|
|npm run db:up|Sobe o container PostgreSQL via Docker Compose.|
|npm run db:down|Derruba o container PostgreSQL.|
|npm run dev|Executa db:up e npm start em sequência (requer que o npm start rode em outro terminal se você usa um processo de dev mais sofisticado).|



