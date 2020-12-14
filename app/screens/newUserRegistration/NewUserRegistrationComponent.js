import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import DropdownComponent from '../../shared/components/DropdownComponent';
import styles from './NewUserRegistrationStyles';
import data from './NewUserRegistrationData'
import colors from '../../shared/colors';

function NewUserRegistrationComponent({ navigation }) {

    const [gender, setGender] = useState('2');
    const [birthDate, setBirthDate] = useState('2020');
    const [birthDateMonth, setBirthDateMonth] = useState(null);
    const [birthDateDate, setBirthDateDate] = useState(null);
    const [prefectureId, setPrefectureId] = useState('2');

    const sexesOptions = [
        {label: '男性', value: '1', icon: () => <Icon name="user" size={18} color={colors.activeColor} />},
        {label: '女性', value: '2', icon: () => <Icon name="user" size={18} color={colors.activeColor} />}
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.viewContainer}>
                    <View style={styles.textContainer}>
                        <View style={styles.textLabel}>
                            <Text>連絡先携帯番号</Text>
                            <Text style={styles.labelRequired}>必須</Text>
                        </View>
                        <TextInput style={styles.textInput}></TextInput>
                        <Text style={styles.textDescription}>※有効な携帯番号を入力してください。SMSに認証コードを送信します。</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <View style={styles.textLabel}>
                            <Text>ログインID (半角英数字)</Text>
                            <Text style={styles.labelRequired}>必須</Text>
                        </View>
                        <TextInput style={styles.textInput}></TextInput>
                    </View>
                    <View style={styles.textContainer}>
                        <View style={styles.textLabel}>
                            <Text>パスワード (半角英数記号)</Text>
                            <Text style={styles.labelRequired}>必須</Text>
                        </View>
                        <TextInput style={styles.textInput}></TextInput>
                    </View>
                    <View style={styles.textContainer}>
                        <View style={styles.textLabel}>
                            <Text>確認用パスワード (半角英数記号)</Text>
                            <Text style={styles.labelRequired}>必須</Text>
                        </View>
                        <TextInput style={styles.textInput}></TextInput>
                    </View>
                    <View style={styles.textContainer}>
                        <View style={styles.textLabel}>
                            <Text>氏名 (全角)</Text>
                            <Text style={styles.labelRequired}>必須</Text>
                        </View>
                        <View style={styles.textLabel}>
                            <Text style={styles.horizontalLabel}>姓</Text>
                            <TextInput style={styles.textInput}></TextInput>
                        </View>
                        <View style={styles.textLabel}>
                            <Text style={styles.horizontalLabel}>名</Text>
                            <TextInput style={styles.textInput}></TextInput>
                        </View>
                    </View>
                    <View style={styles.textContainer}>
                        <View style={styles.textLabel}>
                            <Text>フリガナ (全角)</Text>
                            <Text style={styles.labelRequired}>必須</Text>
                        </View>
                        <View style={styles.textLabel}>
                            <Text style={styles.horizontalLabel}>セイ</Text>
                            <TextInput style={styles.textInput}></TextInput>
                        </View>
                        <View style={styles.textLabel}>
                            <Text style={styles.horizontalLabel}>メイ</Text>
                            <TextInput style={styles.textInput}></TextInput>
                        </View>
                    </View>
                    <View style={styles.dropdownContainer}>
                        <Text style={styles.horizontalLabel}>性別</Text>
                        <View style={styles.dropdown}>
                            <DropdownComponent
                                optionsInput={sexesOptions}
                                defaultSelectKeyInput={gender}
                                selectChangedFun={val => setGender(val)}
                                customStyles={styles.dropdownCustom}
                            >
                            </DropdownComponent>
                        </View>
                    </View>
                    <View style={styles.dropdownContainer}>
                       
                        <View style={styles.customBirthDate}>
                            <DropdownComponent
                                optionsInput={data.birthDateYears}
                                defaultSelectKeyInput={birthDate}
                                selectChangedFun={val => setBirthDate(val)}
                                customStyles={styles.dropdownCustom}
                            >
                            </DropdownComponent>
                        </View>
                        <Text style={{lineHeight: 40}}>年</Text>
                     
                        <View style={styles.customBirthDate}>
                            <DropdownComponent
                                optionsInput={data.birthDateMonths}
                                defaultSelectKeyInput={birthDateMonth}
                                selectChangedFun={val => setBirthDateMonth(val)}
                                customStyles={styles.dropdownCustom}
                            >
                            </DropdownComponent>
                        </View>
                        <Text style={{lineHeight: 40}}>月</Text>
                        <View style={styles.customBirthDate}>
                            <DropdownComponent
                                optionsInput={data.birthDateDates}
                                defaultSelectKeyInput={birthDateDate}
                                selectChangedFun={val => setBirthDateDate(val)}
                                customStyles={styles.dropdownCustom}
                            >
                            </DropdownComponent>
                           
                        </View>
                         <Text style={{lineHeight: 40}}>日</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <View style={styles.textLabel}>
                            <Text>メールアドレス (半角英数記号)</Text>
                            <Text style={styles.labelRequired}>必須</Text>
                        </View>
                        <TextInput style={styles.textInput}></TextInput>
                    </View>
                    <View style={styles.textContainer}>
                        <View style={styles.textLabel}>
                            <Text>確認用メールアドレス (半角英数記号)</Text>
                            <Text style={styles.labelRequired}>必須</Text>
                        </View>
                        <TextInput style={styles.textInput}></TextInput>
                    </View>
                    <View style={styles.textContainer}>
                        <View style={styles.textLabel}>
                            <Text>郵便番号 (半角数字)</Text>
                            <Text style={styles.labelRequired}>必須</Text>
                        </View>
                        <View style={styles.customTextInput}>
                            <TextInput style={styles.textInput}></TextInput>
                            <Text style={{width: 50, textAlign: "center", lineHeight: 40}}>-</Text>
                            <TextInput style={styles.textInput}></TextInput>
                        </View>
                    </View>
                    <View style={styles.dropdownContainer}>
                        <Text style={styles.horizontalLabel}>性別</Text>
                        <View style={styles.dropdown}>
                            <DropdownComponent
                                optionsInput={data.provinces}
                                defaultSelectKeyInput={prefectureId}
                                selectChangedFun={val => setPrefectureId(val)}
                                customStyles={styles.dropdownCustom}
                            >
                            </DropdownComponent>
                        </View>
                    </View>
                    <View style={styles.textContainer}>
                        <View style={styles.textLabel}>
                            <Text>町名 (全角)</Text>
                            <Text style={styles.labelOptional}>任意</Text>
                        </View>
                        <TextInput style={styles.textInput}></TextInput>
                    </View>
                    <View style={styles.textContainer}>
                        <View style={styles.textLabel}>
                            <Text>番地・マンション名等</Text>
                            <Text style={styles.labelOptional}>任意</Text>
                        </View>
                        <TextInput style={styles.textInput}></TextInput>
                    </View>
                    <View style={styles.textContainer}>
                        <View style={styles.textLabel}>
                           
                        </View>
                        <TextInput style={styles.textInput}></TextInput>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default NewUserRegistrationComponent;