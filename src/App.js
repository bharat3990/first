import React from "react"

class App extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.handleDel = this.handleDel.bind(this);
    // this.mapping = this.mapping.bind(this);
    this.state={
      text : "",
      list : [],
      items: undefined,
    }
  }


  handleChange = event => {
    this.setState({
      text : event.target.value,
    })
  }

  handleClick = event => {
    if(this.state.text!==""){
    this.setState({
      list : this.state.list.concat(this.state.text),
      text :""
    })}
    this.setState((state)=>{
      console.log(state.list);
      return state;
    })
  }

  handleDel = (item,event) => {
    console.log(item)
    var array = [...this.state.list]
    var index = array.indexOf(item)
    array.splice(index,1)
    this.setState({
      list:array
    })
    
    this.setState((state)=>{
      console.log("list ", state.list);
      return state

    })
  }
  
  

  render(){
    const items = this.state.list.map((item,index) => {
      var key = index.toString();
      return (<div key={key}>
        <li>{item} <button type="button" key={index} onClick={()=>this.handleDel(item)}>X</button></li>
      </div>);
    })
  
    return(  
      <div>
        <input type="text" value={this.state.text} onChange={this.handleChange} />
        <input type="button" value="submit" onClick={this.handleClick}/>
        <div>
          <ul>{items}</ul>
        </div>   
      </div>
  )}
}
export default App;