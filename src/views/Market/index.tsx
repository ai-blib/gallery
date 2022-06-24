import {MarketStyles as Styled} from "./styles";
import {ItemCard, CollectionCard, SearchInput, ButtonTabs} from "@/components";
import {Collections, MusicCollection} from "./componenets";
import {CommonWrap, Column, Box} from "@/styles";
import Icon from "@/icons/Icon";
import React, {memo, useEffect, useMemo, useState} from "react";
import storage from '@/utils/storage'

const TabList = ['Art', 'Music'];
const ChildrenRender = memo(({active}: { active: number }) => {
    switch (active) {
        case 0:
            return <Collections/>;
        case 1:
            return <MusicCollection/>;
        case 2:
            return null
        default:
            return <Collections/>;
    }
})
export default () => {
    const [active, setActive] = useState<number>(storage.getTabActive() || 0);
    const handleActive = (e: any, index: number) => {
        setActive(index);
        storage.setTabActive(index);
    }
    useEffect(() => {
        (async () => {


        })()
    }, []);
    return (
        <Styled.Wrap>
            <Styled.Header>
                <Styled.SwitchItem>
                    <ButtonTabs height={40} tabs={TabList} handleChange={handleActive} value={active}/>
                </Styled.SwitchItem>
            </Styled.Header>
            <ChildrenRender active={active}/>
        </Styled.Wrap>
    );
};
