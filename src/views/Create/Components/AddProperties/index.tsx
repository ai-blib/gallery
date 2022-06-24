import {Modal, MainButton} from '@/components';
import {AddPropertiesStyles as Styles} from './styles';
import React, {memo, useCallback, useMemo, useState} from 'react'

export interface State {
    name: number|string;
    desc: string
}
interface Props {
    visible: boolean;
    onClose: () => void;
    handleCreateProperties:(values:State)=>void;
}


export const AddProperties =memo(({visible, onClose,handleCreateProperties}: Props) => {
    const [values, setValues] = useState<State>({
        name: "",
        desc: ''
    });

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [prop]: event.target.value});
    };

    return (
        <Modal visible={visible} header='AddProperties' onClose={onClose}
               buttonComponent={
                   <Styles.ButtonWrap>
                       <Styles.ButtonContainer>
                           <MainButton
                                    borderRadius={20}
                                    onClick={()=>handleCreateProperties(values)}
                           >
                               Create
                           </MainButton>
                       </Styles.ButtonContainer>
                   </Styles.ButtonWrap>}
        >
            <Styles.Wrap>
                <Styles.InputWrap>
                    <Styles.ValidationTextField
                        label="name"
                        required
                        variant="outlined"
                        value={values.name}
                        onChange={handleChange('name')}
                        id="validation-outlined-input"
                    />
                </Styles.InputWrap>
                <Styles.InputWrap>
                    <Styles.ValidationTextField
                        label="desc"
                        required
                        variant="outlined"
                        value={values.desc}
                        onChange={handleChange('desc')}
                        id="validation-outlined-input"
                    />
                </Styles.InputWrap>
            </Styles.Wrap>
        </Modal>
    )
})
