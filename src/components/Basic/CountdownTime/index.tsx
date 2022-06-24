import Countdown from 'react-countdown';
import './index.less';
interface Props{
    startTime:Number|any;
    endTime:Number|any
};
export const CountdownTime = ({startTime,endTime}:Props)=>{
    const  _startTime = new Date(startTime/Math.pow(10,6)).getTime();
    const  _endTime = new Date(endTime/Math.pow(10,6)).getTime();
    console.log(_startTime,_endTime)
    const end = (_endTime-_startTime);
    console.log(end,1234);
    const renderer = ({days,total, hours, minutes, seconds, completed }) => {
        console.log(days,total,hours, minutes, seconds, completed,8888)
        if (completed) {
            // Render a completed state
            return <span className ='time-end'>支付超时</span>;
        } else {
            // Render a countdown
            return <div className='countdown-line'>
                <span className='small-count'>{hours}</span>:<span className='small-count'>{minutes}</span>:<span className='small-count'>{seconds}</span>
            </div> ;
        }
    };
    return(
        <Countdown  className='countdown' date={_endTime} renderer={renderer} />
    );
};
