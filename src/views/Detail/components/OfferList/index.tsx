import React, {memo, useEffect, useMemo, useState} from "react";
import {ActivityStyles as Styled} from './style'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {MarketApi} from "@/apis";
import {allHistoryModal} from '@/model'
import {Skeleton} from "@mui/material";
import {ToolTip} from '@/components'
import {desensitizationPrincipal, getCurrencyString} from "@/utils/formate";
import {Link} from "react-router-dom";
import moment from "moment-timezone";
import {Box} from '@/styles'

interface Props {
    canisterId: string;
    tokenId: string;
    reFresh: boolean
};
let timer: any = null;
export const OfferList = memo(({canisterId, tokenId, reFresh}: Props) => {
    const [list, setList] = useState<Array<allHistoryModal | any>>();
    const [offerList, setOfferList] = useState<Array<any>>([])
    useEffect(() => {
        (async () => {
            setList(await MarketApi.getOffer(canisterId, tokenId));
        })()
    }, [reFresh]);
    useEffect(() => {
        if (!list?.length) {
            return;
        }
        if (timer) {
            clearInterval(timer)
        }
        timer = setInterval(() => {
            const _list = list?.map((_item) => {
                const currentTime = moment().unix();
                const endTime = Number(_item.end);
                const time = ~~((endTime - currentTime) / 60);
                if (endTime - currentTime > 0) {
                    _item.time = time
                } else {
                    _item.time = 0
                }

                return _item
            }).filter((_item) => _item.time);
            setOfferList(() => {
                return [..._list]
            })
        }, 1000);
        return () => clearInterval(timer);
    }, [list]);
    return (
        <Styled.Wrap>
            {!list ? <Skeleton width='1000' height={100} sx={{transform: 'none'}}/> :
                <TableContainer>
                    <Table sx={{width: " 100%"}}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Price (Wicp)</TableCell>
                                <TableCell align="left">USD Price</TableCell>
                                <TableCell align="left">Expiration (min)</TableCell>
                                <TableCell align="left">From</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(offerList || []).map((row: allHistoryModal | any, index) => (
                                <TableRow
                                    key={row.time}
                                    sx={{'&:last-child td, &:last-child th': {border: 0, margin: '10px 0'}}}
                                >
                                    <TableCell>{getCurrencyString(row.price || "", 8, 2) || ""}</TableCell>
                                    <TableCell align="left"> ————</TableCell>
                                    <TableCell align="left"> {row.time}</TableCell>
                                    <TableCell
                                        align="left">
                                        <ToolTip title={String(row.bidder || "")}>
                                            <Link style={{color: 'rgb(32, 129, 226)'}}
                                                  to={`/profile/${String(row.bidder)}`}>
                                                {desensitizationPrincipal(String(row.bidder || ""), 8) || ""}</Link>
                                        </ToolTip></TableCell>
                                    {/*<TableCell*/}
                                    {/*    align="left">*/}
                                    {/*    <Styled.OfferButton>*/}
                                    {/*         Accpet*/}
                                    {/*    </Styled.OfferButton>*/}
                                    {/*</TableCell>*/}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            }
        </Styled.Wrap>
    );
})

