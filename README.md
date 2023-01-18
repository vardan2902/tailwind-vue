# Tailwind-vue test project

First, I separated all configuration files to easily identify where issues may occur in larger projects, as there are often many config files for a single type of configuration (e.g. Jest or Webpack).

I also separated small parts of the layout into rendering components and organized actors into separate folders, with a separate folder for the store, routes, views, and components.

Before writing logical functions, I used Test-Driven Development (TDD) and wrote tests first. This allowed me to write the general code much faster and keep it as simple as possible.

## Project setup
```
yarn
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

