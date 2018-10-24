import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Account } from './account';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const accounts = [
      { username: 'admin', password: '12345' },
      { username: 'power', password: 'user' },
      { username: 'sys', password: 'admin' }
    ];
    return {accounts};
  }
}
