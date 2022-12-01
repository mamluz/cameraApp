import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import MyButton from './MyButton';

class Main extends Component {
    static navigationOptions = {
        header: null,
        title: "REGISTER",
        headerStyle: {
            backgroundColor: "#000000",
        },
        headerTitleStyle: {
            color: "#ffffff"
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            login: null,
            passwd: null,
        };
        console.log("Main")
        this.pressbut = this.pressbut.bind(this);
    }
    pressbut = () => {
        this.props.navigation.navigate("s2")
    }

    render() {
        return (
            <View style={{ flexDirection: "column", flex: 1, }}>
                <View style={{ flex: 2, flexDirection: "column", alignSelf: "center"}}>
                    <Text style={styles.text}>CameraApp</Text>
                </View>
                <MyButton textprop="start!" bgcolorprop="orange" foncik="30" pressprop={this.pressbut}></MyButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {fontSize: 40, flex: 2, padding: 60,}
});

export default Main;