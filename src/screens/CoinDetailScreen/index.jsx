import React from 'react';
import { View, Text, Image , StyleSheet} from 'react-native';
import { Ionicons ,EvilIcons} from '@expo/vector-icons';
import CoinDetailedHeader from './components/CoinDetailedHeader';
import Coin from '../../../assets/data/crypto.json'
import styles from './styles';

import { AntDesign } from '@expo/vector-icons';


const CoinDetailScreen = () => {
    const {
         image: { small },
         name,
         symbol,
        market_data: { 
            market_cap_rank ,
            current_price,
            price_change_percentage_24h,
            } ,
        } = Coin;

        const percentageColor = price_change_percentage_24h <0 ? '#ea3943' : '#16c784'

    return (
        <View style={{paddingHorizontal:10}}>
       <CoinDetailedHeader 
       image={small}
        name={name} 
        symbol={symbol} 
        marketCapRank={market_cap_rank}
        />
        <View style={styles.priceContainer}>
            <View>
         <Text style={styles.name}>{name}</Text>
         <Text style={styles.currentPrice}>${current_price.usd}</Text>
        </View>
        <View style={{backgroundColor:percentageColor, padding :5,borderRadius:5,flexDirection:'row'}}>
        <AntDesign
          name={price_change_percentage_24h < 0 ? 'caretdown' : 'caretup'} 
          size={12} 
          color={'white'}
           style={{alignSelf:"center", marginRight:5}}
         />
        <Text style={styles.priceChange}>
        {price_change_percentage_24h.toFixed(2)}%
        </Text>
        </View>
        </View>
        </View>
    )
};

export default CoinDetailScreen;


