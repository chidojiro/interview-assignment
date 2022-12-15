# Contribution guide
## Getting started

Clone the repo

```
yarn install
```
`Note: This command also will download some required assets from the static site used for the documentation.`

build source code
```
yarn build
```

## Deployment
The library is build on CI distributed to ASW repo. No actions are required.

## Working with Components.
### Setup
According react-styleguidist documentation each component should follow some rules:

- `.md` file (used by documentation)
- Comment above component containing title and description.
- Prop types.

`Note: This rules apply only for the components that will be visible in the documentation.`

After the component is created it must be added in `/src/index.js`.
### Update/Extend components.
When component is changed the documentation for this component should be updated as well.

## Working with documentation.
Documentation is a separate feature with `Shared components library`. The library react-styleguidist provides excellent semi-self maintaning documentation relaying on `.md` files.
The `.md` file supports all default md feature `+` jsx syntax.

### Local development.

The documentation can be used as development environment.

To run it

```
yarn docs:dev
```

and it will setup server where component can be tested.

### Deploying the documentation.

After `.md` file for the component is setupped it should be build with. It creates static version of the library which will be ready for deploy.
```
yarn docs:build
```

deployed to server
```
yarn docs:deploy
```

### Setup assets
To function properly documention require some assets to be download. It can be done with specific command (can be found in [Available commands](#available-commands)) or it will run on `postinstall`. 

The list of all supported libraries can be found in `package.json` file under `orbitLibraries`.

`Note: When adding new component to the documentation make its orbit js library exist in package.json`

## Git flow
The library s adopting `Bluex` branching strategies.
- Clone feature branch from `ppr`
- The commint id should contain Jira ticket ID
- After creating PR send it for review to one of the maintainers.

## Available commands
build source code
```
yarn build
```

start documentation in DEV mode
```
yarn docs:dev
```

build documentation static version.

```
yarn docs:build
```

deploy documentation static version

```
yarn docs:deploy
```

fetch static assets
```
yarn docs:fetch-assets
```

start test runner
```
yarn test
```

check code
```
yarn lint
```

format code
```
yarn fmt
```
