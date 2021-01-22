mapping =() =>{ 
    this.setState({
      items: this.state.list.map((item,index) => {
        var key = index.toString();
        return (<div key={key}>
          <li>{item} <button type="button" key={index} onClick={()=>this.handleDel(key)}>X</button></li>
        </div>);
      })

    })
    this.setState((state)=>{
      console.log(state.items)
      return state;
    })
    
}