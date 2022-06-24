import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import React, {useEffect, useMemo, useState} from 'react';
import {DrawerStyles as Styled} from './styles';
import copy from 'copy-to-clipboard';
import Icon from '@/icons/Icon';
import {MainButton, Gap, ToolTip, Username} from '@/components';
import {Box} from '@/styles';
import './index.less';
import {Principal} from "@dfinity/principal";
import {useAuth} from "@/usehooks/useAuth";
import WalletAuth from './WalletAuth';
import {desensitizationPrincipal, toThousands, getCurrencyString} from '@/utils/formate';
import {WicpApi} from '@/apis';
import {updateUserInfo, useUserInfoStore, updateDrawerVisible, useDrawerVisibleStore} from '@/redux'
import {RouteComponentProps, withRouter} from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBalanceWallet from "@mui/icons-material/AccountBalanceWallet";
import DepositAndWithdraw from './DepositAndWithdraw';
import {Skeleton} from "@mui/material";
import FetchApi from '@/apis/fetch';

interface Props extends RouteComponentProps {

}

const tokenId: string = String(import.meta.env.VITE_REACT_APP_WICP_CANISTER_ID);
export const Drawer = withRouter(({history}: Props) => {
    const {
        plugLogIn,
        isAuth,
        principal,
        logOut,
        subAccountId,
        loginLoading
    }: { loginLoading: boolean, plugLogIn: Function, isAuth: boolean, principal: Principal, logOut: Function, subAccountId: string } = useAuth();
    const {name, balance, marketBalance, loading, tokenFee, logo} = useUserInfoStore();
    const [icpPrice, setIcpPrice] = useState<number>()
    const {open} = useDrawerVisibleStore();
    const [text, setText] = useState('Copy');
    const [type, setType] = useState('');
    const [visible, setVisible] = useState<boolean>(false);
    const myPrincipal = useMemo(() => {
        return desensitizationPrincipal(String(principal), 8);
    }, [principal])
    const mySubAccount = useMemo(() => {
        return desensitizationPrincipal(String(subAccountId), 8);
    }, [subAccountId])
    const handleChange = async (e) => {
        logOut && logOut();
    }
    const copyText = (type?: number) => {
        if (type) {
            copy(String(subAccountId));
        } else {
            copy(String(principal));
        }
        setText('Copy')
        setTimeout(() => {
            setText('Copyed!')
        }, 500)
    }
    const getBalanceOf = async () => {
        await WicpApi.balanceOf(tokenId);
    }
    const handleWithDrawDeposit = (type: string) => {
        setVisible(true);
        setType(type);
    };
    const handleClose = async () => {
        setVisible(false);
    }
    useEffect(() => {
        (async () => {
            if (isAuth) {
                await getBalanceOf();
            }
            setIcpPrice(await FetchApi.getSymbolPrice('icp'))
        })()
    }, [isAuth]);
    return (
        <>
            <Styled.IconWrap onClick={() => updateDrawerVisible({open: true})}>
                {isAuth ?
                    <Icon name='wallet'/> :
                    <Styled.ConnectWallet>
                        {loginLoading ? <Icon name='BarLoading'/> : "Connect Wallet"}
                    </Styled.ConnectWallet>
                }
            </Styled.IconWrap>
            <SwipeableDrawer
                className='draw-container'
                anchor={'right'}
                open={open}
                onClose={() => updateDrawerVisible({open: false})}
                onOpen={() => updateDrawerVisible({open: true})}
            >
                {isAuth ? <Styled.Container>
                    <Box width='100%' jc='center' ai='center' style={{marginTop: 51}}>
                        <Styled.Profile src={logo}/>
                        <Username name={name}/>
                    </Box>
                    <Gap height={10}/>
                    {/*<Styled.Btn onClick={() => history.push(`/profile`)}>My Profile</Styled.Btn>*/}
                    <Styled.InfoWrap>
                        <Styled.InfoItem>
                            <Styled.InfoSpan>
                                Principal ID
                            </Styled.InfoSpan>
                            <Styled.InfoSpan color='#000000'>
                                {myPrincipal}
                            </Styled.InfoSpan>
                            <ToolTip title={text}>
                                <div>
                                    <Styled.Cursor onClick={() => copyText()}>
                                        <Icon name='copy'/>
                                    </Styled.Cursor>
                                </div>
                            </ToolTip>

                        </Styled.InfoItem>
                        <Styled.InfoItem>
                            <Styled.InfoSpan>
                                Account ID
                            </Styled.InfoSpan>
                            <Styled.InfoSpan color='rgba(0, 0, 0, 0.88)'>
                                {mySubAccount}
                            </Styled.InfoSpan>
                            <ToolTip title={text}>
                                <div>
                                    <Styled.Cursor onClick={() => copyText(1)}>
                                        <Icon name='copy'/>
                                    </Styled.Cursor>
                                </div>
                            </ToolTip>
                        </Styled.InfoItem>
                    </Styled.InfoWrap>
                    <Gap height={16}/>
                    <Styled.BalanceWrap>
                        <Styled.Title>
                            Market Total Balance
                        </Styled.Title>
                        <Styled.Funs>
                            {!loading ? (marketBalance) + "WICP" : <Skeleton width={60} height={50}/>}
                        </Styled.Funs>
                        {!loading && icpPrice && <Styled.InfoSpan color='#C4C4C4' fontSize={12}>
                            $ {(Number(icpPrice) * Number(marketBalance)).toFixed(4)} USDT
                        </Styled.InfoSpan>}
                        {/*<Styled.Title>*/}
                        {/*    Fee: {tokenFee}*/}
                        {/*</Styled.Title>*/}
                        <Box d='row' jc='space-between' style={{marginTop: 10}}>
                            <Styled.WithdrawBtn>
                                <MainButton className='withdrawBtn' disabled={Number(marketBalance) <= 0}
                                            style={{fontSize: 16}}
                                            onClick={() => handleWithDrawDeposit('withdraw')}>
                                    withdraw
                                </MainButton>
                            </Styled.WithdrawBtn>
                            <Gap width={10}/>
                            <MainButton style={{fontSize: 16}} icon={<AccountBalanceWallet/>}
                                        onClick={() => handleWithDrawDeposit('deposit')}>
                                Deposit
                            </MainButton>
                        </Box>

                    </Styled.BalanceWrap>
                    <Gap height={16}/>
                    <Box jc='center' ai='center'>
                        <Styled.ReceiveCoin>

                            <a target='_blank'
                               href="https://jmeex-jaaaa-aaaah-qc2kq-cai.ic0.app/">receive test coins
                            </a>
                        </Styled.ReceiveCoin> </Box>
                    <Styled.IcpWrap>
                        <Styled.IcpIconWrap>
                            <Icon name='ICP'/>
                            <Gap width={8}/>
                            <Styled.InfoSpan color='#696969' fontSize={18}>
                                WICP
                            </Styled.InfoSpan>
                        </Styled.IcpIconWrap>
                        <Styled.AmountWrap>
                            <Styled.InfoSpan color='#000000' fontSize={16}>
                                {!loading ? (balance) : <Skeleton width={60} height={50}/>}
                            </Styled.InfoSpan>
                            {!loading && icpPrice && <Styled.InfoSpan color='#C4C4C4' fontSize={12}>
                                $ {Number(icpPrice) * Number(balance)} USDT
                            </Styled.InfoSpan>}
                        </Styled.AmountWrap>
                    </Styled.IcpWrap>
                    <Styled.MainButton>
                        <MainButton style={{fontSize: 16}}
                                    icon={<LogoutIcon/>} onClick={handleChange}>
                            Log out
                        </MainButton>
                    </Styled.MainButton>
                </Styled.Container> : <WalletAuth login={plugLogIn}/>}
                <DepositAndWithdraw title={type} visible={visible} onClose={handleClose}/>
            </SwipeableDrawer>
        </>
    )
});
