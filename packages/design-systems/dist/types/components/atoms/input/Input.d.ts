import { CleaveOptions } from 'cleave.js/options';
import React from 'react';
declare type DefaultProps = {
    /** 'Indexer: use for other props */
    [x: string]: any;
} & Partial<PropTypes>;
declare type PropTypes = {
    /** can be set to warning or omitted (default) */
    variant: 'default' | 'warning';
    /** set input with border radius or not */
    isRounded: boolean;
    /** set label for input */
    label: string;
    /** set error message  */
    error: string | any;
    /** cleave options, more on 'https://nosir.github.io/cleave.js/' */
    cleaveOptions: CleaveOptions;
    /** set this to true if you need onChange validation using formik (more info go to "Form Validation" section)  */
    touched: boolean;
    /** set this to true if you need onChange validation  (more info go to "Form Validation" section) */
    validateOnChange: boolean;
};
declare class Input extends React.Component<DefaultProps, any> {
    static defaultProps: DefaultProps;
    setInputVariant: (variant: string) => any;
    setRoundedStyle: (isRounded: boolean) => import("@emotion/utils").SerializedStyles;
    setInputStyles: (type: string, isRounded: boolean, isError: boolean) => any[];
    errorMessage: (validateOnChange: boolean, error: string, touched: boolean) => JSX.Element;
    render(): JSX.Element;
}
export { Input };
