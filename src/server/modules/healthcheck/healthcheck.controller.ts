import { Controller, Get } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckResult,
  HealthCheckService,
  HealthIndicatorResult,
  MemoryHealthIndicator,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';
import { SkipThrottle } from '@nestjs/throttler';

@Controller('health')
export class HealthCheckController {
  constructor(
    private readonly db: TypeOrmHealthIndicator,
    private readonly health: HealthCheckService,
    private readonly memory: MemoryHealthIndicator,
  ) {}

  private async checkHeap(): Promise<HealthIndicatorResult> {
    return this.memory.checkHeap('memory', 500 * 1024 * 1024);
  }

  private async pingCheck(): Promise<HealthIndicatorResult> {
    return this.db.pingCheck('database', {
      timeout: 500,
    });
  }

  @Get()
  @HealthCheck()
  @SkipThrottle(true)
  public async readiness(): Promise<HealthCheckResult> {
    return this.health.check([
      this.pingCheck.bind(this),
      this.checkHeap.bind(this),
    ]);
  }
}
