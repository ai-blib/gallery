import React, {useState, useEffect, useMemo, memo} from "react";
import {SelectLineStyles as styled} from "./styles";
import {OutlinedButton, Gap, TooltipContent} from "@/components";
import Icon from "@/icons/Icon";
import {PriceCard} from "./PriceCard";
import {CategoryCard} from "./CategoryCard";
import {CollectionCard} from "./CollectionCard";
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';

type activeItem = 'collection' | 'price'

interface Props {
    apply?: Function,
    active: Array<activeItem>
}

export const SelectLine = ({apply, active}: Props) => {
    const [visibleForm, setVisibleForm] = useState({});
    const [visibleObj, setVisibleObj] = useState<Object | any>({})
    const priceObj = visibleObj['price'] || {}
    const collectionObj = visibleObj['collection'] || {}
    const handleClick = (value: Object | undefined, key: string) => {
        handleVisibleChange(key, false)
        if (value) {
            setVisibleObj((_f) => {
                return {..._f, [key]: value}
            })
        }
        apply && apply(key, value)
    };
    const handleVisibleChange = (key: string, value: boolean) => {
        setVisibleForm((_f) => {
            return {..._f, [key]: value}
        })
    }
    console.log(visibleForm['price'], 8900)
    return (
        <styled.ButtonLineWrap>

            <styled.RowList>
                {active.includes('collection') && <TooltipContent visible={visibleForm['collection']} content={
                    <styled.CollectionCardWrap>
                        <CollectionCard handleVisibleChange={(e) => handleClick(e, 'collection')}/>
                    </styled.CollectionCardWrap>}
                >
                    <styled.CategoryWrap onClick={() => handleVisibleChange('collection', true)}>
                        <styled.GrayButtonWrap>
                            Collections
                            <Gap width={4}/>
                            <Icon name="downTriangle"/>
                            {collectionObj?.canisterId &&
                                <Chip avatar={<styled.AvatarWrap logo={collectionObj.logo}/>} label={collectionObj.name}
                                      onDelete={() => handleClick({}, 'collection')}/>}
                        </styled.GrayButtonWrap>

                    </styled.CategoryWrap>
                </TooltipContent>
                }
                <Gap width={24}/>
                {/*<TooltipContent content={<styled.CategoryCardWrap>*/}
                {/*    <CategoryCard/>*/}
                {/*</styled.CategoryCardWrap>}>*/}
                {/*    <styled.CategoryWrap>*/}
                {/*        <styled.GrayButtonWrap>*/}
                {/*            Category*/}
                {/*            <Gap width={4}/>*/}
                {/*            <Icon name="downTriangle"/>*/}
                {/*        </styled.GrayButtonWrap>*/}
                {/*    </styled.CategoryWrap>*/}
                {/*</TooltipContent>*/}
                <Gap width={24}/>
                {active.includes('price') &&
                    <TooltipContent visible={visibleForm['price']} content={<styled.PriceCardWrap>
                        <PriceCard handleVisibleChange={(e) => handleClick(e, 'price')}/>
                    </styled.PriceCardWrap>}>
                        <styled.PriceRangeWrap onClick={() => handleVisibleChange('price', true)}>
                            <styled.GrayButtonWrap>
                                Price range
                                <Gap width={4}/>
                                <Icon name="downTriangle"/>
                                {priceObj?.to &&
                                    <Chip avatar={<Avatar>P</Avatar>} label={priceObj?.from + "~" + priceObj?.to}
                                          onDelete={() => handleClick({}, 'price')}/>}
                            </styled.GrayButtonWrap>
                        </styled.PriceRangeWrap>
                    </TooltipContent>}
            </styled.RowList>

            <styled.RowList>
                {/*<styled.GrayButtonWrap>Sort by</styled.GrayButtonWrap>*/}
                {/*<Gap width={24}/>*/}
                {/*<styled.RoundButtonWrap>3D</styled.RoundButtonWrap>*/}
            </styled.RowList>
        </styled.ButtonLineWrap>
    );
};
