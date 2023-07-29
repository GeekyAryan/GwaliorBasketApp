import {
    View,
    Text,
    FlatList,
    Dimensions,
    StyleSheetProperties,
    StyleSheet,
  } from 'react-native';
  import Colors from '../../assets/Colors';
  import SingleProductComponent from '../components/SingleProductComponent';
  import TextBox from '../components/TextBox';
  import styles from './MultipleProductComponentCss';
  import BigSummerSingle from './BigSummerSingle';
  
  const {width, height} = Dimensions.get('window');
  
  // const styles=StyleSheet.create({
  
  //     titleStyle:{marginLeft:10,marginVertical:10,fontWeight:'bold',color:Colors.black}
  // })
  
  export default function BigSummerMultiple({Summers}) {
    const ShowItem = ({product}) => {
     return <BigSummerSingle data={product} />
    }
  
    
    return (
      <View>
        <Text  style={{
          marginLeft: 10,
          marginVertical: 10,
          fontWeight: 'bold',
          color: Colors.black,
        }}>Summers</Text>
        <FlatList
          data={Summers}
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
  