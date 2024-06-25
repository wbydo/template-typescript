import { applyTo, map, pipe } from 'ramda';

const a = applyTo([1, 2, 3])(
  pipe(
    map((x) => x + 1),
    map((x) => x + 1)
  )
);
console.log(a);
