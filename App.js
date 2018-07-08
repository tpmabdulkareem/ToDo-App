import React from 'react';
import {View,Text,TextInput,Button,TouchableOpacity} from 'react-native';


//create stuff
class App extends React.Component{
  state = {
    text: "",
    todo: []
  }
  addTodo = () =>{
    var newTodo = this.state.text;
    var arr = this.state.todo;
    arr.push(newTodo);
    this.setState({todo: arr, text: ""});
  }
  deleteTodo = (t) =>{
    var arr = this.state.todo;
    var pos = arr.indexOf(t);
    arr.splice(pos,1);
    this.setState({todo: arr});
  }
  renderTodos = () =>{
    return this.state.todo.map(t=>{
      return (
        <TouchableOpacity key={t}>
          <Text
            style={styles.todo}
            onPress={()=>{this.deleteTodo(t)}}
          >{t}</Text>
        </TouchableOpacity>
      )
    })
  }
  render(){
    return(
      <View style={styles.wholeStyle}>
        <View style={styles.viewStyle}>
          <Text style={styles.header}>ToDo App!</Text>
		  <TextInput 
		  	placeholder= "Enter your ToDo Feed's!"
            style={styles.inputStyle}
            onChangeText={(text)=>this.setState({text})}
            value={this.state.text}
          />
          <Button 
            title="Add Todo"
            color="red"
            onPress={this.addTodo}
          />
          <View style={{marginTop: 100}}/>
          {this.renderTodos()}
        </View>
      </View>
    )
  }
}

const styles = {
  wholeStyle: {
    backgroundColor: "green",
    flex:1
  },
  viewStyle: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
	margin: 10,
	paddingTop: 10,
    
  },
  inputStyle:{
	height: 70,
	width: 350,
    borderColor:"white",
	borderWidth: 2,
	color: "white",
	margin:10,
  },
  header:{
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold'
  },
  todo: {
    fontSize: 24,
    color: 'white'
  }
}

//export stuff
export default App;