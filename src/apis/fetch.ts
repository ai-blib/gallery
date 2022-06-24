import axios from 'axios'
export default class FetchApi {

    static region() {
        return fetch('http://www.cloudflare.com/cdn-cgi/trace').then(function (response) {
            return response.text()
        }).then(function (data) {
            return data.split('=')[9].replace(/\s+/g, "").replace('tls', '')

            // return {ip:data.ip,loc:data.loc}
        })
    }

    /**
     *
     * @param symbol
     */
    static getSymbolPrice(symbol: string) {
        return axios.get(`/api/platform/spot/market/symbol?symbol=${symbol.toLocaleUpperCase()}_USDT`, {
            headers: {
                'content-type': 'application/json'
            },
            method: 'GET'
        }).then(function (data) {
            console.log(data?.data?.data?.c, 'data?.data?.c')
            return data?.data?.data?.c
        })
    }
}
