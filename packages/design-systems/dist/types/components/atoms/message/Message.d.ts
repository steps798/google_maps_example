import React from 'react';
declare type DefaultProps = {
    /** 'Indexer: use for other props */
    [x: string]: any;
} & Partial<PropTypes>;
declare type PropTypes = {
    /** set message icon variant (error, success), default is success */
    variant: 'success' | 'error' | 'warning' | 'loader';
    /** set message label, default is success label 'Success' */
    label: string;
    /** set loading text message, default is success message 'Your data was successfule submitted' */
    message: string;
    /** set button for message, default is empty string ('') which mean you don't place the button on message box */
    button: string;
    /** callback function that is triggered when button clicked, use with props "button" */
    onConfirm: () => void;
};
declare class Message extends React.Component<DefaultProps, any> {
    static defaultProps: DefaultProps;
    setIcon: (variant: string) => any;
    render(): JSX.Element;
}
export { Message };
