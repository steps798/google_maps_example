import React from 'react';
declare type DefaultProps = {
    /** 'Indexer: use for other props */
    [x: string]: any;
} & Partial<PropTypes>;
declare type PropTypes = {
    /** Type of tab */
    type: 'focused' | 'gray';
};
declare class TabButton extends React.Component<DefaultProps, any> {
    static defaultProps: DefaultProps;
    setTabType: (type: string) => any;
    setTextType: (type: string) => any;
    setStyles: (type: string) => any[];
    render(): JSX.Element;
}
export { TabButton };
