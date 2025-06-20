import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import BackHeader1 from '../../components/BackHeader1';
import images from '../../assets/images';
import {useNavigation} from '@react-navigation/native';
import {height} from '../../utilities';
import {colors} from '../../utilities/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {fontSizes} from '../../utilities/fontSizes';
import {apiHelper, ASSET_URL} from '../../service';
import Toast from 'react-native-toast-message';

const {width} = Dimensions.get('window');

// const categories = [
//   { id: '1', label: 'Laptop', icon: images.laptop1 },
//   { id: '2', label: 'Headphones', icon: images.headphones },
//   { id: '3', label: 'Airports', icon: images.airports },
//   { id: '4', label: 'Watch', icon: images.watch },
// ];

const dummyProductData = [
  {
    id: '1',
    image: images.Ultrabooks,
    product: 'Product Name',
    title: 'Available',
    price: 50.0,
    ratings: 4.5,
  },
  {
    id: '2',
    image: images.uniheadphone,
    product: 'Product Name',
    title: 'Available',
    price: 50.0,
    ratings: 4.8,
  },
  {
    id: '3',
    image: images.game,
    product: 'Product Name',
    title: 'Available',
    price: 50.0,
    ratings: 4.5,
  },
  {
    id: '4',
    image: images.GoldPhone,
    product: 'Product Name',
    title: 'Available',
    price: 50.0,
    ratings: 4.5,
  },
  {
    id: '5',
    image: images.printer,
    product: 'Product Name',
    title: 'Available',
    price: 50.0,
    ratings: 4.5,
  },
  {
    id: '6',
    image: images.laptop,
    product: 'Product Name',
    title: 'Available',
    price: 50.0,
    ratings: 4.5,
  },
  {
    id: '7',
    image: images.micc,
    product: 'Product Name',
    title: 'Available',
    price: 50.0,
    ratings: 4.5,
  },
  {
    id: '8',
    image: images.game1,
    product: 'Product Name',
    title: 'Available',
    price: 50.0,
    ratings: 4.5,
  },
];

const Home = () => {
  const navigation = useNavigation<any>();

  const handleMenuPress = () => navigation.openDrawer();
  const handleNotificationPress = () => navigation.navigate('Notifications');
  const handleChatPress = () => navigation.navigate('Chat');
  const [categories, setCategories] = useState<{
    _id: string,
    image: string,
    categoryName: string
  }[]>([]);
  const [product, setProduct] = useState<{
    _id: string,
    image: string,
    productName: string
  }[]>([]);

  useEffect(() => {
    const subscribe = navigation.addListener('focus', () => {
      fetchCategory()
      fetchProduct()
    });
    return subscribe;
  }, []);

  const fetchCategory = async () => {
    const {response, error} = await apiHelper('GET', 'category/');
    if (response?.data) {
      setCategories(response?.data?.data);
      Toast.show({
        text1: 'Success',
        text2: response?.data?.message,
        type: 'success',
      });
    }
    if (error) {
      Toast.show({
        text1: 'Error',
        text2: error,
        type: 'error',
      });
    }
  };
  const fetchProduct = async () => {
    const {response, error} = await apiHelper('GET', 'product/');
    if (response?.data) {
      setProduct(response?.data?.data);
      Toast.show({
        text1: 'Success',
        text2: response?.data?.message,
        type: 'success',
      });
    }
    if (error) {
      Toast.show({
        text1: 'Error',
        text2: error,
        type: 'error',
      });
    }
  };

  const renderProductItem = ({item}) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ProductDetails', {product: item})}>
      <Image
        source={{uri: ASSET_URL + item.image}}
        style={styles.productImage}
        resizeMode="contain"
      />
      <View style={styles.rowBetween}>
        <Text style={styles.product}>{item.productName}</Text>
        <TouchableOpacity style={styles.plusButton}>
          <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Available</Text>
      <View style={styles.rowBetween}>
        <Text style={styles.price}>Rs. {item?.productPrice.toFixed(2)}</Text>
        <View style={styles.ratingContainer}>
          <AntDesign name="star" size={12} color={colors.red} />
          <Text style={styles.ratings}>5</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <BackHeader1
        ismenu
        isNonstop
        title=""
        // isSearch
        isChat
        isNotification
        onmenuPress={handleMenuPress}
        onNotificationPress={handleNotificationPress}
        onChatPress={handleChatPress}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={images.store} style={styles.store} />

        {/* Categories */}
        <View style={styles.categoryRow}>
          {categories.map((item, index) => (
            <View key={item._id} style={styles.categoryItemWithBorder}>
              <Image source={{uri: ASSET_URL + item.image}} style={styles.iconImage} />
              <Text style={styles.text}>{item.categoryName}</Text>
              {index !== categories.length - 1 && (
                <View style={styles.verticalDivider} />
              )}
            </View>
          ))}
        </View>

        {/* Black Friday Banner */}
        <Image source={images.blackfriday} style={styles.store1} />
        <Text style={styles.sectionHeader}>
          There is something for everyone
        </Text>

        {/* First 4 products */}
        <FlatList
          data={product}
          keyExtractor={item => item._id}
          renderItem={renderProductItem}
          numColumns={2}
          scrollEnabled={false}
          contentContainerStyle={styles.listContent}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  store: {
    width: height * 0.55,
    height: width * 0.48,
    alignSelf: 'center',
    marginVertical: 20,
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginHorizontal: 10,
    borderRadius: 10,

    paddingVertical: 10,
  },
  categoryItemWithBorder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  verticalDivider: {
    position: 'absolute',
    right: 0,
    height: '90%',
    width: 1,
    backgroundColor: '#ccc',
  },
  iconImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  text: {
    fontSize: 11,
    color: '#000',
    textAlign: 'center',
  },
  sectionHeader: {
    fontSize: fontSizes.sm2,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
    marginVertical: 15,
  },
  store1: {
    width: height * 0.55,
    height: width * 0.48,
    alignSelf: 'center',
    marginVertical: 25,
  },
  listContent: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    margin: 9,
    flex: 1,
    elevation: 1,
    minHeight: height * 0.22,
  },
  productImage: {
    width: '100%',
    height: 100,
    borderRadius: 6,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 4,
  },
  product: {
    fontSize: 13,
    fontWeight: '600',
  },
  plusButton: {
    backgroundColor: colors.red,
    borderRadius: 3,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusText: {
    color: '#fff',
    fontSize: 14,
  },
  title: {
    fontSize: 11,
    color: colors.black,
    marginVertical: 2,
  },
  price: {
    fontSize: 13,
    fontWeight: '600',
    color: '#000',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 4,
    paddingVertical: 1,
  },
  ratings: {
    fontSize: 11,
    color: '#000',
    marginLeft: 3,
  },
});

export default Home;
