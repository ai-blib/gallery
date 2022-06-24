import {HomeStyles as Styled} from './styles'
import {Box} from "@/styles";
import React, {useEffect} from "react";
import Icon from "@/icons/Icon";
import {TopSection, CollectionList, Contact, TopSectionSun, Introduce} from './components'
import {ExtMarket} from '@/apis/Other'
import FetchApi from '@/apis/fetch'
export default () => {
    useEffect(() => {
        setTimeout(() => {
            ExtMarket.nftlist()
            FetchApi.getSymbolPrice('icp')
        }, 3200)
    }, [])
    return (
        <Styled.Main>
            <TopSection/>
            {/*<CollectionList />*/}
            <Contact/>
            <Introduce/>
        </Styled.Main>
    )

}
