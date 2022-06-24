import {Modal, MainButton, Gap, Input} from '@/components';
import {MintModalStyles as Styles} from './styles'
import React, {memo, useCallback, useMemo, useState} from 'react'
import {WicpApi, SalesApi, MarketApi} from '@/apis';
import {OrderExt} from "@/did/model/market";
import {useUserInfoStore} from "@/redux"
import {toast} from 'react-toastify';
import './index.less'
import {Box} from "@/styles";
import {SaleInfoExt} from '@/did/model/sale.did';
import {getCurrencyString} from '@/utils/formate'
import AccountBalanceWallet from "@mui/icons-material/AccountBalanceWallet";
import BigNumber from "bignumber.js";
import Icon from '@/icons/Icon'
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';

interface infoProps extends SaleInfoExt {
    id: string
}

export type Type = 'deposit' | 'withdraw';

interface Props {
    visible: boolean;
    onClose: (v?: boolean) => void;
    title: Type | string,
}

export default ({visible, onClose, title}: Props) => {
    const {balance, marketBalance, tokenFee} = useUserInfoStore();
    const [numbers, setNumbers] = useState<number | string>('');
    const [approve, setApprove] = useState<boolean>(false);
    const btnText = useMemo(() => {
        return approve ? "confirm" : "Approve";
    }, [approve]);
    const {currentBalance, desc} = useMemo(() => {
        if (title === 'deposit') {
            return {currentBalance: balance, desc: 'plug Balance'}
        } else if (title === 'withdraw') {
            return {currentBalance: marketBalance, desc: 'Market balance'};
        }
        return {currentBalance: "", desc: ""}
    }, [title, balance, marketBalance])
    const deposit = useCallback(async () => {
        const result = await toast.promise(MarketApi.deposit(Number(numbers)), {
            pending: 'order is pending',
            success: 'order success 👌',
            error: {render: ({data}: any) => `${data.err || data} err 🤯`}
        });
        if (result) onClose && onClose(true);
    }, [numbers, approve]);
    const withDraw = useCallback(async () => {
        let nums = numbers;
        if (Number(nums) + Number(tokenFee) > Number(marketBalance)) {
            nums = (new BigNumber((numbers)).minus(tokenFee + "")) + ""
        }
        const result = await toast.promise(MarketApi.withDraw(Number(nums)), {
            pending: 'order is pending',
            success: 'order success 👌',
            error: {render: ({data}: any) => `${data.err || data} err 🤯`}
        });
        if (result) onClose && onClose(true);
    }, [numbers, approve]);
    const handleClick = async () => {
        if (title === 'withdraw') {
            return await withDraw();
        } else if (title === 'deposit') {
            return await deposit();
        }
    }
    const handleMax = () => {
        if (title === 'deposit') {
            setNumbers(Number(balance));
        } else if (title === 'withdraw') {
            setNumbers(Number(marketBalance) - Number(tokenFee));
        }
    }
    const handleInputChange = (number: string) => {
        if (title === 'deposit') {
            if (Number(number) <= Number(balance)) {
                setNumbers(number.replace(/[^\d\.]/g, ''));
            }
        } else if (title === 'withdraw') {
            if (Number(number) <= Number(marketBalance)) {
                let nums = numbers;
                if (Number(nums) + Number(tokenFee) > Number(marketBalance)) {
                    nums = (new BigNumber((numbers)).minus(tokenFee + "")) + "";
                    setNumbers(nums.replace(/[^\d\.]/g, ''));
                    return
                }
                setNumbers(number.replace(/[^\d\.]/g, ''));
            }
        }

    }

    return (
        <Modal className='mint-modal' visible={visible} header={title} onClose={onClose}
               buttonComponent={
                   <Styles.ButtonWrap>
                       <Styles.ButtonContainer>
                           <MainButton
                               icon={<AccountBalanceWallet/>}
                               borderRadius={20}
                               onClick={handleClick}
                           >
                               Confirm
                           </MainButton>
                       </Styles.ButtonContainer>
                   </Styles.ButtonWrap>}
        >
            <Styles.Wrap>
                <Styles.Info>
                    <Box d='column'>
                        <Styles.ItemTitle>Select Type</Styles.ItemTitle>
                        <Styles.SelectWrap>
                            <Icon name='ICP'/>
                            <Gap width={10}/>
                            <Styles.Name>
                                WICP
                            </Styles.Name>
                        </Styles.SelectWrap>
                    </Box>
                    <Box d='column'>
                        <Styles.ItemTitle>Amount</Styles.ItemTitle>
                        <Styles.Item>
                            <OutlinedInput
                                endAdornment={<InputAdornment onClick={handleMax}
                                                              position="end"><Styles.Max>Max</Styles.Max></InputAdornment>}
                                sx={{height: 60, width: 236, borderColor: '#EFEFEF', borderRadius: 16}}
                                onChange={(e: any) => handleInputChange(e.target.value)} value={numbers}
                                placeholder='Enter Amount'/>
                        </Styles.Item>
                        <Box d='row' jc='flex-end'>
                            <Styles.ItemLine>{desc}:<Styles.ItemS>{currentBalance}WICP</Styles.ItemS></Styles.ItemLine>
                        </Box>
                        <Box d='row' jc='flex-end'>
                            <Styles.ItemLine>Fee:<Styles.ItemS>{tokenFee}WICP</Styles.ItemS></Styles.ItemLine>
                        </Box>
                    </Box>
                </Styles.Info>
            </Styles.Wrap>
        </Modal>
    )
};
