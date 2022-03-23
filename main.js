(function () {
  console.log('works');
  setTimeout(() => {
    // throw new Error("Testing sentry filter from statis site");
  }, 3000);
  throw new Error("Testing immediate statis site error");
})()
