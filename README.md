### install and run

- install dependency `yarn install`
- build the react sample app `yarn build`
  - file will be generated in **www/react-app** folder
- start a local server `yarn server`
  - the server will host all the files in www at http://localhost:8423
  
the example will be served at http://localhost:8423/react-app/example.html

### limitations

1. dglux license for static viewer only allows fixed domain+port, so any domain, path, config change require a new license.
   - this shouldn't be an issue in production, if you need a different configuration during development, just let me know.
2. dglux expects the projects in `{file}/proj/{projectName}/{dg5Name}`
   - other part are configurable, but the `proj` folder's name can't be changed for now.
