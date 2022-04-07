const actions = {
  component: {
    type: "add",
    path: `{{destinationpath}}/{{pascalCase name}}/index.js`,
    templateFile: `plop/component.js.hbs`,
  },
  styles: {
    type: "add",
    path: `{{destinationpath}}/{{pascalCase name}}/styles.scss`,
    templateFile: `plop/styles.scss.hbs`,
  },
};

module.exports = function (plop) {
  plop.setHelper('toLowerCase', function(str) {
    return str.toLowerCase();
  });

  plop.setGenerator("component", {
    description: "Create a React Component",
    prompts: [
      {
        type: "input",
        default: "src",
        name: "destinationpath",
        message: "Destination path",
      },
      {
        type: "input",
        name: "name",
        message: "Component name",
      },
    ],
    actions: [actions.component, actions.styles],
  });
};
