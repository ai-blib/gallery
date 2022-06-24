import {HeaderStyles as styled} from './styles'
import {Drawer, Gap} from '@/components';
import {SearchInput} from '@/components';
import Icon from '@/icons/Icon';
import {Link} from "react-router-dom";
import {RouteComponentProps, withRouter, useLocation} from "react-router-dom";
import {Principal} from "@dfinity/principal";
import {useAuth} from "@/usehooks/useAuth";
import {updateDrawerVisible, useUserInfoStore} from "@/redux";
import {useEffect, useState} from "react";
import {Box} from '@/styles'
import Avatar from '@mui/material/Avatar';
import Account from './Account'

interface Props extends RouteComponentProps {
};

interface headerMenu {
    name: string,
    path: string
}

const ListString: Array<headerMenu> = [
    {name: 'Sales', path: '/sales'}, {
        name: "Explore",
        path: '/explore'
    }, {
        name: "Activity",
        path: '/activity'
    }]
export const Header = withRouter(({history}: Props) => {
    const location = useLocation();
    const {isAuth, plugLogIn} = useAuth();
    const [active, setActive] = useState<string>('')
    const handleClick = async (path, name) => {
        if (!isAuth && path.includes('profile')) {
            await updateDrawerVisible({open: true});
            return
        }
        setActive(name)
        history.push(path)
    }
    useEffect(() => {
        if (location.pathname) {
            ListString.some(({name}) => {
                if (location.pathname.includes(name.toLocaleLowerCase())) {
                    setActive(name);
                    return
                }
                if (location.pathname.includes('profile')) {
                    setActive('My Profile');
                    return
                }
            })
        }
    }, [location.pathname])
    return (
        <styled.Wrap>
            <styled.Header>
                <Link to={'/'}>
                    <Icon name='logo'/>
                </Link>
                <styled.SearchWrap>
                    {/*<SearchInput placeholder='Search by collection, items, artists, etc'/>*/}
                </styled.SearchWrap>
                <styled.RowWrap>
                    {ListString.map(({name, path}: headerMenu, index: number) => (
                        <styled.RowListItem active={name === active} onClick={() => handleClick(path, name)}
                                            key={index}>
                            {name}
                        </styled.RowListItem>
                    ))}
                    <Gap width={20}/>
                    <styled.BaseButton onClick={() => history.push('/create')}>
                        Create
                    </styled.BaseButton>
                    <Gap width={40}/>
                    <Account/>
                    <Gap width={40}/>
                    <Drawer/>
                </styled.RowWrap>
                {/*<Icon name="darkmode"/>*/}
            </styled.Header>
        </styled.Wrap>
    )
});
