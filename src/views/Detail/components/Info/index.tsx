import {INfoStyles as Styled} from './styles'
import {Box} from "@/styles";
import Icon from "@/icons/Icon";
import {Gap} from "@/components";
import React, {memo} from "react";
import {getTokenInfoResult} from "@/apis/model/min";
import {desensitizationPrincipal} from "@/utils/formate";
import moment from "moment-timezone";
import {Skeleton} from "@mui/material";
interface Props {
    tokenId: string;
    tokenInfo: getTokenInfoResult | any,
    collectionInfo: Array<Object> | any | undefined

}

export const Info = memo(({tokenId, tokenInfo, collectionInfo}: Props) => {
    const {createTime, owner} = tokenInfo || {};
    const {name, logo} = collectionInfo[0] || {};
    return (
        <Styled.Container>
            <Styled.SContent>
                <Styled.InfoBox>
                    {/*<Icon name={'avatar'}/>*/}
                    <Styled.CollectionLogo src={logo}/>
                    <Box d='column'>
                        <Styled.STitle>Collection <Gap width={10}/>
                            <Icon name={'auth'}/></Styled.STitle>
                        <Styled.BName>
                            {name || <Skeleton width={100} height={40}/>}
                        </Styled.BName>
                    </Box>
                </Styled.InfoBox>
                {/*<Styled.InfoBox>*/}
                {/*    <Icon name={'avatar'}/>*/}
                {/*    <Box d='column'>*/}
                {/*        <Styled.STitle>Creater</Styled.STitle>*/}
                {/*        <Styled.BName>*/}
                {/*            {owner?desensitizationPrincipal(String(owner), 8):<Skeleton width={100} height={40} />}*/}
                {/*        </Styled.BName>*/}
                {/*    </Box>*/}
                {/*</Styled.InfoBox>*/}
                {/*<Styled.InfoBox>*/}
                {/*    <Icon name={'avatar'}/>*/}
                {/*    <Box d='column'>*/}
                {/*        <Styled.STitle>Time</Styled.STitle>*/}
                {/*        <Styled.BName>*/}
                {/*            {createTime?moment(Number(createTime)/1000000).format("YYYY-MM-DD"):<Skeleton width={100} height={40} />   }*/}
                {/*        </Styled.BName>*/}
                {/*    </Box>*/}
                {/*</Styled.InfoBox>*/}
            </Styled.SContent>
        </Styled.Container>

    )
})
