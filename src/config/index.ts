// assets cannot be deleted
import {TokenInfo} from '@/types/global';

export const XTC = 'gvbup-jyaaa-aaaah-qcdwa-cai';
export const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDZFQ0E1OTc0QWFlYzhkYzlDMTYwNTY0MGE0NDU5QWVkMTY2MzJGMWIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0MTcwNTAxNjYzMywibmFtZSI6ImRmaS5tYXJrZXQifQ.ILPI6gVFhzfXv_pA3UwYivPSidegNjUfHh13-7r1Z0o'
export const ipfsHost = 'https://infura-ipfs.io/ipfs';
export type ActorType = 'noIdentity' | "identity" | undefined
export const optionType = {
    PRICE_UP: 1,
    PRICE_LOWER: 2,
    TIME_UP: 3,
    TIME_LOWER: 4,
}
export const Options = [
    {title: 'Price Lower', type: optionType.PRICE_LOWER},
    {title: 'Price Up', type: optionType.PRICE_UP},
    {title: 'Time Lower', type: optionType.TIME_LOWER},
    {title: 'Time up', type: optionType.TIME_UP}
]


export const musicList = [
    {
        id: 0,
        name: 'Every body one',
        cover: '/assets/img_2.png',
        musicUrl: 'https://bafybeicca7qt5ezj5pe4tqjusbimyaaqejyqh4b5efzmtvhc6hvd3eabhq.ipfs.infura-ipfs.io/'
    },
    {
        id: 1,
        name: 'Every body two',
        cover: '/assets/img_3.png',
        musicUrl: 'https://www.jq22.com/demo/HTML5Player-150211220843/mp3/deguo.mp3'
    },
    {
        id: 2,
        name: 'Every body Three',
        cover: '/assets/img_4.png',
        musicUrl: 'https://www.jq22.com/demo/HTML5Player-150211220843/mp3/The%20Dawn.mp3'
    },
    {
        id: 3,
        name: 'Every body  four',
        cover: '/assets/t2.png',
        musicUrl: 'https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/1.mp3'
    },
    {
        id: 4,
        name: 'Every body  six',
        cover: '/assets/img_5.png',
        musicUrl: 'https://www.jq22.com/demo/HTML5Player-150211220843/mp3/chenparty%20dj.mp3'
    },
    {
        id: 5,
        name: 'Every body  seven',
        cover: '/assets/img_6.png',
        musicUrl: 'https://m10.music.126.net/20220403224626/5272504269452af4dfb4d5772a3f0107/ymusic/cc83/6da7/7e20/d5b59fd22aff259eaf4bac23c58c80dc.mp3'
    }

]
