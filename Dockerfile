FROM node:20 as storybook
WORKDIR /usr/veera
COPY ./package.json ./
RUN npm i
COPY ./ ./
RUN npm run build-scss
RUN npm run build-storybook

FROM nginx:alpine
COPY --from=storybook /usr/veera/storybook-static /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]