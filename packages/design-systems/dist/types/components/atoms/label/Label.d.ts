import React from 'react';
declare type DefaultProps = {
    /** 'Indexer: use for other props */
    [x: string]: any;
} & Partial<PropTypes>;
declare type PropTypes = {
    /** customize Label color */
    variant: 'success' | 'warning' | 'disabled';
};
declare class Label extends React.Component<DefaultProps, any> {
    static defaultProps: DefaultProps;
    setLabelVariant: (variant: string) => any;
    setLabelStyles: (variant: string) => any[];
    render(): JSX.Element;
}
export { Label };
