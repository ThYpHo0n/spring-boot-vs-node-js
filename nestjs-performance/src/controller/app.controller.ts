import {
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from 'src/service/app.service';
import { AuthService } from 'src/service/auth.service';
import { CpuService } from 'src/service/cpu.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
    private readonly cpuService: CpuService,
  ) {}

  @Get()
  getHello(): string {
    return `{ 'info': '${this.appService.getHello()}' }`;
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get('cpu-intensive/:num')
  getCpuIntensive(@Param('num') num: number): Promise<string> {
    return this.cpuService.powTanAtan(num).then((n) => {
      return `{ 'num': ${n} }`;
    });
  }
}
