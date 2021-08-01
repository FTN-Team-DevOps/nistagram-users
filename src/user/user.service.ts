import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserCreateDTO } from './dto/user-create.dto';
import { UserSearchDTO } from './dto/user-search.dto';
import { UserUpdateDTO } from './dto/user-update.dto';
import { User, UserDocument } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async findAll(params: UserSearchDTO): Promise<User[]> {
    if (params.private) {
      delete params.private;
    } else {
      params.private = false;
    }
    return this.userModel.find(params).exec();
  }

  async create(user: UserCreateDTO): Promise<User> {
    return this.userModel.create(user);
  }

  async update(_id: string, user: UserUpdateDTO): Promise<User> {
    return this.userModel.findOneAndUpdate(
      { _id },
      { $set: { ...user } },
      { new: true },
    );
  }
}
