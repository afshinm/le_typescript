import { test } from 'ava';
import { Log, LogLevel } from './log';


test.before(t => {
    t.context = new Log(LogLevel.Info, 'test');
});

test('log constructor', t => {
    const log: Log = t.context as Log;
    t.deepEqual(log.level, 'info')
});

test('info log.stringify', t => {
    const log: Log = t.context as Log;
    t.deepEqual(log.stringify(), '[info] test')
});

test('warn log.stringify', t => {
    const log = new Log(LogLevel.Warning, 'test');
    t.deepEqual(log.stringify(), '[warn] test')
});

test('log log.stringify', t => {
    const log = new Log(LogLevel.Log, 'test');
    t.deepEqual(log.stringify(), '[log] test')
});

test('error log.stringify', t => {
    const log = new Log(LogLevel.Error, 'test');
    t.deepEqual(log.stringify(), '[error] test')
});
