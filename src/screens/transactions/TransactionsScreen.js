import {View, Text, Image, TouchableOpacity, Pressable} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import styles from './TransactionsScreen.style';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

export default function TransactionsScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <CustomHeader />
      <View style={styles.innerView}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '5%',
          }}>
          <Pressable
            onPress={() => {
              console.log('backpressed'), navigation.goBack();
            }}
            hitSlop={40}>
            <Image
              source={require('../../../assets/icons/backIcon.png')}
              style={styles.backIcon}
            />
          </Pressable>
          <Text style={styles.hidingH1}>Transactions</Text>
          <View style={{width: 30, height: 30}} />
        </View>
        <View style={styles.centeredView}>
          <Image
            source={require('../../../assets/icons/transactionIcon.png')}
            style={styles.transIcon}
          />
          <CustomButton
            label={'Clean'}
            onPress={() => navigation.navigate('CleanScreen')}
          />
          <CustomButton
            label={'Supply To Location'}
            onPress={() => navigation.navigate('LocationScreen')}
          />
          <CustomButton label={'Soil'} />
        </View>
      </View>
    </View>
  );
}