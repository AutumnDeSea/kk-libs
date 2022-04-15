import { ClassA } from '../src/class-a';

describe('ClassA 测试用例', () => {
  let instance: ClassA;

  beforeEach(() => {
    instance = new ClassA();
  });

  describe('doSomething', () => {
    it('should return true', () => {
      const result = instance.doSomething();
      expect(result).toBe(true);
    });
  });
});
