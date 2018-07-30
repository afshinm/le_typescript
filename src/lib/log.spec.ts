import { test } from 'ava';
import { Log, LogLevel } from './log';

test('log constructor', t => {
    const _log = new Log(LogLevel.Info);
    t.deepEqual(_log.level, 'info')
});

test('log.stringify', t => {
    const _log = new Log(LogLevel.Info);
    t.deepEqual(_log.stringify(), 'info')
});
