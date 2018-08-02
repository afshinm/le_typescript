import axios from 'axios';
import config from '../config';

export class APIClient {
  private readonly baseURL: string;

  constructor(token: string, useSSL: boolean = true) {
    this.baseURL =
      (useSSL ? 'https' : 'http') +
      '://' +
      config.api.endpoint +
      config.api.prefix +
      token;
  }

  public async post(payload: object): Promise<any> {
    return axios.post(this.baseURL, payload);
  }
}
