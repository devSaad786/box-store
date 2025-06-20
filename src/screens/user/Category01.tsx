import React, {useState, useRef, useEffect, FC, useMemo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {fontSizes} from '../../utilities/fontSizes';
import {fontFamily} from '../../assets/fonts';
import {colors} from '../../utilities/colors';
import {width, height} from '../../utilities';
import images from '../../assets/images';
import BackHeader from '../../components/BackHeader';
import SearchInput from '../../components/CustomSearchInput';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
  useNavigation,
} from '@react-navigation/native';
import ActionSheet from 'react-native-actions-sheet';
import CustomTextInput from '../../components/CustomTextInput';
import Ionicons from 'react-native-vector-icons/Ionicons'; // No Expo
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CustomButton from '../../components/CustomButton';
import {apiHelper, ASSET_URL} from '../../service';
import Toast from 'react-native-toast-message';

const category001 = [
  {
    id: '1',
    image: images.printer,
    product: 'Product Name',
    title: 'Available',
    price: 50.0,
    ratings: 4.5,
  },
  {
    id: '2',
    image: images.laptop,
    product: 'Product Name',
    title: 'Available',
    price: 50.0,
    ratings: 4.5,
  },
  {
    id: '3',
    image: images.printer,
    product: 'Product Name',
    title: 'Available',
    price: 50.0,
    ratings: 4.5,
  },
  {
    id: '4',
    image: images.laptop,
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
    image: images.printer,
    product: 'Product Name',
    title: 'Available',
    price: 50.0,
    ratings: 4.5,
  },
  {
    id: '8',
    image: images.laptop,
    product: 'Product Name',
    title: 'Available',
    price: 50.0,
    ratings: 4.5,
  },
  // Add more products if needed
];

const Category01: FC<RouteProp<ParamListBase, ''>> = ({route}) => {
  const navigation = useNavigation<NavigationProp<ParamListBase, ''>>();
  const [query, setQuery] = useState('');
  const [product, setProduct] = useState([]);
  const actionSheetRef = useRef(null);
  const [priceRange, setPriceRange] = useState([100, 1000]);
  const {category} = route.params;

  useEffect(() => {
    console.log('Category: ', category._id);
    fetchProductByCategory(category._id);

    return () => {
      setProduct([]);
    };
  }, [route.params]);

  const fetchProductByCategory = async id => {
    const {response, error} = await apiHelper('GET', `product/category/${id}`);
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
  const filteredData = useMemo(() => {
    if (!query) {
      return []
    }
    return product.filter(item =>
      item.productName.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query]);

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ProductDetails', {product: item})}>
      <Image
        source={{uri: ASSET_URL + item.image}}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.rowBetween}>
        <Text style={styles.product}>
          {item?.productName.length > 10
            ? item?.productName?.substring(0, 20) + '...'
            : item?.productName}
        </Text>
        <TouchableOpacity style={styles.plusButton}>
          <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Available</Text>

      <View style={styles.rowBetween}>
        <Text style={styles.price}>${item?.productPrice?.toFixed(2)}</Text>
        <View style={styles.ratingContainer}>
          <AntDesign name="star" size={14} color={colors.red} />
          <Text style={styles.ratings}>5</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  const CustomMarker = ({currentValue}) => (
    <View style={{alignItems: 'center'}}>
      <View
        style={{
          height: 20,
          width: 20,
          backgroundColor: colors.white,
          borderWidth: 2,
          borderColor: colors.red,
          borderRadius: 10,
        }}
      />
      <Text style={styles.priceMarkerText}>${currentValue}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <BackHeader
        isBack={true}
        title={category?.categoryName}
        isShopping={true}
        onBackPress={() => navigation.goBack()}
        onShoppingPress={() => navigation.navigate('MyCart')}
      />

      <View style={{marginTop: 20, paddingHorizontal: 20}}>
        <SearchInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search Here..."
          divider={true}
          image={images.settingfilter}
          onImagePress={() => actionSheetRef.current?.show()}
        />
      </View>
      <FlatList
        data={!query?product:filteredData}
        key={'two-columns'}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.list}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        ListEmptyComponent={() => (
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'red',
                fontSize: 16,
              }}>
              No Products Found.
            </Text>
          </View>
        )}
      />

      <ActionSheet
        ref={actionSheetRef}
        containerStyle={styles.actionSheetMain}
        isModal
        overlayColor="rgba(0,0,0,0.5)">
        <View style={styles.sheetContent}>
          <View style={styles.sheetHeader}>
            <Text style={styles.sheetTitle}>Filter</Text>
            <TouchableOpacity
              onPress={() => actionSheetRef.current?.hide()}
              style={styles.closeButton}>
              <Ionicons name="close" size={24} color={colors.red} />
            </TouchableOpacity>
          </View>

          <CustomTextInput
            backgroundColor={colors.gray}
            inputHeight={height * 0.06}
            inputWidth={width * 0.9}
            placeholder="Product Name"
            textColor="black"
            borderRadius={50}
            placeholderTextColor="rgba(0,0,0,0.5)"
          />

          <CustomTextInput
            backgroundColor={colors.gray}
            inputHeight={height * 0.06}
            inputWidth={width * 0.9}
            placeholder="Categories"
            textColor="black"
            borderRadius={50}
            placeholderTextColor="rgba(0,0,0,0.5)"
          />

          <Text style={styles.priceHeading}>Price Range</Text>

          <MultiSlider
            values={priceRange}
            min={0}
            max={5000}
            step={10}
            onValuesChange={setPriceRange}
            selectedStyle={{backgroundColor: colors.red}}
            customMarkerLeft={e => (
              <CustomMarker currentValue={e.currentValue} />
            )}
            customMarkerRight={e => (
              <CustomMarker currentValue={e.currentValue} />
            )}
            containerStyle={{marginHorizontal: 20, marginTop: 1}}
          />

          <Text style={styles.priceRangeDisplay}>
            ${priceRange[0]} - ${priceRange[1]}
          </Text>
          <View style={{top: 15, alignItems: 'center'}}>
            <CustomButton
              text="Apply"
              fontSize={fontSizes.md}
              btnHeight={height * 0.06}
              btnWidth={width * 0.9}
              textColor={colors.white}
              color={colors.red}
              borderRadius={50}
              onPress={() => {
                actionSheetRef.current?.hide();
              }}
            />
          </View>
        </View>
      </ActionSheet>
    </SafeAreaView>
  );
};

export default Category01;

const CARD_WIDTH = width * 0.42;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  list: {
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  card: {
    width: CARD_WIDTH,
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  image: {
    width: CARD_WIDTH * 0.7,
    height: CARD_WIDTH * 0.6,
    marginBottom: 10,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  product: {
    fontSize: fontSizes.sm,
    fontFamily: fontFamily.OpenSansBold,
    color: colors.blue,
    fontWeight: 600,
    marginTop: 2,
  },
  plusButton: {
    backgroundColor: colors.red,
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 1,
  },
  plusText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
  title: {
    fontSize: fontSizes.sm,
    fontFamily: fontFamily.OpenSansRegular,
    color: colors.black,
    // marginVertical: 2,
    width: '100%',
    textAlign: 'left',
    marginTop: 8,
  },
  price: {
    fontSize: fontSizes.md,
    fontFamily: fontFamily.OpenSansBold,
    color: colors.blue,
    fontWeight: 700,
    marginTop: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
    marginTop: 7,
  },
  ratings: {
    fontSize: fontSizes.sm,
    color: colors.black,
    marginLeft: 1,
    marginTop: 1,
  },
  sheetContent: {
    padding: 20,
    gap: 20,
    alignItems: 'center',
  },
  sheetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  sheetTitle: {
    fontSize: fontSizes.lg,
    fontFamily: fontFamily.OpenSansBold,
    color: colors.red,
    fontWeight: '600',
  },
  closeButton: {
    position: 'absolute',
    left: 180,
    bottom: 15,
  },
  actionSheetMain: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingBottom: 20,
    paddingTop: 10,
  },
  rowInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width * 0.9,
    marginTop: 1,
  },
  expiryInputWrapper: {
    position: 'relative',
    width: width * 0.4,
    justifyContent: 'center',
  },
  calendarIconTouchable: {
    position: 'absolute',
    right: 4,
    height: '100%',
    justifyContent: 'center',
  },
  calendarIcon: {
    width: 20,
    height: 20,
    tintColor: colors.red,
  },

  priceText: {
    fontSize: fontSizes.sm,
    color: colors.black,
    fontFamily: fontFamily.OpenSansRegular,
    marginTop: 10,
    textAlign: 'center',
  },
  priceHeading: {
    color: colors.red,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: 20,
    marginLeft: 20,
    fontFamily: fontFamily.OpenSansBold,
  },

  sliderPriceLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 45,
  },

  priceLabel: {
    fontSize: fontSizes.sm,
    color: colors.black,
    fontFamily: fontFamily.OpenSansSemiBold,
  },

  priceMarkerText: {
    fontSize: fontSizes.sm,
    color: colors.black,
    fontFamily: fontFamily.OpenSansSemiBold,
    marginTop: 4,
  },
  priceRangeDisplay: {
    fontSize: fontSizes.md,
    fontFamily: fontFamily.OpenSansSemiBold,
    color: colors.black,
    marginTop: 1,
    alignSelf: 'center',
  },
});
