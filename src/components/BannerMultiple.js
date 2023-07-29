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
import BannerSingle from './BannerSingle';

const {width, height} = Dimensions.get('window');

// const styles=StyleSheet.create({

//     titleStyle:{marginLeft:10,marginVertical:10,fontWeight:'bold',color:Colors.black}
// })

export default function BannerMultiple({Banners}) {
  const ShowItem = ({product}) => {
    return <BannerSingle data={product} />;
  };

  return (
    <View>
      <Text  style={{
          marginLeft: 10,
          marginVertical: 10,
          fontWeight: 'bold',
          color: Colors.black,
        }}>Banners</Text>
      <View style={{flexDirection: 'column'}}>
        <FlatList
          data={Banners}
          horizontal={false}
          scrollEnabled
          numColumns={1}
          key={1}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <ShowItem product={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}
