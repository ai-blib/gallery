import React from "react";
import { FAQStyles as Styled } from "./styles";
import { Gap } from "@/components";
import Icon from "@/icons/Icon";
import Collapse from "@mui/material/Collapse";
export default () => {
    const [checked, setChecked] = React.useState(-1);
    const list = [
        { q: "ffff", a: "aaa" },
        {
            q: "Crypto Wallet Plug.",
            a: (
                <>
                    {" "}
                    <p style={{ marginBottom: "10px" }}>
                        Crypto Wallet Plug. The Crypto Wallet Plug stores your
                        assets ICP and WICP on the blockchain, and processes
                        your transactions. Plug wallet will generate a unique
                        Principal Id and Address Id for you. At the same time,
                        you will use your principal id to convert your
                        transaction operations on the browser to transactions on
                        the blockchain through the Plug wallet.
                    </p>
                    <p style={{ marginBottom: "10px" }}>
                        All transaction records through the Plug wallet can be
                        viewed in the Plug&#39;s Activity. So it&#39;s best to
                        check the Activity&#39;s transaction history after each
                        transaction.
                    </p>
                    <p>
                        Now that you have the digital currency WICP and the
                        Crypto Wallet Plug, you can connect your wallet to{" "}
                        <a
                            href="https://imart.io/"
                            style={{ fontWeight: "bolder" }}
                        >
                            iMart
                        </a>
                        .
                    </p>
                </>
            ),
        },
    ];
    return (
        <Styled.FAQWrap>
            <Gap height={40} />
            <Styled.BannerWrap>
                FAQ
                <Styled.CircleIconWrap>
                    <Icon name="faqCircle" />{" "}
                </Styled.CircleIconWrap>
                <Styled.HalfIconWrap>
                    <Icon name="halfCircleLogo" />
                </Styled.HalfIconWrap>
                <Styled.EndIconWrap>
                    <Icon name="halfEndLogo" />{" "}
                </Styled.EndIconWrap>
            </Styled.BannerWrap>
            <Gap height={32.5} />
            {list.map((v, k) => {
                return (
                    <>
                        <Styled.Question
                            checked={checked === k}
                            onClick={() => {
                                checked === k ? setChecked(-1) : setChecked(k);
                            }}
                        >
                            {checked === k ? (
                                <Icon name="downTri" />
                            ) : (
                                <Icon name="rightTri" />
                            )}
                            <Gap width={14} /> {v.q}
                        </Styled.Question>
                        <Collapse in={checked === k} style={{ width: "100%" }}>
                            <Styled.Answer>{v.a}</Styled.Answer>
                        </Collapse>
                        <Gap height={20} />
                    </>
                );
            })}
        </Styled.FAQWrap>
    );
};
