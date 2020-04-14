const title = 'exercise 1';
const start = Date.now();
const assertMsg = (name) => `${title}, ${Date.now() - start} ms., ${name}`;

// fill in the blanks

let x = '';

x += 'ja';

const exercise1_cb_1 = () => {
    x += 'ri';
};
setTimeout(exercise1_cb_1, 200);

x += 'va';

const exercise1_cb_2 = () => {
    const test1 = x === 'javascript';
    console.assert(test1, assertMsg('x === "javascript"'));
};
setTimeout(exercise1_cb_2, 500);

const exercise1_cb_3 = () => {
    x += 'sc';
};
setTimeout(exercise1_cb_3, 100);

const exercise1_cb_4 = () => {
    x += 'pt';
};
setTimeout(exercise1_cb_4, 300);

x += '';