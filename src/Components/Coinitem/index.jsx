import React from 'react';
import { Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styles from './styles';


const CoinItem = ({ marketCoin }) => {
    const {
        name,
        current_price,
        market_cap_rank,
        price_change_percentage_24h,
        symbol,
        market_cap,
        image,
    }
        = marketCoin;

        const percentageColor = price_change_percentage_24h <0 ? '#ea3943' : '#16c784'

        const beautifyMarketCap = (marketCap) =>{
            if (marketCap >1_000_000_000_000){
                return Math.floor(marketCap/1_000_000_000_000)
            }if(marketCap > 1_000_000_000){
                return Math.floor(marketCap/1_000_000_000)
            }if(marketCap > 1_000_000_000){
                return Math.floor(marketCap/1_000_000_000)
            }
            return marketCap;
        };
    return (
        <View style={styles.coinContainer}>
            <Image source={{uri: image }}

                style={styles.row}
            />
            <View>
                <Text style={styles.title}>{name}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.rankContainer}>
                        <Text style={styles.rank}>{market_cap_rank}</Text>
                    </View>
                    <Text style={styles.text}>{symbol.toUpperCase()}</Text>
                    <AntDesign
                     name={price_change_percentage_24h < 0 ? 'caretdown' : 'caretup'} 
                     size={12} 
                     color={percentageColor}
                      style={styles.cartdownlogo}
                     />
                    <Text style={{color: percentageColor}}>{price_change_percentage_24h.toFixed(3)}%</Text>
                </View>
            </View>
            <View style={{ marginLeft: 'auto',alignItems:'flex-end' }}>
                <Text style={styles.title}>{current_price}</Text>
                <Text style={{color:'white'}}>Mcap {beautifyMarketCap(market_cap)}T</Text>
            </View>
        </View>
    );

}

export default CoinItem;