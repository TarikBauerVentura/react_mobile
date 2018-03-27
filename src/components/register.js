import React, { Component } from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from '../styles'
import Request from '../request'


type Props = {};
export default class Register extends Component<Props> {
    constructor(props) {
        super(props);
        this.request = new Request();
        this.state = {username: '', password: '', email: ''};
        this.make_post = this.make_post.bind(this)
    }

    make_post() {
        this.request.post('login', this.state).then(() => {
            Actions.home();
            this.setState({username: '', password: ''})
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                           onChangeText={value => this.setState({username: value})}
                           placeholder='username'
                           placeholderTextColor='#ffffff'
                />
                <TextInput style={styles.input}
                           onChangeText={value => this.setState({email: value})}
                           placeholder='email'
                           placeholderTextColor='#ffffff'
                />
                <TextInput style={styles.input}
                           onChangeText={value => this.setState({password: value})}
                           placeholder='password'
                           placeholderTextColor='#ffffff'
                           secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button} onPress={this.make_post}>
                    <Text style={styles.button_text}>Register</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
