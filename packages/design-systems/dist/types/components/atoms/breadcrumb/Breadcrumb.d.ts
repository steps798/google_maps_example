/// <reference types="react" />
import { SerializedStyles } from '@emotion/core';
declare type DefaultProps = {
    /** 'Indexer: use for other props */
    [x: string]: any;
} & Partial<PropTypes>;
declare type PropTypes = {
    /** list of breadcrumb information, it takes an array of string */
    lists: string[];
    /** set which breadcrumb is active, default is 0 which make the first list is active */
    active: number;
    /** emotion-css, ex: css`margin-left: 16px` */
    extendCss: SerializedStyles;
};
declare const Breadcrumb: {
    ({ lists, active, extendCss, ...otherProps }: DefaultProps): JSX.Element;
    defaultProps: DefaultProps;
    displayName: string;
};
export { Breadcrumb };
