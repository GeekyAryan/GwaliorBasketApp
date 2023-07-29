import { ScrollView,View,Text,Dimensions,Image } from "react-native";
import { ServerURL } from "../services/ServerServices";
import Colors from "../../assets/Colors";

const {width, height} = Dimensions.get('window');
export default function BigSummerSingle({data})

{


    return(<View style={{margin:10}}>
        <View style={{alignItems:"center"}}>
               <Image
          style={{resizeMode: 'contain', width: 100, height: 100,borderRadius:18}}
          source={{uri:`${ServerURL}/images/${data.picture}`}}
        />
         </View>
         <Text style={{
  
 
 
 
  alignItems: "center",
  position: "absolute",
  left: "10%",
  top: "70%",
  color:Colors.grey,
  fontWeight:'500',
  fontSize:18,}}>{data.name}</Text>

        </View>)}
    
// import {ScrollView, View,Text,Dimensions,Image, StyleSheet} from "react-native"
// import { ServerURL } from "../services/ServerServices";
// import Colors from "../../assets/Colors";


// const {width, height} = Dimensions.get('window');
// export default function BigSummerSingle({data})
// {   

 
  
   

//   return(<View style={{margin:10}} >
//          <View style={{alignItems:'center'}}> 
//        <Image
//         style={{resizeMode:'contain',width:105,height:160 ,borderRadius:18}}
//         source={{uri:`${ServerURL}/images/c1.jpg`}}
        
 
//        />
//        <Text 

// style={{
  
 
 
 
//   alignItems: "center",
//   position: "absolute",
//   left: "10%",
//   top: "70%",
//   color:Colors.black,
//   fontWeight:'500',
//   fontSize:18,
  
  
  
  
// }}
// ellipsizeMode='clip'
//   numberOfLines={2}
       
       
//        >
        
//         xxxxxxx</Text>
        
//          </View>
//   </View>)

// }
