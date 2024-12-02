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
 // Create a new user
 async create(userData: UserDto): Promise<UserDto> {
  // Hash the password before saving
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(userData.password, saltRounds);

  // Create a new user with hashed password
  const newUser = new this.userModel({
    ...userData,
    password: hashedPassword,
    createdAt: new Date(),
  });

  // Save the user to the database
  const user = await newUser.save();

  // Convert Mongoose document to plain object and exclude the password
  const userObject = user.toObject();
  const { password, ...result } = userObject; // Remove password from the result

  // Return the user without the password (matching UserDto structure)
  return result as UserDto;
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
