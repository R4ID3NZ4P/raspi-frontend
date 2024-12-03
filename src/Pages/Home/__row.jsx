import React from "react";

const Row = ( { idx, data } ) => {
    return (
        <tr>
            <th>{idx}</th>
            <td>{data.title}</td>
            <td>{data.id}</td>
        </tr>
    );
};

export default Row;
