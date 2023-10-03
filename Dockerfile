FROM node:latest as storybook
COPY . ./
RUN npm ci
RUN npm run build-scss
RUN npm run build-storybook

FROM nginx:alpine
COPY --from=storybook ./storybook-static /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]