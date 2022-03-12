# This is a test automation application for GraphQL example application - apollo.
[Apollo app github](https://github.com/apollographql/fullstack-tutorial.git)

### System requirements
1. Node.js v8.x or later
2. npm v6.x or later
3. git v2.14.1 or later

## To run the tests, please use following command:
`npm install && npm run test`
---
*after tests are executed, it will turn off all nodemon processes!!!*

It will automatically pull apollo app and start it in the background.
After tests are executed, results might be seen in HTML test report: `mochawesome-report/mochawesome.html`

### Personal notes
In 9 out of 10 cases I won't do a environment set up in test logic for black-box e2e testing as it is here. But since it was the part of the task I did :)
All the checks are made outside of the test logic still - in the shell scripts, so it is slightly closer to the real world when those stages are done on CI/CD level.
All the development done on macos, so it should work under all unix-like systems. Haven't tested in on Windows.

