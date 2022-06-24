import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import {TransitionProps} from '@mui/material/transitions';
import {BuyStyles as Styles} from './styles'
import {Box} from '@/styles'
import {desensitizationPrincipal} from "@/utils/formate";
import {Skeleton} from "@mui/material";
import moment from "moment-timezone";
import {MainButton, Gap, Frame3D} from '@/components'
import {BuyModal} from '@/views/Detail/components';
import {memo, useCallback, useState} from "react";
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface Props {
    open: boolean;
    handleClose: Function | any;
    tokenInfo: Object | any
}

export const Buy = memo(({open, handleClose, tokenInfo}: Props) => {
    const {token, owner, createTime, attr, index, id} = tokenInfo;
    const {name, description} = attr;
    const [loaded, setLoaded] = useState<boolean>(false)
    const [visible, setVisible] = useState<boolean>(false);
    const handleCloseBuy = useCallback(() => {
        handleClose();
        setVisible(false);
    }, [])
    return (
        <div>
            <Dialog
                disableEscapeKeyDown={true}
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{position: 'relative'}}>
                    <Toolbar>
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Styles.Container>
                    <Styles.Content>
                        <Styles.List>
                            <Styles.Item>
                                <Box>
                                    <Box d='column' ai='center' jc='center'>
                                        <Styles.Name>
                                            @Collection
                                        </Styles.Name>
                                        <Styles.Name>
                                            {token ? desensitizationPrincipal(String(token), 8) :
                                                <Skeleton width={100} height={40}/>}
                                        </Styles.Name>
                                    </Box>
                                </Box>
                            </Styles.Item>
                            <Styles.Item>
                                <Box d='column' ai='center' jc='center'>

                                    <Styles.Name>
                                        @owner
                                    </Styles.Name>
                                    <Styles.Name>
                                        {owner ? desensitizationPrincipal(String(owner), 8) :
                                            <Skeleton width={100} height={40}/>}
                                    </Styles.Name>
                                </Box>
                            </Styles.Item>
                            <Styles.Item>
                                <Box d='column' ai='center' jc='center'>
                                    <Styles.Name>
                                        Create Time
                                    </Styles.Name>
                                    <Styles.Name>
                                        {createTime ? moment(Number(createTime) / 1000000).format("YYYY-MM-DD") :
                                            <Skeleton width={100} height={40}/>}
                                    </Styles.Name>
                                </Box>
                            </Styles.Item>
                        </Styles.List>
                        <Styles.Title>
                            {name}
                        </Styles.Title>
                        <Box>
                            <Styles.SubTitle>
                                - {description}
                            </Styles.SubTitle>
                        </Box>
                        <Gap height={100}/>
                        <MainButton onClick={() => setVisible(true)}>
                            Buy
                        </MainButton>
                    </Styles.Content>
                    <Styles.GalleryWrap>
                        <Styles.NftDisplay>
                            <img onLoad={() => setLoaded(true)} className='inner' src={tokenInfo?.nftUrl} alt=""/>
                            {!loaded && <Styles.Loading/>}
                        </Styles.NftDisplay>
                    </Styles.GalleryWrap>
                </Styles.Container>
            </Dialog>
            {visible && <BuyModal orderId={index} orderInfo={tokenInfo} tokenId={id} visible={visible}
                                  onClose={handleCloseBuy}/>}
        </div>
    );
})
