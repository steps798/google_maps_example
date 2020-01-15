/// <reference types="react" />
declare type DefaultProps = {
    /** 'Indexer: use for other props */
    [x: string]: any;
} & Partial<PropTypes>;
declare type option = {
    label: string;
    value: string;
};
declare type PropTypes = {
    /** set id content, default is '' empty string (no id) */
    id: string;
    /** set label content, default is '' empty string (no label) */
    label: string;
    /** set input border wheter to be rounded or not, default is `false` */
    setBorderRounded: boolean;
    /** set wheter input use icon or not, default is `true` */
    withIcon: boolean;
    /** set input placeholder text, default is `Enter your search here...` */
    placeholder: string;
    /** set error message  */
    error: string | any;
    /** set this to true if you need onChange validation using formik (more info go to "Form Validation" section)  */
    touched: boolean;
    /** set this to true if you need onChange validation  (more info go to "Form Validation" section) */
    validateOnChange: boolean;
    /** the callback function that is triggered when option is selected */
    onOptionSelected: (option: option) => void;
    /** the callback function that is triggered when input value changed */
    onInputValueChange: (value: any) => void;
};
declare const Select: {
    ({ id, label, setBorderRounded, withIcon, placeholder, error, validateOnChange, touched, onOptionSelected, onInputValueChange, children, }: DefaultProps): JSX.Element;
    defaultProps: DefaultProps;
};
export { Select };
