# stack-nodejs-express-typescript
 Stack para desenvolvimento nodejs + typecript de forma rápida e eficiente.
  
# Configurando a stack de desenvolvimento e produção.
  **Na pasta do seu projeto:**
  1. npm init
  2. npm i -D typescript sucrase
  3. mkdir src
  4. touch src/server.ts
  5. npm i -D nodemon
  6. Criar o arquivo nodemon.json com o conteúdo:
  
  
        {
        
          "watch": ["src"],
          "ext": "ts",
          "execMap": {
              "ts": "sucrase-node src/server.ts"
          }
          
        }
        
  
   7. No package.json, adicionar os scripts dev e build
   
        "scripts": {
        
          "dev": "nodemon src/server.ts",
          "build": "sucrase ./src -d .dist --transforms typescript,imports"
          
        },
        
      
    Para testar: npm run dev ou build
  
  8. Instalar o eslint: npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
  
  9. Inicializar o eslint: Vá até o diretório .\node_modules\.bin\eslint e execute --init

          1.Marque a opção (To check syntax, find problems, and enforce code style)

          2.Marque a opção (JavaScript modules import/export)

          3.Marque a opção (None of these)

          4.Marque a opção (Node)

          5.Marque a opção (Use a popular style guide)

          6.Marque a opção (Standard (https://github.com/standard/standard))

          7.Marque a opção (JavaScript)

  
  10. Configurar o eslint:
  
      1. No arquivo .eslintrc.js, adicionar os seguintes atributos:
      
           parser: '@typescript-eslint/parser',
           
           plugins: ['@typescript-eslint'],
        
      2. Adicionar ao atributo extends:
          
          'extends': [
          
                ...
              'prettier/@typescript-eslint',	
              
          ],
      
   11. No settings.json do vscode adicionar as configurações:
   
      "prettier.eslintIntegration": true,
      
      "eslint.enable": true,
      
      "eslint.autoFixOnSave": true,
      
      "eslint.validate": [
      
          "javascript",
          
          "javascriptreact",

          { "language": "typescript", "autoFix": true }, 
          
          { "language": "typescriptreact", "autoFix": true }
          
      ]

  # Docs
    https://github.com/alangpierce/sucrase
    https://github.com/eslint/eslint
    https://github.com/remy/nodemon
    
    
  Rodrigo Ribeiro 
  
