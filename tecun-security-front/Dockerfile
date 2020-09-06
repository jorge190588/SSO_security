# build environment
FROM node:12.2.0-alpine as build

RUN apk update && apk upgrade && apk add --no-cache bash git openssh
RUN npm update

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
COPY . /app

ARG REACT_APP_API_BACKEND
ARG REACT_APP_API_SSO
ARG REACT_APP_SECRET_NAME

RUN rm /app/.env
RUN printf '#.env file \n\
    REACT_APP_SECRET_NAME=%s \n\
    REACT_APP_NODE_ENV="prod" \n\
    REACT_APP_PORT=4002 \n\
    REACT_APP_API_BACKEND=%s \n\
    REACT_APP_API_SSO=%s \n' "$REACT_APP_SECRET_NAME"     "$REACT_APP_API_BACKEND"     "$REACT_APP_API_SSO" >> /app/.env

RUN cat /app/.env
# COPY .env.tasting.prod /app/.env
RUN npm install
RUN npm run build

# production environment
FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]