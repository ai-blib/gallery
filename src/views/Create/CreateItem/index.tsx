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
import Icon from '@/icons/Icon'
import {Box} from '@/styles'
import React, {useCallback, useEffect, useMemo, useState} from "react";
import {Principal} from "@dfinity/principal";
import {useHistory, useParams} from 'react-router-dom';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import {AddProperties, State, MusicCard} from '../Components';
import './overwrite.less'
import {toast} from "react-toastify";
import {Properties} from "@/views/Detail/components";
import {Type} from '@/apis/NFTMint';
import {AwsUpload} from '@/utils/formate'

interface FormProps {
    name: string,
    description: string;
    twitter: string;
    discord: string
}


export default () => {
    const history = useHistory();
    // create type
    const {type}: { type: Type } = useParams();
    const [NftUrl, setNftUrl] = useState<Array<any>>([]);
    const [imageUrl, setimageUrl] = useState<string>('')
    const [form, setForm] = useState<FormProps>({name: "", description: "", twitter: "", discord: ''});
    const [loadingOrderStatus, setLoadingOrderStatus] = useState<statusType | boolean>(false);
    const [AddPropertiesVisible, setAddPropertiesVisible] = useState<boolean>(false);
    const [properties, setProperties] = useState<Array<any>>([])
    const [musicFile, setMusicFile] = useState<any>([]);
    // about music data
    const [musicData, setMusicData] = useState<Object | any>({})
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
        const file = value[0]?.file;
        if (!file) {
            return
        }
        setLoadingOrderStatus('loading');

        setMusicData((_o) => {
            return {..._o, cover: value[0]?.dataURL}
        })
        const ulr = await AwsUpload(value[0]);
        //upload ipfs backup
        await uploadIPfs(file);
        setimageUrl(ulr);
        setLoadingOrderStatus(false);

    }, []);
    //close modal
    const handleLoadingModalClose = useCallback(() => {
        if (loadingOrderStatus === 'success') {
            history.push('/profile');
        }
        setLoadingOrderStatus(false)
    }, [loadingOrderStatus])
    //input change
    const handleInputChange = (value: any, key: string) => {
        setForm((_f) => {
            return {..._f, [key]: value}
        })
    };
    //remove Property
    const handleRemove = (name) => setProperties((_properties: any) => {
        _properties = _properties.filter((_) => _ && _.name !== name);
        return _properties;
    });
    const submit = async () => {
        setLoadingOrderStatus('loading');
        // @ts-ignore
        let attributes = Object.keys(form).map((key) => ({key, value: form[key]}));
        attributes.push({key: "properties", value: JSON.stringify(properties)});
        // music add nft url
        if (type === 'music') {
            attributes.push({key: 'musicNftUrl', value: musicData.musicUrl})
        }
        const param = {
            'filetype': "png",
            attributes,
            'location': {
                "IPFS": imageUrl
            },
        }
        const result = await toast.promise(NFTMintApi.mint([param], type), {
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
        if (type === 'music') {
            return !(form.description && form.name && NftUrl[0] && musicData.musicUrl);
        }
        return !(form.description && form.name && NftUrl[0]);
    }, [form, NftUrl]);
    //upload music and get  ipfs url
    const handleUploadFile = useCallback(async (files) => {
        if (!files.length) {
            setMusicData((_o) => {
                return {..._o, musicUrl: ''}
            })
            return
        }
        setLoadingOrderStatus('loading');
        const ulr = await AwsUpload(files[0]);
        await uploadIPfsBold(files[0].file);
        setLoadingOrderStatus(false);
        setMusicData((_o) => {
            return {..._o, musicUrl: ulr}
        })
    }, []);

    //cover desc
    const coverTitle = useMemo(() => {
        if (type === 'music') {
            return 'Upload Music Cover File'
        } else if (type === 'art') {
            return 'Upload file'
        }
    }, [type]);
    // upload music title
    const musicUploadTitle = useMemo(() => {
        if (type === 'music') {
            return 'Upload Music  File'
        }
    }, [type])
    return (
        <Styled.Wrap>
            <Styled.Header>
                {/*<BackButton onClick={goBack}/>*/}
                <Styled.HeaderTitle>
                    Create new item.
                </Styled.HeaderTitle>
            </Styled.Header>
            <Styled.Container>
                <Styled.LeftContent>
                    <Box d='column' width='100%'>
                        <Styled.Title>
                            {coverTitle}
                            <Styled.RequireSymbol/>
                        </Styled.Title>
                        <Styled.HelpText>
                            File types supported: JPG, PNG, GIF, SVG , jpeg. Max size: 100 MB
                        </Styled.HelpText>
                        <Gap height={10}/>
                        <UploadImg NftUrl={NftUrl} onChange={changeNftFile}/>
                    </Box>
                    <Gap height={24}/>
                    {type === 'music' && <Box width='100%' d='column'>
                        <Styled.Title>
                            Upload Music File
                            <Styled.RequireSymbol/>
                        </Styled.Title>
                        <Styled.HelpText>
                            File types supported: MP3
                        </Styled.HelpText>
                        <Gap height={10}/>
                        <Uploadfile files={musicFile} onupdatefiles={handleUploadFile}/>
                    </Box>}
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
                    <Box d='column' width='100%'>
                        <Styled.Title>
                            Discord
                        </Styled.Title>
                        <Input style={{width: "100%"}}
                               onChange={(e: any) => handleInputChange(e.target.value, 'discord')}
                               value={form.discord}
                               placeholder='Your discord'/>
                    </Box>
                    <Gap height={24}/>
                    <Box d='column' width='100%'>
                        <Styled.Title>
                            Twitter
                        </Styled.Title>
                        <Input style={{width: "100%"}}
                               onChange={(e: any) => handleInputChange(e.target.value, 'twitter')}
                               value={form.twitter}
                               placeholder='Your Twitter'/>
                    </Box>
                    <Gap height={24}/>
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
                <Box d='column'>
                    <Styled.HeaderTitle>
                        Preview effect.
                    </Styled.HeaderTitle>
                    {type === 'art' && <PreviewNft nftUrl={NftUrl[0] && NftUrl[0].dataURL}/>}
                    {type === 'music' && <MusicCard data={musicData}/>}
                </Box>
                {loadingOrderStatus &&
                    <LoadingModal handleRetry={submit} handleClose={handleLoadingModalClose}
                                  status={loadingOrderStatus}/>}
                {AddPropertiesVisible &&
                    <AddProperties visible={AddPropertiesVisible} handleCreateProperties={handleCreateProperties}
                                   onClose={() => setAddPropertiesVisible(false)}/>}
            </Styled.Container>
        </Styled.Wrap>
    )
}
