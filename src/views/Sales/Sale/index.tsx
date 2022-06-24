import {SaleStyles as Styled} from './styles'
import {Box} from '@/styles';
import Icon from "@/icons/Icon";
import {MintModal} from './components'
import React, {useCallback, useEffect, useMemo, useState} from "react";
import {useParams} from "react-router-dom";
import {SalesApi, NFTMintApi} from '@/apis';
import {Metadata, SaleInfoExt} from '@/did/model/sale.did';
import {Skeleton} from "@mui/material";
import {ButtonTabs, CountTimeDown, MainButton} from '@/components'
import {useAuth} from "@/usehooks/useAuth";
import storage from "@/utils/storage";
import moment from "moment-timezone";

const TabList = ['saleing'];
const WILLSTART = 'Will Start';
const WIllEND = 'Will End';
const END = 'Token Sale Ended'
export default () => {
    const {id}: { id: string } = useParams();
    const {isAuth} = useAuth()
    const [currentSaleInfo, setCurrentSaleInfo] = useState<SaleInfoExt | any>({});
    const [alreadyAmount, setAlreadyAmount] = useState<number | any>()
    const [visible, setVisible] = useState<boolean>(false);
    const [metaData, setMetaData] = useState<Metadata | any>({});

    const handleClick = useCallback(() => setVisible(true), []);
    const [active, setActive] = useState<number>(0);
    const [date, setDate] = useState<any>(0);
    const [timeObj, setTimeObj] = useState<any>(0);
    const [text, setText] = useState<string>("");
    const handleCompleted = ({total}) => {
        const {endTime, startTime} = timeObj;
        const currentTime = moment().valueOf();
        let desc = END, time: any = 'end';
        if (currentTime < startTime) {
            desc = WILLSTART
            time = date
        } else if (endTime >= currentTime && startTime <= currentTime) {
            desc = WIllEND
            time = endTime
        }
        if (desc !== text) {
            setText(desc)
        }
        if (time !== date) {
            setDate(time)
        }
    }
    const handleActive = (e: any, index: number) => {
        setActive(index);
        storage.setTabActive(index);
    }
    const handleClose = useCallback(async (status) => {
        setVisible(false);
        if (status) return await reFresh();
    }, []);
    const reFresh = async () => {
        SalesApi.getMetadata(id).then((data) => setMetaData(data));
        SalesApi.getSaleInfo(id).then((res) => setCurrentSaleInfo(res));
        // console.log(await NFTMintApi.getUserTokens(id), 'await NFTMintApi.getAllTokens(id)');
        setAlreadyAmount(await SalesApi.balanceOf(id));
        if (currentSaleInfo) {
            console.log(currentSaleInfo, 123)
        }
    }
    const {disabled, btnText} = useMemo(() => {
        const {maxPerUser} = currentSaleInfo;
        if (text == WILLSTART || text === END) {
            return {disabled: true, btnText: text}
        }
        if (!alreadyAmount && Number(alreadyAmount) !== 0) return {disabled: true, btnText: text}
        if (Number(alreadyAmount) >= Number(maxPerUser)) {
            return {disabled: true, btnText: 'Max limit reached'}
        }
        return {disabled: false, btnText: 'Mint now!'}
    }, [alreadyAmount, currentSaleInfo, text])

    useEffect(() => {
        let {startTime, endTime} = currentSaleInfo;
        // startTime = moment().valueOf() + 10000;
        // endTime = startTime + 40000
        const currentTime = moment().valueOf();
        if (startTime) {
            startTime = startTime && Number(startTime) / 1000000  //init  m
            endTime = endTime && Number(endTime) / 1000000  //init  m
            setTimeObj({startTime, endTime})
            setDate(startTime);
        }
    }, [currentSaleInfo])
    useEffect(() => {
        (async () => {
            await reFresh()
        })()
    }, [id, isAuth]);
    return (
        <Styled.Wrap>
            <Styled.Header>
                {/*<Styled.SwitchItem>*/}
                {/*    <ButtonTabs height={40} tabs={TabList} handleChange={handleActive} value={active}/>*/}
                {/*</Styled.SwitchItem>*/}
            </Styled.Header>
            <Styled.Banner src='/assets/sales-post.png'/>
            <Styled.TimerBox>
                <Styled.Timer>
                    <Styled.TimerText>
                        {text}
                    </Styled.TimerText>
                    <CountTimeDown key={date} handleCompleted={handleCompleted}
                                   startTime={(date)}/>
                </Styled.Timer>
            </Styled.TimerBox>
            <Styled.Content>
                <Box d='column'>
                    <Box ai='center'>
                        <Styled.MainTitle>{metaData?.symbol}</Styled.MainTitle>
                        <Styled.TwitterWrap>
                            <Icon name='twitter'/>
                            <span style={{marginLeft: 10}}>
                                {metaData?.symbol}
                             </span>
                        </Styled.TwitterWrap>
                    </Box>
                    <Box>
                        <Styled.CreatedBy> Created by</Styled.CreatedBy>
                        <Styled.Icon src={metaData?.logo}/>
                        <Styled.Name>
                            {metaData?.symbol}
                        </Styled.Name>

                    </Box>
                    <Styled.DescriptionTitle>
                        Description
                    </Styled.DescriptionTitle>
                    <Styled.P>
                        {metaData?.desc}
                    </Styled.P>
                </Box>
                <Box d='column'>
                    <Styled.MintBox>
                        <Box d='column' jc='space-between'>
                            <Styled.Number>
                                {currentSaleInfo?.amount ? `${currentSaleInfo?.amountLeft} / ${currentSaleInfo?.amount}` :
                                    <Skeleton animation='wave' width={100} height={20}/>}
                            </Styled.Number>
                            <Styled.TotalWrap>
                                <Styled.Avaliable>
                                    Avaliable
                                </Styled.Avaliable>
                                / Total
                            </Styled.TotalWrap>
                        </Box>
                        <Box d='column' jc='space-between'>
                            <Styled.Number>
                                {currentSaleInfo?.price ? `${Number(currentSaleInfo?.price) / Math.pow(10, 8)} WICP` :
                                    <Skeleton animation='wave' width={100} height={20}/>}
                            </Styled.Number>
                            <Styled.TotalWrap>
                                Mint Price
                            </Styled.TotalWrap>
                        </Box>
                    </Styled.MintBox>
                    <Styled.MintButton>
                        <MainButton disabled={disabled} onClick={handleClick}>
                            {btnText}
                        </MainButton>
                    </Styled.MintButton>

                </Box>
            </Styled.Content>
            <Styled.PleaseNoteWrap>
                <Styled.PN>
                    Please note:
                </Styled.PN>
                <Styled.P width='100%'>
                    All transactions are secured via iMart platform. Once a transaction is made, it cannot be reversed
                    and there are no refunds or returns. By clicking the buttons above you show acceptance of our Terms
                    of Service
                </Styled.P>
            </Styled.PleaseNoteWrap>
            {visible &&
                <MintModal visible={visible} info={{...currentSaleInfo, id, alreadyAmount}} onClose={handleClose}/>}
        </Styled.Wrap>
    )
}
