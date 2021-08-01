import { TGender } from './user-create.dto';

export class UserUpdateDTO {
  name?: string;
  phone?: string;
  gender?: TGender;
  siteUrl?: string;
  biography?: string;
  picture?: string;
  private?: boolean;
  taggable?: boolean;
}
