import { Button, ImageBackground, StyleSheet, Text, View, Dimensions, TouchableOpacity, Modal, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import handleEmailPress from '../Utils/Utils';

const Hero = ({ sectionRefs }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const { height: screenHeight } = Dimensions.get('window');

    const {
        bgImage, overlay, textWhite, textCenter, flexBox, heroSection,
        heroDetails, heroDetailsHead, heroDetailsDescription, descriptionText,
        heroSpan, heroControls, heroButtons, buttonText, modalOverlay, modalContainer,
        closeButton, closeButtonText, modalTitle, titleText, modalDescription,
        descriptionTitle, modalDescriptionText
    } = styles;

    return (
        <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' }}
            style={[bgImage, { height: screenHeight }]}
            ref={sectionRefs}
        >
            <View style={overlay}></View>
            <View style={[heroSection, flexBox]}>
                <View style={[heroDetails, textWhite]}>
                    <Text style={[heroDetailsHead, textWhite, textCenter]}>Tejas Dhodi</Text>
                    <View style={heroDetailsDescription}>
                        <Text style={[textWhite, textCenter, descriptionText]}>Profes<Text style={[heroSpan]}>sional Photo</Text>grapher a<Text style={[heroSpan]}>nd Videogr</Text>apher</Text>
                        <Text style={[textWhite, textCenter, descriptionText]}>Specia<Text style={[heroSpan]}>lized</Text> In <Text style={[heroSpan]}>Wedding</Text> and <Text style={[heroSpan]}>Event</Text></Text>
                    </View>
                </View>

                <View style={heroControls}>
                    <TouchableOpacity style={[heroButtons, textWhite, flexBox]}>
                        <Text style={[buttonText, textWhite]} onPress={() => handleEmailPress()}>Contact</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[heroButtons, textWhite, flexBox]}>
                        <Text style={[buttonText, textWhite]} onPress={() => setModalVisible(true)}>What We Do</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={modalOverlay}>
                    <View style={modalContainer}>
                        <Pressable
                            style={closeButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={closeButtonText}>X</Text>
                        </Pressable>

                        <View style={modalTitle}>
                            <Text style={titleText}>What We Do ??</Text>
                        </View>

                        <ScrollView style={modalDescription}>
                            <Text style={descriptionTitle}>Photography:</Text>
                            <Text style={modalDescriptionText}>
                                The team excels in capturing still images that tell stories,
                                evoke emotions, and showcase the beauty of their subjects.
                            </Text>
                            <Text style={descriptionTitle}>Videography:</Text>
                            <Text style={modalDescriptionText}>
                                The team is well-versed in the art of videography, skillfully
                                crafting narratives through moving images. They expertly handle
                                equipment, cinematography techniques, and editing software to
                                produce engaging videos.
                            </Text>
                            <Text style={descriptionTitle}>Event Coverage:</Text>
                            <Text style={modalDescriptionText}>
                                The team specializes in documenting events, be it weddings,
                                corporate functions, conferences, or social gatherings.
                            </Text>
                            <Text style={descriptionTitle}>
                                Editing and Post-Production:
                            </Text>
                            <Text style={modalDescriptionText}>
                                Apart from capturing images and footage, the team excels in
                                post-production processes. They meticulously edit and enhance
                                the visuals, adding creative touches, color grading, sound
                                design, and special effects to deliver a polished final product.
                            </Text>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </ImageBackground>
    );
}

export default Hero;

const styles = StyleSheet.create({
    bgImage: {
        flex: 1,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    textWhite: {
        color: '#ffffff'
    },
    textCenter: {
        textAlign: 'center'
    },
    flexBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heroSection: {
        height: '100%',
        width: '100%'
    },
    heroDetailsHead: {
        fontSize: 22,
        fontWeight: '900'
    },
    heroDetailsDescription: {
        marginTop: 10
    },
    descriptionText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    heroSpan: {
        color: '#ee8585'
    },
    heroControls: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        marginBlock: 20
    },
    heroButtons: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 5,
        padding: 5
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '900'
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        elevation: 5,
    },
    closeButton: {
        alignSelf: 'flex-end',
        padding: 10,
    },
    closeButtonText: {
        color: '#ff0000',
        fontWeight: 'bold',
        fontSize: 18,
    },
    modalTitle: {
        marginBottom: 15,
        alignItems: 'center',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    modalDescription: {
        marginTop: 10,
    },
    descriptionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#555',
    },
    modalDescriptionText: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },
});
