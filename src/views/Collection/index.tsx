import {
    Avatar,
    Banner,
    UserPrincipal,
    OutlinedButton,
    ItemCard,
    Gap,
    SelectLine, SelectedTab, ButtonTabs,
    MetaArt
} from "@/components";
import {CollectionStyles as Styled} from "./styles";
import Icon from "@/icons/Icon";
import React, {useState, useEffect, useCallback} from "react";
import {useHistory, useParams} from "react-router-dom";
import {MarketApi} from "@/apis";
import {CollectionExt} from "@/did/model/market";
import {Items, Activity, Stats, CollectionSection} from "./components";
import {CollectionBanner} from "@/components/Basic/CollectionBanner";
import {Box} from "@/styles";
import {Skeleton} from "@mui/material";
import {getMarketInfo, useCollectionsInfoStore} from "@/redux";
import {getCurrencyString} from "@/utils/formate";
import storage from "@/utils/storage";

const TabList = ['Assets', '3D'];
const OptionString = ["Items", 'Activity', "Stats"];
export default () => {
    const {id}: { id: string | any } = useParams();
    const history = useHistory();
    const [options, setOptions] = useState<number>(0);
    const [active, setActive] = useState<number>(0);
    const [info, setInfo] = useState<CollectionExt | null>();
    const {list} = useCollectionsInfoStore();
    const handleClick = useCallback((index, e) => setOptions(index), []);
    const handleActive = (e: any, index: number) => {
        setActive(index);
        if (index === 1) {
            history.push(`/art/${id}`)
        }
        storage.setTabActive(index);
    }
    useEffect(() => {
        (async () => {
            MarketApi.getCollectionInfo(id).then((res) => setInfo(res[0]));
            await MarketApi.getCollectionOrders(id)
        })();
    }, []);
    return (
        <Styled.Collection>
            <Styled.Container>
                <Styled.BoxTab>
                    <Styled.SwitchItem>
                        <ButtonTabs background={"rgba(255, 255, 255, 0.76)"} height={40} tabs={TabList}
                                    handleChange={handleActive} value={active}/>
                    </Styled.SwitchItem>
                </Styled.BoxTab>
                <CollectionSection info={info}/>
                <Gap height={36}/>
                <Styled.SelectBar>
                    <SelectedTab labels={OptionString} onChange={handleClick} value={options}/>
                </Styled.SelectBar>
                <Gap height={16}/>
            </Styled.Container>

            <>
                {
                    options === 0 && <Items collectionInfo={info} list={list}/>
                }
                {
                    options === 1 && <Activity canisterId={id}/>
                }
                {
                    options === 2 && <Stats canisterId={id}/>
                }
            </>
        </Styled.Collection>
    );
};
