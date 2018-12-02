#!/usr/bin/env/ node

// https://babeljs.io/docs/en/babel-polyfill/#usage-in-node-browserify-webpack
import '@babel/polyfill';

// Internal
import { confirm } from './examples/confirm';
import { checkbox } from './examples/checkbox';
import { input } from './examples/input';
import { list } from './examples/list';
import { password } from './examples/password';

const start = async () => {
  const q1 = await checkbox();
  console.log('----> q1', q1);

  const q2 = await confirm();
  console.log('----> q2', q2);

  const q3 = await input();
  console.log('----> q3', q3);

  const q4 = await list();
  console.log('----> q4', q4);

  const q5 = await password();
  console.log('----> q5', q5);
};

start();
