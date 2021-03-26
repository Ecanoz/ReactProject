import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';

class MainActivity extends Component {

   ShowAlertWithDelay = () => {

      setTimeout(function () {
         //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
         componentDidMount()
      }, 1000);
   }
   render() {
      return (
         <View>
            <Button title="1 Saniye bekle" onPress={this.ShowAlertWithDelay} />
         </View>
      );
   }
}

class HttpExample extends Component {
  state = {
     data: '',
     a: ""
  }
  componentDidMount = () => {
     fetch('http://admin.voltran.tk/react', {
        method: 'POST'
     })
     .then((response) => response.json())
     .then((responseJson) => {
        console.log(responseJson);
        this.setState({
           a: responseJson.cevap
        })
     })
     .catch((error) => {
        console.error(error);
     });
  }
  render() {
     return (
        <View>
           <Text>
              {this.state.a}
           </Text>
        </View>
     )
  }
}

export default MainActivity