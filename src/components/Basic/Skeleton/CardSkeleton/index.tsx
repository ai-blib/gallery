import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';


export const CardSkeleton = () => {
    return (
        <Grid container wrap="nowrap">

            <Box sx={{width: "100%", marginRight: 0.5, my: 5}}>
                <Skeleton variant="rectangular" width={"100%"} height={200}/>
                <Box sx={{pt: 0.5}}>
                    <Skeleton/>
                    <Skeleton width="100%"/>
                </Box>
            </Box>
        </Grid>
    );
}

