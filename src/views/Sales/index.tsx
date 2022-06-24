import {CollectionsStyles as Styled} from "./styles";
import {SalesCard} from "./components";
import {Box} from "@/styles";
import {SalesApi} from "@/apis";
import React, {useCallback, useEffect, useMemo, useState} from "react";
import {SaleInfo} from "@/did/model/sales.did";
import {useSalesInfoStore} from "@/redux";
import {ButtonTabs} from "@/components";
import moment from "moment-timezone";

const tabs = ['Live', 'Coming', 'End'];
export default () => {
    const [tabValue, setTabValue] = useState<number>(0);
    const [SalesList, setSalesList] = useState<Array<SaleInfo>>(
        new Array(8).fill(0)
    );
    const {allSales} = useSalesInfoStore();
    const handleChange = useCallback((value) => setTabValue(value), []);
    const list = useMemo(() => {
        if (!allSales) {
            return
        }
        if (tabValue === 0) {
            return allSales
        } else if (tabValue === 1) {
            // coming
            return allSales.filter(({startTime, endTime}: any) => {
                const currentTime = moment().valueOf();
                startTime = startTime && Number(startTime) / 1000000  //init  m
                endTime = endTime && Number(endTime) / 1000000  //init  m
                if (startTime <= currentTime && endTime >= currentTime) {
                    return true
                }
                return false;
            })
        } else if (tabValue == 2) {
            // End
            return allSales.filter(({startTime, endTime}: any) => {
                const currentTime = moment().valueOf();
                endTime = endTime && Number(endTime) / 1000000  //init  m
                if (endTime < currentTime) {
                    return true
                }
                return false;
            })
        }
        return []
    }, [allSales, tabValue])
    useEffect(() => {
        (async () => {
            (await SalesApi.getAllSales());
        })();
    }, []);
    return (
        <Styled.Wrap>
            <Styled.MainTitle>
                The latest NFT launches on IMart.
            </Styled.MainTitle>
            <Box>
                <Styled.TabWrap>
                    {tabs.map((item: String, index: number) => (
                        <Styled.TabItem
                            key={index + "1"}
                            active={index === tabValue}
                            onClick={() => handleChange(index)}
                        >
                            <span className="tab">{item}</span>
                        </Styled.TabItem>
                    ))}
                </Styled.TabWrap>
            </Box>
            <Styled.Content>
                {(list ? list : SalesList).map(
                    (_sales: SaleInfo | any, index) => (
                        <SalesCard key={index} sales={_sales}/>
                    )
                )}
            </Styled.Content>
        </Styled.Wrap>
    );
};
