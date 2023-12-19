FROM mcr.microsoft.com/playwright:v1.40.0-jammy
WORKDIR /usr/src/app
COPY . .
RUN npm install
CMD ["npm", "test"]
