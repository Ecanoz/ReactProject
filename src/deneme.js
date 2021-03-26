import React, {Component} from 'react';
import { Text, View } from 'react-native';

var a = ""
const styles = ({
  deneme:
  {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'red'
  }
})
// export default HelloWorldApp;

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

export default HttpExample