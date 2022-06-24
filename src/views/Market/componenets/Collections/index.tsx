import {CollectionsStyles as Styled} from "./styles";
import {ItemCard, CollectionCard} from "@/components";
import {CommonWrap, Column} from "@/styles";
import Icon from "@/icons/Icon";
import {MarketApi} from "@/apis";
import React, {useEffect, useState} from "react";
import {CollectionExt} from "@/did/model/market";
import {useCollectionsInfoStore} from "@/redux/features/collectionsInfo";

const menus = ["Trending"];

interface Props {
    collectionList: Array<CollectionExt>;
}

const defaultList = new Array(4).fill(0);
export const Collections = () => {
    let {artCollectionsList} = useCollectionsInfoStore();
    const [tabValue, setTabValue] = useState<Number>(0);
    artCollectionsList = artCollectionsList || defaultList;
    useEffect(() => {
        (async () => {
            await MarketApi.getArtCollections();
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
                {artCollectionsList.map((_collection: CollectionExt, index) => (
                    <CollectionCard
                        key={index}
                        collection={_collection}
                    />
                ))}
            </Styled.Content>
        </Styled.Wrap>
    );
};
