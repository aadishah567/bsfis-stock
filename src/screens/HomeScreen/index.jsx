import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import CoinItem from '../../Components/Coinitem';
import cryptocurrencies from '../../../assets/data/cryptocurrencies.json';

const HomeScreen = () => {
    return (
        <FlatList
            data={cryptocurrencies}
            renderItem={({ item }) => <CoinItem marketCoin={item} />}
        />
    );

};

export default HomeScreen;