import {Modal, MainButton, Gap, LoadingModal, statusType} from '@/components';
import {OrderModalStyles as Styles} from './styles'
import React, {memo, useCallback, useMemo, useState} from 'react'
import {MarketApi, NFTMintApi, WicpApi} from '@/apis';
import {OrderExt} from "@/did/model/market";
import {useUserInfoStore, updateDrawerVisible} from "@/redux";
import {toast} from 'react-toastify';
import BigNumber from "bignumber.js";
import {getCurrencyString} from "@/utils/formate";
import {DetailStyles as Styled} from "@/views/Detail/styles";
import {useHistory} from "react-router-dom";
import {Skeleton} from "@mui/material";
interface Props {
    orderInfo: OrderExt | any;
    orderId: string;
    tokenId: string;
    visible: boolean;
    onClose: (status?:string|any) => any;
    collectionInfo?: Object | any | undefined
};

export const BuyModal = ({visible, collectionInfo, orderInfo, onClose, orderId, tokenId}: Props) => {
    const {marketBalance, loading} = useUserInfoStore();
    const {name} = collectionInfo || {}
    const history = useHistory();
    const [loadingOrderStatus, setLoadingOrderStatus] = useState<statusType | boolean>(false);
    const {price} = orderInfo;
    const orderPrice = useMemo(() => {
        return getCurrencyString(orderInfo?.price, 8, 2);
    }, [price])
    const btnText = useMemo(() => {
        return 'Pay'
    }, [orderPrice, marketBalance])
    const buyOrder = useCallback(async () => {
        const result = await toast.promise(MarketApi.buy(Number(orderId), Number(price)), {
            pending: 'order is pending',
            success: 'order success 👌',
            error: {render: ({data}: any) => (`${data.err || data} err 🤯`)}
        });
        setLoadingOrderStatus('success');
        if (result.ok) onClose && onClose('ok');
    }, [price, marketBalance]);
    const handleLoadingModalClose = useCallback(() => {
        if (loadingOrderStatus === 'success') {
            history.push('/profile');
        }
        setLoadingOrderStatus(false)
    }, [loadingOrderStatus])

    return (
        <Modal  visible={visible} header='Checkout' onClose={onClose}
               buttonComponent={
                   <Styles.ButtonWrap>
                       <Styles.ButtonContainer>
                           <MainButton
                               borderRadius={20}
                               onClick={buyOrder}
                           >
                               {btnText}
                           </MainButton>
                       </Styles.ButtonContainer>
                   </Styles.ButtonWrap>}
        >
            <Styles.Wrap>
                <Styles.Info>
                    <Styles.ItemTitle>Item</Styles.ItemTitle>
                    <Styles.Item>
                        {`${orderInfo?.attr?.name}#${tokenId}`}
                    </Styles.Item>
                </Styles.Info>
                <Styles.Info>
                    <Styles.ItemTitle>Collection</Styles.ItemTitle>
                    <Styles.Item>
                        {name && <Skeleton width={20} height={10}/>}
                    </Styles.Item>
                </Styles.Info>
                <Styles.ItemLine />
                <Styles.Info>
                    <Styles.ItemTitle>Price</Styles.ItemTitle>
                    <Styles.Item>
                        {orderPrice} WICP
                    </Styles.Item>
                </Styles.Info>
                <Styles.Info>
                    <Styles.ItemTitle>Your Market Balance</Styles.ItemTitle>
                    <Styles.Item>
                        {loading ? <Skeleton width={20} height={10}/> : marketBalance} WICP
                    </Styles.Item>
                </Styles.Info>
            </Styles.Wrap>
            {loadingOrderStatus&&<LoadingModal handleRetry={buyOrder} handleClose={handleLoadingModalClose}  status={loadingOrderStatus} />}

        </Modal>
    )
}
