import {
    Avatar,
    OutlinedButton,
    UploadButton,
    MainButton,
    Gap,
} from "@/components";
import {BannerStyle as styled} from "./styles";
import React, {memo, useState} from "react";
import {useUserInfoStore} from "@/redux";
import {Box} from "@/styles";
import Skeleton from "@mui/material/Skeleton";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import {useAuth} from "@/usehooks/useAuth";

interface Props {
    user?: string;
    url?: string;
    handleSaveCover?: Function;
    logo?: string;
    handleSaveLogo?: Function;
}

export const Banner = memo(
    ({url, handleSaveCover, logo, handleSaveLogo, user}: Props) => {
        const {principal} = useAuth();
        const enableEdit = !user ? true : String(principal) === user;
        const [nftUrl, setNftUrl] = useState<Array<any>>([]);
        const [logoUrl, setLogoUrl] = useState<Array<any>>([]);
        let loading = logo === undefined;
        url = nftUrl[0]?.dataURL || url;
        logo = logoUrl[0]?.dataURL || logo;
        const handleChange = async (value) => {

            setNftUrl(value);
            handleSaveCover && await handleSaveCover(value[0].file)
        };
        const handleLogoChange = async (value) => {
            setLogoUrl(value);
            handleSaveLogo && await handleSaveLogo(value[0].file);
        };
        return (
            <styled.BannerWrap src={url}>
                {!loading ? (
                    <Box className="btn-up">
                        <UploadButton disabled={enableEdit} onChange={handleChange} NftUrl={nftUrl}>
                            <Box d="column">
                                {enableEdit && <Box d="column">
                                    {!nftUrl[0] && !url ? (
                                        <styled.ButtonWrap>
                                            <OutlinedButton noOutline>
                                                Add cover
                                            </OutlinedButton>
                                        </styled.ButtonWrap>
                                    ) : (
                                        <IconButton
                                            sx={{color: "white", margin: 1.5}}
                                            aria-label={`star`}
                                        >
                                            <EditIcon sx={{color: "#007FFF"}}/>
                                        </IconButton>
                                    )}
                                </Box>}
                            </Box>
                        </UploadButton>
                    </Box>
                ) : null}
                <styled.AvatarWrap hover={!!logo}>
                    <Avatar size={120} src={logo}>
                        {!loading ? (
                            <Box className="btn-logo">
                                {enableEdit && <UploadButton
                                    onChange={handleLogoChange}
                                    NftUrl={logoUrl}
                                >
                                    <Box height='100%' d="column" ai="center" jc="center">
                                        {
                                            <IconButton
                                                sx={{
                                                    color: "white",
                                                    margin: 1.5,
                                                }}
                                                aria-label={`star`}
                                            >
                                                <EditIcon
                                                    sx={{color: "#007FFF"}}
                                                />
                                            </IconButton>
                                        }
                                    </Box>
                                </UploadButton>}
                            </Box>
                        ) : null}
                    </Avatar>
                </styled.AvatarWrap>
            </styled.BannerWrap>
        );
    }
);
