FROM node:20.11-bullseye

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN corepack enable

COPY . /app/

RUN pnpm install

EXPOSE 5173
EXPOSE 3000

CMD [ "pnpm", "run", "dev" ]