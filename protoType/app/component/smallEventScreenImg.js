import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, Image, Text} from 'react-native';

// get custom component
import { color,  } from '../styles/fontStylesScaled';

const {width, height} = Dimensions.get('window');

export default class smallEventScreenImg extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <Image
                source={require('../images/smallEventScreen/drawable-hdpi/scad.png')}
                style={this.props.style} 
                resizeMode='contain' />

        );
    }

} 