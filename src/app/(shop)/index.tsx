import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React from 'react'
import { PRODUCTS } from '../../../assets/products'
import ProductList from '../../components/product-list'
import { ListHeader } from '../../components/list-header'
const index = () => {
  return (
    <View>
     <FlatList
     data={PRODUCTS}
        renderItem={({ item }) =>
         <ProductList products={item}/>
        }
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={styles.flatlistContent}
        columnWrapperStyle={styles.flatlistcolumn}
        style={{paddingHorizontal: 10,paddingVertical:5}}
      />
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  flatlistContent:{
    paddingBottom: 20,
  },
  flatlistcolumn:{
    justifyContent: 'space-between',
  }
})