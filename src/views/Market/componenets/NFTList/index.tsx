import {CollectionsStyles as Styled} from "./styles";
import {ItemCard, CollectionCard, Gap, SelectLine, Empty, SelectOption} from "@/components";
import {CommonWrap, Box} from "@/styles";
import Icon from "@/icons/Icon";
import {MarketApi} from '@/apis'
import React, {memo, useCallback, useEffect, useMemo, useState} from "react";
import {CollectionExt} from "@/did/model/market";
import ImageListItem from '@mui/material/ImageListItem';
import {RouteComponentProps, withRouter, useHistory} from "react-router-dom";
import {BuyModal} from '@/views/Detail/components/BuyModal';
import {getMarketInfo} from '@/redux';
import {getCurrencyString} from "@/utils/formate";
import {Options, optionType} from '@/config'

interface Props extends RouteComponentProps {

}

export const NFTList = memo(() => {
    const history = useHistory();
    const [selectedToken, setSelectedToken] = useState<any>({});
    const [visible, setVisible] = useState<boolean>(false);
    const {nftList} = getMarketInfo();
    const [options, setOptions] = useState<any>({});
    const [itemList, setItemList] = useState<Array<any>>(new Array(5).fill(0));
    const [sortOption, setSortOption] = useState();
    const handleChangeSelect = useCallback((key: string, value: any) => {
        setOptions((_f) => {
            return {..._f, [key]: value}
        })
    }, []);
    const handleChangeOption = useCallback((e, value) => setSortOption(value), []);
    // filter data
    const list = useMemo(() => {
        const {from, to} = options['price'] || {};
        const {canisterId} = options['collection'] || {};

        let ArrayList: Array<any> = nftList;
        //collection
        if (canisterId) {
            ArrayList = ArrayList.filter(({token}) => {
                return String(token) === String(canisterId)
            })
        }
        // price
        if (from && to) {
            ArrayList = ArrayList.filter((_n: any) => {
                const price = Number(getCurrencyString(_n.price, 8, 0))
                return (price >= Number(from) && price <= Number(to))
            });
        }
        const type = (Options.find((_item) => _item.title == sortOption))?.type;
        //price up
        if (type === optionType.PRICE_UP) {
            let array = [...ArrayList]
            ArrayList = array.sort((a, b) => (Number(b.price) - Number(a.price)));
        } else if (type === optionType.PRICE_LOWER) {
            let array = [...ArrayList]
            ArrayList = array.sort((a, b) => Number(a.price) - Number(b.price));
        } else if (type === optionType.TIME_UP) {
            let array = [...ArrayList]
            ArrayList = array.sort((a, b) => Number(b.createTime) - Number(a.createTime));
        } else if (type === optionType.TIME_LOWER) {
            let array = [...ArrayList]
            ArrayList = array.sort((a, b) => Number(a.createTime) - Number(b.createTime));
        }
        return ArrayList
    }, [options, nftList, sortOption])
    const handleRightBuy = (tokenInfo) => {
        setSelectedToken(tokenInfo);
        setVisible(true)
    };
    const handleClose = useCallback(async (status: string | any) => {
        setVisible(false);
        if (status === 'ok') {
            await refresh()
        }
    }, []);
    // refresh()
    const refresh = async () => setItemList(await MarketApi.getNftList());
    useEffect(() => {
        (async () => {
            await refresh();
        })()
    }, []);
    console.log(list)
    return (
        <Styled.Wrap>
            <Box width='100%' jc='space-between'>
                <SelectLine active={['collection', 'price']} apply={handleChangeSelect}/>
                <SelectOption onChange={handleChangeOption} options={Options}/>
            </Box>
            <Styled.Content>
                {list.length || list.length ? ((list.length ? list : itemList).map(
                    (_item: CollectionExt | any, index) =>
                        (<ImageListItem key={index}>
                            <Styled.CardWrap> <ItemCard handleRightBuy={handleRightBuy} key={index}
                                                        collectionId={_item.token}
                                                        id={_item.id ? `${_item.id}_${_item.index}` : ""}
                                                        nftInfo={_item}/></Styled.CardWrap>
                        </ImageListItem>))) : <Box ai='center' jc='center' width='100%'>
                    <Empty onClick={() => history.push('/create')} text='Create a item?'/>
                </Box>
                }
            </Styled.Content>
            <BuyModal orderId={selectedToken?.orderId} orderInfo={selectedToken} tokenId={selectedToken?.tokenId}
                      visible={visible}

                      onClose={handleClose}/>
        </Styled.Wrap>
    );
});
