"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const load_dglux_1 = require("./load-dglux");
class DGLuxPage extends react_1.default.Component {
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
        if (props.page) {
            return `lib/${props.project}/${props.page}`;
        }
        else {
            return `lib/${props.project}/index.dg5`;
        }
    }
    loadPage(props) {
        let { project, page, className, style } = props, pageOptions = __rest(props, ["project", "page", "className", "style"]);
        let path = DGLuxPage.getPagePath(props);
        if (path !== this.pagePath) {
            this.pagePath = path;
            load_dglux_1.loadDgluxPage(this.id, this.pagePath);
        }
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextProps.style !== this.props.style || nextProps.className !== this.props.className) {
            return true;
        }
        return false;
    }
    render() {
        const { className, style } = this.props;
        return react_1.default.createElement("div", { ref: this.getRef, id: this.id, className: `dglux_page_root ${className}`, style: style });
    }
    componentWillUnmount() {
        if (this.pagePath) {
            load_dglux_1.loadDgluxPage(this.id, ''); // unload it
        }
    }
}
exports.default = DGLuxPage;
//# sourceMappingURL=index.js.map