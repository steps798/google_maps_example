/// <reference types="react" />
declare type DefaultProps = {
    /** 'Indexer: use for other props */
    [x: string]: any;
} & Partial<PropTypes>;
declare type PropTypes = {
    /** a callback function when date is selected */
    onSetDate: (date: Date) => void;
    /** set DatePicker with constraint date, */
    constraintDate: {
        /**
         * put minimum date here
         */
        firstConstraint: Date;
        /**
         * put maximum date here
         */
        secondConstraint: Date;
    };
    /** set DatePicker placeholder */
    customPlaceholder: string;
    /** set to true if you need icon for this component */
    withCalendarIcon: boolean;
};
declare const DatePicker: {
    ({ onSetDate, constraintDate, customPlaceholder, withCalendarIcon, ...otherProps }: DefaultProps): JSX.Element;
    defaultProps: DefaultProps;
    displayName: string;
};
export { DatePicker };
