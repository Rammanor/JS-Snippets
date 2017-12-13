async function AsyncAwaitApi() {
  let t = Date.now();
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log('Resolved First Async/Await Promise!');
      resolve();
    }, 2000);
  });
  
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log('Resolved First Async/Await Promise!');
      resolve();
    }, 2000);
  });

  console.log(`Total Async/Await Time: ${(Date.now() - t) / 1000}s`);
}

function PromiseApi() {
  let t = Date.now();
  let p1 = new Promise((resolve) => {
    setTimeout(() => {
      console.log('Resolved First PromiseApi Promise!');
      resolve();
    }, 2000);
  });
  
  let p2 = new Promise((resolve) => {
    setTimeout(() => {
      console.log('Resolved First PromiseApi Promise!');
      resolve();
    }, 2000);
  });

  Promise.all([p1, p2]).then(() => {
    console.log(`Total PromiseApi Time: ${(Date.now() - t) / 1000}s`);
  })
}

AsyncAwaitApi().then(() => {
  console.log("Used 'then' on async function!");
});
PromiseApi();




