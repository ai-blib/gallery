import ReactDOM from "react-dom";
import {HashRouter, BrowserRouter} from "react-router-dom";
import App from "./views";
import React from 'react'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from "moment-timezone";

moment.tz.setDefault('America/New_York');
// import store from "./redux/store";
import "./index.css";
import {fontResize} from "./utils/fontResize";
import rewriteFixed from "./utils/rewriteFixed";
import ThemeProvider from './theme/index';
import {ProvideAuth} from './usehooks/useAuth'
import {Provider} from "react-redux";
import store from "./redux/store";

rewriteFixed();
(window as any)['global'] = window;
window.React = React

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <ThemeProvider>
                <ProvideAuth>
                    <App/>
                </ProvideAuth>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    theme='colored'
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </ThemeProvider>
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);
