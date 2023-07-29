import {ScrollView, View, Text, Dimensions, Image} from 'react-native';
import {ServerURL} from '../services/ServerServices';
import Colors from '../../assets/Colors';

const {width, height} = Dimensions.get('window');
export default function CircleComponent({heading, categoryData}) {
  const colorList = ['#FFC312', '#D980FA', '#778ca3', '#45aaf2', '#FDA7DF'];
  // const category=[{categoryid:1,image:"kissan.png",name:'Kissan'},{categoryid:1,image:"gems.png",name:"Gems"},{categoryid:1,image:"redlabel.png",name:"Red Lable"},{categoryid:1,image:"kissan.png",name:'Kissan'},{categoryid:1,image:"gems.png",name:"Gems"},{categoryid:1,image:"redlabel.png",name:"Red Lable"}]
  const showCategory = () => {
    return categoryData?.map(item => {
      return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              margin: 4,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor:
                colorList[parseInt(Math.random() * colorList.length)],
              width: 100,
              height: 100,
              borderRadius: 50,
            }}>
            <Image
              style={{resizeMode: 'contain', width: 60, height: 60}}
              source={{uri: `${ServerURL}/images/${item.icon}`}}
            />
          </View>
          <Text numberOfLines={1} ellipsizeMode="tail" style={{width: 100,textAlign:'center'}}>
            {item.categoryname}
          </Text>
        </View>
      );
    });
  };

  return (
    <View>
      <Text
        style={{
          marginLeft: 10,
          marginVertical: 10,
          fontWeight: 'bold',
          color: Colors.black,
        }}>
        {heading}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {showCategory()}
        </ScrollView>
      </View>
    </View>
  );
}
