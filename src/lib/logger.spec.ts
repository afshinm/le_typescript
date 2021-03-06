import { test } from 'ava';
import nock from 'nock';
import sinon from 'sinon';
import config from '../config';
import { APIClient } from './api_client';
import { Logger } from './logger';

test.before(_ => {
  nock(`https://${config.api.endpoint}`)
    .persist()
    .post('/logs/token')
    .reply(200);
});

test('logger.info should return a promise', t => {
  const logger = new Logger('token');
  t.true(logger.info('test') instanceof Promise);
});

test('logger.info should call the API client', t => {
  const apiClient = sinon.stub(APIClient.prototype, 'post');
  const logger = new Logger('token');

  logger.warning('test log');

  t.true(apiClient.calledOnceWithExactly({ level: 'warn', event: 'test log' }));

  apiClient.restore();
});

test('logger.info should send an HTTP call', async t => {
  const logger = new Logger('token');
  const res = await logger.warning('testing');
  t.deepEqual(res.status, 200);
});
