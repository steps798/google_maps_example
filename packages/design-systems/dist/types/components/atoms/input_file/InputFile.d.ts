import React from 'react';
declare type DefaultProps = {
    /** 'Indexer: use for other props */
    [x: string]: any;
} & Partial<PropTypes>;
declare type PropTypes = {
    /** callback that is triggered when image is dropped or selected */
    selectedFiles: (filesInformation: FileList, fileLocation: string) => void;
    /** set placeholder */
    placeholder: string;
};
interface IState {
    dragging: boolean;
    files: FileList | null;
    location: string;
}
declare class InputFile extends React.Component<DefaultProps, IState> {
    static counter: number;
    fileUploaderInput: HTMLElement | null;
    static defaultProps: DefaultProps;
    state: IState;
    dragEventCounter: number;
    dragenterListener: (event: React.DragEvent<HTMLDivElement>) => void;
    dragleaveListener: (event: React.DragEvent<HTMLDivElement>) => void;
    dropListener: (event: React.DragEvent<HTMLDivElement>) => void;
    overrideEventDefaults: (event: Event | React.DragEvent<HTMLDivElement>) => void;
    onSelectFileClick: () => void;
    onFileChanged: (event: React.ChangeEvent<HTMLInputElement>) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    setProps: (files: FileList, location: string) => void;
    render(): JSX.Element;
}
export { InputFile };
