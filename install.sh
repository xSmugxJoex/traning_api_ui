#!/bin/bash

# Установка nvm и Node.js
echo "Install npm 16.20.0 and nvm"

# Проверка, установлен ли nvm
if command -v nvm &> /dev/null; then
    echo "nvm is already installed"
else
    # Установка nvm
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

    # Загрузка nvm в текущий сеанс
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
fi

# Проверка, установлена ли Node.js версии 16.20.0
if nvm ls | grep -q "v16.20.0"; then
    echo "Node.js version 16.20.0 is already installed"
else
    # Установка Node.js версии 16.20.0
    nvm install 16.20.0
fi

# Использование установленной версии Node.js
nvm use 16.20.0

echo "Install Playwright and allure-playwright"

# Установка необходимых пакетов
npm install -g playwright@latest

echo "Installation completed!"
