import { SerializedStyles } from '@emotion/core';
import { MotionProps } from 'framer-motion';
import { ButtonHTMLAttributes } from 'react';
export declare type DefaultProps = {
    /** 'Indexer: use for other props */
    [x: string]: any;
} & Partial<Props> & ButtonHTMLAttributes<HTMLButtonElement> & MotionProps;
declare type Props = {
    /** controlling the button size, it can be set to small, medium or omitted (default is medium) */
    size: 'small' | 'medium';
    /** emotion-css, ex: css`margin-left: 16px` */
    extendCss: SerializedStyles;
};
declare const ButtonBase: {
    ({ size, extendCss, children, ...otherProps }: DefaultProps): JSX.Element;
    defaultProps: DefaultProps;
    displayName: string;
};
export { ButtonBase };
