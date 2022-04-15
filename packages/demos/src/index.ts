import data from '@kk/common';
import data1 from 'kk';
console.log(data1);
type DemoData = {
  userId: number;
  user: string;
  error: null | Error;
};
const normalTask = () => {
  return new Promise<DemoData>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve({ userId: Math.random(), user: 'laoyuan', error: null });
      } else {
        reject({ userId: 0, user: '', error: new Error('测试') });
      }
    }, 3000);
  });
};

export { normalTask };

console.log('data... ', data);
