import { Routed2Module } from './routed2.module';

describe('Routed2Module', () => {
  let routed2Module: Routed2Module;

  beforeEach(() => {
    routed2Module = new Routed2Module();
  });

  it('should create an instance', () => {
    expect(routed2Module).toBeTruthy();
  });
});
