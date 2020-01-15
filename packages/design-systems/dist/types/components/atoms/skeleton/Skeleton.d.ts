import React from 'react';
declare type DefaultProps = {
    /** 'Indexer: use for other props */
    [x: string]: any;
} & Partial<PropTypes>;
declare type PropTypes = {
    /** total skeleton to render. default is 1 */
    count: number;
    /** animation duration. default is 1.2 */
    duration: number;
    /** skeleton width. default is null */
    width: number;
    /** skeleton height. default is null */
    height: number;
    /** set skeleton to be a circle or not. if you need a circle skeleton you must set the "width" & "height" first. default is false */
    circle: boolean;
};
declare class Skeleton extends React.Component<DefaultProps, any> {
    static defaultProps: DefaultProps;
    renderSkeleton: (key: number, count: number, duration: number, width: number, height: number, circle: boolean) => JSX.Element;
    render(): JSX.Element;
}
export { Skeleton };
