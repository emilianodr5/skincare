import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native'; // adds necessary packages

const Separator = () => <View style={styles.separator} />; // defines separator between buttons

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Button // button layout: title, text color, action on press
        title="Scan an Ingredient Label"
        color="#7cfc00"
        onPress={() => Alert.alert('Cannot open Camera')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="Look up an ingredient"
        color="#f194ff"
        onPress={() => Alert.alert('Cannot open search')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="How Our Rating System Works"
        color="#d27d2d"
        onPress={() => Alert.alert('*picture*')}
      />
    </View>
    <Separator />
    <View> 
      <Text style={styles.title}> 
        placeholder
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="FAQs"
          onPress={() => Alert.alert('Questions?')}
        />
        <Button
          title="Request an Ingredient"
          onPress={() => Alert.alert('Coming Soon!')}
        />
      </View>
    </View>
  </SafeAreaView>
);

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

export default App;