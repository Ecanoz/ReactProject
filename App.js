/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import {Component} from 'react';
 import * as React from 'react';
 import type {Node} from 'react';
 import {SafeAreaView, ScrollView, PanResponder, StatusBar, StyleSheet, Text, Animated, useColorScheme, Button, Alert, View,} from 'react-native';
 import {Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
 import Deneme from './src/deneme';
 // import Gecikmeli from './src/Gecikmeli';
 // import SameRep from './src/SameRep';
 // import Apidegis from './src/Apidegis';
 // import Tutcek from './src/Tutcek';
 import Routes from './src/Routes';
 
 
 
 
 const Section = ({children, title}): Node => {
   const isDarkMode = useColorScheme() === 'dark';
   return (
     <View style={styles.sectionContainer}>
       <Deneme />
     </View>
   );
 };
 
 class Hebele extends Component {
   constructor(props) {
     super(props);
   }
 
   componentDidMount() {
     setTimeout(() => {
       // Alert.alert('I am appearing...', 'After 1 seconds!');
       <View>
         <Text>
           Hübbbüleğğ
         </Text>
       </View>
     }, 1000);
   }
 
   render() {
     return (
       <View style={{justifyContent: 'center', alignItems: 'center'}}>
         {/* <Text style={{color: 'black'}}>Alert will appear after 1 seconds</Text> */}
         <Button title="1 Saniye bekle" onPress={this.componentDidMount} />
       </View>
     );
   }
 }
 
 
 // class MainActivity extends Component {
 
 //    ShowAlertWithDelay = () => {
 
 //       setTimeout(function () {
 //          //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
 //         componentDidMount()
 //         //<Text>Hebele</Text>
         
 //       }, 1000);
 //    }
 //    render() {
 //       return (
 //          <View style={styles.MainContainer}>
 //             <Button title="1 Saniye bekle" onPress={this.ShowAlertWithDelay} />
 //          </View>
 //       );
 //    }
 // }
 
 
 const App: () => Node = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   return (
     <SafeAreaView style={backgroundStyle}>
       {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
       <ScrollView>
         <Header />
         {/* <SideMenu/> */}
         <View>
           <Routes/>
         </View>
       </ScrollView>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default App;