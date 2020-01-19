FROM node:13.6.0

HEALTHCHECK CMD wget -q -O - localhost:${PORT}/index.html

CMD npm start
