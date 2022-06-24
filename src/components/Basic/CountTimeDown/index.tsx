import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import {DateWrap, DateItem, DateSapn, DateContainer, Inv, Completionist} from './styles'
import moment from "moment-timezone";
// Random component
export const CountTimeDown = ({
                                  startTime,
                                  handleCompleted,
                                  key

                              }: { startTime: number | string, handleCompleted?: Function, key: any }) => {

    const renderer = ({hours, minutes, seconds, days, completed}) => {
        if (completed || startTime === "end") {
            handleCompleted && handleCompleted(seconds);
            hours = '0'
            minutes = '0'
            seconds = '0'
            days = '00'
            // Render a completed state
            // R
            // ender a countdown
        }
        return <DateWrap>
            <DateItem>
                <DateContainer>
                    {days}
                </DateContainer>
                <DateSapn>Days</DateSapn>
            </DateItem>
            <Inv>
                :
            </Inv>
            <DateItem>
                <DateContainer>
                    {hours < 10 ? '0' + hours : hours}
                </DateContainer>
                <DateSapn>Hours</DateSapn>
            </DateItem>
            <Inv>
                :
            </Inv>
            <DateItem>
                <DateContainer>
                    {minutes < 10 ? "0" + minutes : minutes}
                </DateContainer>
                <DateSapn>Mins</DateSapn>
            </DateItem>
            <Inv>
                :
            </Inv>
            <DateItem>
                <DateContainer>
                    {seconds < 10 ? "0" + seconds : seconds}
                </DateContainer>
                <DateSapn>Secs</DateSapn>
            </DateItem>
        </DateWrap>
    };

    return <Countdown
        date={startTime}
        onTick={(v) => handleCompleted && handleCompleted(v)}
        key={key + 'Countdown'}
        renderer={renderer}
    />
}
