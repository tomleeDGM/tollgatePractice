import React from 'react';
import {View, Text, TouchableOpacity, Dimensions, Image} from 'react-native';
import {ft, sz, gb } from '../styles/fontStylesScaled';

const {width, height} = Dimensions.get('window');

export default class Button extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            imgUrl: this.props.imgSource,
            
        }
    }
// text속성 또는 imgSource속성의 유무에 따라서 사용되는 컴포넌트가 달라지게...
    textArea(){
        return (
        <Text style={this.props.textButtonStyle}>{this.props.text}</Text>
        )
    }
// 현재 이미지 컴포넌트가 생성되지 않는다.
    imgArea(){
        return(
            <Image source={this.state.imgSource} />
        )
    }


    render() {

        return(
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={this.props.buttonStyle} >
                   {this.props.imgSource? this.imgArea() : this.textArea()}
                    {/* <Text>{this.state.imgUrl}</Text> */}
                    {/* <Image source={this.props.imgSource} /> */}
                </View>
            </TouchableOpacity>
        );
    }
}
