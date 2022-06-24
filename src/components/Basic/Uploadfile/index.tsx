import {FilePond, registerPlugin} from 'react-filepond'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
// Import FilePond styles
import 'filepond/dist/filepond.min.css'
import React, {memo} from "react";
import {UploadfileStyles as Styled} from './styles'
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

interface Props {
    files: Array<any>,
    onupdatefiles: any
}

export const Uploadfile = memo(({files, onupdatefiles}: Props) => {
    return <Styled.Wrap>
        <FilePond
            files={files}
            onupdatefiles={onupdatefiles}
            allowMultiple={true}
            maxFiles={1}
            oninit={() => console.log('err')}
            name="files"
            labelIdle='Drag & Drop your files'
        />
    </Styled.Wrap>
})
