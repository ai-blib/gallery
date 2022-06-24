import {TokenStatus} from "@/constants";
import {OrderButtonListStyles as Styled} from "./styles";
import {BackButton, MainButton, Gap} from "@/components";
import {Principal} from "@dfinity/principal";
import AccountBalanceWallet from "@mui/icons-material/AccountBalanceWallet";
import {Skeleton} from "@mui/material";
import React from "react";
import {Box} from "@/styles";
import {useHistory} from "react-router-dom";
import {useAuth} from "@/usehooks/useAuth";

interface Props {
    handleOrder: Function;
    loading: boolean;
    cancelOrder: Function,
    status: string | undefined;
    owner: Principal | undefined
}

export const OrderButtonList = ({handleOrder, loading, cancelOrder, owner, status}: Props) => {
    const {principal} = useAuth();
    const history = useHistory();
    if (loading) {
        return (<Styled.ButtonListWrap>
            <Skeleton width='100%' height={80}/>
        </Styled.ButtonListWrap>)
    }
    if (status === TokenStatus.buyStatus || status === TokenStatus.orderStatus) {
        let fn: any = () => void {};
        let btn = '';
        if (status === TokenStatus.buyStatus) {
            if (String(principal) === String(owner)) {
                fn = cancelOrder;
                btn = 'Cancel'
            }
        } else {
            if (String(principal) === String(owner)) {
                fn = handleOrder;
                btn = 'List Item';
            }
        }

        return (
            <Styled.ButtonListWrap>
                <Styled.ButtonWrap>
                    <BackButton onClick={() => history.goBack()}/>
                    {btn && <Box width='auto'>
                        <MainButton style={{width: 'auto'}} icon={<AccountBalanceWallet/>} borderRadius={10}
                                    onClick={() => fn()}>{btn}</MainButton>
                    </Box>}
                </Styled.ButtonWrap>
            </Styled.ButtonListWrap>

        )
    } else {
        return null
    }

}
