import React, { Component } from 'react';
import {Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {TextInputMask} from 'react-native-masked-text';
import styles from '../styles';
import Request from '../request';


type Props = {};
export default class Login extends Component<Props> {

    constructor(props) {
        super(props);
        this.request = new Request();
        this.state = {cpf: '', password: ''};
        this.make_post = this.make_post.bind(this)
    }

    make_post() {
        this.request.post('login', this.state).then((response) => {
            if (response.hasOwnProperty('alert')) {
                response.alert.map(alert => {
                    Alert.alert(alert, '',
                        [{text: 'Got it!'}],
                        {cancelable: false})
                })
            }
            else {
                Actions.home();
                this.setState({cpf: '', password: ''})
            }
        }).catch((error) => console.log(error))
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInputMask type={'cpf'}
                               style={styles.input}
                               placeholder='cpf'
                               value={this.state.cpf}
                               placeholderTextColor='#ffffff'
                               keyboardType={'numeric'}
                               onChangeText={value => this.setState({cpf: value})}/>
                <TextInput style={styles.input}
                           value={this.state.password}
                           onChangeText={value => this.setState({password: value})}
                           placeholder='password'
                           placeholderTextColor='#ffffff'
                           secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button} onPress={this.make_post}>
                    <Text style={styles.button_text}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.text}>Don't have an account yet?</Text>
                <TouchableOpacity style={styles.button} onPress={Actions.register}>
                    <Text style={styles.button_text}>Register</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
