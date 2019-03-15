'use strict'
import {
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
const {width, height} = Dimensions.get('window');

const color = {
  disableButton : 'rgb(214,214,214)',
  dodgerBlue: '#DB093B',
  black: '#030303',
  lightBlack: '#424242',
  brownGrey: '#979797',
  veryLightPink: 'rgba(216,216,216,0.52)',

  dark: '#030303',

  white: '#ffffff',
  red: '#ee313a',
  blue: '#0e79ff',
  lightGray: '#eeeeee',
  gray: '#838383',
  cyon: '#8e9ba4',
  darkCyon: '#024457',
  dimm: 'rgba(48,49,50,0.7)',
  yellow: '#ffe200',

};


var typo = StyleSheet.create({
  subTitle: {
    fontFamily: 'sans-serif',
    color: color.black,
    fontSize: width/20,
    fontWeight: '700',
  },
  subTitleText: {
    fontFamily: 'sans-serif',
    color: color.gray,
    fontSize: width/26,
  },
});


var ft = StyleSheet.create({
  ico: {
    width: 24,
    height: 24,
  },

  dodgerBlue: {
    fontFamily: 'sans-serif',
    color: color.dodgerBlue,
  },
  brownGrey: {
    fontFamily: 'sans-serif',
    color: color.brownGrey,
  },
  veryLightPink: {
    fontFamily: 'sans-serif',
    color: color.veryLightPink,
  },
  black: {
    fontFamily: 'sans-serif',
    color: color.black,
  },
  lightBlack: {
    fontFamily: 'sans-serif',
    color: color.lightBlack,
  },
  none: {
    fontFamily: 'sans-serif',
  },
  red: {
    fontFamily: 'sans-serif',
    color: color.red,
  },
  blue: {
    fontFamily: 'sans-serif',
    color: color.blue,
  },
  lightGray: {
    fontFamily: 'sans-serif',
    color: color.lightGray,
  },
  gray: {
    fontFamily: 'sans-serif',
    color: color.gray,
  },
  white: {
    fontFamily: 'sans-serif',
    color: color.white,
  },
  cabl: {
    fontFamily: 'sans-serif',
    color: color.cabl, // 2A1A19
  },
  lightCafe: {
    fontFamily: 'sans-serif',
    color: color.lightCafe,
  },
  cyon: {
    fontFamily: 'sans-serif',
    color: color.cyon,
  },
  darkCyon: {
    fontFamily: 'sans-serif',
    color: color.darkCyon,
  },
  naverGreen: {
    fontFamily: 'sans-serif',
    color: color.naverGreen,
  },
  yellow: {
    fontFamily: 'sans-serif',
    color: color.yellow,
  },
});

var sz = StyleSheet.create({
  /* 1.5로 나눈 이유는 저해상도 단말에서 글자의 크기를 줄이기 위함 */
  ato: {
    fontSize: width / 62 / 1.5,
  },
  femto: {
    fontSize: width / 56 / 1.5,
  },
  pico: {
    fontSize: width / 50 / 1.5,
  },
  nano: {
    fontSize: width / 44 / 1.5,
  },
  tiny: {
    fontSize: width / 38 / 1.5,
  },
  small: {
    fontSize: width / 32 / 1.5,
  },
  normal: {
    fontSize: width / 27 / 1.5,
  },
  context: {
    fontSize: width / 24 / 1.5,
  },
  more: {
    fontSize: width / 20 / 1.5,
  },
  big: {
    fontSize: width / 18 / 1.5,
  },
  bigger: {
    fontSize: width / 15 / 1.5,
  },
  biggger: {
    fontSize: width / 12 / 1.5,
  },
  huge: {
    fontSize: width / 9 / 1.5
  },
  giant: {
    fontSize: width / 6 / 1.5
  },
  titan: {
    fontSize: width / 3 / 1.5,
  },

  btnTiny: {
    fontSize: width / 26,
  },

  btnSmall: {
    fontSize: width / 24,
  },
  btnNormal: {
    fontSize: width / 22,
  },
  btnBig: {
    fontSize: width / 20,
  },

  lineHeightSmall: {
    lineHeight: width / 40,
  },
  lineHeightNormal: {
    lineHeight: width / 20,
  },
  lineHeightBig: {
    lineHeight: width / 14,
  },
});

var box = StyleSheet.create({
  mainBox: {
    width: width * 0.45,
    height: height * 0.27,
    paddingTop: 14,
    paddingLeft: 14,
    paddingRight: 14,
    paddingBottom: 14,
  },
  x0y1: {
    width: width,
    height: height * 0.1,
  },
  x0y2: {
    width: width,
    height: height * 0.2,
  },
  x0y3: {
    width: width,
    height: height * 0.3,
  },
  x0y4: {
    width: width,
    height: height * 0.4,
  },
  x0y5: {
    width: width,
    height: height * 0.5,
  },
  x1y1: {
    width: width*0.1,
    height: height * 0.1,
  },
  x1y2: {
    width: width*0.1,
    height: height * 0.2,
  },
  x1y3: {
    width: width*0.1,
    height: height * 0.3,
  },
  x1y4: {
    width: width*0.1,
    height: height * 0.4,
  },
  x1y5: {
    width: width*0.1,
    height: height * 0.5,
  },
  x2y1: {
    width: width*0.2,
    height: height * 0.1,
  },
  x2y2: {
    width: width*0.2,
    height: height * 0.2,
  },
  x2y3: {
    width: width*0.2,
    height: height * 0.3,
  },
  x2y4: {
    width: width*0.2,
    height: height * 0.4,
  },
  x2y5: {
    width: width*0.2,
    height: height * 0.5,
  },
  x3y1: {
    width: width*0.3,
    height: height * 0.1,
  },
  x3y2: {
    width: width*0.3,
    height: height * 0.2,
  },
  x3y3: {
    width: width*0.3,
    height: height * 0.3,
  },
  x3y4: {
    width: width*0.3,
    height: height * 0.4,
  },
  x3y5: {
    width: width*0.3,
    height: height * 0.5,
  },
  x4y1: {
    width: width*0.4,
    height: height * 0.1,
  },
  x4y2: {
    width: width*0.4,
    height: height * 0.2,
  },
  x4y3: {
    width: width*0.4,
    height: height * 0.3,
  },
  x4y4: {
    width: width*0.4,
    height: height * 0.4,
  },
  x4y5: {
    width: width*0.4,
    height: height * 0.5,
  },
  x5y1: {
    width: width * 0.5,
    height: height * 0.1,
  },
  x5y2: {
    width: width * 0.5,
    height: height * 0.2,
  },
  x5y3: {
    width: width * 0.5,
    height: height * 0.3,
  },
  x5y4: {
    width: width * 0.5,
    height: height * 0.35,
  },
  x5y5: {
    width: width * 0.5,
    height: height * 0.5,
  },
});

var bg = StyleSheet.create({

  dodgerBlue: {
    backgroundColor: color.dodgerBlue,
  },
  brownGrey: {
    backgroundColor: color.brownGrey,
  },
  veryLightPink: {
    backgroundColor: color.veryLightPink,
  },
  black: {
    backgroundColor: color.black,
  },
  red: {
    backgroundColor: color.red,
  },
  blue: {
    backgroundColor: color.blue,
  },
  gray: {
    backgroundColor: color.gray,
  },
  white: {
    backgroundColor: color.white,
  },
  lightGray: {
    backgroundColor: color.lightGray,
  },
  cabl: {
    backgroundColor: color.cabl,
  },
  lightCafe: {
    backgroundColor: color.lightCafe,
  },
  dimm: {
    backgroundColor: 'rgba(48,49,50,0.7)',
  },
  cyon: {
    backgroundColor: color.cyon,
  },
  darkCyon: {
    backgroundColor: color.darkCyon,
  }
});

var bt = StyleSheet.create({
  btnNormal: {
      backgroundColor: color.dodgerBlue,
      width: width,
      height: 60,
  }
});

export { color, ft, sz, box, bg,typo, bt  };
