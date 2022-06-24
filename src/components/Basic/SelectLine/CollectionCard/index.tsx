import React, {memo, useCallback, useMemo, useState} from "react";
import {CollectionCardStyles as Styled} from "./styles";
import {Gap} from "@/components/";
import Icon from "@/icons/Icon";
import {useCollectionsInfoStore} from "@/redux";

const collections = ["Isea"];
export const CollectionCard = memo(({handleVisibleChange}: { handleVisibleChange: Function }) => {
    let {artCollectionsList} = useCollectionsInfoStore();
    const [filter, setFilter] = useState<string>('');
    const handleChange = useCallback((e) => setFilter(e.target.value), []);
    const handleSelected = useCallback((e) => {
        handleVisibleChange(e)
    }, [])

    const list = useMemo(() => {
        if (filter && artCollectionsList) {
            if (filter.includes("-")) {
                return artCollectionsList.filter(({canisterId}) => String(canisterId) === String(filter))
            } else {
                return artCollectionsList.filter(({name}) => name.includes(filter))
            }
        }
        return artCollectionsList || [];
    }, [filter])
    return (
        <Styled.CollectionCard>
            <Styled.Sreach>
                <Icon name="search"/>
                <Gap width={8}/>
                <Styled.InnerInput onChange={handleChange} placeholder="Sreach in collections :canisterId or name "/>
            </Styled.Sreach>
            <Gap height={16}/>
            {list.map(({name, logo, canisterId}, index) => {
                return (
                    <Styled.ItemRowWrap onClick={() => handleSelected({name, logo, canisterId})} key={index}>
                        <Styled.AvatarWrap logo={logo}/>
                        <Gap width={8}/>
                        <Styled.TextWrap>{name}</Styled.TextWrap>
                    </Styled.ItemRowWrap>
                );
            })}
            <Styled.Line/>
            <Styled.ButtonWrap>
                <Styled.Button onClick={() => handleVisibleChange()}>Clear</Styled.Button>
                <Styled.ApplyButton onClick={() => handleVisibleChange('isea')}>Apply</Styled.ApplyButton>
            </Styled.ButtonWrap>
        </Styled.CollectionCard>
    );
});
