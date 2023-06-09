import { setTimeout } from 'node:timers/promises';

const main = async () => {
  for (const i of [1, 2, 3, 4, 5]) {
    await setTimeout(500);
    console.log(`Hello World ${i}`);
  }
};

main().catch((err) => console.error(err));
