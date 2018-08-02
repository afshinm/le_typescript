import { test } from 'ava';
import sinon from 'sinon';
import { APIClient } from './api_client';
import { Logger } from './logger';

test('logger.info should return a promise', t => {
  const logger = new Logger('token');
  t.true(logger.info('test') instanceof Promise);
});

test('logger.info should call the API client', t => {
  const apiClient = sinon.stub(APIClient.prototype, 'post');
  const logger = new Logger('token');

  logger.warning('test log');

  t.true(
    apiClient.calledOnceWithExactly({ level: 'warn', message: 'test log' })
  );
});
