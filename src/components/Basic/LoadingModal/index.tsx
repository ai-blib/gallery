import {LoadingModalStyles as Styled} from './styles';
import React, {memo} from "react";
import {MainButton, Modal} from '@/components';
import {Box} from '@/styles';
import Icons from '@/icons/Icon';
import './index.less';

const LoadingComponent = () => {
    return (
        <>
            <Box ai='center' jc='center' style={{position: "relative"}}>
                <Styled.CircleMove src={'./assets/circle.png'}/>
                <Icons name='loading'/>
            </Box>
            <Styled.MainTitle>
                Pending
            </Styled.MainTitle>
            <Styled.SubTitle>
                Please be Patience， your operation is pending.
            </Styled.SubTitle>
        </>
    )
};
const FailedComponent = () => {
    return (
        <>
            <Box>
                <Icons name='failed'/>
            </Box>
            <Styled.MainTitle>
                Failed
            </Styled.MainTitle>
            <Styled.SubTitle>
                Please try again later .
            </Styled.SubTitle>
        </>
    )
};
const SuccessComponent = () => {
    return (
        <>
            <Box>
                <Icons name='success'/>
            </Box>
            <Styled.MainTitle>
                Succeed
            </Styled.MainTitle>
            <Styled.SubTitle>
                Please be patience, we’re purchasing your order.
            </Styled.SubTitle>
        </>
    )
};
export type statusType = 'success' | 'loading' | 'failed';

interface Props {
    status: statusType | boolean;
    handleClose: () => any;
    handleRetry?: () => any;
}

const StatusComponent = ({status}: { status: statusType | boolean }) => {
    if (status === 'loading') {
        return <LoadingComponent/>
    } else if (status === 'success') {
        return (
            <SuccessComponent/>
        )
    } else if (status === 'failed') {
        return <FailedComponent/>
    }

    return null;

}
const ButtonList = ({handleClose, status, handleRetry}) => {
    if (status === 'success') {
        return <Box width='auto'>
            <MainButton style={{background: '#52C41A'}} onClick={handleClose}>
                Confirm
            </MainButton>
        </Box>
    } else if (status === 'failed') {
        return <Box width='auto'>
            <Styled.CancelBtn onClick={handleClose}>Cancel</Styled.CancelBtn>
            <MainButton style={{width: 150}} onClick={handleRetry}>
                Retry
            </MainButton>
        </Box>
    } else {
        return null
    }
}
export const LoadingModal = ({handleClose, status, handleRetry}: Props) => {

    return (<Modal className='loadingModal' onClose={undefined} visible={!!status} header={''}
                   buttonComponent={<ButtonList status={status} handleClose={handleClose} handleRetry={handleRetry}/>}>
        <Styled.Container>
            <StatusComponent status={status}/>
        </Styled.Container>
    </Modal>)


}
