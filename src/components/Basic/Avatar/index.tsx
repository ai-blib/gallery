import { AvatarStyles as styled } from "./styles";
import Icon from "../../../icons/Icon";
import { jsx } from "@emotion/react";
interface Props {
    onClick?: () => void;
    size: number;
    children?: React.ReactNode;
    src?: string;
}
export const Avatar = ({ onClick, size, children, src }: Props) => {
    return (
        <styled.AvatarWrap src={src} onClick={onClick && onClick} size={size}>
            {children}
        </styled.AvatarWrap>
    );
};
