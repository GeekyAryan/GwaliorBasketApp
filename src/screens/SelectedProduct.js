// import { Text, View, Dimensions ,SafeAreaView, ScrollView} from "react-native";
// import ImageComponent from "../components/selectedproduct/ImageComponent";
// import UnitComponent from "../components/selectedproduct/UnitComponent";
// import {useState,useEffect} from "react"

// import Time from "../components/selectedproduct/Time";

// const {width, height} = Dimensions.get('window')

// export default function SelectedProduct(props){

    
//     const time = {time:'10 min'}
//     const  [product,setProduct]=useState(props.route.params.product)
//     //console.log("xxxxxxx",product)
//     var images=product.images.split(",")
//     return(<View>
      
//       <SafeAreaView>
//       <ScrollView>

//         <ImageComponent images={images} /> 
//        <Text style={{fontSize:18, fontWeight:500, color:'black', padding:10}} >{product.productname} {product.weight}{product.pricetype}</Text>
//         <Time data={time} />
//         <UnitComponent setProduct={setProduct} product={product} />

//              </ScrollView>
//     </SafeAreaView>
//     </View>)
// }

import { Text, View, Dimensions ,ScrollView} from "react-native";
import ImageComponent from "../components/selectedproduct/ImageComponent";
import UnitComponent from "../components/selectedproduct/UnitComponent";
import {useState,useEffect} from "react"
import PlusMinusButton from "../components/PlusMinusButton";
import Time from "../components/selectedproduct/Time";
import { Provider,useDispatch,useSelector } from "react-redux";
import FloatingCart from "../components/FloatingCart";
 import Colors from "../../assets/Colors";
// import { Colors } from "react-native/Libraries/NewAppScreen";


const {width, height} = Dimensions.get('window')

export default function SelectedProduct(props){
 var dispatch=useDispatch()
 var cart=useSelector((state)=>state.cart)
var keys=Object.keys(cart)
    
    const time = {time:'10 min'}
    const  [product,setProduct]=useState(props.route.params.product)
    const  [refresh,setRefresh]=useState(false)
    //console.log("xxxxxxx",product)
    var images=product.image.split(",")

    const handleQtyChange=(value,product)=>{
        if(value==0)
        {
          dispatch({type:'DELETE_CART',payload:[product.productlistid,product]})  
        }
        else
        {
        product['qty']=value
    
        dispatch({type:'ADD_CART',payload:[product.productlistid,product]})
        }
     
         setRefresh(!refresh)
      }




    return(<View>
        {/* <ScrollView> */}
      {/* <View style={{width:width,justifyContent:'center',alignItems:'center'}}> */}
        <ImageComponent images={images} /> 
        {/* </View> */}
       <Text style={{fontSize:18, fontWeight:500, color:'black', padding:10}} >{product.productname} {product.weight}{product.pricetype}</Text>
       {keys?.length>0?<FloatingCart />:<></>}
        <Time data={time} />
      
        <UnitComponent setProduct={setProduct} product={product} />
        
   <View style={{display:'flex',alignItems:'center',justifyContent:'center'}}>

   <PlusMinusButton data={product} onChange={(value)=>handleQtyChange(value,product)}  width={150} title={"ADD"} bgColor={Colors.darkGreen} foreColor={Colors.white}   />

   </View> 
   
   {/* </ScrollView> */}
</View>)
}