var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import { loadDgluxPage } from "./load-dglux";
export const BaseUrlContextType = React.createContext(null);
export const BaseUrlContextProvider = BaseUrlContextType.Provider;
export const BaseUrlContextConsumer = BaseUrlContextType.Consumer;
export default class DGLuxPage extends React.Component {
    constructor() {
        super(...arguments);
        this.id = `dglux-${Math.random().toString(36).substr(2)}`; // generate a random id
        this.getRef = (node) => {
            if (node !== this.rootNode) {
                this.rootNode = node;
                this.loadPage(this.props);
            }
        };
    }
    static getPagePath(props) {
        let { project, page, vendor } = props;
        if (vendor) {
            project = `${project}@${vendor}`;
        }
        if (props.page) {
            return `lib/${project}/${page}`;
        }
        else {
            return `lib/${project}/index.dg5`;
        }
    }
    static notShallowEqual(oldMap, newMap) {
        if (newMap) {
            let keysOld = Object.keys(oldMap);
            let keysNew = Object.keys(newMap);
            if (keysNew.length !== keysOld.length) {
                return true;
            }
            for (let key of keysOld) {
                if (oldMap[key] !== newMap[key]) {
                    return true;
                }
            }
        }
        return false;
    }
    loadPage(props) {
        let { project, page, className, style, vendor } = props, pageOptions = __rest(props, ["project", "page", "className", "style", "vendor"]);
        let dgluxBaseUrl;
        if (this.context) {
            dgluxBaseUrl = this.context.dgluxBaseUrl;
        }
        let path = DGLuxPage.getPagePath(props);
        if (path !== this.pagePath) {
            this.pagePath = path;
            this.pageOptions = pageOptions;
            loadDgluxPage(dgluxBaseUrl, this.id, this.pagePath, this.pageOptions, vendor);
        }
        else if (DGLuxPage.notShallowEqual(this.pageOptions, pageOptions)) {
            this.pageOptions = pageOptions;
            loadDgluxPage(dgluxBaseUrl, this.id, null, this.pageOptions, vendor);
        }
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        this.loadPage(nextProps);
        if (nextProps.style !== this.props.style || nextProps.className !== this.props.className) {
            return true;
        }
        return false;
    }
    render() {
        const { className, style } = this.props;
        return React.createElement("div", { ref: this.getRef, id: this.id, className: `dglux_page_root ${className}`, style: style });
    }
    componentWillUnmount() {
        if (this.pagePath) {
            loadDgluxPage(this.id, ''); // unload it
        }
    }
}
DGLuxPage.contextType = BaseUrlContextType;
//# sourceMappingURL=index.js.map