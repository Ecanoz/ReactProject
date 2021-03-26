import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native'

export default class Mynewproject extends Component {
  constructor(){
    super();
    this.state = {
      TextHolder : "Bu değişecek" 
    }
  }

  ReplaceTextFunction=()=>{
  var SampleText = this.state.TextHolder.toString();
  var NewText = SampleText.replace("Bu değişecek", "Ama değişmeyebilir de.. Hop bir anda değişti");
    //var degisim= replace(this.)
  this.setState({ TextHolder : NewText}); 
  }
render() {
  return (
    <View style={styles.MainContainer}>   
      <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 20}}> { this.state.TextHolder } </Text>
      <Button title="Tıkla değişsin" onPress={ this.ReplaceTextFunction } />
    </View>         
   );
 }
}

const styles = StyleSheet.create({
 MainContainer :{
   justifyContent: 'center',
   flex:1,
   margin: 10
 }
});



