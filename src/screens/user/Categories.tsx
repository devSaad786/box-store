import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import BackHeader from '../../components/BackHeader';
import Icon from 'react-native-vector-icons/Feather';
import {fontSizes} from '../../utilities/fontSizes';
import {fontFamily} from '../../assets/fonts';
import {colors} from '../../utilities/colors';
import {width} from '../../utilities';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {apiHelper} from '../../service';

// const Categories = [
//   {title: 'Product Category 01'},
//   {title: 'Product Category 02'},
//   {title: 'Product Category 03'},
//   {title: 'Product Category 04'},
//   {title: 'Product Category 05'},
//   {title: 'Product Category 06'},
//   {title: 'Product Category 07'},
//   {title: 'Product Category 08'},
//   {title: 'Product Category 09'},
// ];

const CategoriesScreen = () => {
  const navigation = useNavigation();
  const [categories, setCategories] = useState<
    {
      _id: string;
      image: string;
      categoryName: string;
    }[]
  >([]);
  useEffect(() => {
    const subscribe = navigation.addListener('focus', () => {
      fetchCategory();
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
  return (
    <SafeAreaView style={styles.container}>
      <BackHeader
        isjohn={true}
        title="Categories"
        isNotification={true}
        onNotificationPress={() => navigation.navigate('Notifications')}
      />
      <FlatList
        data={categories}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false} // Hides scrollbar
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={styles.categoryCard}
            onPress={() =>{
              console.log("Item Press: ", item._id);
              navigation.navigate('Category01', {category: {...item},})
            }}>
            <Text style={styles.categoryTitle}>{item.categoryName}</Text>
            <Icon name="chevron-right" size={25} color={colors.red} />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    marginBottom: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 12,

    width: width * 0.9,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  categoryTitle: {
    fontSize: fontSizes.md,
    fontFamily: fontFamily.OpenSansBold,
    color: colors.black,
  },
});

export default CategoriesScreen;
