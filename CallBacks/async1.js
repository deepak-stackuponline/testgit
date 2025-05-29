function task1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const task1 = true;
      task1 ? resolve("Task 1 completed") : reject("Task 1 failed");
    }, 1000);
  });
}

function task2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const task2 = true;
      task2 ? resolve("Task 2 completed") : reject("Task 2 failed");
    }, 1000);
  });
}

function task3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const task3 = true;
      task3 ? resolve("Task 3 completed") : reject("Task 3 failed");
    }, 1000);
  });
}

function task4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const task4 = false;
      task4 ? resolve("Task 4 completed") : reject("Task 4 failed");
    }, 1000);
  });
}

function task5() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const task5 = false;
      task5 ? resolve("Task 5 completed") : reject("Task 5 failed");
    }, 1000);
  });
}

async function runTasks() {
  try {
    const res1 = await task1();
    console.log(res1);
  } catch (err) {
    console.error(err);
  }

  try {
    const res2 = await task2();
    console.log(res2);
  } catch (err) {
    console.error(err);
  }

  try {
    const res3 = await task3();
    console.log(res3);
  } catch (err) {
    console.error(err);
  }

  try {
    const res4 = await task4();
    console.log(res4);
  } catch (err) {
    console.error(err);
  }

  try {
    const res5 = await task5();
    console.log(res5);
  } catch (err) {
    console.error(err);
  }
}

// Run the tasks
runTasks();
