// import { ScrollView,View,Text,Dimensions,Image } from "react-native";
// import { ServerURL } from "../services/ServerServices";
// import Colors from "../../assets/Colors";
// import Button from "./Button";

// const {width, height} = Dimensions.get('window');
// export default function UnitComponent({data})
// {
//     return(
//         <View style={{margin:10}}>
//             <View style={{alignItems:'center',borderColor:' #a4b0be',borderWidth:1,width:width*0.4,height:height*0.3,borderRadius:10}}>
//             {/* <Image
//           style={{resizeMode: 'contain', width: 100, height: 100}}
//           source={{uri:`${ServerURL}/images/${data.image}`}}
//         /> */}

//         <Text style={{marginVertical:5,fontWeight:'bold'}}>{data.productlistname} {data.weight}</Text>
//         <View style={{alignItems:'flex-start',width:width*0.3}}>
//         <Text style={{color:Colors.red,fontWeight:'bold',textDecorationLine:'line-through'}}>&#8377; 240</Text>
//         <Text style={{color:Colors.black,fontWeight:'bold'}}>&#8377; {data.offer}</Text>
//         <Text style={{color:Colors.darkGreen,fontWeight:'bold'}}>save &#8377; {data.price-data.offer}</Text>
//         <View style={{marginVertical:10}}>
//         <Button title={"ADD"} bgColor={Colors.black} foreColor={Colors.white} />
//         </View>
//         </View>

        
        
//         </View>
//         </View>

//     )
// }