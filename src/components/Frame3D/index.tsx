import {Frame3D as Styled} from './styles'
import {useEffect} from "react";
import Frame from './Frame'

let instance: any = null;

interface Props {
    url: string
}

export const Frame3D = ({url}: Props) => {
    useEffect(() => {
        url && instance && instance.setFrame(url)
    }, [url]);
    useEffect(() => {
        instance = new Frame()
    }, [])
    return (
        <Styled.Wrap>
            <Styled.Univarse id='frame'/>
        </Styled.Wrap>
    )
}
