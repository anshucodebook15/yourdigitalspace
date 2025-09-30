import { Test, TestingModule } from '@nestjs/testing';
import { UsersServiceV1 } from './users.service';
// import { UsersServiceV1 } from './users.service';

describe('UsersServiceV1', () => {
  let service: UsersServiceV1;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersServiceV1],
    }).compile();

    service = module.get<UsersServiceV1>(UsersServiceV1);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
