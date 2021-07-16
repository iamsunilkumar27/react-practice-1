import './App.css';
import { Component } from 'react';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color,
      border:this.props.border,
    }
  }

componentDidMount(){
  console.log("mounted")
}
componentDidUpdate(){
  console.log("updated");
}
componentWillUnmount(){
  console.log("destroyed");
}

  render() {
    return (
      <div className="box" style={{ backgroundColor: this.state.color ,borderRadius:this.state.border }}>
        <button onClick={() => {
          const col= randomcolor();
          const nstate = Object.assign({},this.state,{color:col})
          this.setState(nstate);
          this.setState({border: (this.state.border = this.state.border === '0%'? '50%': '0%')})
        }}>{ this.state.border === '0%' ? 'circle' : 'box'}</button>
      </div>
    )
  }
}


const colorValues = '0123456789ABCDEF';
const colors = Array(10).fill(0).map(randomcolor)

// console.log(colors);
function randomcolor() {
  let col = '#';
  for (let i = 0; i < 6; i++) {
    col = col + colorValues[Math.floor(Math.random() * colorValues.length)];
  }
  return col;

}


function App() {

  return (
    <div style={{display:'flex'}}>
      {colors.map(c => <Box key={c + Date.now()} color={c} border="0%" />)}
    </div>
  );

}

export default App;