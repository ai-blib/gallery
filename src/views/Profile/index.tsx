import {
    Avatar,
    UserPrincipal,
    OutlinedButton,
    ItemCard,
    Gap,
    Banner,
    SelectLine,
    SelectedTab,
    Username
} from "@/components";
import {ProfileStyles as Styled} from "./styles";
import Icon from "@/icons/Icon";
import {useAuth} from "@/usehooks/useAuth";
import {Principal} from "@dfinity/principal";
import {MarketApi, StorageApi} from "@/apis";
import {ExtMarket} from '@/apis/Other'
import React, {useState, useEffect, useCallback, useMemo} from "react";
import {Owned, Favorite, Activity, MyOrders, Other} from "./components"
import {useParams} from "react-router-dom";
import {useUserInfoStore, useProfileInfoStore} from "@/redux"
import {uploadIPfs} from '@/utils/common';
import {ProfileStatus} from '@/constants'
import {toast} from 'react-toastify';
import {principalToAccountIdentifier} from '@/utils/common';

const OptionString = ["Owned", "My Orders", "Favorites", "Other", "Activity"];
export default () => {
    const {id}: { id: string | any } = useParams();
    let {principal, isAuth} = useAuth();
    const [userOwnd, setUserOwnd] = useState<Object | string>({
        owned: {
            art: [],
            music: []
        }
    })
    principal = id || principal;
    const subAccountId = useMemo(() => {
        return principal && principalToAccountIdentifier(Principal.fromText(principal + ""), 0);
    }, [principal])
    const {owned} = id ? userOwnd : useProfileInfoStore() as any;
    const [userInfo, setUserInfo] = useState<any>({});
    const {favorites} = id ? userInfo : useUserInfoStore();
    const [options, setOptions] = useState(0);
    const [list, setList] = useState<Array<any> | undefined>(undefined);
    const [Others, setOthers] = useState([])
    // set cover
    const handleSaveCover = async (file) => {
        const ipfsObject = await uploadIPfs(file);
        const ipfsImage = (ipfsObject?.data?.image.pathname);
        return await toast.promise(MarketApi.setUserCover(ipfsImage), {
            pending: 'save is pending',
            success: 'save Cover resolved 👌',
            error: ' err 🤯'
        })
    }
    // set logo
    const handleSaveLogo = async (file) => {
        return await toast.promise(MarketApi.setUserLogo(file), {
            pending: 'save is pending',
            success: 'save logo resolved 👌',
            error: ' err 🤯'
        });
    }
    const handleClick = async (index) => {
        setOptions(index);
        if (index === ProfileStatus.Own) {
            await MarketApi.getUserOwnedNFTs(id).then((res) => id && setUserOwnd(res));
        } else if (index === ProfileStatus.Fav) {
            setUserInfo(await MarketApi.getUserInfo(id));
        } else if (index === ProfileStatus.Orders) {
            await MarketApi.getUserOrder(id);
        }
    };
    const refreshApi = async () => {
        MarketApi.getUserOwnedNFTs(id, Boolean(id)).then((res) => id && setUserOwnd(res));
        MarketApi.getUserInfo(id).then((res) => setUserInfo(res))
        setOthers(await ExtMarket.nftlist());
    }
    const handleSelection = useCallback((type, selectedObj) => {
        if (type === 'price') {
            setList((_f) => {
                return _f
            })
        }
    }, [])
    //------
    useEffect(() => {
        (async () => {
            isAuth && await refreshApi()
        })();
    }, [isAuth, principal]);
    console.log(favorites, 'userinfo')
    return (
        <Styled.Profile>
            <Styled.Container>
                <Banner user={id}
                        handleSaveCover={handleSaveCover}
                        handleSaveLogo={handleSaveLogo}
                        logo={userInfo.logo}
                        url={userInfo.cover}/>
                <Gap height={51}/>
                <Username user={id} name={userInfo.name}/>
                <Styled.UserPrincipalWrap>
                    <UserPrincipal
                        principal={principal}
                        subAccountId={subAccountId}
                    />
                </Styled.UserPrincipalWrap>
                <Gap height={23}/>
                <Styled.SelectBar>
                    <SelectedTab labels={OptionString} onChange={handleClick} value={options}/>
                </Styled.SelectBar>
                <Gap height={16}/>
                {/*{options === ProfileStatus.Own && <SelectLine active={['collection']} apply={handleSelection}/>}*/}
            </Styled.Container>
            <Styled.TabPanel active={options === ProfileStatus.Own}>
                <Owned owned={owned}/>
            </Styled.TabPanel>
            <Styled.TabPanel active={options === ProfileStatus.Orders}>
                <MyOrders/>
            </Styled.TabPanel>
            <Styled.TabPanel active={options === ProfileStatus.Fav}>
                <Favorite favorites={favorites}/>
            </Styled.TabPanel>
            <Styled.TabPanel active={options === ProfileStatus.Other}>
                <Other list={Others}/>
            </Styled.TabPanel>
            <Styled.TabPanel active={options === ProfileStatus.Activity}>
                <Activity/>
            </Styled.TabPanel>
        </Styled.Profile>
    );
};
