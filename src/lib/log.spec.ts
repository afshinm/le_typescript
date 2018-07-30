import { test } from 'ava';
import { Log, LogLevel } from './log';


test.before(t => {
    t.context = new Log(LogLevel.Info, 'test');
});

test('log constructor', t => {
    const _log: Log = t.context as Log;
    t.deepEqual(_log.level, 'info')
});

test('log.stringify', t => {
    const _log: Log = t.context as Log;
    t.deepEqual(_log.stringify(), '[info] test')
});
