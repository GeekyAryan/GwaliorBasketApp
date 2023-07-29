// import React from "react";
// import { View, Text, TouchableOpacity,Dimensions } from "react-native"
// import Button from "./Button";
// import { useState } from "react";
// import Colors from "../../assets/Colors";

// const {width, height} = Dimensions.get('window')
// export default function PlusMinusButton({ onPress = () => { }, width, bgColor, foreColor, height }) {

//     const [values, setValues] = useState(0)

//     const btnplus = () => {
//         if (values < 5) { setValues(prev => prev + 1) }
//     }
//     const btnminus = () => {
//         if (values > 0) { setValues(prev => prev - 1) }
//     }

//     return (
//         <>
//             {!values ? <Button onPress={() => { btnplus() }} bgColor={Colors.darkGreen} width={width} foreColor={Colors.white} title={"ADD"} height={"60%"} style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} /> :
//                 <View style={{ flexDirection: "row", alignItems: "center" }} >
//                     <TouchableOpacity onPress={() => { btnminus() }} style={{ width: 25, backgroundColor: Colors.darkGreen, height: 30, alignItems: 'center', alignSelf: 'center', justifyContent: 'center',borderTopLeftRadius:10 ,borderBottomLeftRadius:10}} >
//                         <Text style={{ Colors: '#fff' }}>-</Text>
//                     </TouchableOpacity>
//                     <View style={{ width: 25, backgroundColor: Colors.darkGreen, height: 30, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
//                         <Text style={{ Colors: "#fff" }}>{values}</Text>
//                     </View>
//                     <TouchableOpacity onPress={() => { btnplus() }} style={{ width: 25, backgroundColor: Colors.darkGreen, height: 30, alignItems: 'center', alignSelf: 'center', justifyContent: 'center',borderTopRightRadius:10,borderBottomRightRadius:10 }} >
//                         <Text style={{ Colors: '#fff' }}>+</Text>
//                     </TouchableOpacity>

//                 </View>}
//         </>
//     )
// }


import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import Button from './Button';
import {useState} from 'react';
import Colors from '../../assets/Colors';
import { useSelector } from 'react-redux';
const {width, height} = Dimensions.get('window');

export default function PlusMinusButton(props) {
  
   var cart=useSelector((state)=>state.cart)
    // console.log("CARRRT",cart)
    // console.log("DATA",props.data)
    var qty=cart[props.data.productlistid]?.qty
    
    var tqty=0
    if(qty!=undefined)
   tqty=qty
   console.log("QTTTY",qty)
   console.log("TQTY",tqty)
  const [values, setValues] = useState(tqty);
  



  const btnplus = () => {
    if (values < 5) {
      setValues(prev => prev + 1);
      props.onChange(values+1);
    }
  };
  const btnminus = () => {
    if (values > 0) {
      setValues(prev => prev - 1);
      props.onChange(values-1);
    }
  };

  return (
    <>
      {!values ? (
        <Button
          onPress={() => {
            btnplus();
          }}
          bgColor={Colors.darkGreen}
          width={props.width}
          foreColor={Colors.white}
          title={'ADD'}
          h
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}
        />
      ) : (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              btnminus();
            }}
            style={{
              width: props.width * 0.25,
              backgroundColor: Colors.darkGreen,
              height: 35,
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
            }}>
            <Text style={{color: Colors.white}}>-</Text>
          </TouchableOpacity>
          <View
            style={{
              width: props.width * 0.3,
              backgroundColor: Colors.white,
              height: 34.5,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              borderColor: Colors.darkGreen,
              borderWidth: 0.6,
            }}>
            <Text>{values}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              btnplus();
            }}
            style={{
              width: props.width * 0.25,
              backgroundColor: Colors.darkGreen,
              height: 35,
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
            }}>
            <Text style={{color: Colors.white}}>+</Text>
          </TouchableOpacity>
        </View>
      )}
</>
);
}



// import React from 'react';
// import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
// import Button from './Button';
// import {useState} from 'react';
// import Colors from '../../assets/Colors';
// import FlashMessage, {showMessage} from 'react-native-flash-message';

// const {width, height} = Dimensions.get('window');
// export default function PlusMinusButton({
//   onPress = () => {},
//   width,
//   bgColor,
//   foreColor,
//   height,
// }) {
//   const [values, setValues] = useState(0);
//   const btnplus = () => {
//     if (values < 5) {
//       setValues(prev => prev + 1);
//       if (values == 0) {
//         showMessage({
//           message: 'Item Add to Cart',
          
//           description: 'This is our second message',
//           type: 'success',
//         });
//       }
//     }
//   };
//   const btnminus = () => {
//     if (values > 0) {
//       setValues(prev => prev - 1);
//     }
//   };

//   return (
//     <>
//       {!values ? (
//         <Button
//           onPress={() => {
//             btnplus();
//           }}
//           bgColor={Colors.darkGreen}
//           width={width}
//           foreColor={Colors.white}
//           title={'ADD'}
//           height={'60%'}
//           style={{
//             justifyContent: 'center',
//             alignItems: 'center',
//             alignSelf: 'center',
//           }}
//         />
//       ) : (
//         <View style={{flexDirection: 'row', alignItems: 'center'}}>
//           <TouchableOpacity
//             onPress={() => {
//               btnminus();
//             }}
//             style={{
//               width: 25,
//               backgroundColor: Colors.darkGreen,
//               height: 30,
//               alignItems: 'center',
//               alignSelf: 'center',
//               justifyContent: 'center',
//               borderTopLeftRadius: 10,
//               borderBottomLeftRadius: 10,
//             }}>
//             <Text style={{Colors: '#fff'}}>-</Text>
//           </TouchableOpacity>
//           <View
//             style={{
//               width: 25,
//               backgroundColor: Colors.darkGreen,
//               height: 30,
//               justifyContent: 'center',
//               alignItems: 'center',
//               alignSelf: 'center',
//             }}>
//             <Text style={{Colors: '#fff'}}>{values}</Text>
//           </View>
//           <TouchableOpacity
//             onPress={() => {
//               btnplus();
//             }}
//             style={{
//               width: 25,
//               backgroundColor: Colors.darkGreen,
//               height: 30,
//               alignItems: 'center',
//               alignSelf: 'center',
//               justifyContent: 'center',
//               borderTopRightRadius: 10,
//               borderBottomRightRadius: 10,
//             }}>
//             <Text style={{Colors: '#fff'}}>+</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </>
//   );
// }
