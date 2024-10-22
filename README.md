# Файл создан для тренировки тестирования API, UI, DB

Для среды нужно установить nodejs 16.20.0:

    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
    nvm install 16.20.0
    nvm use 16.20.0

Для написания API автотестов мы будем использовать:

    playwright - npm install -g playwright@latest
    Для создания тестового проекта - npm init playwright@latest

   Опционально: 
   
        allure-playwright - yarn add allure-playwright/npm install allure-playwright;
        dotenv - yarn add dotenv /npm install dotenv, - для чтения настроек из .env файла;
        ajv- yarn add ajv/npm install ajv, - для валидации JSON схемы;

По установки зависимостей нужно установить:

    npm install --save-dev @types/node

Перед прогоном тестов: 

    npx playwright install

Для прогона тестов: 

    npx playwright test (/ui, /api, /db - опционально, если нужно запустить тесты в определенных папках)

Для визуального прогона теста:

    npx playwright test --headed

Для открытия UI мода:

    npx playwright test --ui