import React, { Component } from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from '../styles'
import {Actions} from "react-native-router-flux";


type Props = {};
export default class Home extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Logged In
                </Text>
                <TouchableOpacity style={styles.button} onPress={Actions.pop}>
                    <Text style={styles.button_text}>Back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
