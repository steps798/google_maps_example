import React from 'react';
declare type DefaultProps = {
    /** 'Indexer: use for other props */
    [x: string]: any;
} & Partial<PropTypes>;
declare type PropTypes = {
    /** set section header title, default is "Your Section Title Goes Here..." */
    title: string;
    /** set & place button at header, accept html element or custom component */
    button: React.ReactNode;
};
declare const Section: {
    ({ title, button, children, ...otherProps }: DefaultProps): JSX.Element;
    defaultProps: DefaultProps;
    displayName: string;
};
export { Section };
