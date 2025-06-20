import React, { useState, useEffect } from 'react';
import {
    View,
    Modal,
    Animated,
    StyleSheet,
    TouchableWithoutFeedback,
    Pressable,
} from 'react-native';
import { width, height } from '../utilities';
import { colors } from '../utilities/colors';
import CustomButton from './CustomButton';
import { fontSizes } from '../utilities/fontSizes';
interface CustomImageUploadModalProps {
    modalOpen: boolean;
    toggleModal: () => void;
    onClose?: () => void; // Optional: Called when the modal closes
    gallery: () => void; // Function to handle selecting from the gallery
    camera: () => void; // Function to handle opening the camera
    document: () => void;
}

const CustomImageUploadModal: React.FC<CustomImageUploadModalProps> = ({
    modalOpen,
    toggleModal,
    onClose,
    gallery,
    camera,
    document
}) => {
    const [animatedHeight] = useState(new Animated.Value(0));

    const animateModal = () => {
        Animated.timing(animatedHeight, {
            toValue: height * 0.2,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

    useEffect(() => {
        if (modalOpen) {
            animateModal();
        } else {
            Animated.timing(animatedHeight, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false,
            }).start();
        }
    }, [modalOpen]);

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalOpen}
            onRequestClose={toggleModal}
        >
            <Pressable onPress={toggleModal} style={{ height: height, width: width, backgroundColor:  'rgba(0,0,0,0.5)'}}>
                <Animated.View style={[styles.callModal, { height: animatedHeight }]}>
                    <View style={styles.btnMain}>
                        <CustomButton
                            text="Upload From Gallery"
                            color={colors.red}
                            textColor={colors.white}
                            btnHeight={height * 0.06}
                            btnWidth={width * 0.85}
                            fontSize={fontSizes.md}
                            borderRadius={50}
                            onPress={gallery}
                        />
                        <CustomButton
                            text="Upload From Camera"
                            color={colors.red}
                            textColor={colors.white}
                            btnHeight={height * 0.06}
                            btnWidth={width * 0.85}
                            borderRadius={50}
                            fontSize={fontSizes.md}
                            onPress={camera}
                        />
                    </View>
                </Animated.View>
            </Pressable>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalBlur: {
        flex: 1,
        width: width,
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
    },
    callModal: {
        width: width,
        height: height * 0.1,
        borderTopEndRadius: 50,
        borderTopStartRadius: 50,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 0,
        position: 'absolute',
    },
    btnMain: {
        gap: height * 0.01,
    },
});

export default CustomImageUploadModal;
