FROM node

ARG PORT

HEALTHCHECK CMD wget -q -O - localhost:${PORT}/index.html

cmd npm start
