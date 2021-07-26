import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  // constructor() {}

  async test() {
    return 'ok';
  }
}
