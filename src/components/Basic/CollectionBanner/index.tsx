import React from "react";
import { Avatar } from "@/components";
import { CollectionBannerStyles as Styled } from "./styles";
interface Props {
    cover?: string;
    logo?: string;
}
export const CollectionBanner = ({ cover, logo }: Props) => {
    return (
        <Styled.CollectionBannerWrap src={cover}>
            <Styled.AvatarWrap>
                <Avatar size={120} src={logo}/>
            </Styled.AvatarWrap>
        </Styled.CollectionBannerWrap>
    );
};
