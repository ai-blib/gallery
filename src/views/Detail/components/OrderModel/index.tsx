import {Modal, MainButton} from '@/components';
import {OrderModalStyles as Styles} from './styles'
import React, {memo, useCallback, useMemo, useState} from 'react'
import {MarketApi,NFTMintApi} from '@/apis';
import { useHistory, withRouter} from "react-router-dom";
import { toast } from 'react-toastify';


interface Props {
    tokenId:string;
    visible: boolean;
    onClose: () => void;
}

interface State {
    price: number|string;
    memo: string
}
export const OrderModel =memo(({visible, onClose,tokenId}: Props) => {
    const history = useHistory();
    const [values, setValues] = useState<State>({
        price: "",
        memo: ''
    });
    const [approve,setApprove] = useState<boolean>(false)
    const createOrder=useCallback( async ()=>{
         if (!approve){
              await handleApprove();
             return
         }
        const {price,memo} = values;
         if (disabled){
             const result = await toast.promise(MarketApi.createOrder(Number(tokenId), Number(price), ''), {
                 pending: 'order is pending',
                 success: 'order success 👌',
                 error: {render: ({data}: any) => (`${data.err || data} err 🤯`)}
             })
           if (result){
               onClose&&onClose();
               history.push('/profile');
           }

         }
    },[approve,values,tokenId])
    const handleApprove =async ()=>{
        const result = await toast.promise(NFTMintApi.approve(tokenId),{
            pending: 'Approve is pending',
            success: 'Approve success 👌',
            error: {render:({data}:any)=>(`${data.err||data} err 🤯`)}
        })
        if (result){
            setApprove(true);
            return;
        }
    }
    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [prop]: event.target.value});
    };
    //-----
    const OrderText=useMemo(()=>{
           return approve?"Order":"Approve";
    },[approve])
    const disabled=useMemo(()=>{
        const {price} = values;
        return !!price
    },[values])
    return (
        <Modal visible={visible} header='Order' onClose={onClose}
               buttonComponent={
                   <Styles.ButtonWrap>
                       <Styles.ButtonContainer>
                           <MainButton
                                    disabled={!disabled}
                                    borderRadius={20}
                                    onClick={createOrder}
                           >
                               {OrderText}
                           </MainButton>
                       </Styles.ButtonContainer>
                   </Styles.ButtonWrap>}
        >
            <Styles.Wrap>
                <Styles.InputWrap>
                    <Styles.ValidationTextField
                        label="Price"
                        type='number'
                        required
                        variant="outlined"
                        value={values.price}
                        onChange={handleChange('price')}
                        id="validation-outlined-input"
                    />
                </Styles.InputWrap>
                <Styles.InputWrap>
                    <Styles.ValidationTextField
                        label="Memo"
                        required
                        variant="outlined"
                        value={values.memo}
                        onChange={handleChange('memo')}
                        id="validation-outlined-input"
                    />
                </Styles.InputWrap>
            </Styles.Wrap>
        </Modal>
    )
})
