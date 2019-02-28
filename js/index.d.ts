import React from "react";
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
    static getPagePath(props: Readonly<Props>): string;
    id: string;
    pagePath: string;
    rootNode: HTMLElement;
    getRef: (node: HTMLDivElement) => void;
    loadPage(props: Readonly<Props>): void;
    shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean;
    render(): React.ReactNode;
    componentWillUnmount(): void;
}
export {};
