#!/usr/bin/env node

import { create } from 'create-create-app';
import { resolve } from 'path';

const templateRoot = resolve(__dirname, '..', 'templates');

// See https://github.com/uetchy/create-create-app/blob/master/README.md for other options.

create('create-disci', {
  templateRoot,
  skipGitInit: true,
  caveat: ({ packageDir }) => {
    console.log(`
    View Our guide and api docs at: https://disci.typical.gq

    
    We Suggest you get started by typing,
      cd ${packageDir}
      npm start
    `);
  },
  extra: {
    	name: {
			type: "input",
			describe: "Name of the Project",
			prompt: "always",
		},
  },
  promptForTemplate: true,
  promptForLicense: false,
  promptForEmail: false,
  promptForAuthor: false,
  promptForDescription: false,
  defaultTemplate: 'fastify-js'
});
