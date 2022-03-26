# Fast Express.js API template

Built on top of express-generator

Includes:
- Modern JavaScript support (ES6)
- ESLint
- Prettier
- Dev server (Nodemon)
- Dotenv support at root level
- Routing setup
- Dockerfile build image

## Instructions

1. Click on "Use this template" in [this repo](https://github.com/clauRamirez/nodejs-express-ES6)
2. Clone it in your local machine
3. If you fancy using Docker you can run a local Node environment:
```bash
# default port is 4000
# add 'e "PORT=your_port"' otherwise
docker run --rm -it -p 4000:4000 -v $PWD:/home/app -w /home/app -u node --name express-api  node:17-bullseye /bin/bash
```
4. No docker? Run:
```bash
npm install
npm run watch:dev
```