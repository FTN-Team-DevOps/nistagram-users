import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';

@Controller('/')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('users-get')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async myController(@Payload() data: any): Promise<string> {
    return await this.userService.test();
  }
}
