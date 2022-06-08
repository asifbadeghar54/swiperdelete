import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, FlatList, Text,Dimensions } from 'react-native';
import ItemBox from './ItemBox';
import { DataProvider, LayoutProvider, RecyclerListView } from "recyclerlistview";
const data = [
    { id: '1', name: 'Mango' },
    { id: '2', name: 'Apple' },
    { id: '3', name: 'Banana' },
    { id: '4', name: 'Orange' },
    { id: '5', name: 'Grapes' },
  
];
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

const Home = () => {
    const [lists, setLists] = useState(data);

  
    let dataProvider = new DataProvider((r1, r2) => {
        return r1 !== r2;
    })
    let layoutProvider = new LayoutProvider(
        index => {
            return index;
        }, (type, dim) => {
            dim.width = SCREEN_WIDTH;
            dim.height = 78;
        }

    )

    let HomeScreenData = dataProvider.cloneWithRows(lists);

    const deleteItem = (index) => {
        const arr = [...lists];
        arr.slice(index, 1);
        setLists(arr);
    };

    
    const renderItem = (index,item) =>{

        return(
            <ItemBox data={item} handleDelete={() => deleteItem(index)} />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
             <RecyclerListView
                    layoutProvider={layoutProvider}
                    dataProvider={HomeScreenData}
                    rowRenderer={renderItem}
                    renderFooter={() => <View style={{ paddingBottom: 20 }} />}
                    scrollViewProps={{
                        showsVerticalScrollIndicator: false,
                        showsHorizontalScrollIndicator: false,
                    }}
                    
                    
                />
        </SafeAreaView>
    );
};

export default Home;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    seperatorLine: {
        height: 1,
        backgroundColor: 'black',
    },
});
