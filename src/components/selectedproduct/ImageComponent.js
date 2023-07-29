import { ScrollView,Text, View, Image, } from "react-native";
import { ServerURL } from "../../services/ServerServices";

export default function ImageComponent({images}) {
    console.log("yyyyy",images)
   const smallImages =()=>{
        return images.map((item)=>{
        return(
            <View style={{padding:10}}>
                <Image
                style={{ resizeMode: 'contain', width: 80, height: 80 }}
                source={{ uri: `${ServerURL}/images/${item}` }}
            />
            </View>
        )})
    }

    return (<View>
        
        <View style={{padding:20,  }} >
            <Image
                style={{ resizeMode: 'contain', width: 350, height: 350, }}
                source={{ uri: `${ServerURL}/images/${images[0]}` }}
            />
        </View>
       <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            {smallImages()}
            </ScrollView>
    </View>

    </View>)
}