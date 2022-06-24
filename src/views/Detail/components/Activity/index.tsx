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
    canisterId: string,
    tokenId: string
};
export const Activity = ({canisterId, tokenId}: Props) => {
    const [list, setList] = useState<Array<allHistoryModal | any>>()
    useEffect(() => {
        (async () => {
            setList(await StorageApi.getNftItemHistory(canisterId, '7d', tokenId));
        })()
    }, []);
    return (
        <Styled.Wrap>
            {!list ? <Skeleton width='1000' height={100} sx={{transform: 'none'}}/> :
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
                                        {row.id}
                                    </TableCell>
                                    <TableCell
                                        align="left">{getCurrencyString(row.price || "", 8, 2) || ""}</TableCell>
                                    <TableCell
                                        align="left">
                                        <ToolTip title={String(row.owner || "")}>
                                            <Link style={{color: 'rgb(32, 129, 226)'}}
                                                  to={`/profile/${String(row.from)}`}>
                                                {desensitizationPrincipal(String(row.from || ""), 8) || ""}</Link>
                                        </ToolTip></TableCell>
                                    <TableCell
                                        align="left">
                                        <ToolTip title={String(row.to || "")}>
                                            <Link style={{color: 'rgb(32, 129, 226)'}}
                                                  to={`/profile/${String(row.to)}`}>
                                                {desensitizationPrincipal(String(row.to || ""), 8) || ""}</Link>
                                        </ToolTip></TableCell>
                                    <TableCell
                                        align="left">{row.date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            }
        </Styled.Wrap>
    );
}

