import Icon from 'react-native-vector-icons/Feather';
export default {
    birthDateYears: [
        {label: '2020', value: '2020', icon: () => {}},
        {label: '2019', value: '2019', icon: () => {}}
    ],
    birthDateMonths: [
        {label: '01', value: '01', icon: () => {}},
        {label: '02', value: '02', icon: () => {}}
    ],
    birthDateDates: [
        {label: '01', value: '01', icon: () => {}},
        {label: '02', value: '02', icon: () => {}}
    ],
    sexesOptions: [
        {label: '男性', value: '1', icon: () => <Icon name="user" size={18} color="#900" />},
        {label: '女性', value: '2', icon: () => <Icon name="user" size={18} color="#900" />}
    ],
    provinces: [
        {label: '北海道', value: '1', icon: () => {}},
        {label: '大分県', value: '2', icon: () => {}}
    ]
}