import {PriceHistoryStyles as Styled} from './styles'
import {ButtonTabs} from '@/components'
import {useCallback, useState, useRef, useEffect} from "react";
import {Box} from '@/styles';
import {StorageApi} from '@/apis'
import * as echarts from 'echarts';
import {options} from './config'
import {getCurrencyString} from "@/utils/formate";

const timeTabs = ['24h', '7d', '30d', '90d', '1y']
export const PriceHistory = ({tokenId, canisterId}: { tokenId: string, canisterId: string }) => {
    const [af, setAf] = useState<Number>(0);
    const [time, setTime] = useState<number>(1)
    const handleChange = useCallback((e, value) => setAf(value), []);
    const handleTimeChange = useCallback((e, time) => setTime(time), []);
    const ChartRef = useRef<any>(null);
    const myChartRef = useRef<any>(null);
    useEffect(() => {
        refresh(timeTabs[time])
    }, [time])
    const initChart = () => {
        myChartRef.current = echarts.init(ChartRef.current);
        myChartRef.current && myChartRef.current.setOption(options, true);
    }
    const refresh = async (time?: string) => {
        const res = await StorageApi.getNftItemHistory(canisterId, time || '', tokenId);
        const dates = res.map((_t) => _t.date);
        console.log(dates, 'dates')
        const seriesAverage = res.map((_a) => getCurrencyString(Number(_a.price) || "", 8, 2));
        console.log(seriesAverage, 'seriesAverage')
        options.xAxis.data = dates;
        options.series[0].data = seriesAverage;
        myChartRef.current && myChartRef.current.setOption(options, true);
    }
    useEffect(() => {
        initChart();
        (async () => {
            window.addEventListener("resize", () => {
                myChartRef.current.resize();
            });
        })()
    }, [])
    return (
        <Styled.Wrap>
            <Box d='row' jc='center'>
                <Box d='row'>
                    <ButtonTabs height={30} tabs={timeTabs} handleChange={handleTimeChange} value={time}/>
                </Box>
            </Box>
            <Styled.EchartsContainer>
                <Styled.Echarts ref={ChartRef} style={{height: 300}}/>
            </Styled.EchartsContainer>
        </Styled.Wrap>
    )
}