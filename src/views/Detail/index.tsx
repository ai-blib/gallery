import {DetailStyles as Styled} from './styles';
import {Box} from '@/styles';
import React, {useState, useEffect, useMemo, useCallback} from "react";
import {Favorite} from '@mui/icons-material';
import {ToolTip, MainButton, LoadingModal, Gap, AccordionPanel, SelectedTab, Frame3D} from '@/components'
import AccountBalanceWallet from "@mui/icons-material/AccountBalanceWallet";
import {useHistory, useParams} from 'react-router-dom';
import {WicpApi, NFTMintApi, MarketApi} from "@/apis"
import {getTokenInfoResult} from '@/apis/model/min';
import {desensitizationPrincipal} from "@/utils/formate";
import {
    OrderModel,
    BuyModal,
    Info,
    OrderButtonList,
    NftDisplay,
    PriceHistory,
    Properties,
    Activity,
    MakeOffer,
    OfferList
} from './components';
import {OrderExt} from '@/did/model/market'
import Icon from '@/icons/Icon'
import {TokenStatus} from '@/constants'
import {Skeleton} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {toast} from 'react-toastify';
import {getCurrencyString} from "@/utils/formate";
import {statusType} from '@/components/Basic/LoadingModal'
import Storage from '@/utils/storage'
import {Link} from "react-router-dom";
import {useUserInfoStore} from "@/redux";

export default (() => {
    const {id, collectionId}: { id: string, collectionId: string } = useParams();
    const [arouse, setArouse] = useState<boolean>(false)
    const {name} = useUserInfoStore();
    const history = useHistory();
    const tokenId = id.split('_')[0];
    const orderId = id.split("_")[1];
    const [orderVisible, setOrderVisible] = useState<boolean>(false);
    const [tokenInfo, setTokenInfo] = useState<getTokenInfoResult | any>();
    const [orderInfo, setOrderInfo] = useState<OrderExt | any>({});
    const [buyOrder, setBuyOrder] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const [makeOfferVisible, setMakeOfferVisible] = useState<boolean>(false);
    const {index, token} = orderInfo;
    const {owner} = tokenInfo || {};
    const {description} = tokenInfo ? tokenInfo.attr : {description: ""};
    const [collectionInfo, setCollectionInfo] = useState<Object | any>({});
    Storage.setOrderSessionStorage({
        name: tokenInfo?.attr?.name,
        tokenId,
        nftUrl: tokenInfo?.nftUrl,
        musicNftUrl: tokenInfo?.musicNftUrl
    });
    const handleOrder = useCallback(() => {
        history.push(`/order/${collectionId}/${tokenId}`)
    }, [tokenId]);
    const handleAddFavorite = async () => {
        setIsFavorite(!isFavorite);
        let call;
        if (isFavorite) {
            call = await MarketApi.removeFavorite(token, index);
        } else {
            call = await MarketApi.addFavorite(token, index);
        }
        const result: any = await toast.promise(call, {
            pending: 'order is pending',
            success: 'favorite success 👌',
            error: {render: ({data}: any) => (`${data.err || data} err 🤯`)}
        });
        if (result.err) {
            setIsFavorite(false);
            return;
        }
        setIsFavorite(true);
    }
    const cancelOrder = useCallback(async () => {
        if (orderId) {
            const result: any = await toast.promise(MarketApi.cancelOrder(Number(orderId)), {
                pending: 'order is pending',
                success: 'order success 👌',
                error: {
                    render: ({data}: any) => {
                        return (`${data.err || data} err 🤯`)
                    }
                }
            })
            if (result?.ok) {
                await refreshStatus();
            }
        }
    }, [orderId]);

    const refreshStatus = async () => {
        setLoading(true)
        setTokenInfo(await NFTMintApi.getTokenInfo(tokenId, undefined, collectionId))
        if (orderId) setOrderInfo(await MarketApi.getOrder(orderId));
        setLoading(false);
        if (token) {
            setIsFavorite(await MarketApi.isFavorite(token, index));
        }
        setCollectionInfo(await MarketApi.getCollectionInfo(collectionId))
    }
    const handleClose = async () => {
        setOrderVisible(false);
        setBuyOrder(false)
        await refreshStatus();
    }
    const token_status = useMemo(() => {
        if (!orderInfo) {
            return
        }
        if (orderInfo?.status && "open" in orderInfo?.status) {
            return TokenStatus.buyStatus
        } else if (orderInfo?.status && "done" in orderInfo?.status) {
            return ''
        }
        return TokenStatus.orderStatus
    }, [orderInfo])
    useEffect(() => {
        (async () => {
            await refreshStatus();
        })()
    }, [id, String(token), index]);

    return (
        <Box width='100%' jc='center' ai='center' d='column'>
            <OrderButtonList status={token_status} owner={orderInfo?.owner || tokenInfo?.owner}
                             cancelOrder={cancelOrder} loading={loading}
                             handleOrder={handleOrder}/>
            <Styled.DetailWrap>
                <Box width='100%' d='row'>
                    <Box d='column'>
                        <Styled.BoxWrap>
                            {tokenInfo?.nftUrl && !tokenInfo?.musicNftUrl &&
                                < Styled.Btn3D onClick={() => setArouse(true)}>
                                    3D
                                </Styled.Btn3D>
                            }
                            <NftDisplay tokenInfo={tokenInfo}/>
                        </Styled.BoxWrap>
                        <Gap height={20}/>
                        <AccordionPanel icon={<Icon name='desc'/>} title='Description' description={description}/>
                        <Gap height={20}/>
                        <AccordionPanel icon={<Icon name='properties'/>} title='Properties'
                                        description={<Properties propertiesList={tokenInfo?.attr?.properties || []}/>}/>
                    </Box>
                    <Styled.formWrap>
                        <Styled.TopContent>
                            <Box d='row' jc='space-between'>
                                <Box d='column'>
                                    <Styled.TitleName>
                                        {tokenInfo?.attr?.name || tokenInfo?.attr ? `${tokenInfo?.attr?.name || ""}#${tokenId}` :
                                            <Skeleton width={100}/>}
                                    </Styled.TitleName>
                                    <Styled.OwnerSpan>
                                        Owned by &nbsp; <ToolTip title={String(owner)}><Link
                                        style={{color: 'rgb(32, 129, 226)'}}
                                        to={`/profile/${String(owner)}`}>{owner ? desensitizationPrincipal(String(owner), 8) :
                                        <Skeleton width={100} height={40}/>}</Link></ToolTip>
                                    </Styled.OwnerSpan>
                                </Box>
                                {token ? <Styled.Fav>
                                    {!loading ? <ToolTip title={'favorite'}>
                                        <IconButton
                                            onClick={handleAddFavorite}
                                            sx={{color: 'rgb(229, 232, 235)', margin: 1.5}}
                                            aria-label={`star ${1}`}
                                        >
                                            <Favorite sx={{color: isFavorite ? "red" : ''}}/>
                                        </IconButton>
                                    </ToolTip> : <Skeleton width='100%' height={600}/>}
                                </Styled.Fav> : null}
                            </Box>
                            <Info collectionInfo={collectionInfo} tokenId={tokenId}
                                  tokenInfo={tokenInfo}/>
                            {token_status === TokenStatus.buyStatus ? <Styled.BuyWrap>
                                <Styled.PriceDsc>
                                    Fixed price
                                </Styled.PriceDsc>
                                <Box jc='center'>
                                    <Styled.PriceWrap>
                                        <Icon name='ICPNoOutline'/>
                                        <Gap width={20}/>
                                        <Styled.Price>
                                            {getCurrencyString(orderInfo?.price, 8, 2)} WICP
                                        </Styled.Price>
                                    </Styled.PriceWrap>
                                </Box>
                                <Box jc='center' ai='center'>
                                    <Styled.ButtonWrap>
                                        <MainButton icon={<AccountBalanceWallet/>} borderRadius={20}
                                                    onClick={() => setBuyOrder(true)}>buy</MainButton>
                                    </Styled.ButtonWrap>
                                    <Styled.OfferButton onClick={() => setMakeOfferVisible(true)}>
                                        <Icon name='offer'/>
                                        Make Offer
                                    </Styled.OfferButton>
                                </Box>
                            </Styled.BuyWrap> : loading &&
                                <Skeleton sx={{transform: 'none'}} width='100%' height={100}/>}
                        </Styled.TopContent>
                        <Gap height={10}/>
                        <AccordionPanel icon={<Icon name='desc'/>} title='offer'
                                        description={<OfferList reFresh={makeOfferVisible} canisterId={collectionId}
                                                                tokenId={tokenId}/>}/>
                        <Gap height={10}/>
                        {/*Price history*/}
                        <AccordionPanel icon={<Icon name='history'/>} title='Price history'
                                        description={<PriceHistory canisterId={collectionId} tokenId={tokenId}/>}/>
                    </Styled.formWrap>
                </Box>
                <Gap height={20}/>
                <AccordionPanel icon={<Icon name='desc'/>} title='Activity'
                                description={<Activity canisterId={collectionId} tokenId={tokenId}/>}/>

                <OrderModel tokenId={tokenId} visible={orderVisible} onClose={handleClose}/>
                <BuyModal orderId={orderId} orderInfo={{...orderInfo, ...tokenInfo}} tokenId={tokenId}
                          visible={buyOrder}
                          collectionInfo={collectionInfo && collectionInfo[0]}
                          onClose={handleClose}/>

            </Styled.DetailWrap>
            {makeOfferVisible && <MakeOffer onClose={() => setMakeOfferVisible(false)} tokenId={tokenId}
                                            collectionInfo={collectionInfo && collectionInfo[0]}
                                            name={`${tokenInfo?.attr?.name || ""}#${tokenId}`}/>}
            {/*3D Frame*/}
            <Styled.Mask visible={arouse}>
                <Styled.Header>
                    <a style={{position: 'absolute', left: 10}} onClick={() => setArouse(false)}>
                        <Icon name='logo'/>
                    </a>
                    <Styled.CloseBox>
                        <IconButton
                            aria-label="close"
                            onClick={() => setArouse(false)}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                            }}
                        >
                            <Icon name='close'/>
                        </IconButton>
                    </Styled.CloseBox>
                </Styled.Header>
                <Frame3D url={tokenInfo?.nftUrl}/>
            </Styled.Mask>
        </Box>
    )

})

