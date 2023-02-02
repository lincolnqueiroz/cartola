# Tutorial Django + React

## Setup Docker

Instalar docker (docs.docker.com/engine/install/ubuntu/)

```
sudo apt install uidmap
```

Usar docker sem root

```
cd /usr/bin
dockerd-rootless-setuptool.sh install
```

## Setup Django

```
django-admin startproject backend
```

Criar arquivo Dockerfile

```
# /backend/Dockerfile

FROM python:3
ENV PYTHONUNBUFFERED 1
WORKDIR /app/backend
COPY requirements.txt ./
RUN pip install -r requirements.txt
COPY . ./
EXPOSE 8000
```

Criar arquivo requirements.txt

```
# /backend/requirement.txt

djangorestframework==3.11.2
Django==3.1.14
gunicorn==20.0.4
```

## Setup React

```
npm create vite@latest
```

Criar arquivo Dockerfile

```
# /frontend/Dockerfile

FROM node:16.16.0-alpine
WORKDIR /app/frontend/

COPY . .

RUN mkdir -p  build

RUN whoami

RUN chown node:node -R build

RUN npm install

EXPOSE 5173
```

Editar o arquivo de configuração vite

```
# /frontend/vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 5173,
  }
})
```

## Docker Compose

Criar arquivo docker-compose.yml

```

# /docker-compose.yml

version: '1'

services:
  db:
    image: postgres
    environment:
      - POSTGRES_DB=postgres
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres

  backend:
    build:
      context: ./backend
    command: python manage.py runserver 0.0.0.0:8000
    container_name: backend
    ports:
      - "8000:8000"
    volumes:
      - ./backend:/app/backend

  frontend:
    build:
      context: ./frontend
    container_name: frontend
    command: npm run dev
    environment:
      - CHOKIDAR_USEPOLLING=true
    volumes:
      - ./frontend:/app/frontend
    ports:
      - 5173:5173
      - 4173:4173
```

Executar

```
docker compose build
```

```
docker compose up
```

## Setup da API backend

Criar o app django "api"

```
python manage.py startapp api
```

Criar arquivo urls.py em /api

```
# /backend/api/urls.py

from django.urls import path

from . import views

urlpatterns = [
    path('hello-world', views.helloWorld, name='helloWorld'),
]
```

Adicionar path da api no urls.py em /backend

```
# /backend/backend/urls.py

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include('api.urls'))
]
```

Criar o endpoint no views.py em /api

```
# /backend/api/views.py

from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from django.http import JsonResponse, HttpResponse

@api_view(['GET'])
def helloWorld(request):
    return JsonResponse({'message':'hello world!'})
```

## Frontend consumindo a api

Adicionar axios as dependências do package.json

```
"dependencies": {
...
    "axios": "^0.27.2",
...
}
```

Modificar a função defineConfig do vite.config.js para fazer o proxy para o backend

```
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    proxy: {
      '/api':{
        target: 'http://backend:8000',
        changeOrigin: true,
        ws: true
      }
    }
  }
})
```

Criar a pasta apiCalls em /frontend/src/ e dentro dela criar o arquivo apiInstance.jsx

```
// frontend/src/apiCalls/apiInstance.jsx

import axios from "axios";

const apiInstance = axios.create();

export default apiInstance;
```

Em apiCalls, criar a pasta calls, onde ficaram as funções de chamada de api, nesta criar o arquivo "fetchEndpoint.jsx", no caso fetchHelloWorld.jsx

```
// frontend/src/apiCalls/calls/fetchHelloWorld.jsx

import apiInstance from "../apiInstance";

/**
 * Resgata informação da API
 * @param {String} setMessage - Função para atualizar variável message
 */
function fetchHelloWorld(setMessage){
    const url = "/api/hello-world";

    apiInstance({
        method: "GET",
        url: url,
    })
    .then((response) => {
        setMessage(response.data['message'])
    })
}

export default fetchHelloWorld;
```

Em apiCalls, criar o arquivo apiCalls.jsx

```
// frontend/src/apiCalls/apiCalls.jsx

import fetchHelloWorld from "./calls/fetchHelloWorld";

const apiCalls = {
    //url: /api/hello-world
    fetchHelloWorld,
}

export default apiCalls;
```

Em /src modificar a função App no arquivo App.jsx

```
// frontend/src/App.jsx

import apiCalls from './apiCalls/apiCalls'

function App() {
  const [message, setMessage] = useState('')
  apiCalls.fetchHelloWorld(setMessage);
  return (
    <h1>
      {message}
    </h1>
  )
}
```

## Template de páginas

Criar pasta pages, components e styles em /frontend/src/
Em styles criar o arquivo MuiTheme.jsx
```
import { createTheme } from '@mui/material/styles/createMuiTheme';

const MuiTheme =  createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#ff6300',
      light: '#ff9a59',
      dark: '#9c3f04',
    },
    secondary: {
      main: '#ff0e00',
    },
    background: {
      paper: '#ff8e64',
    },
  },
});

export default MuiTheme;
```
Adicionar o "react-router-dom" nas dependências do package.json
```
"react-router-dom": "^6.3.0"
```
