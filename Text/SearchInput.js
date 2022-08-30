import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text, View} from 'react-native';

const SearchInput = ({icon}) => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Search for a restaraunt"
      />
      <View style={{alignSelf: 'flex-end', marginTop: -40, marginRight: 20}}>
        {icon}
      </View>
      <Text
        style={{
          padding: 20,
        }}>
        {number}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#F1F2F6',
    shadowColor: '#2C2C2C',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,

    borderRadius: 10,
  },
});

export default SearchInput;
