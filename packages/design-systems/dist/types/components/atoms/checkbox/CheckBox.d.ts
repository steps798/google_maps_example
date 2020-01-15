/// <reference types="react" />
declare type DefaultProps = {
    /** 'Indexer: use for other props */
    [x: string]: any;
} & Partial<PropTypes>;
declare type checkBoxItem = {
    indexTitle: string;
    descr: string;
};
declare type PropTypes = {
    /** set checkbox option item to be checked or not for the first time */
    isChecked: true | false;
    /** the callback function that is triggered when the state changes */
    onCheck: (isChecked: boolean) => void;
    /** state object of checkbox item ex { indexTitle: 'No-Index', descr: 'Description about item'} */
    item: checkBoxItem;
    /** set checkbox to be disabled (cannot be selected) */
    disabled: boolean;
    /** hide checkmark icon (optional) */
    hideCheckmark: boolean;
};
declare const CheckBox: {
    ({ isChecked, onCheck, item, disabled, hideCheckmark, ...otherProps }: DefaultProps): JSX.Element;
    defaultProps: DefaultProps;
    displayName: string;
};
export { CheckBox };
