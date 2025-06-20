import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackHeader from '../../components/BackHeader';
import { colors } from '../../utilities/colors';
import { fontSizes } from '../../utilities/fontSizes';
import { fontFamily } from '../../assets/fonts';
import { width, height } from '../../utilities';

const order = [
  { id: '1', title: 'Order#236589', price: '$15.00' },
  { id: '2', title: 'Order#236590', price: '$25.00' },
  { id: '3', title: 'Order#236591', price: '$10.00' },
  { id: '4', title: 'Order#236592', price: '$20.00' },
  { id: '5', title: 'Order#236592', price: '$20.00' },
  { id: '6', title: 'Order#236592', price: '$20.00' },
  { id: '7', title: 'Order#236592', price: '$20.00' },
  { id: '8', title: 'Order#236592', price: '$20.00' },
  { id: '9', title: 'Order#236592', price: '$20.00' },
  { id: '10', title: 'Order#236592', price: '$20.00' },
];

const History = () => {
  const navigation = useNavigation<any>();

  const renderItem = ({ item }: { item: typeof order[0] }) => (
    <View style={styles.orderCard}>
      <View style={styles.orderRow}>
        <Text style={styles.orderTitle}>{item.title}</Text>
        <Text style={styles.orderPrice}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <BackHeader isBack={true} title="History" onBackPress={() => navigation.goBack()} />

      {/* Total Earning Card */}
      <View style={styles.earningCard}>
        <Text style={styles.amount}>$1,236.00</Text>
        <Text style={styles.earning}>Total Earning</Text>
      </View>

      {/* Order List */}
      <FlatList
        data={order}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.orderList}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  earningCard: {
    backgroundColor: colors.red,
    borderRadius: 10,
    padding: 16,
    width: width * 0.88,
    height:height*0.15,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
   
  },
  amount: {
    color: colors.white,
    fontSize: fontSizes.xl,
    fontFamily: fontFamily.OpenSansBold,
    fontWeight: '700',
    top:7
  },
  earning: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontFamily: fontFamily.OpenSansRegular,
    fontWeight: '500',
    marginTop: 20,
  },
  orderList: {
    paddingHorizontal: 20,
    paddingBottom: 29,
  },
  orderCard: {
    backgroundColor:colors.white,
    borderRadius: 10,
    padding: 16,
    // marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    marginTop: 15,
    width: width * 0.88,
   
  },
  orderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderTitle: {
    fontSize: fontSizes.sm2,
    fontFamily: fontFamily.OpenSansRegular,
    color: colors.black,
  },
  orderPrice: {
    fontSize: fontSizes.sm2,
    fontFamily: fontFamily.OpenSansBold,
    color: colors.black,
  },
});

export default History;
