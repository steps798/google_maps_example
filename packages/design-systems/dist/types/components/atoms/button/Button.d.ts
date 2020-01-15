import React from 'react';
declare type DefaultProps = {
    /** 'Indexer: use for other props */
    [x: string]: any;
} & Partial<PropTypes>;
declare type PropTypes = {
    /** can be set to primary, secondary or omitted (default is primary) */
    variant: 'primary' | 'secondary';
    /** can be set to small, medium or omitted (default is medium) */
    size: 'small' | 'medium';
    /** make background transparent and remove border */
    ghost: boolean;
};
declare class Button extends React.Component<DefaultProps, any> {
    static displayName: string;
    static defaultProps: DefaultProps;
    setButtonVariant: (variant: string) => any;
    setButtonSize: (size: string) => any;
    setButtonGhost: (isGhost: boolean) => import("@emotion/utils").SerializedStyles;
    setButtonStyles: (variant: string, size: string, isGhost: boolean) => any[];
    render(): JSX.Element;
}
export { Button };
