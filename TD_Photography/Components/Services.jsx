import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import SectionTitle from './SectionTitle'
import handleEmailPress from '../Utils/Utils';

const Services = ({ sectionRefs }) => {
    const servicedata = [
        {
            title: "Service Charge Card",
            subTitle: "Photography Package",
            list: {
                list1: "Online photo gallery for easy sharing and downloading",
                list2: "High Quality Photo Album",
            },
            amount: "$100"
        },
        {
            title: "Service Charge Card",
            subTitle: "Videography Package",
            list: {
                list1: "Online photo gallery for easy sharing and downloading",
                list2: "High Quality Photo Album",
            },
            amount: "$150"
        },
        {
            title: "Service Charge Card",
            subTitle: "Combo Package",
            list: {
                list1: "Online photo gallery for easy sharing and downloading",
                list2: "High Quality Photo Album",
            },
            amount: "$300"
        }
    ]
    return (
        <View ref={sectionRefs}>
            <SectionTitle title='Services' description='Charges Can be Varry according To The Clients Requirements' />
            <FlatList
                data={servicedata}
                keyExtractor={item => item.amount}
                renderItem={({ item }) => {
                    const { title, subTitle, list, amount } = item;
                    const { list1, list2 } = list;
                    const { service_body, service_card, service_title, charges, service_title_text, service_title_text1, service_title_text2, service_description, service_description_text, service_description_text2, service_description_text1, service_btn, service_btn_text, chargesText } = styles;
                    return (
                        <LinearGradient colors={['#f5f5f5', '#3a2e2a']} style={[styles.gradientBackground, service_card]} start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }}>

                            {/* <View style={service_card}> */}
                            <View style={charges}>
                                <Text style={chargesText}>{amount}</Text>
                            </View>


                            <View style={service_title}>
                                <Text style={[service_title_text, service_title_text1]}>{title}</Text>
                                <Text style={[service_title_text, service_title_text2]}>{subTitle}</Text>
                            </View>

                            <View style={service_body}>
                                <View style={service_description}>
                                    <Text style={[service_description_text, service_description_text1]}>• {list1}</Text>
                                    <Text style={[service_description_text, service_description_text2]}>• {list2}</Text>
                                </View>
                                <TouchableOpacity style={service_btn}>
                                    <Text style={service_btn_text} onPress={() => handleEmailPress(subTitle)}>Book Your Slot</Text>
                                </TouchableOpacity>
                            </View>

                            {/* </View> */}
                        </LinearGradient>
                    )
                }}
                numColumns={1}
                contentContainerStyle={styles.service_container}
            />
        </View>
    )
}

export default Services

const styles = StyleSheet.create({
    service_container: {
        paddingInline: 40,
    },
    gradientBackground: {
        marginBottom: 20,
        borderRadius: 10,
        flex: 1
    },
    service_card: {
        position: 'relative',
        boxShadow: '0 0 15px #595757',
        paddingInline: 40,
        flex: 1,
        height: '260',
        marginBlock: 40,
        borderRadius: 10,
        // justifyContent: 'space-evenly'
    },
    charges: {
        transform: 'translateY(-30px)',
        marginInline: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f1f1f1',
        width: 70,
        paddingBlock: 20,
        borderRadius: 50,
        boxShadow: '0 0 15px #000000'
    },
    chargesText: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 20
    },
    service_title: {
        marginBlock: 16,
    },
    service_title_text: {
        textAlign: 'center'
    },
    service_title_text1: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    service_title_text2: {
        textDecorationLine: 'underline',
    },
    service_body: {},
    service_description: {},
    service_description_text: {
        marginBlock: 5
    },
    service_description_text1: {},
    service_description_text2: {},
    service_btn: {
        backgroundColor: '#ffffff',
        width: '80%',
        padding: 10,
        marginInline: 'auto',
        position: 'absolute',
        bottom: -55,
        boxShadow: '0 0 10px #000',
        left: '10%',
        borderRadius: 10
    },
    service_btn_text: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold'
    }
})