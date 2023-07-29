// import {Text, View} from 'react-native';
// import Delivery from '../components/Delivery';

// // import BigSummerSingle from '../components/BigSummerSingle';
// import BigSummerMultiple from '../components/BigSummerMultiple';
// export default function Cart() {

//      var Summers=[{productid:100,nam:'Coldrink & Juice',picture:'kissan.png'},
// {productid:200,nam:'Pads',picture:'lays.png'},
// {productid:300,nam:'Soaps',picture:'redlabel.png'},
// {productid:400,nam:'Bottels & Mugs',picture:'4141.jpg'},
// {productid:500,nam:'IceCream',picture:'5151.jpg'},
//       ]
//   return (
//     <View>
//       {/* <View>
//         <BigSummerSingle />
//       </View> */}

//       <View>
//         <BigSummerMultiple Summers={Summers} />
//       </View>

//     </View>
//   );
// }

import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import Delivery from '../components/Delivery';
//  import ShowCart from "../components/ShowCart"
// import BigSummerSingle from "../components/BigSummerSingle"
// import BrandsInFocus from "../components/SimpleBrandsInFocus"
//import MultipleBrandInFocus from "../components/MultipleBrandInFocus"

import BigSummerSingle from '../components/BigSummerSingle';
import Colors from '../../assets/Colors';
import BigSummerMultiple from '../components/BigSummerMultiple';
import BannerSingle from '../components/BannerSingle';
import BannerMultiple from '../components/BannerMultiple';
import ShowCart from '../components/ShowCart';
import ShowCartMultiple from '../components/ShowCartMultiple';
import ImageComponent from '../components/ImageComponent';

export default function Cart() {
  // var Cart=[{productlistid:100,image:'brand1.jpg',imag:'yoga.jpg',arrow:'arrow.jpg'},
  //           {productlistid:200,image:'brand2.jpg',imag:'let.jpg',arrow:'arrow.jpg'},
  //           {productlistid:300,image:'brand3.jpg',imag:'raj.jpg',arrow:'arrow.jpg'},
  //           {productlistid:300,image:'brand4.jpg',imag:'stay.jpg',arrow:'arrow.jpg'},

  // ]

  var Summers = [
    {productid: 100, picture: 'skin.jpg', name: 'Skincare & More'},
    {productid: 200, picture: 'bathing.jpg', name: 'Bathing & Essentials'},
    {productid: 300, picture: 'season.jpg', name: 'Season Favourites'},
    {productid: 400, picture: 'soft.jpg', name: 'Soft Drinks & Juices'},
    {productid: 400, picture: 'ice.jpg', name: 'Ice Creams'},
    {productid: 400, picture: 'home.jpg', name: 'Home Care Essentials'},
  ];

  var Carts = [
    {productid: 100, nam: 'Coldrink & Juice', picture: 'kissan.png'},
    {productid: 200, nam: 'Chips', picture: 'lays.png'},
    {productid: 300, nam: 'Tea', picture: 'redlabel.png'},
    {productid: 400, nam: 'IceCream', picture: '4141.jpg'},
    {productid: 500, nam: 'GuluconD Energy', picture: '5151.jpg'},
  ];

  var Banners = [
    {productid: 100, picture: 'b1.jpg'},
    {productid: 200, picture: 'b2.jpg'},
    {productid: 300, picture: 'b3.jpg'},
    {productid: 400, picture: 'b4.jpg'},
    {productid: 500, picture: 'b5.jpg'},
  ];

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{backgroundColor: Colors.white}}>
          {/* <View>
        <BigSummerSingle />
       </View> */}

          <View>
            <BigSummerMultiple Summers={Summers} />
          </View>

          {/* <View>
        <Delivery />
      </View> */}

          {/* <View>
        <ShowCart />
       </View> */}

          {/* <View>
        <ShowCartMultiple Carts={Carts} />
      </View> */}

          <View>
            <BannerMultiple Banners={Banners} />
          </View>

          {/* 
<View>
        <ImageComponent />
       </View> */}

          {/* <View>
            <MultipleBrandInFocus Cart={Cart}/>
           </View> */}

          {/* <View> */}
          {/* <ShowCart  Cart={ShowCart}/> */}
          {/* </View> */}

          {/* <View> */}
          {/* <BrandsInFocus/> */}
          {/* </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
