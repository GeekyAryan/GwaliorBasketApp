// import { ScrollView,View,Text,Dimensions,Image ,Animated} from "react-native";
// import { ServerURL } from "../services/ServerServices";
// import React, {Component} from 'react'
// import Colors from "../../assets/Colors";

// import { PinchGestureHandler ,State} from "react-native-gesture-handler";
// // import Animated, { event } from "react-native-reanimated";
// const {width, height} = Dimensions.get('window');

// const ImageComponent=()=>{

// {

//     scale= new Animated.Value(1)
//     onZoomEventFunction=Animated.event(
//     [{
//         nativeEvent:{scale:this.scale}
//     }],
//     {
//         useNativeDriver:true
//     }
//     )

//     onZoomStateChangeFunction=(event)=>{
//         if(event.nativeEvent.oldState==State.ACTIVE){
//             Animated.spring(this.scale,{
//             toValue:1,
//             useNativeDriver:true
//         }).start()
//     }
//     }


//     return(<View style={{margin:10}}>
//         <View style={{alignItems:"center",alignItems:"center",flex:1}}>
//             <PinchGestureHandler
//             onGestureEvent={this.onZoomEventFunction}
//             onHandlerStateChange={this.onZoomStateChangeFunction}
//             >
//                <Animated.Image
//           style={{resizeMode: 'contain', width: 150, height: 250,borderRadius:18,transform:[{scale:this.scale}]}}
//           source={{uri:`${ServerURL}/images/${item}`}}
//           resizeMode={'contain'}
//         />
// </PinchGestureHandler>



//          </View>

//          <View>
//          <Text style={{
  
 
 
 
//   alignItems: "center",
//   position: "absolute",
//   left: "10%",
//   top: "70%",
//   color:Colors.black,
//   fontWeight:'500',
//   fontSize:18,}}></Text>

// </View>

//         </View>)}
// }

//         export default ImageComponent;

