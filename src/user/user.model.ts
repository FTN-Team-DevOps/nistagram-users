import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TGender = 'male' | 'female';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  username: string;
  @Prop()
  email: string;
  @Prop()
  name: string;
  @Prop()
  phone: string;
  @Prop()
  gender: TGender;
  @Prop()
  siteUrl: string;
  @Prop()
  biography: string;
  @Prop()
  picture: string;
  @Prop()
  private: boolean;
  @Prop()
  taggable: boolean;
  @Prop()
  status: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
