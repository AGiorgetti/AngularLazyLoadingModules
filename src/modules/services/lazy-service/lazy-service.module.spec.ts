import { LazyServiceModule } from './lazy-service.module';

describe('LazyServiceModule', () => {
  let lazyServiceModule: LazyServiceModule;

  beforeEach(() => {
    lazyServiceModule = new LazyServiceModule();
  });

  it('should create an instance', () => {
    expect(lazyServiceModule).toBeTruthy();
  });
});
