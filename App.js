// import packages
import * as React from 'react';
import { StyleSheet, Button, SafeAreaView, View, Text, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// formatting code
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
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
});

const Separator = () => <View style={styles.separator} />; // defines separator between buttons

// home screen
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
    <View>
      <Button // button layout: title, text color, action on press
        title="Scan an Ingredient Label"
        color="#9c4f96"
        onPress={() => Alert.alert('Cannot open Camera')} // opens an alert as we need to figure out how to connect camera
      />
    </View>
    <Separator />
    <View>
      <Button
        title="Look up an ingredient"
        color="#ff6355"
        onPress={() => navigation.navigate('Search Ingredients')} // opens new page
      />
    </View>
    <Separator />
    <View>
      <Button
        title="How Our Rating System Works"
        color="#fba949"
        onPress={() => navigation.navigate('Ratings Explained')}
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


// new pages all the same, just different names for reference
function SearchIngredients({ navigation }) {
  const [value, onChangeText] = React.useState('Useless Multiline Placeholder'); // currently unused but initial point for search bar
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

function RequestIngredient({ navigation }) {
  const [value, onChangeText] = React.useState('Useless Multiline Placeholder');
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

// builds a navigator between the functions
const Stack = createStackNavigator();

// create a stack including all the screens created by Stack
function MyStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="GLOskin" component={HomeScreen} />
        <Stack.Screen name="Search Ingredients" component={SearchIngredients} />
        <Stack.Screen name="Ratings Explained" component={RatingsExplained} />
        <Stack.Screen name="Frequently Asked Questions" component={FAQs} />
        <Stack.Screen name="Add Ingredients" component={RequestIngredient} />
      </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
