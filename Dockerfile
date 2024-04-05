###################
# BASE IMAGE
###################

FROM node:21 as base

WORKDIR /usr/src/app
RUN apt-get update

# COPY --chown=node:node package*.json ./
RUN apt-get install build-essential -y  
RUN apt-get install python3 -y
COPY package*.json ./

RUN npm i rollup
RUN npm i @rollup/rollup-linux-x64-gnu

###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM base as development

WORKDIR /usr/src/app

ENV NODE_ENV=development

RUN npm i
# COPY --chown=node:node . .
COPY . .


# USER node

EXPOSE 4000

CMD ["npm", "run", "dev"]

###################
# BUILD FOR PRODUCTION
###################

FROM base As build

WORKDIR /usr/src/app

ENV NODE_ENV=production

RUN npm i --omit=dev && npm cache clean --force
RUN npm install @nestjs/cli

# COPY --chown=node:node . .
COPY . .

RUN npm run build

USER node

###################
# PRODUCTION
###################

FROM node:19-slim As production

# COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
# COPY --chown=node:node --from=build /usr/src/app/dist ./dist

COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist

CMD ["node", "dist/main.js"]