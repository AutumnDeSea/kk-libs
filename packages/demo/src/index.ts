import data from '@kk/common';
// import data1 from 'kk';
import { createMachine, interpret } from 'xstate';
// console.log(data1);
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
const toggleMachine = createMachine({
  id: 'toogle',
  initial: "inactive",
  states: {
    inactive: {
      on: {
        TOGGLE: {
          target: 'active'
        }
      }
    },
    active: {
      on: {
        TOGGLE: {
          target: 'inactive'
        }
      }
    }
  }
})
const toggleService = interpret(toggleMachine).start()
toggleService.onTransition((state) => {
  console.log('🍊🍊🍊🍊🍊', state.value);
  const selectionFired = new CustomEvent('ctoggle', {
    detail: state.value,
  });
  //windows上的应用
  window.dispatchEvent(new Event('toggle'));
  window.dispatchEvent(selectionFired);
})

export { normalTask, DemoData,toggleService };

console.log('data... ', data);

