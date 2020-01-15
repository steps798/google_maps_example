/// <reference types="react" />
declare type DefaultProps = {
    /** 'Indexer: use for other props */
    [x: string]: any;
} & Partial<PropTypes>;
declare type buttonItem = {
    name: string;
};
declare type PropTypes = {
    /** array of object for defining tab button items ex: [{name: 'Active'}, {name: 'Upcoming'}] */
    buttons: buttonItem[];
    /** set active tab */
    activeTab: number;
    /** callback that is triggered when tab button is clicked */
    onClickTab: (index: number) => void;
    children?: any;
};
declare const Tab: {
    ({ activeTab, onClickTab, buttons, children, ...otherProps }: DefaultProps): JSX.Element;
    defaultProps: DefaultProps;
    displayName: string;
};
export { Tab };
