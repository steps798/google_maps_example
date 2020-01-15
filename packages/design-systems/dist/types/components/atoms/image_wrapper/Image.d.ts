import React from 'react';
declare type DefaultProps = {
    /** 'Indexer: use for other props */
    [x: string]: any;
} & Partial<PropTypes>;
declare type PropTypes = {
    /** alt image, default is empty string ("") */
    alt: string;
    /** image source */
    src: string;
};
declare class Image extends React.Component<DefaultProps, any> {
    static defaultProps: DefaultProps;
    state: {
        isLoaded: boolean;
        isError: boolean;
    };
    onLoadImage: () => void;
    onErrorImage: () => void;
    render(): JSX.Element;
}
export { Image };
