import React, { useState } from "react";
import { Table, TableBody, TableRow } from "@material-ui/core";

import { useQuery } from "./useQuery";
import { CustomTableCell } from "./table-cell.styled";

const Game = () => {
    const [rowCount, setRowCount] = useState(3);
    console.dir(useQuery("id"));

    const onTableClick = (event) => {
        console.warn(event.target.cellIndex);
        console.warn(event);
    };

    const renderCell = () => {
        const returnValue = [];
        for (let row = 0; row < rowCount; row++) {
            for (let col = 0; col < rowCount; col++) {
                console.warn(row, col);
            }
        }

        return returnValue;
    };

    return (
        <>
            <Table>
                <TableBody>
                    <TableRow>
                        <CustomTableCell
                            onClick={onTableClick}
                        ></CustomTableCell>
                        <CustomTableCell
                            onClick={onTableClick}
                        ></CustomTableCell>
                        <CustomTableCell
                            onClick={onTableClick}
                        ></CustomTableCell>
                    </TableRow>

                    <TableRow>
                        <CustomTableCell
                            onClick={onTableClick}
                        ></CustomTableCell>
                        <CustomTableCell
                            onClick={onTableClick}
                        ></CustomTableCell>
                        <CustomTableCell
                            onClick={onTableClick}
                        ></CustomTableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    );
};

export default Game;
