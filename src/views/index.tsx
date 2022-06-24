import { Container, Wrap } from "./styles";
import { Header, Gap, Footer, MetaArt } from "@/components";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { MarketApi, SalesApi } from "@/apis";
import Profile from "./Profile";
import Home from "./Home";
import Create from "./Create";
import Collection from "./Collection";
import Market from "./Market";
import Detail from "./Detail";
import {useEffect, useState} from "react";
import {useAuth} from "@/usehooks/useAuth";
import Sales from "./Sales";
import Sale from "./Sales/Sale";
import Activity from "./Activity";
import ListItem from "./Detail/ListItem";
import Music from "./Music";
import Live from "./Live";
import Manual from "./Manual";
import FAQ from "./FAQ";
import CreateItem from './Create/CreateItem';
import LoadModelCache from '@/utils/MetaverseModelFun'
declare global {
    interface Window {
        ic: any;
    }
}
export default () => {
    const location = useLocation();
    const [hidden, setHidden] = useState<boolean>(false);
    useEffect(() => {
        (async () => {
            MarketApi.getNFTs();
            MarketApi.getArtCollections();
            MarketApi.getMusicCollections();
            MarketApi.getUserOwnedNFTs('', false)
            MarketApi.getUserInfo(undefined);
            SalesApi.getAllSales();
            LoadModelCache.LoaderRemoteModelObj()
        })();
    }, []);
    useEffect(() => {
        if (location.pathname.includes("item/art")) {
            return;
        }
        if (
            location.pathname.includes("art") ||
            location.pathname.includes("live")
        ) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    }, [location.pathname]);
    return (
        <>
            <Wrap>
                {!hidden && <Header />}
                {!hidden && <Gap height={72} />}
                <Container
                    hidden={hidden}
                    bg={location.pathname.includes("live") && "black"}
                    className="container"
                >
                    <Switch>
                        <Route exact path="/" render={() => <Home/>}/>
                        <Route
                            exact
                            path="/profile/:id"
                            render={() => <Profile/>}
                        />
                        <Route exact path="/profile" render={() => <Profile/>}/>
                        <Route exact path="/create" render={() => <Create/>}/>
                        <Route exact path="/create/item/:type" render={() => <CreateItem/>}/>
                        <Route
                            exact
                            path="/collection/:id"
                            render={() => <Collection/>}
                        />
                        <Route
                            exact
                            path="/explore"
                            render={() => <Market/>}
                        />
                        <Route
                            exact
                            path="/detail/:collectionId/:id"
                            render={() => <Detail />}
                        />
                        <Route exact path="/sales" render={() => <Sales />} />
                        <Route
                            exact
                            path="/sales/sale/:id"
                            render={() => <Sale />}
                        />
                        <Route
                            exact
                            path="/activity"
                            render={() => <Activity />}
                        />
                        <Route
                            exact
                            path="/order/:collectionId/:tokenId"
                            render={() => <ListItem />}
                        />
                        <Route
                            exact
                            path="/art/:collectionId"
                            render={() => <MetaArt />}
                        />
                        <Route
                            exact
                            path="/music/:id"
                            render={() => <Music />}
                        />
                        <Route
                            exact
                            path="/live/music/:id"
                            render={() => <Live/>}
                        />
                        <Route exact path="/manual" render={() => <Manual />} />
                        <Route exact path="/faq" render={() => <FAQ />} />
                    </Switch>
                </Container>
                {!hidden && <Footer />}
            </Wrap>
        </>
    );
};
