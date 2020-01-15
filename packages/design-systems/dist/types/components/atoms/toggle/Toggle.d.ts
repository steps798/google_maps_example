/// <reference types="react" />
declare type DefaultProps = {
    /** 'Indexer: use for other props */
    [x: string]: any;
} & Partial<PropTypes>;
declare type PropTypes = {
    /** set initial toggle state */
    isChecked: boolean;
    /** callback fuction that is triggered when toggle is switched */
    onToggle: (data: boolean) => void;
};
declare const Toggle: ({ isChecked, onToggle: onHandleToggle, children, ...otherProps }: DefaultProps) => JSX.Element;
export { Toggle };
