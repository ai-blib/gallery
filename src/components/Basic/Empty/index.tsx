import { EmptyStyles as Styled } from "./styles";
import Icon from "../../../icons/Icon";
import {MainButton} from "@/components";
import React from "react";
interface Props {
    onClick: () => any;
    text:string
}
export const Empty = ({ onClick,text}: Props) => {
    return (
        <Styled.EmptyWrap >
            <Styled.ButtonWrap>
            <MainButton onClick={onClick}>
                {text}
            </MainButton>
            </Styled.ButtonWrap>
        </Styled.EmptyWrap>
    );
};
