#!/usr/bin/env node
const exec = require('child_process').exec;

const execPromise = command =>
  new Promise((resolve, reject) => {
    exec(
      command,
      (err, stdout, stderr) => (err ? reject(err) : resolve(stdout, stderr))
    );
  });

const students = [
  'yuriipereverziev'
];

async function main() {
  for (let student of students) {
    await createHomeworkBranch(8, student);
  }
  await execPromise('git checkout june_master');
}

async function createHomeworkBranch(homeworkNumber, student) {
  let homeworkName = `${student}/homework-${homeworkNumber}`;
  await execPromise(`git checkout homework-${homeworkNumber}`);
  await execPromise(`git checkout -b ${homeworkName}`);
  await execPromise(`git push --set-upstream origin ${homeworkName}`);
}

main()
  .catch(error => {
    console.log(error);
  })
  .then(() => {
    process.exit(0);
  });
