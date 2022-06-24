import {AvatarStyles as Styled} from "./styles";
import Icon from "../../../icons/Icon";

interface Props {
    onClick?: () => void;
}

export const BackButton = ({onClick}: Props) => {
    return (
        <Styled.Back onClick={onClick}>
            <Icon name='back'/>
            Back
        </Styled.Back>
    );
};
