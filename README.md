# Файл создан для тренировки тестирования API, UI, DB

Для среды нужно установить nodejs 16.20.0:

    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
    nvm install 16.20.0
    nvm use 16.20.0

Для написания API автотестов мы будем использовать:

    playwright - npm install -g playwright@latest;
    
    allure-playwright - yarn add allure-playwright/npm install allure-playwright;
    dotenv - yarn add dotenv /npm install dotenv, - для чтения настроек из .env файла;
    ajv- yarn add ajv/npm install ajv, - для валидации JSON схемы;

По установки зависимостей нужно установить:

    npm install --save-dev @types/node