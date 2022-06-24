import {StatsStyles as Styled} from './styles'
import {ButtonTabs} from '@/components'
import {useCallback, useState, useRef, useEffect} from "react";
import {Box} from '@/styles';
import {StorageApi} from '@/apis'
import * as echarts from 'echarts';
import {options} from './config'
import {getCurrencyString} from "@/utils/formate";

const tabs = ['Average', 'Floor'];
const timeTabs = ['24h', '7d', '30d', '90d', '1y']
export const Stats = ({canisterId}: { canisterId: string }) => {
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
        const res = await StorageApi.getPriceHistory(canisterId, time);
        const dates = res.map((_t) => _t.date);
        const seriesAverage = res.map((_a) => getCurrencyString(Number(_a.avg) || "", 8, 2));
        const seriesFloor = res.map((_f) => getCurrencyString(Number(_f.min) || "", 8, 2));
        const seriesMax = res.map((_f) => getCurrencyString(Number(_f.max) || "", 8, 2));
        const seriesVolume = res.map((_f) => getCurrencyString(Number(_f.volume) || "", 8, 2));

        options.xAxis.data = dates;
        options.series[0].data = seriesAverage;
        options.series[1].data = seriesFloor;
        options.series[2].data = seriesMax;
        options.series[3].data = seriesVolume;
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
            <Box d='row' jc='space-between'>
                <Box d='row'>
                    <Styled.Title>
                        Sales History
                    </Styled.Title>
                </Box>
                <Box d='row'>
                    <ButtonTabs height={30} tabs={timeTabs} handleChange={handleTimeChange} value={time}/>
                </Box>
            </Box>
            <Styled.EchartsContainer>
                <Styled.Echarts ref={ChartRef} style={{height: 400}}/>
            </Styled.EchartsContainer>
        </Styled.Wrap>
    )
}