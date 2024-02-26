import { Test, TestingModule } from '@nestjs/testing';
import { NoteCategoryController } from './note_category.controller';
import { NoteCategoryService } from './note_category.service';

describe('NoteCategoryController', () => {
  let controller: NoteCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NoteCategoryController],
      providers: [NoteCategoryService],
    }).compile();

    controller = module.get<NoteCategoryController>(NoteCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
