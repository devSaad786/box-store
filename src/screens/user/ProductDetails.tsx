import React, {useRef, useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Text,
  ScrollView,
} from 'react-native';
import BackHeader from '../../components/BackHeader';
import images from '../../assets/images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {fontSizes} from '../../utilities/fontSizes';
import {colors} from '../../utilities/colors';
import {fontFamily} from '../../assets/fonts';
import RatingsReviews from '../../components/RatingsAndReviews';
import CustomButton from '../../components/CustomButton';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {ASSET_URL} from '../../service';

const {width, height} = Dimensions.get('window');

const productImages = [
  images.Productdetails,
  images.Productdetails,
  images.Productdetails,
];

const Productdetails = ({route}) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedStates, setLikedStates] = useState(
    productImages.map(() => false),
  );
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const navigation = useNavigation<any>();
  const {product} = route.params;
  const scrollToIndex = index => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({index, animated: true});
      setCurrentIndex(index);
    }
  };

  const handleNext = () => {
    if (currentIndex < productImages.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  const toggleLike = index => {
    const updatedLikes = [...likedStates];
    updatedLikes[index] = !updatedLikes[index];
    setLikedStates(updatedLikes);
  };

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => quantity > 1 && setQuantity(quantity - 1);

  const handleWriteReview = () => {
    console.log('Write a Review pressed');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <BackHeader
        isBack={true}
        title="Product Details"
        isShopping={true}
        onBackPress={() => navigation.goBack()}
        onShoppingPress={() => navigation.navigate('MyCart')}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.sliderWrapper}>
          <FlatList
            ref={flatListRef}
            data={[ASSET_URL + product.image]}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({item, index}) => (
              <View style={styles.imageContainer}>
                <Image source={{uri: item}} style={styles.image} resizeMode="cover" />
                <TouchableOpacity
                  style={styles.heartIcon}
                  onPress={() => toggleLike(index)}>
                  <Image
                    source={images.heart1}
                    style={styles.heartImage}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            )}
            onMomentumScrollEnd={e => {
              const index = Math.round(e.nativeEvent.contentOffset.x / width);
              setCurrentIndex(index);
            }}
          />

          {currentIndex > 0 && (
            <TouchableOpacity style={styles.leftChevron} onPress={handlePrev}>
              <Ionicons name="chevron-back" size={32} color="white" />
            </TouchableOpacity>
          )}

          {currentIndex < [product.image].length - 1 && (
            <TouchableOpacity style={styles.rightChevron} onPress={handleNext}>
              <Ionicons name="chevron-forward" size={32} color="white" />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.productInfo}>
          <View style={styles.rowText}>
            <Text style={styles.productName}>{product?.productName}</Text>
            <Text style={styles.price}>Rs. {product?.productPrice}</Text>
          </View>

          <Text style={styles.sku}>SKU: {product?._id}</Text>

          <View style={styles.rowContainer}>
            <View style={styles.ratingRow}>
              <Ionicons name="star" size={18} color={colors.red} />
              <Text style={styles.ratingText}>4.5 Reviews</Text>
            </View>

            <View style={styles.quantityRow}>
              <TouchableOpacity
                style={styles.qtyButton}
                onPress={handleDecrement}>
                <Text style={styles.qtyButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{quantity}</Text>
              <TouchableOpacity
                style={styles.qtyButton}
                onPress={handleIncrement}>
                <Text style={styles.qtyButtonText1}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.halfLine} />

        <View style={styles.header}>
          <Text style={styles.headertext}>Product Description</Text>
          <Text style={styles.text}>
           {product?.productDescription}
          </Text>
        </View>

        <View style={styles.headerrow}>
          <Text style={styles.heade}>Review & Ratings</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('RatingsAndReviews')}>
            <Text style={styles.heade1}>Write a Review</Text>
          </TouchableOpacity>
        </View>

        <RatingsReviews />

        {/* Centered Buttons */}
      </ScrollView>
      <View style={styles.buttonWrapper}>
        <View style={styles.inputMain}>
          <CustomButton
            text={isAdded ? '✓ Added' : 'Add to cart'}
            fontSize={fontSizes.lg}
            color={isAdded ? colors.gray : colors.gray} // white background when added
            btnHeight={height * 0.08}
            btnWidth={(width * 0.95) / 2 - 15}
            textColor={isAdded ? '#FFD700' : colors.black} // yellow text when added
            borderRadius={50}
            onPress={() => setIsAdded(!isAdded)}
          />

          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={[colors.gradient1, colors.gradient2]}
            style={styles.gradientMain}>
            <CustomButton
              text="Buy Now"
              fontSize={fontSizes.lg}
              color={colors.red}
              btnHeight={height * 0.08}
              btnWidth={(width * 0.95) / 2 - 15}
              textColor={colors.white}
              borderRadius={50}
              onPress={() => navigation.navigate('MyCart')}
            />
          </LinearGradient>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Productdetails;
const styles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: colors.white},
  sliderWrapper: {
    width,
    height: height * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  image: {width: width * 0.92, height: height * 0.35, borderRadius: 30},
  heartIcon: {
    position: 'absolute',
    top: 50,
    right: width * 0.05,
    borderRadius: 20,
    padding: 8,
    elevation: 5,
  },
  heartImage: {width: 24, height: 24},
  leftChevron: {
    position: 'absolute',
    left: 15,
    top: '44%',
    borderRadius: 20,
    padding: 6,
    zIndex: 1,
  },
  rightChevron: {
    position: 'absolute',
    right: 15,
    top: '44%',
    borderRadius: 20,
    padding: 6,
    zIndex: 1,
  },
  productInfo: {marginTop: -30, marginHorizontal: 20},
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  ratingRow: {flexDirection: 'row', alignItems: 'center'},
  ratingText: {
    fontSize: fontSizes.sm2,
    color: colors.black,
    textDecorationLine: 'underline',
    fontFamily: fontFamily.OpenSansRegular,
    marginLeft: 10,
  },
  quantityRow: {flexDirection: 'row', alignItems: 'center'},
  qtyButton: {
    width: 30,
    height: 30,
    borderRadius: 18,
    backgroundColor: colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyButtonText: {fontSize: 20, fontWeight: 'bold', color: colors.black},
  qtyButtonText1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
    backgroundColor: colors.red,
    width: 30,
    height: 30,
    borderRadius: 18,
    lineHeight: 30,
    textAlign: 'center',
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: fontSizes.md,
    fontFamily: fontFamily.OpenSansBold,
    color: colors.black,
  },
  rowText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  productName: {
    width: width * 0.5,
    fontSize: fontSizes.lg,
    fontWeight: '700',
    color: colors.black,
    fontFamily: fontFamily.OpenSansBold,
  },
  price: {
    fontSize: fontSizes.md,
    fontWeight: '700',
    color: colors.red,
    fontFamily: fontFamily.OpenSansBold,
  },
  sku: {
    fontSize: fontSizes.sm2,
    color: colors.black,
    fontFamily: fontFamily.OpenSansRegular,
    marginTop: 10,
  },
  halfLine: {
    height: 1,
    width: '90%',
    backgroundColor: colors.gray,
    alignSelf: 'center',
    marginVertical: height * 0.03,
  },
  header: {paddingHorizontal: 20, marginBottom: 20},
  headertext: {
    fontSize: fontSizes.lg2,
    fontFamily: fontFamily.OpenSansBold,
    color: colors.black,
    fontWeight: '700',
    marginBottom: 10,
  },
  text: {
    fontSize: fontSizes.sm2,
    fontFamily: fontFamily.OpenSansRegular,
    color: colors.black,
    fontWeight: '400',
    lineHeight: 20,
  },
  headerrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  heade: {
    fontSize: fontSizes.lg,
    fontFamily: fontFamily.OpenSansBold,
    color: colors.black,
    fontWeight: 700,
  },
  heade1: {
    fontSize: fontSizes.lg,
    fontFamily: fontFamily.OpenSansSemiBold,
    color: colors.red,
    textDecorationLine: 'underline',
    fontWeight: 600,
  },

  // ✅ Updated styles for centered buttons
  buttonWrapper: {
    alignItems: 'center',
    //   marginTop: 10,

    //   width: '100%',
  },
  inputMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.9,
  },
  gradientMain: {
    borderRadius: 50,
  },
});
