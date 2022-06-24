import {FileStyles as Styled} from './styles';
import {
    Uploadfile,
    Gap,
    UploadImg,
    Input,
    PreviewNft,
    MainButton,
    BackButton,
    LoadingModal,
    statusType
} from "@/components";
import {uploadIPfs, uploadIPfsBold} from '@/utils/common';
import {MarketApi, NFTMintApi} from '@/apis'
import {Box} from '@/styles'
import React, {useCallback, useEffect, useMemo, useState} from "react";
import {Principal} from "@dfinity/principal";
import {useHistory, useParams} from 'react-router-dom';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import {AddProperties, State} from '../AddProperties';
import './overwrite.less'
import {toast} from "react-toastify";
import {Properties} from "@/views/Detail/components";


interface FormProps {
    name: string,
    description: string
}


export const Container = (() => {
    const history = useHistory();
    const [NftUrl, setNftUrl] = useState<Array<any>>([]);
    const [ipfsObject, setIpfsObject] = useState<object>({})
    const [form, setForm] = useState<FormProps>({name: "", description: ""});
    const [loadingOrderStatus, setLoadingOrderStatus] = useState<statusType | boolean>(false);
    const [AddPropertiesVisible, setAddPropertiesVisible] = useState<boolean>(false);
    const [properties, setProperties] = useState<Array<any>>([])
    const [musicFile, setMusicFile] = useState<any>([])
    const handleCreateProperties = (values: State) => {
        if (properties.some((_i) => _i.name === values.name)) {
            return;
        }
        setProperties((_properties: any) => {
            _properties.push(values);
            return _properties
        });
        setAddPropertiesVisible(false);
    }
    const changeNftFile = useCallback(async (value) => {
        setNftUrl(value);
        const result = await uploadIPfs(value[0].file);
        console.log(result, '1234')
        setIpfsObject(result);
    }, []);
    const handleLoadingModalClose = useCallback(() => {
        if (loadingOrderStatus === 'success') {
            history.push('/profile');
        }
        setLoadingOrderStatus(false)
    }, [loadingOrderStatus])
    const handleInputChange = (value: any, key: string) => {
        setForm((_f) => {
            return {..._f, [key]: value}
        })
    };
    const handleRemove = (name) => setProperties((_properties: any) => {
        _properties = _properties.filter((_) => _ && _.name !== name);
        return _properties;
    });
    const submit = async () => {
        setLoadingOrderStatus('loading');
        let ipObj = null;
        // @ts-ignore
        if (!ipfsObject?.data) {
            ipObj = await uploadIPfs(NftUrl[0].file)
        }
        // @ts-ignore
        const ipfsImage = ipfsObject?.data ? (ipfsObject?.data?.image.pathname) : (ipObj?.data?.image.pathname);
        const param = {
            'filetype': "png",
            'attributes': [{key: "properties", value: JSON.stringify(properties)}, {
                key: 'name',
                value: form.name
            }, {key: 'description', value: form.description}],
            'location': {
                "IPFS": ipfsImage
            },
        }
        const result = await toast.promise(NFTMintApi.mint([param],), {
            pending: 'mint nft is pending',
            success: 'mint nft success 👌',
            error: {
                render: ({data}: any) => {
                    setLoadingOrderStatus('failed');
                    return (`${data.err | data} err 🤯`)
                }
            }
        });
        setLoadingOrderStatus('success');

    }
    const disabled = useMemo(() => {
        return !(form.description && form.name && NftUrl[0]);
    }, [form, NftUrl]);
    const handleUploadFile = useCallback(async (files) => {
        // if (files[0]){
        //
        // }
        console.log(await uploadIPfsBold(files[0].file), 'file')
    }, [])
    return (
        <Styled.Container>
            <Styled.LeftContent>
                <Box d='column' width='100%'>
                    <Styled.Title>
                        Upload file
                        <Styled.RequireSymbol/>
                    </Styled.Title>
                    <Styled.HelpText>
                        File types supported: JPG, PNG, GIF, SVG , jpeg. Max size: 100 MB
                    </Styled.HelpText>
                    <Gap height={10}/>
                    <UploadImg NftUrl={NftUrl} onChange={changeNftFile}/>
                </Box>
                <Gap height={24}/>
                <Box width='100%'>
                    <Uploadfile files={musicFile} onupdatefiles={handleUploadFile}/>
                </Box>
                <Box d='column' width='100%'>
                    <Styled.Title>
                        Name
                        <Styled.RequireSymbol/>
                    </Styled.Title>
                    <Input style={{width: "100%"}} onChange={(e: any) => handleInputChange(e.target.value, 'name')}
                           value={form.name}
                           placeholder='Item name'/>
                </Box>
                <Gap height={24}/>
                <Gap height={24}/>
                <Box d='column' width='100%'>
                    <Styled.Title>
                        Description
                        <Styled.RequireSymbol/>
                    </Styled.Title>
                    <Styled.HelpText>
                        The description will be included on the item's detail page underneath its image.
                    </Styled.HelpText>
                    <Gap height={10}/>
                    <TextareaAutosize value={form.description}
                                      style={{height: 100, borderRadius: 10, padding: 10}}
                                      onChange={(e: any) => handleInputChange(e.target.value, 'description')}
                                      placeholder='Provider a detailed description of your item'/>
                </Box>
                <Gap height={24}/>
                <Styled.AddContent>
                    <Styled.AddTitle>Advanced settings</Styled.AddTitle>
                    <Box width='100%' d='row' ai='center' jc='space-between'>
                        <Box d='column'>
                            <Styled.AddTitle>Properties</Styled.AddTitle>
                            <Styled.AddSubTitle>Textual traits that show up as rectangles</Styled.AddSubTitle>
                        </Box>
                        <Box width='auto'>
                            <MainButton onClick={() => setAddPropertiesVisible(true)}>Add</MainButton>
                        </Box>
                    </Box>
                    <Box width='100%'>
                        <Properties remove={handleRemove} propertiesList={properties} status='edit'/>
                    </Box>
                </Styled.AddContent>
                <Gap height={50}/>
                <Box width='100%' d='row' ai='center' jc='space-between'>
                    <BackButton onClick={() => history.goBack()}/>
                    <Styled.ButtonWrap>
                        <MainButton disabled={disabled} onClick={submit}>Create</MainButton>
                    </Styled.ButtonWrap>
                </Box>
            </Styled.LeftContent>
            <Gap width={50}/>
            <PreviewNft nftUrl={NftUrl[0] && NftUrl[0].dataURL}/>
            {loadingOrderStatus &&
                <LoadingModal handleRetry={submit} handleClose={handleLoadingModalClose} status={loadingOrderStatus}/>}
            {AddPropertiesVisible &&
                <AddProperties visible={AddPropertiesVisible} handleCreateProperties={handleCreateProperties}
                               onClose={() => setAddPropertiesVisible(false)}/>}
        </Styled.Container>
    )
})
