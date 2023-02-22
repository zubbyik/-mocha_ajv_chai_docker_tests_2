### Running a Test with Mocha as the test runner, Chai as the test Library using docker :heart:

=======================================================================================

1. create the app and the Test File
   a. App name the app.js
   b. test file is test_src.js
2. Ensure that the host system(in my instance my local WS) has npm and tsc installed globally
3. initialize the typescript project in the local machine << tsc --init
4. initialiaze the node package manager with << npm init
5. Install the following as dev dependencies:
   a. @types/chai
   b. @types/mocha
   c. mocha
   d. typescript
6. Install the following as dependencies:
   a. AJV #will be used later for testing json schema
   b. Chai

7. create a Dockerfile

8. In the Dockerfile
   - Base node:19-alpine #choice is because its dependencies are sufficient in my case and it has low footprint ~176MB
   - mkdir src #[where app lives] and tests #[where test files live]
   - Copy from host to docker machine the following files:
     - copy test_src.ts ./tests
     - copy app.ts ./src
     - copy package.json to docker [copy package.json .]
     - copy tsconfig.json #[typescript config file] to docker
     - run npm install
     - copy the rest of the files from host to docker
     - do >> RUN npm run build #[to compile ts file to js -es5 %see tsconfig.json for details]
     - do >> ENTRYPOINT ["npm"] :crossed_fingers:
     - do >> CMD ["test", "test_src.js"]
9. run the docker build #[docker build -t name(in my instance node:test) .
10. run the docker run #[docker run -it --rm node:test]
11. Test should pass is it is a positive unit test and the code is alright

### !! Thanks :love_you_gesture:
