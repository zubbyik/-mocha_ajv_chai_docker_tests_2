FROM node:19-alpine
WORKDIR /app
# RUN mkdir src && mkdir tests
# COPY test_src.ts tests/
COPY ["tsconfig.json",  "package.json",  "./"]
# COPY ["test_src.ts", "app.ts", "./"]
RUN npm install
# RUN npm run build
COPY . ./
# ENTRYPOINT ["node"]
# CMD ["test_src.js"]

