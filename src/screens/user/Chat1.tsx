import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomTextInput from '../../components/CustomTextInput';
import BackHeader from '../../components/BackHeader';
import { colors } from '../../utilities/colors';
import { genericRatio } from '../../helper/helper';
import { fontFamily } from '../../assets/fonts';
import { fontSizes } from '../../utilities/fontSizes';
import { width, height } from '../../utilities';
import images from '../../assets/images';
import { useNavigation } from '@react-navigation/native';

const chat = [
  { message: 'Hi Amelia! How are you doing today?', type: 'sent', time: '12:29' },
  { message: "I'm great! Just got back from a walk. How about you?", type: 'sent', time: '12:29' },
  { message: "Nice! I'm working on a project right now.", type: 'receive', time: '12:30' },
  { message: 'Sounds productive! Good luck with that 😊', type: 'sent', time: '12:31' },
];

const Chat1 = () => {
  const [input, setInput] = useState('');
 const navigation = useNavigation<any>();
  const handleSend = () => {
    if (!input.trim()) return;
    console.log('Send:', input);
    setInput('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackHeader isBack={true} title="Amelia" iscall={true} onBackPress={() => navigation.goBack()} />

      <View style={styles.listView}>
        <FlatList
          data={chat}
          ItemSeparatorComponent={() => <View style={{ height: genericRatio(12) }} />}
          renderItem={({ item }) => {
            const isSent = item.type === 'sent';

            return (
              <View
                style={[
                  styles.messageRow,
                  { justifyContent: isSent ? 'flex-start' : 'flex-end' },
                ]}
              >
                {isSent && <Image source={images.Amelia} style={[styles.avatar, styles.sentAvatar]} />}

                <View
                  style={[
                    styles.messageBubbleWrapper,
                    isSent ? styles.sentWrapper : styles.receiveWrapper,
                  ]}
                >
                  <View
                    style={[
                      styles.messageBubble,
                      isSent ? styles.sentBubble : styles.receiveBubble,
                    ]}
                  >
                    <Text
                      style={[
                        styles.messageText,
                        isSent ? styles.sentText : styles.receiveText,
                      ]}
                    >
                      {item.message}
                    </Text>
                  </View>

                  <Text
                    style={[
                      styles.timeText,
                      isSent ? styles.sentTime : styles.receiveTime,
                    ]}
                  >
                    {item.time}
                  </Text>
                </View>

                {!isSent && <Image source={images.Amelia} style={[styles.avatar, styles.receiveAvatar]} />}
              </View>
            );
          }}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{ paddingBottom: genericRatio(20) }}
        />
      </View>

      <View style={styles.inputWrapper}>
        <CustomTextInput
          inputHeight={height * 0.07}
          inputWidth={width * 0.88}
          placeholder="Write a message..."
          value={input}
          onChangeText={setInput}
          borderRadius={50}
          textColor={colors.black}
          backgroundColor={colors.gray}
          placeholderTextColor={colors.black}
          rightIcon={<Ionicons name="send" size={24} color={colors.red} />}
          onRightIconPress={handleSend}
        />
      </View>
    </SafeAreaView>
  );
};

export default Chat1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: genericRatio(19),
    backgroundColor: '#fff',
  },
  listView: {
    flex: 1,
    marginVertical: genericRatio(10),
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: genericRatio(6),
  },
  avatar: {
    width: genericRatio(40),
    height: genericRatio(40),
    borderRadius: genericRatio(20),
  },
  sentAvatar: {
    marginBottom: genericRatio(6), // Adjusted spacing for sent avatar
  },
  receiveAvatar: {
    marginBottom: genericRatio(6), // Adjusted spacing for received avatar
  },
  messageBubbleWrapper: {
    flexDirection: 'column',
    maxWidth: width * 0.7,
  },
  sentWrapper: {
    alignItems: 'flex-start',
  },
  receiveWrapper: {
    alignItems: 'flex-end',
  },
  messageBubble: {
    padding: genericRatio(18),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 60,
  },
  sentBubble: {
    backgroundColor: colors.gray,
  },
  receiveBubble: {
    backgroundColor: colors.red,
  },
  messageText: {
    fontSize: fontSizes.md,
    fontFamily: fontFamily.OpenSansBold,
  },
  sentText: {
    color: colors.black,
  },
  receiveText: {
    color: colors.white,
  },
  timeText: {
    fontSize: fontSizes.sm,
    marginTop: genericRatio(4),
    fontFamily: fontFamily.OpenSansRegular,
  },
  sentTime: {
    color: colors.black,
    marginLeft: genericRatio(12),
  },
  receiveTime: {
    color: colors.black,
    alignSelf: 'flex-end',
    marginRight: genericRatio(12),
  },
  inputWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: genericRatio(10),
    marginBottom: genericRatio(6),
  },
});
