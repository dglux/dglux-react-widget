let promiseResolver;
let promise;
function onDgViewerLoaded() {
    promiseResolver(true);
}
window.onDgViewerLoaded = onDgViewerLoaded;
// on demand loading of dglux assets
function loadDglux() {
    if (!promise) {
        promise = new Promise((resolve, reject) => {
            promiseResolver = resolve;
        });
        let dgluxBaseUrl = "http://localhost:8423/dglux5/";
        let dgluxcssList = [
            "core.css",
            "packages/core/view/mapbox-gl.css",
            "packages/core/view/mapbox-gl-draw.css",
            "packages/core/view/view.css",
            "packages/core/view/charts.css",
            "packages/core/view/component.css",
            "packages/core/view/editor.css",
            "packages/core/view/app.css",
            "css_tree/_styles.css",
            "assets/fonts/fonts.css"
        ];
        for (let i in dgluxcssList) {
            let linkElement = document.createElement("link");
            linkElement.setAttribute("rel", "stylesheet");
            linkElement.setAttribute("href", dgluxBaseUrl + dgluxcssList[i]);
            document.head.append(linkElement);
        }
        let defaultHost = document.createElement("input");
        defaultHost.setAttribute("id", "defaulthost");
        defaultHost.setAttribute("value", dgluxBaseUrl);
        defaultHost.setAttribute("type", "hidden");
        document.body.append(defaultHost);
        let defaultProj = document.createElement("input");
        defaultProj.setAttribute("id", "defaultproj");
        defaultProj.setAttribute("value", "blank");
        defaultProj.setAttribute("type", "hidden");
        document.body.append(defaultProj);
        let scriptPatch = document.createElement("script");
        scriptPatch.setAttribute("src", dgluxBaseUrl + "core.patch.js");
        document.head.append(scriptPatch);
        let scriptViewer = document.createElement("script");
        scriptViewer.setAttribute("src", dgluxBaseUrl + "viewer.dart.js");
        document.head.append(scriptViewer);
    }
    return promise;
}
export function loadDgluxPage(divId, pagePath, params) {
    loadDglux().then(() => {
        window.postMessage({ 'dgViewerDiv': divId, 'dgPagePath': pagePath, 'dgPageParams': params }, '*');
    });
}
//# sourceMappingURL=load-dglux.js.map