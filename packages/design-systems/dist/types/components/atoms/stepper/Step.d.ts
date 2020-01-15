/// <reference types="react" />
declare type DefaultProps = {
    /** 'Indexer: use for other props */
    [x: string]: any;
} & Partial<PropTypes>;
declare type StepItem = {
    stepNumber: number;
    stepName: string;
};
declare type PropTypes = {
    /** Set step item to be highlighted or not */
    isFocused: true | false;
    /** Object of step item ex { stepNumber: 1, stepName: 'Signature Information'} */
    item: StepItem;
};
declare const Step: {
    ({ isFocused, item, otherProps }: DefaultProps): JSX.Element;
    defaultProps: DefaultProps;
};
export { Step };
