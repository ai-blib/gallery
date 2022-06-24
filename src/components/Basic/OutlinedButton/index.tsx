import react from "react";
import { OutlinedButtonStyles as styled } from "./styles";
interface Props {
    children: React.ReactNode;
    noOutline?: boolean;
    width?: number;
    onClick?: () => void;
}
export const OutlinedButton = ({ width, children, onClick,noOutline }: Props) => {
    return (
        <styled.OutlinedButton width={width} onClick={onClick} noOutline={noOutline}>
            <styled.ContentWrap>{children}</styled.ContentWrap>
        </styled.OutlinedButton>
    );
};
