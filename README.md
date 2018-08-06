## LogEntries (Rapid7 InsightOps) in TypeScript

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

### License

MIT
