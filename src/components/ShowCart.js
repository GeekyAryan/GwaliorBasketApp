import Colors from '../../assets/Colors';
import Delivery from './Delivery';
import {Text, View, Image,Dimensions} from 'react-native';
import {ServerURL} from '../services/ServerServices';
import Button from './Button';
const {width, height} = Dimensions.get('window');

export default function ShowCart({data}) {
  console.log(data);
  return (
    <View
      style={{
        justifyContent: 'center',
        flexDirection: 'row',
        marginHorizontal:15,
        marginVertical:8
        
      }}>

      <View>
     
        <Image
          style={{
            resizeMode: 'contain',
            width: 70,
            height: 55,
            borderRadius: 18,
            flexDirection: 'row',
            justifyContent:'center'
          }}
          source={{uri: `${ServerURL}/images/${data.picture}`}}
        />
      
      
      <View style={{flexDirection:'column'}}>
        <View>
          <Text style={{fontSize: 16, fonWeight: 'bold'}}>{data.nam.substring(0,12)+"..."}</Text>
          <Text>5kg</Text>
          <Text style={{fontWeight: 'bold'}}>&#8377;90</Text>
        </View>

        </View>

<View>
        {/* <Button
          style={{ width: 20}}
          title={'ADD'}
          foreColor={Colors.white}
          bgColor={Colors.black}
        /> */}

<Button title={"ADD"} bgColor={Colors.darkGreen} foreColor={Colors.white} width={width*0.22}  />
        </View>
      </View>
    </View>
  );
}
