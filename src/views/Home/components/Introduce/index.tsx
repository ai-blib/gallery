import {IntroduceStyles as Styled} from './styles'

export const Introduce = () => {
    return (
        <Styled.Wrap>
            <Styled.Item>
                <Styled.Icon>
                    <img src="/assets/money.png" alt=""/>
                </Styled.Icon>
                <Styled.Title>
                    Low fees
                </Styled.Title>
                <Styled.SunTitle>
                    We charge a 1.0% Marketplace fee, and collection creators can charge a Royalty fee of up to 10%
                </Styled.SunTitle>
            </Styled.Item>
            <Styled.Item>
                <Styled.Icon>
                    <img src="/assets/per.png" alt=""/>
                </Styled.Icon>
                <Styled.Title>
                    Asset security
                </Styled.Title>
                <Styled.SunTitle>
                    All assets remain in your full control - we never take custody any of your digital
                    assets </Styled.SunTitle>
            </Styled.Item>
            <Styled.Item>
                <Styled.Icon>
                    <img src="/assets/ped.png" alt=""/>
                </Styled.Icon>
                <Styled.Title>
                    Multi collection
                </Styled.Title>
                <Styled.SunTitle>
                    We plan to work with a wide range of talented curators, artists and developers </Styled.SunTitle>
            </Styled.Item>
        </Styled.Wrap>
    )
}
