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
    /** array of object for step items ex: [{ stepNumber: 1, stepName: 'Signature Information'}] */
    items: StepItem[];
    /** set which step to active */
    focusedArrayId: number;
};
declare const Stepper: {
    ({ items, focusedArrayId, ...otherProps }: DefaultProps): JSX.Element;
    defaultProps: DefaultProps;
};
export { Stepper };
