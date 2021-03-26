import React, { Component } from 'react';
//import type { Node } from 'react';
import { SafeAreaView, ScrollView, PanResponder, StatusBar, StyleSheet, Text, Animated, Dimensions, Button, Alert, View, } from 'react-native';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import {Router, Scene , Drawer} from 'react-native-router-flux';
import Deneme from './deneme';
// import Gecikmeli from './src/Gecikmeli';
import SameRep from './SameRep';
import Apidegis from './Apidegis';
import Tutcek from './Tutcek';

export default class Root extends Component {
    render() {
        return (
            <View>
                <Deneme />
                <SameRep />
                <Apidegis />
                <Tutcek />
                <LearnMoreLinks />
            </View>
        )
    }
}