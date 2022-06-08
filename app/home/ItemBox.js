import React from 'react';
import {
    Animated, Dimensions, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import { DeleteIcon } from './icon';

const SCREEN_WIDTH = Dimensions.get('window').width;

const ItemBox = (props) => {
    const{data}=props;
    const{name}=data;
    const RightSwipe = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        });
        return (
            <TouchableOpacity onPress={props.handleDelete} activeOpacity={0.2}>
                <View style={styles.deleteBox}>
                    <Text >
                    <DeleteIcon/>
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };
    return (
    <View>
         <GestureHandlerRootView>
         <Swipeable renderRightActions={RightSwipe}>
         <TouchableOpacity >
            <View style={styles.container}>
                <Text style={styles.title}>{name}</Text>
            </View>
          </TouchableOpacity>
        </Swipeable>
        </GestureHandlerRootView>
        <View style={{height:1,backgroundColor:'gray'}}/>
    </View>
    );
};

export default ItemBox;

const styles = StyleSheet.create({
    container: {
        height: 76,
        width: SCREEN_WIDTH,
        backgroundColor: 'white',
        justifyContent: 'center',
       paddingHorizontal:20,
    
    //    padding
    // borderBottomWidth:1,borderBottomColor:'red'
        
    },
    title:{
    },
    deleteBox: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 75,
       
    },
    seperatorLine: {
        height: 1,
        backgroundColor: 'black',
    },
});