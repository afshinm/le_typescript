import { test } from 'ava';
import sinon from 'sinon';
import axios from 'axios';
import { APIClient } from './api_client';
import config from '../config';

test.before(t => {
    t.context = {
        axiosPost: sinon.stub(axios, 'post'),
        endpoint: '://' + config.api.endpoint + config.api.prefix + 'token',
        payload: {
            boo: 1
        }
    };
});

test('post return type', (t) => {
    const context: any = t.context;
    const apiClient = new APIClient('token');

    t.true(apiClient.post(context.payload) instanceof Promise);
});

test('post request', t => {
    const context: any = t.context;
    const apiClient = new APIClient('token');
    const axiosPost = context.axiosPost;

    apiClient.post(context.payload);

    t.true(
        axiosPost.calledWithExactly('https' + context.endpoint, context.payload)
    );
});

test('http post request', t => {
    const context: any = t.context;
    const axiosPost = context.axiosPost;
    const apiClient = new APIClient('token', false);

    apiClient.post(context.payload);

    t.true(
        axiosPost.calledWithExactly('http' + context.endpoint, context.payload)
    );
});
