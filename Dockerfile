FROM mcr.microsoft.com/playwright:v1.41.1-jammy
WORKDIR /usr/src/app
COPY . .
RUN npm install
ENTRYPOINT ["./entrypoint.sh"]
