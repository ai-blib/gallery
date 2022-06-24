import {Modal, MainButton, Gap, LoadingModal, statusType, Options, Input} from '@/components';
import {MakeOfferStyles as Styled} from './styles'
import React, {useCallback, useMemo, useState} from "react";
import Icon from "@/icons/Icon";
import {Box} from '@/styles'
import {MarketApi} from '@/apis'
import {BigNumber} from "bignumber.js";
import {toast} from "react-toastify";

const options = ['60 mins', '12 hours', '3 days', '1 month'];

interface Props {
    name: string;
    collectionInfo: any;
    tokenId: string | number;
    onClose: () => void;
}

export const MakeOffer = ({name, collectionInfo, tokenId, onClose}: Props) => {
    const collection = (collectionInfo || {}).name;
    const collectionId = (collectionInfo || {}).canisterId;
    const [time, setTime] = useState<string>('60 mins');
    const [price, setPrice] = useState<number>(0)
    const handleTime = useCallback((value: string) => {
        setTime(value)
    }, [])
    const submit = async () => {
        let _time: any = '', amount;
        if (time?.includes('ins')) {
            amount = time?.replace('mins', '');
            _time = Number(amount) * 60;
        } else if (time?.includes('d')) {
            amount = time?.replace('days', '');
            _time = Number(amount) * 24 * 60 * 60;
        } else if (time?.includes('mon')) {
            amount = time?.replace('month', '');
            _time = Number(amount) * 30 * 24 * 60 * 60
        } else if (time?.includes('h')) {
            amount = time?.replace('hours', '');
            _time = Number(amount) * 60 * 60;
        }
        const _price = new BigNumber(Math.pow(10, 8)).times(Number(price)) + "";
        const result: any = await toast.promise(MarketApi.MakerOffer(collectionId, tokenId, _price, _time), {
            pending: 'order is pending',
            success: 'order success 👌',
            error: {
                render: ({data}: any) => {
                    return (`${data.err || data} err 🤯`)
                }
            }
        })
        console.log(result, 'result')
        onClose && onClose()
        return result;
    }
    const disabled = useMemo(() => {
        return price && time
    }, [price, time])
    return (
        <>
            <Modal visible={true} onClose={onClose}
                   buttonComponent={<Box width='100%' jc='center'>
                       <Box width='auto'
                            style={{marginBottom: 20}}>
                           <MainButton
                               disabled={!disabled}
                               onClick={submit}>
                               Make Offer
                           </MainButton>
                       </Box>
                   </Box>}
                   header={'Make an offer'}>
                <Styled.Wrap>
                    <Styled.ItemList>
                        <Styled.Item>
                            <Styled.ItemTitle>
                                Item
                            </Styled.ItemTitle>
                            <Styled.ItemContent>
                                {name}
                            </Styled.ItemContent>
                        </Styled.Item>
                        <Styled.Item>
                            <Styled.ItemTitle>
                                Collection
                            </Styled.ItemTitle>
                            <Styled.ItemContent>
                                {collection}
                            </Styled.ItemContent>
                        </Styled.Item>
                    </Styled.ItemList>
                    <Styled.ItemList>
                        <Styled.Item>
                            <Styled.ItemTitle>
                                Expiration
                            </Styled.ItemTitle>
                            <Options label='time' options={options} onChange={handleTime}/>
                        </Styled.Item>
                    </Styled.ItemList>
                    <Styled.ItemList>
                        <Styled.Item>
                            <Styled.ItemTitle>
                                Price
                            </Styled.ItemTitle>
                            <Box ai='center'>
                                <Input value={price} inputProps={{
                                    step: 1,
                                    type: 'number',
                                }}
                                       placeholder='Offer Price'
                                       onChange={(e: any) => setPrice(e.target.value)}
                                />
                                <Styled.MoneySelected>
                                    <Icon name='ICP'/>
                                    <Gap width={8}/>
                                    <Styled.InfoSpan>
                                        WICP
                                    </Styled.InfoSpan>
                                </Styled.MoneySelected>
                            </Box>
                        </Styled.Item>
                        <Box d='row' jc='flex-end'>
                            <Styled.HelpText>
                                Your Balance
                            </Styled.HelpText>
                            <Styled.HelpMoneyText>
                                500 WICP
                            </Styled.HelpMoneyText>
                        </Box>
                        <Styled.Item>
                            <Styled.ItemTitle>
                                Total
                            </Styled.ItemTitle>
                        </Styled.Item>
                    </Styled.ItemList>
                </Styled.Wrap>
            </Modal>
        </>
    )
}
