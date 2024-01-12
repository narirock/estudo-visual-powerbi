import React, { FC } from 'react';

interface MatrixTableProps {
    text: string
}

const MatrixTable: FC<MatrixTableProps> = ({ text }) => {
    return <h1>{text}</h1>;
}

export default MatrixTable;

