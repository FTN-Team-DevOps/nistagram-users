import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserCreateDTO } from './dto/user-create.dto';
import { UserSearchDTO } from './dto/user-search.dto';
import { UserUpdatePayloadDTO } from './dto/user-update-payload.dto';
import { User } from './user.model';
import { UserService } from './user.service';

@Controller('/')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('users-get')
  async search(@Payload() params: UserSearchDTO): Promise<User[]> {
    return await this.userService.findAll(params);
  }

  @MessagePattern('users-create')
  async create(@Payload() payload: UserCreateDTO): Promise<User> {
    return await this.userService.create(payload);
  }

  @MessagePattern('users-update')
  async update(@Payload() payload: UserUpdatePayloadDTO): Promise<User> {
    return await this.userService.update(payload._id, payload.data);
  }
}
