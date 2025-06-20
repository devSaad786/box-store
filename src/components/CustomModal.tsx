import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

interface CustomModalProps {
  visible: boolean;
  title?: string;
  message?: string;
  customButton?: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({
  visible,
  title = '',
  message = '',
  customButton,
}) => {
  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={styles.backdrop}>
        <View style={styles.modal}>
          {title ? <Text style={styles.title}>{title}</Text> : null}
          <Text style={styles.message}>{message}</Text>

          {/* Only render custom button */}
          {customButton}
        </View>
      </View>
    </Modal>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.90)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: width * 0.85,
    backgroundColor: '#fff',
    borderRadius: 18,
    overflow: 'hidden',
    paddingBottom: 24,
    alignItems: 'center',
    paddingTop: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 12,
  },
  message: {
    marginTop: 24,
    fontSize: 15,
    textAlign: 'center',
    color: '#000',
    paddingHorizontal: 30,
    lineHeight: 22,
  },
});

export default CustomModal;
