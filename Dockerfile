FROM node

HEALTHCHECK CMD wget -q -O - localhost:${PORT}/index.html

CMD npm start
