console.log('hi after the sideeffects');
let x = 6 / 2;
if (x == 2) {

    import('./index2.js')
        .then(({ NAME, add, default: vik }) => {
            console.log(NAME);
            add(4, 5);
            vik(2, 1);
        })

}
console.log('hi at the end');


