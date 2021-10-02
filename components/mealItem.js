import React from 'react';
import { Text,View,TouchableWithoutFeedback,StyleSheet,ImageBackground,Image} from 'react-native';
const MealItem=props=>{
    return(
    <View style={styles.container}>
       <TouchableWithoutFeedback onPress={()=>props.onSelect(props.id)}>
            <View>
             <View style={{...styles.row,...styles.header}}>
                 <ImageBackground 
                     style={styles.bgImg}
                     source={{uri:props.imageUrl}}
                   >
                 <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
                 </ImageBackground>
             </View>
             <View style={{...styles.row,...styles.body}}>
                  <Text>{props.duration}m</Text>
                  <Text>{props.complexity.toUpperCase()}</Text>
                  <Text>{props.affordability.toUpperCase()}</Text>
             </View>
            </View>
        </TouchableWithoutFeedback>
    </View>
    )
}

export const MealItemWeb=props=>{
    return(
    <TouchableWithoutFeedback onPress={()=>props.onSelect(props.id)}>
      <View style={styles.container}>
      <ImageBackground style={{width:'100%',height:'90%'}} source={{uri:props.imageUrl}} >
          <Text style={styles.title}>{props.title}</Text>
      </ImageBackground>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%',paddingHorizontal:10}}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
       </View>
      </View>
    </TouchableWithoutFeedback>
    )
}

const styles=StyleSheet.create({
    container:{
        height:250,
        width:'100%',
        backgroundColor:'white',
        marginVertical:20,
        maxWidth:300,
        alignItems:'center'
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    header:{
        height:'90%'
    },
    body:{
        justifyContent:"space-between",
        paddingHorizontal:10,
        alignItems:'center'
    },
    bgImg:{
        width:'100%',
        height:'100%'
    },
    title:{
        backgroundColor:'rgba(0,0,0,0.4)',
        color:'white',
        padding:5
    }
})
export default MealItem;