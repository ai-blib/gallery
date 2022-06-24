import {UploadImgStyles as Styled} from './styles';
import IconButton from '@mui/material/IconButton';
import {Box} from '@/styles'
import ImageUploading, {ImageListType, ImageType} from "react-images-uploading";
import {useCallback, useMemo, useState} from "react";

interface Props {
    onChange: (e: ImageType, addUpdatedIndex?: Array<number>) => void,
    NftUrl: any;
    children: JSX.Element;
    disabled?: boolean
}

export const UploadButton = ({onChange, NftUrl, children, disabled = true}: Props) => {
    return (
        <ImageUploading
            acceptType={['jpg', 'gif', 'png']}
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

                        <Box jc='center' ai='center' d='column'>
                            <div onClick={() => disabled && onImageUpload()}>
                                {children}
                            </div>
                        </Box>
                    }
                </Styled.UploadFile>
            )}
        </ImageUploading>
    )

}
