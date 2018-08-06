## LogEntries (Rapid7 InsightOps) SDK in TypeScript

- Simple & easy to use API 
- Promise interface
- Works in NodeJS and Browser
- Fully tested


### Usage

```js
const Logger = require('le').Logger;

const logger = new Logger('YOUR_TOKEN');

(async function () {
  await logger.error('boom');
  await logger.warning('boom');
  await logger.info('boom');
  await logger.log('boom');
})();

```

### Documentation

https://afshinm.github.io/le_typescript/docs/

### TODO

- Adding stacktrace to the logs
- Global error catcher
- Adding platform info to the logs

### License

MIT
