import { Controller, Get, Redirect } from '@nestjs/common';
import {
  ApiExcludeEndpoint,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('health-check')
@Controller()
export class HealthCheckController {
  @Get('health-check')
  @ApiOperation({
    summary: 'Health Check',
  })
  @ApiOkResponse({
    description: 'Health Check',
    content: {
      'application/json': {
        example: {
          message: 'Health check is OK!',
        },
      },
    },
  })
  healthCheck() {
    return {
      message: 'Health check is OK!',
    };
  }

  @ApiExcludeEndpoint()
  @Get()
  @Redirect('health-check', 302)
  redirectToHealthCheck() {
    return;
  }
}
