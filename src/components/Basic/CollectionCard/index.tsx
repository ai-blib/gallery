import React, {memo, useCallback} from "react";
import {CollectionCardStyles as styled} from "./styles";
import {Gap} from "@/components/";
import {CollectionExt} from "@/did/model/market";
import {Link, useHistory} from "react-router-dom";
import {Skeleton} from "@mui/material";
import {getCurrencyString} from "@/utils/formate";

interface Props {
    collection: CollectionExt | any;
}

export const CollectionCard = memo(({collection}: Props) => {
    const history = useHistory();
    const {
        floor,
        name,
        creator,
        canisterId,
        logo,
        cover,
        volume,
        index,
        orders,
    } = collection || {};
    return (
        <styled.CollectionCard
            onClick={useCallback(() => {
                canisterId && history.push(`/art/${String(canisterId)}`)
            }, [canisterId])}
        >
            {canisterId ? (
                <styled.CollectionBackground cover={cover}>
                    <styled.AvatarWrap src={logo}/>
                </styled.CollectionBackground>
            ) : (
                <Skeleton variant="rectangular" width={"100%"} height={300}/>
            )}

            <Gap height={34}/>
            <styled.TitleWrap>{name && name}</styled.TitleWrap>
            <Gap height={12}/>
            <styled.TabWrap>
                <styled.ColumnWrap>
                    <styled.VolumeTitleWrap>Volume</styled.VolumeTitleWrap>
                    <styled.VolumeWrap>{volume ? getCurrencyString(volume || "", 8, 2) : 0} ICP</styled.VolumeWrap>
                </styled.ColumnWrap>
                <styled.ColumnWrap>
                    <styled.VolumeTitleWrap>Floor Price</styled.VolumeTitleWrap>
                    <styled.VolumeWrap>{floor ? getCurrencyString(floor + "" || "", 8, 2) : 0} ICP</styled.VolumeWrap>
                </styled.ColumnWrap>
                <styled.ColumnWrap>
                    <styled.VolumeTitleWrap>items</styled.VolumeTitleWrap>
                    <styled.VolumeWrap>{orders ? Number(orders) : 0}</styled.VolumeWrap>
                </styled.ColumnWrap>
            </styled.TabWrap>
        </styled.CollectionCard>
    );
});
