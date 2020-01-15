import React from 'react';
declare type DefaultProps = {
    /** 'Indexer: use for other props */
    [x: string]: any;
} & Partial<PropTypes>;
declare type radioButtonItem = {
    title: string;
    value: string;
};
declare type PropTypes = {
    /** index value, default checked radio button */
    indexValue?: number;
    /** on value change listener */
    onChange: (argument: any) => void;
    /** list of radio button label */
    source: radioButtonItem[];
    /** 'vertical' or 'horizontal' */
    layout?: string;
    /** radio button group name */
    name: string;
};
declare class RadioButton extends React.Component<DefaultProps, any> {
    static defaultProps: Partial<DefaultProps>;
    state: {
        indexValue: number;
        firstTimeRendered: boolean;
    };
    onClick: (i: number) => void;
    renderEachRow(): JSX.Element[];
    render(): JSX.Element;
}
export { RadioButton };
