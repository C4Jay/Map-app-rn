import React from 'react'

import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

const CustomHeaderbutton = props => {
    return <HeaderButton {...props} IconComponent={Ionicons} iconSize={20} color="yellow"></HeaderButton>
}

export default CustomHeaderbutton;