/// <reference types="react" />
declare type DefaultProps = {
    /** 'Indexer: use for other props */
    [x: string]: any;
} & Partial<PropTypes>;
declare type PropTypes = {
    /** a callback function when time is selected */
    onSetTime: (date: Date) => void;
};
declare const TimePicker: ({ onSetTime }: DefaultProps) => JSX.Element;
export { TimePicker };
