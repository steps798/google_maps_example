/// <reference types="react" />
declare type DefaultProps = {
    /** 'Indexer: use for other props */
    [x: string]: any;
} & Partial<PropTypes>;
declare type PropTypes = {
    /** set loading text message, default is 'Wait a moment' */
    message: string;
};
declare const Spinner: {
    ({ message, ...otherProps }: DefaultProps): JSX.Element;
    defaultProps: DefaultProps;
    displayName: string;
};
export { Spinner };
