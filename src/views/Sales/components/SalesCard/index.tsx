import React, {memo, useCallback, useEffect, useMemo, useState} from "react";
import {SalesCardStyles as Styled} from "./styles";
import {Gap} from "@/components/";
import {SaleInfo} from "@/did/model/sales.did";
import {Link, useHistory} from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import {Metadata} from "@/did/model/sale.did";
import {CountTimeDown} from '@/components'
import moment from "moment-timezone";
import Countdown from 'react-countdown';

interface SalesProps extends Metadata {
}

interface Props {
    sales?: SaleInfo | Metadata;
}

export const SalesCard = memo(({sales}: Props) => {
    let {canisterId, desc, logo, name, startTime, endTime} = sales || {} as any;
    const currentTime = moment().valueOf();
    startTime = startTime && Number(startTime) / 1000000  //init  m
    endTime = endTime && Number(endTime) / 1000000  //init  m

    const [date, setDate] = useState<any>(startTime > currentTime ? startTime : endTime)
    const [text, setText] = useState<string>('');

    const handleCompleted = ({total}) => {
        const currentTime = moment().valueOf();
        let desc = 'end', time: any = '';
        if (currentTime < startTime) {
            desc = ' Will Start'
            time = startTime
        } else if (endTime >= currentTime && startTime <= currentTime) {
            desc = 'End in '
            time = endTime
        }
        if (desc !== text) {
            setText(desc)
        }
        if (time !== date) {
            setDate(time)
        }
    }
    if (!canisterId) {
        return (<Styled.CollectionCard>
            <Skeleton variant="rectangular" width={"100%"} height={800}/>
        </Styled.CollectionCard>)
    }

    return (
        <Link to={`/sales/sale/${canisterId}`}>
            <Styled.CollectionCard>
                <Styled.CollectionBackground src={logo}/>
                <Styled.TitleWrap>{name}</Styled.TitleWrap>
                <Styled.Desc>
                    {desc}
                </Styled.Desc>
                <Styled.ViewBtn>
                    {text}
                </Styled.ViewBtn>
                <CountTimeDown key={date} handleCompleted={handleCompleted}
                               startTime={(date)}/>
            </Styled.CollectionCard>
        </Link>
    );
});
