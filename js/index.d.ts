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
    pageOptions: {
        [key: string]: any;
    };
    rootNode: HTMLElement;
    getRef: (node: HTMLDivElement) => void;
    static notShallowEqual(oldMap: {
        [key: string]: any;
    }, newMap: {
        [key: string]: any;
    }): boolean;
    loadPage(props: Readonly<Props>): void;
    shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean;
    render(): React.ReactNode;
    componentWillUnmount(): void;
}
export {};
