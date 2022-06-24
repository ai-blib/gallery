import {PlayerStyles as Styled} from './styles'
import Icon from "@/icons/Icon";
import * as React from "react";
import {PlayerCard} from './components'
import {useState} from "react";

interface Props {
    list: Array<any>
}

export const Player = ({list}: Props) => {
    const [visible, setVisible] = useState<boolean>(false)
    const handleClick = () => {
        setVisible(!visible)
    }
    return (
        <>
            {visible && <Styled.Mask onClick={handleClick}/>}
            {/*<Styled.IconWrap id='heart-o'>*/}
            {/*    <Icon className='heart-to' name='heart-o'/>*/}
            {/*</Styled.IconWrap>*/}
            <Styled.Wrap id='player'>
                <Styled.PlayerWrap visible={visible}>
                    {list && list.length && <PlayerCard list={list}/>}
                </Styled.PlayerWrap>
                <Styled.PlayerGif onClick={handleClick} src='/assets/rock.gif'/>
            </Styled.Wrap>
        </>
    )
}
