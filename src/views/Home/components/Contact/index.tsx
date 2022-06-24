import {ContactStyles as Styled} from './styles';
import {Box} from '@/styles'

export const Contact = () => {
    return (
        <Styled.Wrap>
            <Styled.CardWrap>
                <Styled.Card>
                    <img src="/assets/c-c.png" alt=""/>
                </Styled.Card>
            </Styled.CardWrap>
            <Box d='column' style={{padding: "0 20px"}}>
                <Styled.MainTitle>
                    Want to launch your own NFT project on iMart?
                </Styled.MainTitle>
                <Styled.SubTitle>
                    Contact us to launch your NFT collections / digital assets!
                </Styled.SubTitle>
                <Styled.Button>
                    Contact us
                </Styled.Button>
            </Box>
        </Styled.Wrap>
    )
}
