import React, {useEffect, useState} from "react";
import {ActivityStyles as Styled} from './style'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {StorageApi} from "@/apis";
import {allHistoryModal} from '@/model'
import {Skeleton} from "@mui/material";
import {desensitizationPrincipal, getCurrencyString} from "@/utils/formate";

interface Props {
    source?: string
};
export const Activity = () => {
    const [list, setList] = useState<Array<allHistoryModal | any>>()
    useEffect(() => {
        (async () => {
            setList(await StorageApi.getUserTransactions());
        })()
    }, []);

    return (
        <Styled.Wrap isPadding={true}>
            {!list ? <Skeleton width='1000' height={300} sx={{transform: 'none'}}/> :
                <Paper elevation={1}>
                    <TableContainer>
                        <Table sx={{minWidth: 650}}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Type</TableCell>
                                    <TableCell align="left">Item</TableCell>
                                    <TableCell align="left">Price</TableCell>
                                    <TableCell align="left">From</TableCell>
                                    <TableCell align="left">To</TableCell>
                                    <TableCell align="left">Time</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {(list || []).map((row: allHistoryModal | any, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{'&:last-child td, &:last-child th': {border: 0, margin: '10px 0'}}}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.type}
                                        </TableCell>
                                        <TableCell
                                            align="left">{desensitizationPrincipal(String(row.token || ""), 4) || ""}</TableCell>
                                        <TableCell align="left">{getCurrencyString(row.price || "", 8, 2) || ""}</TableCell>
                                        <TableCell
                                            align="left">{desensitizationPrincipal(String(row.seller || ""), 4) || ""}</TableCell>
                                        <TableCell
                                            align="left">{desensitizationPrincipal(String(row.buyer || ""), 4) || ""}</TableCell>
                                        <TableCell align="left">{row.time || ""}</TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>}
        </Styled.Wrap>
    );
}

