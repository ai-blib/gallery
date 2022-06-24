import {FileStyles as Styled} from './styles';

interface Props {
    nftUrl:string|undefined
}
export const PreviewNft = ({nftUrl}:Props) => {

    return (

            <Styled.RightContent width={280}>
                <Styled.PreviewCard>
                    <Styled.ContentWrap>
                        {<Styled.ContentImg src={nftUrl||'../../../assets/nftBg.png'}/> }
                    </Styled.ContentWrap>
                    <Styled.InfoTitle>
                        <Styled.InfoSpan>
                           #xxx
                        </Styled.InfoSpan>
                        <Styled.InfoSpan>
                           #xxx
                        </Styled.InfoSpan>
                    </Styled.InfoTitle>
                    <Styled.InfoTitle>

                    </Styled.InfoTitle>
                </Styled.PreviewCard>
            </Styled.RightContent>
    )
}
