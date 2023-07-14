#configuración para indicar cómo será la imagen a ejecutar
FROM node:16

WORKDIR /app

#lo agregamos a la app
COPY package*.json /app/

RUN npm install

#copiamos todo el código de nuestra carpeta al contenedor: Fuente(mi PC)->Destino(app del contenedor)
COPY . .   

#exponemos sólo un puerto
EXPOSE 8000

#comando para hacer correr la imagen
CMD ["npm", "start"]
