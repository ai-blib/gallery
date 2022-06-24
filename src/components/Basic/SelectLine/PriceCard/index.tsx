import React, {useState} from "react";
import { PriceCardStyles as Styled } from "./styles";
import {Input} from "@/components";
import {MintModalStyles as Styles} from "@/views/Sales/Sale/components/MintModal/styles";

interface State {
    from:string|number,
    to:string|number
}
export const PriceCard = ({handleVisibleChange}:{handleVisibleChange:Function}) => {
    const [form,setForm] =useState<State>({from:"",to:""})
    const handleInputChange = (value: any, key: string) => {
        setForm((_f) => {
            return {..._f, [key]: value}
        })
    };
    return (
        <Styled.PriceCard>
            <Styled.RowWrap >
                <Input inputProps={{
                    step: 1,
                    min: 0,
                    max: form.to,
                    type: 'number',
                }} sx={{height:40,width:100}}  onChange={(e: any) => handleInputChange(e.target.value,'from')} value={form.from}
                       placeholder='From'/>
                <Input inputProps={{
                    step: 1,
                    min: form.from,
                    max: 999999999999,
                    type: 'number',
                }} sx={{height:40,width:100}}  onChange={(e: any) => handleInputChange(e.target.value,'to')} value={form.to}
                       placeholder='From'/>
                {/*<Styled.Input placeholder="To" />*/}
                <Styled.ICP>WICP</Styled.ICP>
            </Styled.RowWrap>
            <Styled.Line />
            <Styled.ButtonWrap>
                <Styled.Button onClick={()=>handleVisibleChange()}>Clear</Styled.Button>
                <Styled.ApplyButton onClick={()=>handleVisibleChange(form)}>Apply</Styled.ApplyButton>
            </Styled.ButtonWrap>
        </Styled.PriceCard>
    );
};
