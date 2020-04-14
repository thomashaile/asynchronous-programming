const title = 'exercise 3';
const start = Date.now();
const assertMsg = (name) => `${title}, ${Date.now() - start} ms., ${name}`;

// fill in the blanks

let x = '';

const exercise3_cb_1 = () => {
    x += 'a';
};
const intervalId = setInterval(exercise3_cb_1, 300);


const exercise3_cb_2 = () => {
    x += 'w';
};
setTimeout(exercise3_cb_2, 100);


const exercise3_cb_3 = () => {
    const test1 = x === 'whaaaa!';
    console.assert(test1, assertMsg('x === "' + x + '"'));
};
setTimeout(exercise3_cb_3, 1400);


const exercise3_cb_4 = () => {
    //-;
    x += '!';
};
setTimeout(exercise3_cb_4, 1300);


const exercise3_cb_5 = () => {
    x += 'h';
};
setTimeout(exercise3_cb_5, 200);