### run the example

- install dependency `yarn install`
- build the react sample app `yarn build`
  - file will be generated in **www/react-app** folder
- start a local server `yarn server`
  - the server will host all the files in www at http://localhost:8423
  
the example will be served at http://localhost:8423/react-app/example.html


### use this dglux build in your own project

```javascript
import DGLuxPage from "dglux-react-widget";
...

render() {
 return (
  <DGLuxPage.contextType.Provider value={{dgluxBaseUrl:"http://localhost/dglux5/"}}>
    <DGLuxPage project='example' page='page1.dg5'/>
  </DGLuxPage.contextType.Provider>
 );
}
```

- www/dglux5 is the main directory for dglux, it can be moved to anywhere on the server. And its url should be used as **dgluxBaseUrl**
- www/proj is the directory to store projects files, it can also be moved to anywhere on the same server, its relative path from dgluxBaseUrl should be put in ${dgluxBaseUrl}/dgconfig.json
