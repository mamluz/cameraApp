import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import MyButton from './MyButton';
import { Location, Permissions } from 'expo';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ["test"]
        };
        this.clickdel = this.clickdel.bind(this);
        this.clicksave = this.clicksave.bind(this);
        this.clickmap = this.clickmap.bind(this);
    }

    setPermissions = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            alert('odmawiam przydzielenia uprawnień do czytania lokalizacji')
        }
    }

    componentDidMount() {
        this.setPermissions()
    }

    clicksave = () => {
        alert("saved")
        setData = async () => {
            await AsyncStorage.setItem('key' + Math.round(Math.random() * 100), 'value' + Math.random());
        }
    }

    clickdel = () => {
        alert("deleted")
    }

    clickmap = () => {
        getPosition = async () => {
            let pos = await Location.getCurrentPositionAsync({})
            alert(JSON.stringify(pos, null, 4))
        }
        this.props.navigation.navigate("s3")


    }

    render() {
        return (
            <View style={{ flex: 4, flexDirection: "column", backgroundColor: "#FFFFFF" }}>
                <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#FFFFFF" }}>
                    <MyButton style={{ flex: 1, }} textprop="Grid / List" bgcolorprop="orange" foncik="20" pressprop={this.clicksave}></MyButton>
                    <MyButton style={{ flex: 1, }} textprop="Open Camera" bgcolorprop="orange" foncik="20" pressprop={this.clickdel}></MyButton>
                    <MyButton style={{ flex: 1, }} textprop="Remove selected files" bgcolorprop="orange" foncik="20" pressprop={this.clickmap}></MyButton>
                </View>
                <View style={{ flex: 6, flexDirection: "column", backgroundColor: "#FFFFFF" }}>
                    <View style={{ flex: 8, flexDirection: "row", backgroundColor: "#FFFFFF" }}>
                        <Text>TUTAJ BEDZIE LISTA</Text>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: { fontSize: 48, }
});

export default Users;