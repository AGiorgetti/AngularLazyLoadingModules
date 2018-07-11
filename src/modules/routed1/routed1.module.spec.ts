import { Routed1Module } from './routed1.module';

describe('Routed1Module', () => {
  let routed1Module: Routed1Module;

  beforeEach(() => {
    routed1Module = new Routed1Module();
  });

  it('should create an instance', () => {
    expect(routed1Module).toBeTruthy();
  });
});
