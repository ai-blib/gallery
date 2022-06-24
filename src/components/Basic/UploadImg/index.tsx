import {UploadImgStyles as Styled} from './styles';
import IconButton from '@mui/material/IconButton';
import {Box} from '@/styles'
import ImageUploading, {ImageListType, ImageType} from "react-images-uploading";
import React, {memo, useCallback, useMemo, useState} from "react";
import Icon from "@/icons/Icon";

interface closeProps {
    onClose: Function
}
interface Props {
    onChange: (e: ImageType, addUpdatedIndex?: Array<number>) => void,
    NftUrl: any
}

interface closeProps {
    onClose: Function
}



interface PreviewImgProps {
    dataURL: string | any
}

const PreviewImg = memo(({dataURL}: PreviewImgProps) => {
    if (!dataURL) return <></>;
    return <Styled.PreviewImg
        src={dataURL}/>
})
export const UploadImg = ({onChange, NftUrl}: Props) => {
    return (
        <ImageUploading
            acceptType={['jpg', 'gif', 'png', 'jpeg', 'svg']}
            multiple
            value={NftUrl}
            onChange={onChange}
            maxNumber={1}
        >
            {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps
              }) => (
                // write your building UI
                <Styled.UploadFile {...dragProps}>
                    {
                        !imageList[0] ?
                            <Box jc='center' ai='center' d='column'>
                                <Styled.Title>
                                    Drag & Drop your files
                                </Styled.Title>
                                <IconButton onClick={onImageUpload}>
                                    <Styled.UploadButton>
                                        Choose File
                                    </Styled.UploadButton>
                                </IconButton>
                            </Box> : <Box> <PreviewImg dataURL={imageList[0]?.dataURL}/></Box>

                    }
                    {imageList[0] &&  <IconButton
                        aria-label="close"
                        onClick={()=>onChange([])}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                        }}
                    >
                        <Box>
                            <Icon name='close'/>
                        </Box>
                    </IconButton>}
                </Styled.UploadFile>
            )}
        </ImageUploading>
    )

}
