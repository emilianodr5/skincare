// import packages
import * as React from 'react';
import { useState} from 'react';
import { StyleSheet, Button, SafeAreaView, View, Text, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Camera, CameraType } from 'expo-camera';
import { Feather, Entypo } from "@expo/vector-icons";

// formatting code
// format name: {
  // arguments: params,
//},
// if someone could figure out how to import a CSS file into JS you could copy paste this thing on a different file
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
    container2: {
      flex: 1,
      justifyContent: 'center',
    },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  camera: {
    flex: 1,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  searchContainer: {
    margin: 50,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "80%",

  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});

// separator between buttons
const Separator = () => <View style={styles.separator} />; 

// search bar layout with formats. needs actions on press and linked lists
// notice how this is a "const" and not a function, which the other main screens and camera are.
// constants can get used inside functions with the notation
// <SafeAreaView>
//  <SearchBar></SearchBar>
// </SafeAreaView>
const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setClicked}) => {
  return (
    <View style={styles.searchContainer}>
      <View
        style={
          clicked
            ? styles.searchBar__clicked
            : styles.searchBar__unclicked
        }
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
              setSearchPhrase("")
          }}/>
        )}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
          ></Button>
        </View>
      )}
    </View>
  );
}; // opens a search bar


// home screen
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
    <View>
      <Button // button layout: title, text color, action on press
        title="Scan an Ingredient Label"
        color="#9c4f96"
        onPress={() => navigation.navigate('Camera')} // opens the stack (see createStackNavigator) named "camera",
        // which corresponds to the "component" 'ScanIngredients' as defined in MyStack 
      />
    </View>
    <Separator />
    <View>
      <Button
        title="Look up an ingredient"
        color="#ff6355"
        onPress={() => navigation.navigate('Search Ingredients')} // opens the 'Search Ingredients' stack corresponding to the SearchIngredients() function
      />
    </View>
    <Separator />
    <View>
      <Button
        title="How Our Rating System Works"
        color="#fba949"
        onPress={() => navigation.navigate('Ratings Explained')} // same as last button
      />
    </View>
    <Separator />
    <View> 
        <Button
          title="FAQs"
          color="#fae442"
          onPress={() => navigation.navigate('Frequently Asked Questions')}
        />
    </View>
    <Separator />
    <View>
        <Button
          title="Request an Ingredient"
          color="#8bd448"
          onPress={() => navigation.navigate('Add Ingredients')}
        />
    </View>
  </SafeAreaView>
  );
}

// defines basic camera usage with permission request and front/back camera. need OCR
function ScanIngredients() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View style={styles.container2}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

// for the search ingredients page. contains search bar only as of right now
function SearchIngredients() {
  return(
    <SafeAreaView>
      <SearchBar></SearchBar>
    </SafeAreaView>
  )
}

// ratings explained will need a picture pop up with some info, could figure out a placeholder for now
function RatingsExplained({ navigation }) {
  return(
   <SafeAreaView style={styles.container} >
    <View>
    <Button 
    title="Go back" 
    onPress={() => navigation.goBack()} />
    </View>
   </SafeAreaView>
  );
}

// need to implement a static list (FAQ database) and drop downs for each question
function FAQs({ navigation }) {
  return(
   <SafeAreaView style={styles.container} >
    <View>
    <Button 
    title="Go back" 
    onPress={() => navigation.goBack()} />
    </View>
   </SafeAreaView>
  );
}

// this page also only has a search bar. will need to just change it to input bar but very simple.
function RequestIngredient() {
  return(
   <SafeAreaView>
    <SearchBar></SearchBar>
   </SafeAreaView>
  );
}

// builds a navigator between the functions(pages)
const Stack = createStackNavigator();

// create a stack including all the screens created by Stack
function MyStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="GLOskin" component={HomeScreen} />
        <Stack.Screen name="Scan Ingredient Label" component={ScanIngredients} />
        <Stack.Screen name="Search Ingredients" component={SearchIngredients} />
        <Stack.Screen name="Ratings Explained" component={RatingsExplained} />
        <Stack.Screen name="Frequently Asked Questions" component={FAQs} />
        <Stack.Screen name="Add Ingredients" component={RequestIngredient} />
      </Stack.Navigator>
  );
}

// the app as a whole is built of these stacks, that need navigation ability to go back and forth
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
