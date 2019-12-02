var promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Success!'), 300);
});

promise1.then((value) => console.log(value)).catch((reason) => console.log('Error!'));

var promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject('error'), 700);
});

promise2.then((value) => console.log(value)).catch((reason) => console.log('Error!'));
Promise.all([promise2, promise1]).then(values => console.log(values)).catch(reason => console.log('error'));