import {ListItemStyles as Styled} from './styles'
import {Box} from '@/styles';
import Icons from "@/icons/Icon";
import {ItemCard, MainButton, Gap, Input, TooltipContent, LoadingModal, statusType} from '@/components';
import {MusicCard} from "@/views/Music/components";
import React, {useCallback, useMemo, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {toast} from "react-toastify";
import {MarketApi, NFTMintApi} from "@/apis";
import BigNumber from "bignumber.js";
import Storage from '@/utils/storage'
import './index.less';

interface State {
    price: number | string;
}

export default () => {
    const history = useHistory();
    const {name, nftUrl, musicNftUrl} = Storage.getOrderSessionStorage() || {};
    const {tokenId, collectionId}: { tokenId: string, collectionId: string } = useParams();
    const [loadingOrderStatus, setLoadingOrderStatus] = useState<statusType | boolean>(false);
    const [values, setValues] = useState<State>({
        price: ''
    });
    const [approve, setApprove] = useState<boolean>(false);
    const _price = useMemo(() => {
        const {price} = values;
        return new BigNumber(Math.pow(10, 8)).times(Number(price))
    }, [values]);
    const handleLoadingModalClose = useCallback(() => {
        if (loadingOrderStatus === 'success') {
            history.push('/profile');
        }
        setLoadingOrderStatus(false)
    }, [loadingOrderStatus])
    const createOrder = useCallback(async () => {

        if (disabled && tokenId) {
            setLoadingOrderStatus('loading');
            const result = await toast.promise(MarketApi.createOrder(Number(tokenId), Number(_price), collectionId), {
                pending: 'order is pending',
                success: 'order success 👌',
                error: {
                    render: ({data}: any) => {
                        setLoadingOrderStatus('failed');
                        return (`${data.err || data} err 🤯`)
                    }
                }
            })
            if (result) {
                setLoadingOrderStatus('success');
            }

        }
    }, [approve, _price, tokenId]);

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [prop]: event.target.value});
    };
    const disabled = useMemo(() => {
        const {price} = values;
        return !!price
    }, [values])
    return (
        <>
            <Styled.TopSection>
                <Box style={{cursor: 'pointer'}} onClick={() => history.goBack()}>
                    <Icons name='leftArrow'/>
                </Box>
                <Gap width={10}/>
                <Box style={{cursor: 'pointer'}}>
                    <Styled.Icon src={nftUrl}/>
                    <Gap width={10}/>
                    <Box d='column'>
                        <Styled.SmallTitle>
                            {name || ""}
                        </Styled.SmallTitle>
                        <Styled.MainTitle>
                            {tokenId || ""}
                        </Styled.MainTitle>
                    </Box>
                </Box>
            </Styled.TopSection>

            <Styled.Wrap>
                <Gap height={12}/>
                <Box d='row' jc='space-between'>
                    <Box d='column'>
                        <Styled.HeaderTitle>
                            List item for sale
                        </Styled.HeaderTitle>
                        <Gap height={40}/>
                        <Box d='column'>
                            <Styled.MainTitle>
                                Type
                            </Styled.MainTitle>
                            <Gap height={10}/>
                            <Styled.TextBox>
                                Fixed Price
                            </Styled.TextBox>
                        </Box>
                        <Gap height={40}/>
                        <Box d='column'>
                            <Styled.MainTitle>
                                Price
                            </Styled.MainTitle>
                            <Gap height={10}/>
                            <Box>
                                <Styled.TextBoxT>
                                    <Icons name='ICP'/>
                                    WICP
                                </Styled.TextBoxT>
                                <Styled.PriceInputWrap>
                                    <Input className='list-name' value={values.price}
                                           onChange={handleChange('price')}
                                           inputProps={{step: 1, min: 10, type: 'number'}}
                                           sx={{height: 40, width: "100%"}}/>
                                </Styled.PriceInputWrap>
                            </Box>
                            <Box d='column'>
                                <Gap height={40}/>
                                <Styled.MainTitle>
                                    Type
                                </Styled.MainTitle>
                                <Gap height={10}/>
                                <Box d='row' ai='center'>
                                    <Box>
                                        <Styled.SmallTitle>
                                            Service Fee
                                        </Styled.SmallTitle>
                                        <Styled.TipBox>
                                            <TooltipContent content={<Styled.TipContent>
                                                Listing is free. Once sold, the following fees will be deducted. Learn
                                                more
                                            </Styled.TipContent>}>
                                                <Icons name='tip'/>
                                            </TooltipContent>
                                        </Styled.TipBox>
                                    </Box>
                                    <Gap width={30}/>
                                    <Styled.SmallTitle>
                                        0%
                                    </Styled.SmallTitle>
                                </Box>
                                <Gap width={20}/>
                                <Box d='row' ai='center'>
                                    <Box jc='center'>
                                        <Styled.SmallTitle>
                                            Royalty Fee
                                        </Styled.SmallTitle>
                                        <Styled.TipBox>
                                            <TooltipContent content={<Styled.TipContent>
                                                Listing is free. Once sold, the following fees will be deducted. Learn
                                                more
                                            </Styled.TipContent>}>
                                                <Icons name='tip'/>
                                            </TooltipContent>
                                        </Styled.TipBox>
                                    </Box>
                                    <Gap width={30}/>
                                    <Styled.SmallTitle>
                                        0%
                                    </Styled.SmallTitle>
                                </Box>
                                <Gap height={80}/>
                                <Styled.ButtonContainer>
                                    <MainButton disabled={!disabled}
                                                borderRadius={20} onClick={createOrder}>
                                        List
                                    </MainButton>
                                </Styled.ButtonContainer>
                            </Box>
                        </Box>
                    </Box>
                    <Box jc='center'>
                        {musicNftUrl ? <MusicCard data={{
                            index: '',
                            price: String(_price),
                            collectionId: musicNftUrl,
                            id: '',
                            cover: nftUrl,
                            musicUrl: musicNftUrl,
                            name: name,
                            type: name
                        }}/> : <ItemCard nftInfo={{nftUrl, price: _price}}/>}
                    </Box>
                </Box>
                <LoadingModal handleRetry={createOrder} handleClose={handleLoadingModalClose}
                              status={loadingOrderStatus}/>
            </Styled.Wrap>
        </>
    );
}
