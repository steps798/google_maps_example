/// <reference types="react" />
declare type DefaultProps = {
    /** 'Indexer: use for other props */
    [x: string]: any;
} & Partial<PropTypes>;
declare type PropTypes = {
    /** set title of modal */
    title: string;
    /** callback function that triggered when modal is closed */
    onClose: () => void;
};
declare const Modal: {
    ({ title, onClose, children, ...otherProps }: DefaultProps): JSX.Element;
    defaultProps: DefaultProps;
    displayName: string;
};
export { Modal };
