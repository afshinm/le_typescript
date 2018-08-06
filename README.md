# LogEntries (Rapid7 InsightOps) SDK in TypeScript 

- Simple & easy to use API 
- Promise interface
- Works in NodeJS and Browser
- Fully tested

[![Build Status](https://travis-ci.com/afshinm/le_typescript.svg?branch=master)](https://travis-ci.com/afshinm/le_typescript)
[![License](https://img.shields.io/github/license/afshinm/le_typescript.svg)](https://github.com/afshinm/le_typescript)
[![Dependency Status](https://img.shields.io/david/afshinm/le_typescript.svg)](https://david-dm.org/afshinm/le_typescript)



## Usage

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

Check out [documentation](https://afshinm.github.io/le_typescript/docs/) page.


## Documentation

[https://afshinm.github.io/le_typescript/docs/](https://afshinm.github.io/le_typescript/docs/)

## TODO

- Adding stacktrace to the logs
- Global error catcher
- Adding platform info to the logs

## License

MIT
