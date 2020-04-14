const title = 'exercise 2';
const start = Date.now();
const assertMsg = (name) => `${title}, ${Date.now() - start} ms., ${name}`;

// fill in the blanks

let x = '';

x += 'ja';

const exercise2_cb_1 = () => {
    x += 'sc';
};
setTimeout(exercise2_cb_1, 100);

x += 'v';

const exercise2_cb_2 = () => {
    x += 'pt';
};
setTimeout(exercise2_cb_2, 300);

const exercise2_cb_3 = () => {
    const test1 = x === 'javascript';
    console.assert(test1, assertMsg('x === "javascript"'));
};
setTimeout(exercise2_cb_3, 500);

const exercise2_cb_4 = () => {
    x += 'ri';
};
setTimeout(exercise2_cb_4, 200);

x += 'a';