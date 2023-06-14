FROM cypress/base:16.16.0
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install --save-dev cypress
RUN $(npm bin)/cypress verify
RUN ["npm", "run", "allTests"] 