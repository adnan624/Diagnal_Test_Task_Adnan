import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  ActivityIndicator,
} from 'react-native';
import pageData1 from './API/CONTENTLISTINGPAGE-PAGE1.json';
import pageData2 from './API/CONTENTLISTINGPAGE-PAGE2.json';
import PageData3 from './API/CONTENTLISTINGPAGE-PAGE3.json';

const App = () => {
  const [data, setData] = useState([]);

  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
    setData(pageData1.page.content);
    // let arr = [];
    // pageData1.page.content.map(item => {
    //   if (item.poster_image) {
    //     let img = `../DemoTask_Adnan/assets/${item.poster_image}`;
    //     arr.push({...item, imagePath: img});
    //     console.log('new array-----', arr);
    //     setData(arr);
    //   }
    // });
  }, []);

  function imagePath(image_Name) {
    if (image_Name == 'poster1.jpg') {
      return (
        <Image
          source={require('./assets/poster1.jpg')}
          style={{height: 100, width: 100}}
        />
      );
    } else if (image_Name == 'poster2.jpg') {
      return (
        <Image
          source={require('./assets/poster2.jpg')}
          style={{height: 100, width: 100}}
        />
      );
    } else if (image_Name == 'poster3.jpg') {
      return (
        <Image
          source={require('./assets/poster3.jpg')}
          style={{height: 100, width: 100}}
        />
      );
    } else if (image_Name == 'poster4.jpg') {
      return (
        <Image
          source={require('./assets/poster4.jpg')}
          style={{height: 100, width: 100}}
        />
      );
    } else if (image_Name == 'poster5.jpg') {
      return (
        <Image
          source={require('./assets/poster5.jpg')}
          style={{height: 100, width: 100}}
        />
      );
    } else if (image_Name == 'poster6.jpg') {
      return (
        <Image
          source={require('./assets/poster6.jpg')}
          style={{height: 100, width: 100}}
        />
      );
    } else if (image_Name == 'poster7.jpg') {
      return (
        <Image
          source={require('./assets/poster7.jpg')}
          style={{height: 100, width: 100}}
        />
      );
    } else if (image_Name == 'poster8.jpg') {
      return (
        <Image
          source={require('./assets/poster8.jpg')}
          style={{height: 100, width: 100}}
        />
      );
    } else if (image_Name == 'poster9.jpg') {
      return (
        <Image
          source={require('./assets/poster9.jpg')}
          style={{height: 100, width: 100}}
        />
      );
    }
  }

  const handleOnEndReached = async () => {
    setIsAnimate(true);
   
    setTimeout(() => {
      var arr = data;

      pageData2.page.content.map(item => {
        return arr.push(item);
      });
      setData(arr);
      setIsAnimate(false);
    }, 5000);
    console.log('adnan', data);
  };

  const renderItem = ({item}) => (
    <View style={styles.item}>
      {imagePath(item.poster_image)}
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={3}
        data={data}
        renderItem={renderItem}
        onEndReached={handleOnEndReached}
        ListFooterComponent={() => (
          <ActivityIndicator
            animating={isAnimate}
            size={'large'}
            color={'red'}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#000000',
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    marginVertical: 8,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 15,
  },
});

export default App;

// import React, {useState} from 'react';
// import {
//   Alert,
//   Modal,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   FlatList,
//   Image,
//   ScrollView
// } from 'react-native';

// const App = () => {
//   const [modalVisible, setModalVisible] = useState(false);

//   const [quantity, setquantity] = useState(1);

//   const Data = [
//     {
//       category: 'Choose your Vegetable',
//       value: ['Onion', 'Carrot', 'RedChilly', 'Honey Musturd', 'onion Sauce'],
//     },
//     {
//       category: 'Choose your Bread',
//       value: ['Rye Bread', 'Banana Bread'],
//     },
//     {
//       category: 'Select Add-On',
//       value: [
//         {
//           name: 'Coca cola',
//           image: require('../DemoTask_Adnan/assets/image/Img1.png'),
//         },
//         {
//           name: 'Salad',
//           image: require('../DemoTask_Adnan/assets/image/Img2.png'),
//         },
//       ],
//     },
//   ];

//   const renderItem1 = ({item}) => (
//     <View
//       style={{
//         marginVertical: 5,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//       }}>
//       <Text style={{fontSize: 15}}>{item}</Text>
//       <TouchableOpacity>
//         <Image
//           source={require('../DemoTask_Adnan/assets/image/Check1.png')}
//           style={{height: 20, width: 20}}
//         />
//       </TouchableOpacity>
//     </View>
//   );

//   const renderItem2 = ({item}) => (
//     <View
//       style={{
//         margin: 5,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//       }}>
//       <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
//         <Image
//           source={item.image}
//           style={{height: 50, width: 50, borderRadius: 10, marginRight: 10}}
//         />
//         <View>
//           <Text style={{fontSize: 15}}>{item.name}</Text>
//           <Text style={{fontSize: 15}}>30 LYD</Text>
//         </View>
//       </View>

//       <TouchableOpacity>
//         <Image
//           source={require('../DemoTask_Adnan/assets/image/Check1.png')}
//           style={{height: 20, width: 20}}
//         />
//       </TouchableOpacity>
//     </View>
//   );

//   const renderItem = ({item}) => (
//     <View
//       style={{
//         marginHorizontal: 20,
//       }}>
//       <Text style={{fontSize: 20, fontWeight: 'bold', marginVertical: 10}}>
//         {item.category}
//       </Text>

//       {item.category == 'Select Add-On' ? (
//         <FlatList data={item.value} renderItem={renderItem2} />
//       ) : (
//         <FlatList data={item.value} renderItem={renderItem1} />
//       )}
//     </View>
//   );

//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Modal animationType="slide" transparent={true} visible={modalVisible}>
//         <View
//           style={{
//             backgroundColor: 'gray',
//             flex: 1,
//             justifyContent: 'flex-end',
//           }}>

//           <View
//             style={{
//               backgroundColor: '#FFFFFF',
//               height: '90%',
//               borderRadius: 30,
//             }}>

//             <View
//               style={{
//                 padding: 20,
//                 borderBottomWidth: 1,
//                 borderBottomColor: 'gray',
//                 flexDirection: 'row',
//                 justifyContent: 'space-between',
//                 marginBottom: 10,
//               }}>
//               <Text style={{fontSize: 20, fontWeight: 'bold', width: '50%'}}>
//                 Honey Veg Curb Sandwich
//               </Text>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   alignItems: 'center',
//                   alignSelf: 'flex-start',
//                 }}>
//                 <Image
//                   source={require('../DemoTask_Adnan/assets/image/Star.png')}
//                   style={{height: 20, width: 20, marginRight: 10}}
//                 />
//                 <Text style={{fontSize: 14, fontWeight: '600'}}>4.9</Text>
//               </View>
//             </View>
//             <ScrollView>

//             <View>
//               <FlatList data={Data} renderItem={renderItem}

//                />
//             </View>

//             {/**Bottom view for Button and other stuff */}
//             <View
//               style={{
//                 width: '100%',
//                 backgroundColor: '#FFFFFF',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 padding: 15,
//                 borderTopWidth: 1,
//                 borderTopColor: 'gray',
//               }}>
//               <View style={{width: '100%', paddingHorizontal: 10}}>
//                 <Text
//                   style={{marginBottom: 15, fontSize: 20, fontWeight: '500'}}>
//                   Quantity
//                 </Text>
//                 <Text style={{color: 'gray', marginBottom: 10, fontSize: 15}}>
//                   Please select any one option
//                 </Text>

//                 <View
//                   style={{
//                     flexDirection: 'row',
//                     justifyContent: 'space-between',
//                     alignItems: 'center',
//                   }}>
//                   <View style={{flexDirection: 'row', alignItems: 'center'}}>
//                     <View
//                       style={{
//                         width: 15,
//                         height: 15,
//                         borderRadius: 7,
//                         borderWidth: 1,
//                         borderColor: '#000000',
//                         margin: 10,
//                       }}></View>
//                     <Text style={{fontSize: 18}}>Half</Text>
//                   </View>

//                   <View style={{flexDirection: 'row'}}>
//                     <Text
//                       style={{
//                         color: '#18212a',
//                         fontSize: 17,
//                         fontWeight: '700',
//                       }}>
//                       152
//                     </Text>
//                     <Text
//                       style={{
//                         color: 'gray',
//                         fontSize: 13,
//                         fontWeight: '700',
//                         alignSelf: 'flex-end',
//                         padding: 5,
//                       }}>
//                       LYD
//                     </Text>
//                   </View>
//                 </View>

//                 <View
//                   style={{
//                     flexDirection: 'row',
//                     justifyContent: 'space-between',
//                     alignItems: 'center',
//                   }}>
//                   <View style={{flexDirection: 'row', alignItems: 'center'}}>
//                     <View
//                       style={{
//                         width: 15,
//                         height: 15,
//                         borderRadius: 7,
//                         borderWidth: 1,
//                         borderColor: '#000000',
//                         margin: 10,
//                       }}></View>
//                     <Text style={{fontSize: 18}}>Full</Text>
//                   </View>

//                   <View style={{flexDirection: 'row'}}>
//                     <Text
//                       style={{
//                         color: '#18212a',
//                         fontSize: 17,
//                         fontWeight: '700',
//                       }}>
//                       152
//                     </Text>
//                     <Text
//                       style={{
//                         color: 'gray',
//                         fontSize: 13,
//                         fontWeight: '700',
//                         alignSelf: 'flex-end',
//                         padding: 5,
//                       }}>
//                       LYD
//                     </Text>
//                   </View>
//                 </View>
//               </View>

//               <View style={{flexDirection: 'row', alignItems: 'center'}}>
//                 <TouchableOpacity
//                   style={{
//                     shadowColor: '#000',
//                     shadowOffset: {
//                       width: 0,
//                       height: 6,
//                     },
//                     shadowOpacity: 0.37,
//                     shadowRadius: 7.49,
//                     elevation: 12,
//                     height: 30,
//                     width: 30,
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     borderRadius: 5,
//                     margin: 20,
//                     backgroundColor: '#FFFFFF',
//                   }}
//                   onPress={() => setquantity(quantity - 1)}>
//                   <Text style={{fontSize: 25, fontWeight: 'bold'}}>-</Text>
//                 </TouchableOpacity>

//                 <Text style={{fontSize: 20, fontWeight: 'bold'}}>
//                   {quantity}
//                 </Text>

//                 <TouchableOpacity
//                   style={{
//                     shadowColor: '#000',
//                     shadowOffset: {
//                       width: 0,
//                       height: 6,
//                     },
//                     shadowOpacity: 0.37,
//                     shadowRadius: 7.49,
//                     elevation: 12,
//                     height: 30,
//                     width: 30,
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     borderRadius: 5,
//                     margin: 20,
//                     backgroundColor: '#FFFFFF',
//                   }}
//                   onPress={() => setquantity(quantity + 1)}>
//                   <Text style={{fontSize: 25, fontWeight: 'bold'}}>+</Text>
//                 </TouchableOpacity>
//               </View>

//               <TouchableOpacity
//                 style={{
//                   height: 50,
//                   width: '80%',
//                   flexDirection: 'row',
//                   justifyContent: 'space-between',
//                   backgroundColor: '#1ca996',
//                   padding: 10,
//                   alignItems: 'center',
//                   borderRadius: 10,
//                   marginBottom: 20,
//                 }}>
//                 <Text style={{color: '#fcfdff', fontSize: 16}}>
//                   Add To Cart
//                 </Text>
//                 <Text style={{color: '#fcfdff', fontSize: 16}}>202 LYD</Text>
//               </TouchableOpacity>
//             </View>
//             </ScrollView>

//           </View>
//         </View>
//       </Modal>

//       <TouchableOpacity
//         style={{backgroundColor: 'gray', padding: 30, borderRadius: 15}}
//         onPress={() => setModalVisible(true)}>
//         <Text>Show Modal</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default App;
