import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheetProperties,
  StyleSheet,
} from 'react-native';
//import Colors from '../../assets/Colors';
import SingleProductComponent from '../components/SingleProductComponent';
import TextBox from '../components/TextBox';
import styles from './MultipleProductComponentCss';

const {width, height} = Dimensions.get('window');

// const styles=StyleSheet.create({

//     titleStyle:{marginLeft:10,marginVertical:10,fontWeight:'bold',color:Colors.black}
// })

export default function MultipleProductsComponent({products,title,setRefresh,refresh})
{  const ShowItem = ({product}) =>{
    
   return <SingleProductComponent setRefresh={setRefresh} refresh={refresh} data={product}/>
}
  // console.log('vvvvvv',products)
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        data={products}
        // numColumns={2}
        horizontal={true}
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <ShowItem product={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
