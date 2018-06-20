import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';
var data = require('./products.json')
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){
          this.setState({
          isLoading: false,
          dataSource: data,
        });
  
   
  }
  onSearch = () => {
   //perform action here
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Search Product</Text>
        <TextInput
            style={{
              height: 40,
              borderColor: "#ccc",
              backgroundColor: "#FFF",
              borderWidth: 1,
              width: 300,
              marginVertical: 20
            }}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
          <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  button: {
    width: 300,
    backgroundColor: "#af8eb5",
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 12
  },
  buttonText: {
    color: "#fff",
    textAlign: "center"
  },
});
