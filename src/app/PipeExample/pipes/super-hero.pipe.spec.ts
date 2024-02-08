import { SuperHeroPipe } from './super-hero.pipe';

describe('SuperHeroPipe', () => {
  it('create an instance', () => {
    const pipe = new SuperHeroPipe();
    expect(pipe).toBeTruthy();
  });
});
