/// <reference types="react" />
declare type DefaultProps = {
    /** 'Indexer: use for other props */
    [x: string]: any;
} & Partial<PropTypes>;
declare type PropTypes = {
    /** option value, default is '' empty string. you should provide the value */
    value: string | number | any;
    /** wheter to disabled the option, default is `false` */
    disabled: boolean;
    /** wheter to show checkbox (checkmark) icon, default is `true` */
    withCheckbox: boolean;
    /** wheter to show only label for option content, default is `false` */
    labelOnly: boolean;
};
declare const Option: {
    ({ value, disabled, labelOnly, withCheckbox, children, otherProps, }: DefaultProps): JSX.Element;
    defaultProps: DefaultProps;
};
export { Option };
