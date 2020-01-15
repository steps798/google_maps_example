import React from 'react';
declare type PresentationalProps = {
    dragging: boolean;
    onSelectFileClick: () => void;
    onDrag: (event: React.DragEvent<HTMLDivElement>) => void;
    onDragStart: (event: React.DragEvent<HTMLDivElement>) => void;
    onDragEnd: (event: React.DragEvent<HTMLDivElement>) => void;
    onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
    onDragEnter: (event: React.DragEvent<HTMLDivElement>) => void;
    onDragLeave: (event: React.DragEvent<HTMLDivElement>) => void;
    onDrop: (event: React.DragEvent<HTMLDivElement>) => void;
    placeholder: string;
};
declare const DroppableArea: React.SFC<PresentationalProps>;
export { DroppableArea };
