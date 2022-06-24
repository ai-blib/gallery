import {WalletStyles as Styled} from './styles';
import {Gap} from '@/components';
import Icon from '@/icons/Icon';
import {useAuth} from "@/usehooks/useAuth";
import {memo} from "react";

interface Props {
    login: Function
}

export default memo(({login}: Props) => {
    const {loginLoading} = useAuth();
    return (
        <Styled.Container>
            <Styled.Title>
                Sign in with your wallet
            </Styled.Title>
            <Styled.SubTitle>
                Sign in with one of available wallet providers.
            </Styled.SubTitle>
            <Gap height={50}/>
            <Styled.UlWrap>
                <Styled.WalletItem onClick={() => login()}>
                    <Styled.Avatar>
                        <Icon name='plug'/>
                    </Styled.Avatar>
                    <Styled.Text>
                        Sign {loginLoading ? "loading ...." : "in with Plug"}
                    </Styled.Text>
                </Styled.WalletItem>
            </Styled.UlWrap>
        </Styled.Container>
    )
})