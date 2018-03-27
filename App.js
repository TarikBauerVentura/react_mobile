import React, { Component } from 'react';
import {View} from 'react-native';
import styles from './src/styles'

import Routes from './src/routes';

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Routes/>
            </View>
        );
    }
}
