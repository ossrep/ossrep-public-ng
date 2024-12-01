# Build
FROM registry.access.redhat.com/ubi9/nodejs-20:1-59.1726696138 as build-stage

WORKDIR /app
COPY --chown=1001 package*.json ./
RUN npm install
COPY --chown=1001 . .
ENV NODE_ENV=production
RUN npm run build

# Package
FROM registry.access.redhat.com/ubi9/nginx-124:1-25.1726696143

COPY --from=build-stage /app/dist/ossrep-public-ng/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080
ENTRYPOINT ["nginx", "-g", "daemon off;"]
