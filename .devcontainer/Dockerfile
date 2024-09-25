FROM node:lts

RUN apt-get update && apt-get install -y \
    curl \
    git \
    bash \
    && rm -rf /var/lib/apt/lists/*

RUN npm install -g pnpm

WORKDIR /workspace

COPY package.json pnpm-lock.yaml* ./
RUN pnpm install

COPY . .

CMD ["pnpm", "run", "dev"]
