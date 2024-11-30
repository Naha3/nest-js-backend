import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'; 
import { Model } from 'mongoose'; 
import { UserDocument } from './user.schema';
import { UserDto } from './dto/user.dto';  
import * as bcrypt from 'bcrypt'; 
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {

  constructor(@InjectModel('User') private readonly userModel: Model<UserDocument>,
  private readonly jwtService: JwtService,) {}  
  

  async create(userData: UserDto): Promise<UserDto> {
    console.log('Received data:', userData);
    const createdUser = new this.userModel(userData);  
    return createdUser.save();  
  }


  async findByEmail(email: string): Promise<UserDto | null> {
    return this.userModel.findOne({ email }).exec(); 
  }

  async findAll(): Promise<UserDto[]> {
    return this.userModel.find().exec(); 
  }

  async update(id: string, userData: Partial<UserDto>): Promise<UserDto | null> {
    return this.userModel.findByIdAndUpdate(id, userData, { new: true }).exec();  
  }

  async delete(id: string): Promise<UserDto | null> {
    return this.userModel.findByIdAndDelete(id).exec();  
  }

  async login(email: string, password: string): Promise<any> {
    const user = await this.findByEmail(email);
    if (!user) {
      throw new Error('Invalid credentials');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }
    const payload = { email: user.email};
    const token = this.jwtService.sign(payload);
    return { token };
  }
}
