import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../entities/user.entity';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
// import { randomUUID } from 'crypto';
import { getRandomHash } from 'src/common/helper.common';

@Injectable()
export class UsersServiceV1 {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  /**
   * Register user with email/password (local strategy)
   */
  async createLocalUser(dto): Promise<User> {
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const randomGoogleId = await getRandomHash();

    const createdUser = new this.userModel({
      email: dto.email,
      name: dto.name,
      phone: dto.phone ?? null,
      password: hashedPassword,
      googleId: randomGoogleId,
      provider: 'local',
    });

    return createdUser.save();
  }

  /**
   * Register user with Google OAuth
   */
  async createGoogleUser(dto): Promise<User> {
    console.log('Dto', dto._json);

    const { email, sub, name, picture } = dto._json;

    let user = await this.userModel.findOne({ email: email });
    if (user) return user; // already exists

    const hashedGoogleId = await bcrypt.hash(sub, 10);
    const randomPassword = await getRandomHash();

    const createdUser = new this.userModel({
      email: email,
      name: name,
      phone: null,
      password: randomPassword, // random hash if no password
      googleId: hashedGoogleId, // hashed google id
      provider: 'google',
    });

    return createdUser.save();
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }

  async findById(id: string): Promise<User | null> {
    return this.userModel.findById(id).exec();
  }
}
