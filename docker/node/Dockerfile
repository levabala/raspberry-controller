FROM node:14.16.0 as builder
WORKDIR /node

COPY . ./
RUN yarn config set strict-ssl false
RUN yarn --frozen-lockfile --non-interactive

RUN yarn build
RUN npm prune --production

FROM node:14.16.0-slim
WORKDIR /node

RUN apt-get update && \
      apt-get install -y --no-install-recommends curl && \
      apt-get -y autoremove && \
      apt-get clean && \
      rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

COPY ./docker/node/docker-entrypoint.sh /usr/local/bin

COPY --from=builder --chown=node:node /node/nest-cli.json /node/
COPY --from=builder --chown=node:node /node/ormconfig.js /node/
COPY --from=builder --chown=node:node /node/dist /node/dist/
COPY --from=builder --chown=node:node /node/.next /node/.next/
COPY --from=builder --chown=node:node /node/node_modules /node/node_modules/

ENV NODE_PATH dist
ENV NODE_ENV production

ENTRYPOINT ["docker-entrypoint.sh"]

EXPOSE 5000
