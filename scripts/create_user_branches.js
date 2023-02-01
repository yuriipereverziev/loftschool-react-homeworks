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
  'dmitrymarokhonov',
  'reyzele',
  'dapetrov0',
  'rchesnokov',
  'makhataibar',
  'sen4az',
  'YanaShingel',
  'mihailKuzmintsev',
  'AlekseyVasilenko',
  'aftaboy',
  'b-gulnur-r',
  'Dmitriy-8-Kireev',
  'Drillibit',
  'KustovAA',
  'bu-ra-to',
  'erven1985',
  'Vostenzuk',
  'OlBol',
  'golah30',
  'necrolyss',
  'flightik',
  'NikitaSmithTheOne',
  'IvanOpanasiuk',
  'notherkappa',
  'maxim1989',
  'Ivan3008',
  'IrinaKondrateva',
  'dkrasheninnikov',
  'AntonLantukh',
  'anton-yakovlev',
  'eugenedan',
  'evgeniyandrusenko',
  'aelsergeev'
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
