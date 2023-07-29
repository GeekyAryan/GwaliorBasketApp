import {
    View,
    Text,
    FlatList,
    Dimensions,
    StyleSheetProperties,
    StyleSheet,Image
  } from 'react-native';
  import Colors from '../../assets/Colors';
 // import SingleProductComponent from '../components/SingleProductComponent';
  import TextBox from '../components/TextBox';
  import styles from './MultipleProductComponentCss';
  import ShowCart from './ShowCart';
  
  const {width, height} = Dimensions.get('window');
  
  // const styles=StyleSheet.create({
  
  //     titleStyle:{marginLeft:10,marginVertical:10,fontWeight:'bold',color:Colors.black}
  // })
  
  export default function ShowCartMultiple ({Carts}) {
    const ShowItem = ({product}) => {
      return <ShowCart data={product} />
    }
    
    return (
      <View>
        <Text style={styles.titleStyle}>Items</Text>
        <FlatList
          data={Carts}
          horizontal={false}
          scrollEnabled
          numColumns={3}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <ShowItem product={item} />}
          keyExtractor={item => item.id}
        />
        
      </View>
    );
  }
  