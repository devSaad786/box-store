import { View, Text, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import { width,height } from "../../utilities";
import { fontFamily } from "../../assets/fonts";
import { fontSizes } from "../../utilities/fontSizes";
import BackHeader from "../../components/BackHeader";
import { genericRatio } from "../../helper/helper";
import { colors } from "../../utilities/colors";
import { useNavigation } from "@react-navigation/native";
import PreLogin from "./PreLogin";

  

const PrivacyPolicy = () => {
    const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={styles.container}>
      <BackHeader  isBack={true} title="Privacy Policy" onBackPress={() => navigation.goBack()} />

      <ScrollView
        style={{ backgroundColor: 'transparent' }}
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.SecMainContainer}>
          <Text style={styles.InnerText}>
            Lorem ipsum dolor sit amet consectetur. Sit scelerisque nibh ullamcorper justo nisl tortor habitant egestas cras. Vitae mauris duis faucibus aliquam nascetur. Quam ut id mi ut. Tempus in amet sed volutpat tristique vestibulum elementum. Ipsum viverra vitae egestas facilisis. Tempus sed egestas ullamcorper dictum integer magna sit quam pellentesque. 
          </Text>
          <Text style={styles.InnerText}>
            Accumsan nunc risus donec quis purus sed id. Diam sit massa ornare purus nisi quam. Donec scelerisque eu lectus aliquam tellus nisl eget ut. Consequat faucibus sagittis semper felis orci eu. Posuere gravida etiam suspendisse proin auctor netus. Aliquam at at aliquam egestas felis eget. Aliquam eget pretium malesuada lacus in. Arcu scelerisque quis dui accumsan sagittis vel eu non ut. Metus ut quis tincidunt velit arcu. Placerat habitasse pellentesque aliquet morbi in sit et ac. Vulputate sed ullamcorper leo etiam sed habitant pretium. Pulvinar porttitor ult. Lorem Ipau. Rices ac lectus. Ornare rhoncus mauris viverra lectus vivamus at. Elit eu viverra proin pharetra odio vitae nunc a.
          </Text>
          <Text style={styles.InnerText}>
            Consequat adipiscing feugiat interdum purus pulvinar. Massa amet condimentum morbi potenti. Amet id natoque nulla sit convallis elementum nisl. Malesuada diam a tortor eget ut netus ut cursus. Amet faucibus tincidunt rutrum aliquam massa enim condimentum consequat. Interdum a sagittis gravida est. Tortor pellentesque ju. elementum nisl. Malesuada diam a tortor eget ut netus ut cursus. Amet faucibus tincidunt rutrum aliquam massa enim condimentum consequat.
          </Text>
          <Text style={styles.InnerText}>
            Interdum a sagittis gravida est. Lorem Ipau. Rices ac lectus. Ornare rhoncus mauris viverra lectus vivamus at. Elit eu viverra proin pharetra odio vitae nunc a. Consequat adipiscing feugiat interdum purus pulvinar. Massa amet condimentum morbi potenti. Amet id natoque nulla sit convallis elementum nisl. Malesuada diam a tortor eget ut netus ut cursus.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.white,
  },
  scrollContainer: {
    paddingBottom: genericRatio(20),
  },
  SecMainContainer: {
    width: width * 0.85,
    alignSelf: "center",
    paddingTop: height * 0.025,
  },
  InnerText: {
    color: colors.black,
    fontSize: fontSizes.sm2,
    fontFamily: fontFamily.OpenSansMedium,
    fontWeight: "400",
    marginBottom: genericRatio(15),
    lineHeight: 22,
    textAlign: "justify"
  },
});
