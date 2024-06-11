import { Controller, Get } from '@nestjs/common';

import { UserRoleService } from './user-role.service';

@Controller('user-roles')
export class UserRoleController {
  constructor(private readonly userRoleService: UserRoleService) {}

  @Get('/')
  async findRoles() {
    return await this.userRoleService.getRoles();
  }
}
