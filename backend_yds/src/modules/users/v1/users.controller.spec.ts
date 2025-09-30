import { Test, TestingModule } from '@nestjs/testing';
import { UsersControllerV1 } from './users.controller';
import { UsersServiceV1 } from './users.service';

describe('UsersControllerV1', () => {
  let controller: UsersControllerV1;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersControllerV1],
      providers: [UsersServiceV1],
    }).compile();

    controller = module.get<UsersControllerV1>(UsersControllerV1);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
