import React from 'react';
declare type DefaultProps = {
    /** 'Indexer: use for other props */
    [x: string]: any;
} & Partial<PropTypes>;
declare type PropTypes = {
    /** Data for the table */
    data: object[];
    /** Columns descripttion for the table */
    columns: object[];
};
declare class Table extends React.Component<DefaultProps, any> {
    render(): JSX.Element;
}
export { Table };
