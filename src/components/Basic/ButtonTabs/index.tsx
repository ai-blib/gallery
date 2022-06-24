import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {ButtonTabsStyles as Styled} from './styles';
import {styled} from '@mui/material/styles';

interface Props {
    handleChange: Function | any;
    value: number | string,
    tabs: Array<string>;
    height?: number | string,
    background?: string
}

const AntTabs = styled(Tabs)`
  .MuiTabs-indicato {
    height: 100% !important;
    background: red;
    border-radius: 18px;
  }
`
const AntTab = styled(Tab)`
  .MuiTabs-indicato {
    height: 100% !important;
    background: red;
    border-radius: 18px;
  }
`
export const ButtonTabs = ({handleChange, value, tabs, height, background}: Props) => {
    return (
        <Styled.Wrap background={background} height={height}>
            <AntTabs
                value={value}
                onChange={handleChange}
                aria-label="secondary tabs example"
            >
                {
                    tabs.map((item, index) => (
                        <AntTab key={index} value={index} label={item}/>
                    ))
                }
            </AntTabs>
        </Styled.Wrap>
    );
}
