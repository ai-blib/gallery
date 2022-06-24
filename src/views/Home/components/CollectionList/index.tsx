import {CollectionListStyles as Styled} from './styles';
import {Box} from '@/styles'

const ListItem = () => {
    return (<Styled.Item>
            <Box>
                <Styled.Index>
                    1
                </Styled.Index>
                <Box>
                    <Styled.CollectionIcon/>
                    <Styled.CollectionName>
                        Collection
                    </Styled.CollectionName>
                </Box>
            </Box>
            <Box width='50%' d='row' jc='space-around'>
                <Box d='column'>
                    <Styled.RowHeader>Floor</Styled.RowHeader>
                    <Box><Styled.TokenIcon src={'/assets/bf.png'}/><Styled.RowValue>2999</Styled.RowValue></Box>
                </Box>
                <Box d='column'>
                    <Styled.RowHeader>Total Volume</Styled.RowHeader>
                    <Box><Styled.TokenIcon src={'/assets/bf.png'}/><Styled.RowValue>2999</Styled.RowValue></Box>
                </Box>
                <Box d='column'>
                    <Styled.RowHeader>24h Volume</Styled.RowHeader>
                    <Box><Styled.TokenIcon src={'/assets/bf.png'}/><Styled.RowValue>2999</Styled.RowValue></Box>
                </Box>
                <Box d='column'>
                    <Styled.RowHeader>24 %</Styled.RowHeader>
                    <Styled.TokenUp>29.99%↑</Styled.TokenUp>
                </Box>
            </Box>
        </Styled.Item>
    )

}
export const CollectionList = () => {
    return (
        <Styled.List>
            <ListItem/>
        </Styled.List>
    )
}
