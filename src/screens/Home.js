import {View, Text, Dimensions} from 'react-native';
import CircleComponent from '../components/CircleComponent';
// import SingleProductComponent from "../components/SingleProductComponent";
import TextBox from '../components/TextBox';
import MultipleProductComponent from '../components/MultipleProductComponent';
import {getData, postData} from '../services/ServerServices';
import {useEffect, useState} from 'react';
import BigSummerSingle from '../components/BigSummerSingle';
import FlashMessage, {showMessage} from 'react-native-flash-message';
import SingleProductComponent from '../components/SingleProductComponent';
import FloatingCart from '../components/FloatingCart';
import {useSelector}  from "react-redux"

// import { fetchAllCategory } from "../services/CallAPIServices";

const {width, height} = Dimensions.get('window');

export default function Home() {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);

  const [refresh,setRefresh]=useState(false)
  var cart=useSelector((state)=>state.cart)
var keys=Object.keys(cart)

  const setInitialData = async () => {
    // var result= fetchAllCategory()
    // console.log("12345",data)

    var result = await getData('userinterface/fetch_all_category');

    setCategory(result.data);

    var res = await postData('userinterface/fetch_products_by_category', {
      categoryname: 'Rice',
    });

    setProducts(res.data);
    // alert(JSON.stringify(res))
  };

  useEffect(function () {
    setInitialData();
  }, []);

  /* var products=[{productlistid:100,productlistname:'Kissan Fruit Jam',price:240,offer:200,weight:'1kg',image:'kissan.png'},
{productlistid:200,productlistname:'Lays',price:20,offer:18,weight:'10gram',image:'lays.png'},
{productlistid:300,productlistname:'Red Label Tea',price:540,offer:500,weight:'2kg',image:'redlabel.png'},
{productlistid:400,productlistname:'Cadbury Gems',price:40,offer:20,weight:'1kg',image:'gems.png'},
{productlistid:500,productlistname:'Tide Powder',price:440,offer:20,weight:'1kg',image:'tide.png'}
]*/
  return (
  
    <View>
      <View style={{alignItems: 'center', marginVertical: 10}}>
        <TextBox
          width={width * 0.94}
          placeHolder={'Search Products Here...'}
          icon={'magnify'}
        />
      </View>
      <CircleComponent heading={'Popular Categories'} categoryData={category} />
      <View>
        <MultipleProductComponent setRefresh={setRefresh} refresh={refresh} title={'Basmati'} products={products} />
      </View>

      {keys?.length>0?<FloatingCart />:<></>}

      {/* <View style={{ flex: 1 }}>
  <SingleProductComponent />
  <FlashMessage ref="myLocalFlashMessage" />   {/* <--- here as the last component always with `ref` as a prop */}
{/* </View>  */}
    </View>
 
  );
}
