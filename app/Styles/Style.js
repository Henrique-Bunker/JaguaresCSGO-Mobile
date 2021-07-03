import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
    },
    padding: {
        paddingTop: 40,
        backgroundColor: 'white'
    },

    session_single: {
        marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 25,
        marginRight: 25
    },
    session_double: {
        marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 25,
        marginRight: 25,

    },
    session_triple: {
        marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 25,
        marginRight: 25

    },

    first: {
        height: 150,
        width: '100%',
        backgroundColor: '#f5f9f9',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 0,

    },
    seccond: {
        height: 150,
        width: wp('40%'),
        backgroundColor: '#f5f9f9',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center', 

    },
    triple: {
        height: 100,
        width: wp('25%'),
        backgroundColor: '#f5f9f9',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center', 

    },
    box: {

        flexDirection: 'row',
        justifyContent: 'center',
        borderColor: 'white',
        borderRadius: 5,
        width: '90%',
        height: 50
    },

    titles: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 25,
        marginRight: 25
    }
  });