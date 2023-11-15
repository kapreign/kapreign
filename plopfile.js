const { readdirSync } = require('fs');

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => {
      return { name: dirent.name, value: dirent.name };
    });

module.exports = (plop) => {
  const directories = getDirectories('src/pages');
  plop.setGenerator('component', {
    description: 'Create a component',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your component name?'
      },
      {
        // Raw text input
        type: 'confirm',
        // Variable name for this input
        name: 'isCommon',
        // Prompt to display on command line
        message: 'Is it common component?'
      },
      {
        when(response) {
          return response.isCommon === false;
        },
        // Raw text input
        type: 'list',
        // Variable name for this input
        name: 'container',
        // Prompt to display on command line
        message: 'Choose container?',
        choices: directories
      }
    ],
    actions: (data) => {
      const path = data.isCommon ? 'src/Components/' : `src/pages/${data.container}/Components/`;

      const actions = [
        {
          type: 'add',
          path: `${path}{{pascalCase name}}/index.js`,
          templateFile: 'plop/component/index.js.hbs'
        },
        {
          type: 'add',
          path: `${path}{{pascalCase name}}/{{pascalCase name}}.jsx`,
          templateFile: 'plop/component/component.js.hbs'
        },
        {
          type: 'add',
          path: `${path}{{pascalCase name}}/styles.js`,
          templateFile: 'plop/component/styles.js.hbs'
        }
      ];
      return actions;
    }
  });

  plop.setGenerator('page', {
    description: 'Create a page',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your page name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/index.js',
        templateFile: 'plop/component/index.js.hbs'
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.jsx',
        templateFile: 'plop/component/component.js.hbs'
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/styles.js',
        templateFile: 'plop/component/styles.js.hbs'
      }
    ]
  });

  plop.setGenerator('story', {
    description: 'Create a story',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your Component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/stories/{{pascalCase name}}.stories.js',
        templateFile: 'plop/component.stories.js.hbs'
      }
    ]
  });
};
