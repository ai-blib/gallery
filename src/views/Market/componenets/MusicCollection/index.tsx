import {CollectionsStyles as Styled} from "./styles";
import {CommonWrap, Column} from "@/styles";
import Icon from "@/icons/Icon";
import {MarketApi} from "@/apis";
import React, {useEffect, useState} from "react";
import {CollectionExt} from "@/did/model/market";
import {useCollectionsInfoStore} from "@/redux/features/collectionsInfo";
import Card from './Card'

const menus = ["Trending"];

interface Props {
    collectionList: Array<CollectionExt>;
}

const defaultList = new Array(4).fill(0);
export const MusicCollection = () => {
    let {musicCollectionsList} = useCollectionsInfoStore();
    const [tabValue, setTabValue] = useState<Number>(0);
    musicCollectionsList = musicCollectionsList || defaultList;
    useEffect(() => {
        (async () => {
            await MarketApi.getMusicCollections();
        })();
    }, []);
    return (
        <Styled.Wrap>
            <Styled.TabWrap>
                {menus.map((item: String, index: number) => (
                    <Styled.TabItem
                        key={index}
                        active={index === tabValue}
                        onClick={() => setTabValue(index)}
                    >
                        <span className="tab">{item}</span>
                    </Styled.TabItem>
                ))}
            </Styled.TabWrap>
            <Styled.Content>
                {musicCollectionsList.map((_collection: CollectionExt, index) => (
                    <Card
                        key={index}
                        collection={_collection}
                    />
                ))}
            </Styled.Content>
        </Styled.Wrap>
    );
};
