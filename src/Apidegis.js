import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput, SafeAreaView } from 'react-native'

class Mynewproject extends Component {
    constructor() {
        super();
        this.state = {
            data: '',
            a: ""
        }
    }

    ReplaceFunction = () => {
        var SampleText = this.state.TextHolder.toString();
        var NewText = SampleText.replace("Bu değişecek", "Ama değişmeyebilir de.. Hop bir anda değişti");
        //var degisim= replace(this.)
        this.setState({ TextHolder: NewText });
    }
    render() {
        return (
            <View style={styles.MainContainer}>
                <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 20 }}> {this.state.TextHolder} </Text>
                <Button title="Tıkla değişsin" onPress={this.ReplaceFunction} />
            </View>

        );
    }
}
const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        margin: 10
    },
    deneme:
    {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'red'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        backgroundColor: '#A5E8FF'

    },
});



var a = ""
var gelenyazi;

// export default HelloWorldApp;

export default class HttpExample extends Component {
    state = {
        data: '',
        a: ""
    }

    ReplaceFunction = (x, y) => {
        var degisecek = y;
        x = degisecek;
        this.state.a.toString().replace(this.state.a, x)
        this.setState({ a: x });
        // var degisim= replace(this.)
        // this.setState({ degisecek: degisme });
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

    Benimsin = () => {
        fetch('http://admin.voltran.tk/react', {
            method: 'POST'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    data: responseJson.cevap
                })
            })
            .catch((error) => {
                console.error(error);
            });
        
    }




    render() {
        return (
            <View>
                <SafeAreaView>
                    <TextInput
                        style={styles.input}
                        // onChangeText={onChangeText}
                        onChangeText={(text) => this.standart = text}
                        placeholder="Yerine ne yazılsınsss"
                    // value={gelenyazi}
                    />
                </SafeAreaView>

                <Text>
                    {this.state.a}
                </Text>
                <Button title="Tıklar gibi gibi" onPress={() => this.ReplaceFunction(this.state.a, this.standart)} />
                
                <SafeAreaView style={{ flex: 1 }}>
                    <View>
                        <Text>Button Example : {this.state.data} </Text>
                        <Button
                            onPress={() => this.Benimsin()}
                            title="ZINK!"
                            color="#841584"
                        />
                    </View>
                </SafeAreaView>

            </View>
        )
    }
}


