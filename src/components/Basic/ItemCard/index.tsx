import React, {memo, useEffect, useMemo, useState} from "react";
import {ItemCardStyles as styled} from "./styles";
import Icon from "@/icons/Icon";
import {Avatar, OutlinedButton, Gap, ToolTip} from "@/components";
import {UserOwnedNFTsModel} from '@/model'
import {Favorite} from '@mui/icons-material';
import {Link, useHistory, useParams, useLocation} from "react-router-dom";
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import Skeleton from "@mui/material/Skeleton";
import {MarketApi} from '@/apis';
import {toast} from "react-toastify";
import {desensitizationPrincipal, getCurrencyString} from '@/utils/formate';
import {useAuth} from "@/usehooks/useAuth";
import {Principal} from "@dfinity/principal";

interface Props {
    width?: number;
    nftInfo?: UserOwnedNFTsModel | any,
    id?: string;
    handleRightBuy?: Function,
    location?: boolean | undefined,
    collectionId?: string | Principal
}

export const ItemCard = memo((({width, nftInfo, id, collectionId, handleRightBuy, location}: Props) => {
    const history = useHistory();
    const {id: user}: { id: string | any } = useParams();
    const {principal} = useAuth();
    const enEdit = !Boolean(location) || (user ? String(principal) === user : true);
    const {nftUrl, attr, price, index, token, owner} = nftInfo || {};
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const {name} = attr || {};
    const tokenId = typeof id === "string" ? id?.split('_')[0] : id;
    const handleClick = () => {
        if (!id) {
            return;
        }
        if (handleRightBuy) return handleRightBuy({tokenId: nftInfo.id, orderId: index, ...nftInfo});
        history.push(`detail/${collectionId + ""}/${id}`);
    }
    const addFavorite = async () => {
        let call;
        if (isFavorite) {
            call = MarketApi.removeFavorite(token, index);
        } else {
            call = MarketApi.addFavorite(token, index);

        }
        const result: any = await toast.promise(call, {
            pending: 'order is pending',
            success: 'order success 👌',
            error: {render: ({data}: any) => (`${data.err || data} err 🤯`)}
        });
        if (result.err) {
            setIsFavorite(false);
            return;
        }
        setIsFavorite(true);
    }
    const btnText = useMemo(() => {
        return price ? 'Buy now' : "Sell"
    }, [price]);

    useEffect((): any => {
        let isUnmount = false;

        (async () => {
            !isUnmount && token && setIsFavorite(!!await MarketApi.isFavorite(token, index));
        })()
        return () => isUnmount = true
    }, [index, token]);
    return (
        <styled.ItemCard width={width}>
            {token && <ImageListItemBar
                sx={{
                    position: 'absolute',
                    zIndex: 100,
                    background:
                        'linear-gradient(to bottom, rgba(0,0,0,0) 0%, ' +
                        'rgba(0,0,0,0) 70%, rgba(0,0,0,0) 100%)',
                }}
                title={''}
                position="top"
                actionIcon={
                    <ToolTip title={'favorite'}>
                        <IconButton
                            onClick={addFavorite}
                            sx={{color: '#C9C9C9', margin: 1.5}}
                            aria-label={`star ${name}`}
                        >
                            <Favorite sx={{color: isFavorite ? "red" : ''}}/>
                        </IconButton>
                    </ToolTip>
                }
                actionPosition="left"
            />}

            {(nftUrl ?
                (<styled.ItemImg onClick={() => history.push(`/detail/${collectionId + ""}/${id}`)} url={nftUrl}/>) :
                <Skeleton variant="rectangular" width={"100%"} height={300}/>)}

            <styled.InfoWrap>
                {name ? <styled.NameWrap>{name}#{tokenId}</styled.NameWrap> : <Skeleton width={50}/>}
                <styled.PriceWrap>{price && getCurrencyString(price, 8, 2)}</styled.PriceWrap>
            </styled.InfoWrap>
            {price && <styled.InfoWrap>
                <styled.GrayNameWrap>
                    {/*Isea*/}
                </styled.GrayNameWrap>
                <styled.GrayNameWrap>
                    <Icon name="ICPNoOutline"/>
                    ICP
                </styled.GrayNameWrap>
            </styled.InfoWrap>}
            <Gap height={17}/>
            <styled.InfoWrap>
                <styled.GrayLightWrap>
                    <styled.Avatar/>
                    <Link style={{color: 'rgb(32, 129, 226)'}}
                          to={`/profile/${String(owner)}`}>{desensitizationPrincipal(String(owner || ""), 4)}</Link>
                </styled.GrayLightWrap>
                {id == '0' || id ?
                    enEdit && <styled.OutlinedButton onClick={handleClick}>{btnText}</styled.OutlinedButton>
                    : <Skeleton width={50}/>}
            </styled.InfoWrap>
        </styled.ItemCard>
    );
}));
