import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import {updateDrawerVisible, useUserInfoStore} from "@/redux";
import styled from "styled-components";
import {useAuth} from "@/usehooks/useAuth";
import {useHistory} from "react-router-dom";
import {Link} from "react-router-dom";
import HelpCenterIcon from '@mui/icons-material/HelpCenter';

const Span = styled('div')`
  color: #696969;
  font-size: 16px;
  font-weight: bolder;

`
export default function Account() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const history = useHistory();
    const {isAuth, logOut} = useAuth();
    const {logo} = useUserInfoStore();
    const open = Boolean(anchorEl);
    const goToProfile = async () => {
        if (!isAuth) {
            await updateDrawerVisible({open: true});
            return
        }

        history.push('/profile')

    }
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
                <Tooltip title="My Profile">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ml: 2}}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar
                            alt="My Profile"
                            src={logo || "/assets/checker.png"}
                            sx={{width: 40, height: 40}}
                        />
                    </IconButton>
                </Tooltip>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            width: 220,
                            mt: 1.5,
                            borderRadius: 2,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                >
                    <MenuItem onClick={goToProfile}>
                        <Avatar sx={{bgcolor: '#007FFF'}}/><Span>My Profile</Span>
                    </MenuItem>
                    <Divider/>
                    <Link to={'/manual'}>
                        <MenuItem>
                            <HelpCenterIcon color='primary'/><Span>&nbsp; Help Center</Span>
                        </MenuItem>
                    </Link>
                    <Divider/>
                    <MenuItem onClick={() => logOut()}>
                        <ListItemIcon>
                            <Logout sx={{color: '#007FFF', fontWeight: 'bolder'}} fontSize="small"/>
                        </ListItemIcon>
                        <Span> Logout </Span>
                    </MenuItem>
                </Menu>
            </Box>

        </React.Fragment>
    );
}
