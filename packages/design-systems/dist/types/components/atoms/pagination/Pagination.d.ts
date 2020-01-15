import React from 'react';
declare type DefaultProps = {
    /** 'Indexer: use for other props */
    [x: string]: any;
} & Partial<PropTypes>;
declare type PropTypes = {
    /** if empty, will shown from page 1 */
    startIdx?: number;
    /** if empty, selectedIdx will be page 1 */
    selectedIdx?: number;
    onPageChanged: (pageNumber: number) => void;
    totalPageLength: number;
    contentPerPage: number;
};
declare class Pagination extends React.Component<DefaultProps, any> {
    constructor(props: any);
    goPrev: (startPage: number) => void;
    goNext: (endPage: number) => void;
    goToPage: (i: number) => void;
    renderPageNumber: (startPage: number, length: number) => JSX.Element[];
    goToFirst: () => void;
    goToLast: () => void;
    render(): JSX.Element;
}
export { Pagination };
