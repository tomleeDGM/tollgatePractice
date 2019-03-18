import React, {Component} from 'react';
import {View, Dimensions, Text, StyleSheet} from 'react-native';
import Barcode from 'react-native-barcode-builder';

// get custom code

const {width, height} = Dimensions.get('window');

export default class barCode extends Component{
    constructor(props){
        super(props);

        this.state={
            barCode: '4042887197626386',
        }
    }

    // 4자리씩 끊어서 - 추가해주는 기능
    splitString = () => {
        const codeLength = this.state.barCode.length;
        const makeCode = [];
        let code='';

        for(let i = 0; i < (codeLength/4); i++){
            makeCode[i] = '-' + this.state.barCode.substring(i*4, i*4+4);
        }

        for(let makeDoneCode of makeCode){
            code += makeDoneCode;
        }
        return code = code.substring(1);
    }

    render(){
        return(
            <View>
                <Barcode value={this.state.barCode} format="CODE128" />
                <Text style={{textAlign: 'center'}}>{this.splitString()}</Text>
            </View>
           
        );
    }
}