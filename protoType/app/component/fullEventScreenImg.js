import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, Image} from 'react-native';

// get custom component
import { color,  } from '../styles/fontStylesScaled';

const {width, height} = Dimensions.get('window');

export default class fullEventScreenImg extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <Image
                source={require('../images/fullEventScreen/drawable-hdpi/photo_2019_03_13_13_16_16.png')} 
                style={this.props.style} 
                resizeMode='contain' />
        );
    }

} 