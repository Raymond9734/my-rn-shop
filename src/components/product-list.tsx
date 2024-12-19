import { View, Text,StyleSheet,Image, Pressable } from 'react-native';
import React from 'react';
import { Product } from '../../assets/types/product';
import { Link } from 'expo-router';
const ProductList = ({products}:{products: Product}) => {
  return (
    <Link asChild href={`/product/${products.id}`}>
    <Pressable style={styles.item}>
      <View style={styles.itemImageContainer}>
        <Image source={products.heroImage} style={styles.itemImage} />
      </View>
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemTitle}>{products.title}</Text>
        <Text style={styles.itemPrice}>${products.price.toFixed(2)}</Text>
      </View>
    </Pressable>
    </Link>
  )
}
export default ProductList;

const styles = StyleSheet.create({
  item:{
        width: '48%',
        backgroundColor: 'white',
        marginVertical: 8,
        borderRadius: 10,
        overflow:'hidden',
    },
    itemImageContainer:{
        borderRadius: 10,
        width: '100%',
        height:150,
    },
    itemImage:{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    itemTitle:{
        fontSize:16,
        color: '#888',
        fontWeight:'bold',
    },
    itemPrice:{
        fontSize:16,
        fontWeight:'bold',
    },
    itemTextContainer:{
        padding: 8,
        alignItems: 'center',
        gap: 4,
    }
})