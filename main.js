(function () {
  console.log('works');
  setTimeout(() => {
    throw new Error("Testing sentry filter from statis site");
  }, 3000);
})()
