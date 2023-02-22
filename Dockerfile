FROM node:19-alpine
WORKDIR dev
RUN mkdir src && mkdir tests
COPY test_src.ts tests/
COPY ["build.ts",  "src/package.json",  "./"]
COPY ["tsconfig.json",  "./"]
RUN npm install
RUN npm run build
COPY . .
ENTRYPOINT ["node"]
CMD ["test_src.js"]

