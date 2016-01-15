/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
/*'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
 
} = React;

var AwesomeProject = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>Hello, World</Text>
       /* <Image source:{{uri: 'bg_home.jpg'}}/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flexDirection:'row',
   borderColor:'#DDD8CE',
    height:'110',
    backgroundColor: '#F5FCFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
 <Image style={{height:25,width:25, alignSelf: 'center'}} source={{uri: 'http://p1.meituan.net/mmc/08615b8ae15d03c44cc5eb9bda381cb212714.png'}}></Image>
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);*/
/*<View style={[height:160, flexDirection='row',]}>
                <View style={[height:160, flex:1,borderWidth:1,borderColor:'red',]}>
                <Text style={[fontSize:10.marginTop:10, marginLeft:10, styles.green, color:'#55A44B',fontWeight: '900',]}>我们约吧</Text>*/
                /* <Image style={[height:80]} source={{uri: 'http://p0.meituan.net/mmc/fe4d2e89827aa829e12e2557ded363a112289.png'}}></Image>*/
                 /* <Text style={[textAlign: 'center',color: '#333333',marginBottom: 5]}>我们约吧</Text>*/
                 /* <View style={styles.container}>
       
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>*/
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} = React;

var AwesomeProject = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
      <View style={styles.firstContain}>
        <Image style={styles.actionIcon} source={{uri: 'http://p0.meituan.net/mmc/a06d0c5c0a972e784345b2d648b034ec9710.jpg'}}/>
         <Text style={styles.firstWord}>我的商品</Text>
            </View>
              <View style={styles.firstContain}>
              <Image style={styles.actionIcon} source={{uri: 'http://p0.meituan.net/mmc/a06d0c5c0a972e784345b2d648b034ec9710.jpg'}}/>
         <Text style={styles.firstWord}>我的评价</Text>
         </View>
         <View style={styles.firstContain}>
         <Image style={styles.actionIcon} source={{uri: 'https://github.com/reallin/github.picture.io/blob/master/icon_canmou%402x.png'}}/>
         <Text style={styles.firstWord}>生意参谋</Text>
            </View>
     </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flexDirection:'row',height:160,
  },
  firstContain:{
   height:160, flex:1,borderWidth:1,borderColor:'red'
  },
  secondContain:{
   height:160, flex:2,borderWidth:1,borderColor:'red'
  },
  firstWord:{
    fontSize:10,
    marginTop:10,
    textAlign:'center',
     color:'#55A44B',
     fontWeight: '900',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
   actionIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  actionItem: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);