import { normalTask } from '../src/index';
describe('Normal Task resolves', () => {
  it('fetchData Case', async () => {
    // console.log('引入外部文件', XMLHttpRequest);
    const data = await normalTask();
    expect(data.user).toBe('laoyuan');
  });
});
