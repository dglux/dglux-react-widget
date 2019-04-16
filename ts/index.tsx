import React from "react";
import {loadDgluxPage} from "./load-dglux";

export interface DGLuxBaseUrlContext {
  dgluxBaseUrl: string;
}

export const BaseUrlContextType = React.createContext<DGLuxBaseUrlContext>(null);
export const BaseUrlContextProvider = BaseUrlContextType.Provider;
export const BaseUrlContextConsumer = BaseUrlContextType.Consumer;

interface Props {
  project: string;
  page: string;
  className?: string;
  style?: React.CSSProperties;

  [key: string]: any;
}

export default class DGLuxPage extends React.Component<Props, any> {
  static contextType = BaseUrlContextType;
  context!: DGLuxBaseUrlContext;

  static getPagePath(props: Readonly<Props>) {
    if (props.page) {
      return `lib/${props.project}/${props.page}`;
    } else {
      return `lib/${props.project}/index.dg5`;
    }
  }

  id = `dglux-${Math.random().toString(36).substr(2)}`; // generate a random id
  pagePath: string;
  pageOptions: {[key: string]: any};

  rootNode!: HTMLElement;
  getRef = (node: HTMLDivElement): void => {
    if (node !== this.rootNode) {
      this.rootNode = node;
      this.loadPage(this.props);
    }
  };

  static notShallowEqual(oldMap: {[key: string]: any}, newMap: {[key: string]: any}) {
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

  loadPage(props: Readonly<Props>) {
    let {project, page, className, style, ...pageOptions} = props;
    let dgluxBaseUrl: string;
    if (this.context) {
      dgluxBaseUrl = this.context.dgluxBaseUrl;
    }

    let path = DGLuxPage.getPagePath(props);
    if (path !== this.pagePath) {
      this.pagePath = path;
      this.pageOptions = pageOptions;
      loadDgluxPage(dgluxBaseUrl, this.id, this.pagePath, this.pageOptions);
    } else if (DGLuxPage.notShallowEqual(this.pageOptions, pageOptions)) {
      this.pageOptions = pageOptions;
      loadDgluxPage(dgluxBaseUrl, this.id, null, this.pageOptions);
    }
  }

  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: any, nextContext: any): boolean {
    this.loadPage(nextProps);
    if (nextProps.style !== this.props.style || nextProps.className !== this.props.className) {
      return true;
    }
    return false;
  }

  render(): React.ReactNode {
    const {className, style} = this.props;
    return <div ref={this.getRef} id={this.id} className={`dglux_page_root ${className}`} style={style}/>;
  }

  componentWillUnmount(): void {
    if (this.pagePath) {
      loadDgluxPage(this.id, ''); // unload it
    }
  }
}
