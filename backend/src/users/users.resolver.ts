import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Prisma } from '@prisma/client';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation('createUser')
  create(@Args('createUserInput') createUserInput: Prisma.UserCreateInput) {
    return this.usersService.create(createUserInput);
  }

  @Query('users')
  findAll() {
    return this.usersService.findAll();
  }

  @Query('user')
  findOne(
    @Args('userFindFirstArgs') userFindFirstArgs: Prisma.UserFindFirstArgs,
  ) {
    return this.usersService.findOne(userFindFirstArgs);
  }

  @Mutation('updateUser')
  update(
    @Args('updateUserInput') updateUserInput: Prisma.UserUpdateInput,
    @Args('userWhereInput') userWhereInput: Prisma.UserWhereUniqueInput,
  ) {
    return this.usersService.update(updateUserInput, userWhereInput);
  }

  @Mutation('removeUser')
  remove(@Args('id') id: number) {
    return this.usersService.remove(id);
  }
}
