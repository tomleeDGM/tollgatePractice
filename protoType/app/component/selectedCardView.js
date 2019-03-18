import React, {Component} from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';


// get custom code

const {width, height} = Dimensions.get('window');

export default class selectedCardView extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={[styles.cardViewContainer, this.props.containerStyle]}>
                <Image source={require('../images/prepaidCard/cardImg/colorCard/drawable-hdpi/card_icon.png')} style={this.props.cardStyle} />
                <Text style={this.props.textStyle}>톨게이트 선불카드</Text>
                <Text style={this.props.balanceStyle}>5,000</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cardViewContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});