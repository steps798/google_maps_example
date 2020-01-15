/// <reference types="react" />
declare type DefaultProps = {
    /** 'Indexer: use for other props */
    [x: string]: any;
} & Partial<PropTypes>;
declare type PropTypes = {
    /** set DateTimePicker placeholder */
    placeholder: string;
    /** set DateTimePicker label */
    label: string;
    /** callback function when date and time is selected */
    onSetDateTime: (date: {
        selectedDateTime: Date;
        formattedDateString: string;
    }) => void;
    /** set DateTimePicker error message  */
    error: string;
};
declare const DateTimePicker: {
    ({ placeholder, label, onSetDateTime, error }: DefaultProps): JSX.Element;
    defaultProps: DefaultProps;
    displayName: string;
};
export { DateTimePicker };
