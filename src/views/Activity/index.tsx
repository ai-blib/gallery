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
import {ToolTip} from '@/components'
import {desensitizationPrincipal, getCurrencyString} from "@/utils/formate";
import {Link} from "react-router-dom";

interface Props {
    source?: string
};
export default ({source}: Props) => {
    const [list, setList] = useState<Array<allHistoryModal | any>>()
    useEffect(() => {
        (async () => {
            setList(await StorageApi.allHistory());
        })()
    }, []);
    return (
        <Styled.Wrap isPadding={!!source}>
            {!source && <Styled.MainTitle>
                Activity
            </Styled.MainTitle>}
            {!list ? <Skeleton width='100%' height={300} sx={{transform: 'none'}}/> :
                <Paper elevation={1}>
                    <TableContainer>
                        <Table sx={{minWidth: 650}}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Type</TableCell>
                                    <TableCell align="left">Item</TableCell>
                                    <TableCell align="left">Amount</TableCell>
                                    <TableCell align="left">From</TableCell>
                                    <TableCell align="left">To</TableCell>
                                    <TableCell align="left">Time</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {!list && <Skeleton width='1000' height={100} sx={{transform: 'none'}}/>}
                                {(list || []).map((row: allHistoryModal | any, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{'&:last-child td, &:last-child th': {border: 0, margin: '10px 0'}}}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.type}
                                        </TableCell>
                                        <TableCell
                                            align="left">{row.token}</TableCell>
                                        <TableCell align="left">{row.amount}</TableCell>
                                        <TableCell
                                            align="left">
                                            <ToolTip title={String(row.fromer || "")}>
                                                <Link style={{color: 'rgb(32, 129, 226)'}}
                                                      to={`/profile/${String(row.fromer)}`}>
                                                    {row.from}
                                                </Link>
                                            </ToolTip>
                                        </TableCell>
                                        <TableCell
                                            align="left"> <ToolTip title={String(row.toer || "")}>
                                            <Link style={{color: 'rgb(32, 129, 226)'}}
                                                  to={`/profile/${String(row.toer)}`}>{row.to}</Link></ToolTip></TableCell>
                                        <TableCell align="left">{row.time || ""}</TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            }
        </Styled.Wrap>
    );
}

