import {SelectedTab} from "@/components";
import {DetailInfoStyles as Styled} from "./styles";
import React, {memo, useCallback, useState} from "react";
import {Box} from "@/styles";


export const DetailDisplay = memo(() => {
    const [active, setActive] = useState<number>(0)
    const handleActive = useCallback((_active) => {
        setActive(_active)
    }, []);
    return (
        <Box d='column'>
            <SelectedTab labels={['detail', 'history']} onChange={handleActive} value={active}>
            <Styled.DetailList>
                <Styled.Item>
                    <Styled.Title>owner</Styled.Title>
                     <Styled.TitleContent>
                         Isea
                     </Styled.TitleContent>
                </Styled.Item>
                <Styled.Item>
                    <Styled.Title>Last price</Styled.Title>
                    <Styled.TitleContent>
                        65 ICP
                    </Styled.TitleContent>
                </Styled.Item>
                <Styled.Item>
                    <Styled.Title>Tranfer time</Styled.Title>
                    <Styled.TitleContent>
                        7 Days ago
                    </Styled.TitleContent>
                </Styled.Item>
            </Styled.DetailList>
            </SelectedTab>
        </Box>

    )
})
