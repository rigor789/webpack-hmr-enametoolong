// change the text to trigger HMR
console.log('test')

// comment this out (and restart build) & everythigng works fine when making a change
const worker = new Worker(new URL('./myWorker', import.meta.url));