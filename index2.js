
console.log('file2 start');

export const NAME = 'vikram';
export function add(x, y) {
    console.log('added value: ', x + y);
}

export default function defaultAdd(x, y) {
    console.log('default added value: ', x + y);
}
console.log('file2 end');