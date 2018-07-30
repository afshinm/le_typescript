import { test } from 'ava';
import { Logger } from './logger';

test('logger.info should return a promise', t => {
    const _logger = new Logger('token');
    t.true(_logger.info() instanceof Promise);
});
