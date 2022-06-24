import {Modal, MainButton, Gap, Input} from '@/components';
import {MintModalStyles as Styles} from './styles'
import React, {memo, useCallback, useMemo, useState} from 'react'
import {WicpApi, SalesApi} from '@/apis';
import {OrderExt} from "@/did/model/market";
import {updateDrawerVisible, useUserInfoStore} from "@/redux"
import {toast} from 'react-toastify';
import './index.less'
import {Box} from "@/styles";
import {SaleInfoExt} from '@/did/model/sale.did';
import {getCurrencyString} from '@/utils/formate'
import AccountBalanceWallet from "@mui/icons-material/AccountBalanceWallet";
import BigNumber from "bignumber.js";

interface infoProps extends SaleInfoExt {
    id: string,
    alreadyAmount: number | string
}

interface Props {
    visible: boolean;
    onClose: (v?: boolean) => void;
    info: infoProps
}

export const MintModal = ({visible, onClose, info}: Props) => {
    const {balance} = useUserInfoStore();
    const [numbers, setNumbers] = useState<number | string>('');
    const {maxPerUser, minPerUser, id, price, alreadyAmount} = info;
    //---
    const willPay = useMemo(() => {
        return String(new BigNumber(getCurrencyString(String(price), 8)).times(Number(numbers)));
    }, [price, numbers]);
    const btnText = useMemo(() => {
        if (Number(willPay) < Number(balance)) {
            return 'buy'
        }
        return 'insufficient balance'
    }, [willPay, balance])
    //---
    const buyOrder = useCallback(async () => {
        if (Number(willPay) > Number(balance)) {
            await updateDrawerVisible({open: true});
            onClose && onClose(true);
            return
        }
        const result = await toast.promise(SalesApi.buy(String(id), numbers), {
            pending: 'order is pending',
            success: 'order success 👌',
            error: {render: ({data}: any) => `${data.err || data} err 🤯`}
        });

        if (result.ok) onClose && onClose(true);
    }, [id, numbers])
    const handleInputChange = (number: string | number) => {
        //integer
        if (Number(number) % 1 !== 0) {
            return;
        }
        const maxNumber = Number(maxPerUser) - Number(alreadyAmount);
        if (number > maxNumber) {
            return;
        }
        if (Number(maxPerUser) - Number(alreadyAmount) <= 0) {
            return;
        }
        if (+number <= Number(maxPerUser) && +number >= Number(minPerUser) || number === '') {
            setNumbers(number)
        }
    }
    return (
        <Modal className='mint-modal' visible={visible} header='Mint' onClose={onClose}
               buttonComponent={
                   <Styles.ButtonWrap>
                       <Styles.ButtonContainer>
                           <MainButton
                               disabled={!numbers}
                               icon={<AccountBalanceWallet/>}
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
                    <Styles.ItemTitle>Numbers</Styles.ItemTitle>
                    <Styles.Item>
                        <Input inputProps={{
                            step: 1,
                            min: minPerUser,
                            max: Number(maxPerUser) - Number(alreadyAmount),
                            type: 'number',
                        }} sx={{height: 45, width: 170}} onChange={(e: any) => handleInputChange(e.target.value)}
                               value={numbers}
                               placeholder=' mint numbers'/>
                    </Styles.Item>
                </Styles.Info>
                <Styles.SmallSpan>
                    The max number is {Number(alreadyAmount) + ' / ' + Number(maxPerUser)}
                </Styles.SmallSpan>
                <Styles.Line/>
                <Styles.Info>
                    <Styles.ItemTitle>You will pay</Styles.ItemTitle>
                    <Styles.Item>
                        {willPay} WICP
                    </Styles.Item>
                </Styles.Info>
                <Styles.Info>
                    <Styles.ItemTitle>Your balance</Styles.ItemTitle>
                    <Styles.Item>
                        {balance} WICP
                    </Styles.Item>
                </Styles.Info>
                <Styles.Info>
                    <Styles.ItemTitle>Already Mint</Styles.ItemTitle>
                    <Styles.Item>
                        {alreadyAmount + ""}
                    </Styles.Item>
                </Styles.Info>
            </Styles.Wrap>
        </Modal>
    )
};
