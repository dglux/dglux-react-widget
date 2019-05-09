import React from "react";
export interface DGLuxBaseUrlContext {
    dgluxBaseUrl: string;
}
export declare const BaseUrlContextType: React.Context<DGLuxBaseUrlContext>;
export declare const BaseUrlContextProvider: React.ProviderExoticComponent<React.ProviderProps<DGLuxBaseUrlContext>>;
export declare const BaseUrlContextConsumer: React.ExoticComponent<React.ConsumerProps<DGLuxBaseUrlContext>>;
interface Props {
    vendor?: string;
    project: string;
    page: string;
    className?: string;
    style?: React.CSSProperties;
    [key: string]: any;
}
export default class DGLuxPage extends React.Component<Props, any> {
    static contextType: React.Context<DGLuxBaseUrlContext>;
    context: DGLuxBaseUrlContext;
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
    shouldComponentUpdate(nextProps: Readonly<Props>, nextState: any, nextContext: any): boolean;
    render(): React.ReactNode;
    componentWillUnmount(): void;
}
export {};
