import React from "react";
import {loadDgluxPage} from "./load-dglux";

interface Props {
  project: string;
  page: string;
  className?: string;
  style?: React.CSSProperties;

  [key: string]: any;
}

interface State {

}

export default class DGLuxPage extends React.Component<Props, State> {
  static getPagePath(props: Readonly<Props>) {
    if (props.page) {
      return `lib/${props.project}/${props.page}`;
    } else {
      return `lib/${props.project}/index.dg5`;
    }
  }

  id = `dglux-${Math.random().toString(36).substr(2)}`; // generate a random id
  pagePath: string;

  rootNode!: HTMLElement;
  getRef = (node: HTMLDivElement): void => {
    if (node !== this.rootNode) {
      this.rootNode = node;
      this.loadPage(this.props);
    }
  };

  loadPage(props: Readonly<Props>) {
    let {project, page, className, style, ...pageOptions} = props;
    let path = DGLuxPage.getPagePath(props);
    if (path !== this.pagePath) {
      this.pagePath = path;
      loadDgluxPage(this.id, this.pagePath);
    }
  }

  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
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
