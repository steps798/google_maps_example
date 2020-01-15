import React from 'react';
declare type DefaultProps = {
    /** 'Indexer: use for other props */
    [x: string]: any;
} & Partial<PropTypes>;
declare type PropTypes = {
    /** set label for textarea component */
    label: string;
    /** set error message  */
    error: string;
    /** set this to true if you need onChange validation using formik (more info go to "Form Validation" section)  */
    touched: boolean;
    /** set this to true if you need onChange validation using formik (more info go to "Form Validation" section)  */
    validateOnChange: boolean;
};
declare class TextArea extends React.Component<DefaultProps, any> {
    static defaultProps: DefaultProps;
    setTextAreaStyles: (isError: boolean) => import("@emotion/utils").SerializedStyles[];
    errorMessage: (validateOnChange: boolean, error: string, touched: boolean) => JSX.Element;
    render(): JSX.Element;
}
export { TextArea };
