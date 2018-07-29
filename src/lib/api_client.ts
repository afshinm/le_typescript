import axios from 'axios';
import config from '../config';

export class APIClient {
  private readonly _baseURL: string;

  constructor(token: string, useSSL: boolean = true) {
    this._baseURL =
      (useSSL ? 'https' : 'http') +
      '://' +
      config.api.endpoint +
      config.api.prefix +
      token;
  }

  public async post(payload: object) {
    await axios.post(this._baseURL, payload);
  }
}
