import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import colors from '../colors'

function DropdownComponent(props) {
    const {optionsInput, defaultSelectKeyInput, customStyles, selectChangedFun } = props;
    return (
        <DropDownPicker
            items={optionsInput}
            containerStyle={{height: 40}} 
            style={customStyles}
            itemStyle={{
                width: '100%',
                justifyContent: 'flex-start'
            }}
            dropDownStyle={{height: 'auto', zIndex: 10, backgroundColor: colors.whiteColor}}
            defaultValue={defaultSelectKeyInput}
            onChangeItem={item => selectChangedFun(item.value)}
            placeholder="--"
        />
    );
}

export default DropdownComponent;