import react, { useEffect, useMemo, useState } from "react";
import { UserPrincipalStyles as styled } from "./styles";
import { desensitizationPrincipal } from "@/utils/formate";
import { ToolTip } from "@/components";
import copy from "copy-to-clipboard";
import Icon from "../../../icons/Icon";
import { Principal } from "@dfinity/principal";
import { Box } from "@/styles";
interface Props {
    principal: Principal | null;
    subAccountId: string;
}
export const UserPrincipal = ({ principal, subAccountId }: Props) => {
    const [text, setText] = useState("Copy");

    const copyText = (type) => {
        if (type === 1) {
            copy(String(subAccountId));
            setText("Copy");
        } else {
            copy(String(principal + ""));
            setText("Copy");
        }

        setTimeout(() => {
            setText("Copyed!");
        }, 500);
    };
    return (
        <styled.UserPrincipal>
            <Box jc="space-around" ai="center">
                <styled.PrincipalId>Prinicipal ID</styled.PrincipalId>
                <styled.PrincipalContent>
                    {desensitizationPrincipal(
                        principal
                            ? principal + ""
                            : "xxxxx-xxxxxx-xxxxx-xxx",
                        9
                    )}
                </styled.PrincipalContent>
                <ToolTip title={text}>
                    <div>
                        <styled.Cursor onClick={copyText}>
                            <Icon name="copy" />
                        </styled.Cursor>
                    </div>
                </ToolTip>
            </Box>
            <Box jc="space-around" ai="center">
                <styled.PrincipalId>Account ID</styled.PrincipalId>
                <styled.PrincipalContent>
                    {desensitizationPrincipal(
                        subAccountId ? subAccountId : "xxxxxxxxxxxxxxxxxxxx",
                        9
                    )}
                </styled.PrincipalContent>
                <ToolTip title={text}>
                    <div>
                        <styled.Cursor onClick={() => copyText(1)}>
                            <Icon name="copy" />
                        </styled.Cursor>
                    </div>
                </ToolTip>
            </Box>
        </styled.UserPrincipal>
    );
};
