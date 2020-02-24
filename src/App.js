import React, { Component, createRef } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state ={
    murid:[
    ],
    inputnama:createRef(),
    inputusia:''
  }

  componentDidMount(){
    var isidata=[
      {
        nama:'angga',
        umur:21
      }, 
      {
        nama:'sofia',
        umur:22
      },
      {
        nama:'putri',
        umur:23
      }
    ]
    this.setState({murid:isidata})
  }

  componentDidUpdate(){
    console.log('ini did update')
  }
  
  capitalfirst=(input)=>{
    const upper = input.charAt(0).toUpperCase() + input.substring(1)
    return upper
  }


  rendernamamurid=()=>{
      return this.state.murid.map((val,index)=>{
        return (
        // <table>
          
        //   <tbody>
            <tr>
              <td>{index+1}</td>
              <td>{this.capitalfirst(val.nama)}</td>
              <td>{val.umur}</td>
              <td>Action</td>
            </tr>
          // </tbody>
        // </table>
      )
    })
  }

  onAddButtonClick=()=>{
    var nama=this.state.inputnama.current.value//pake createref
    var usia=parseInt(this.state.inputusia) //onchange
    var muridbaru=this.state.murid
    muridbaru.push({nama:nama,umur:usia})
    this.state.inputnama.current.value=''
    this.setState({murid:muridbaru,inputusia:''})
  }
  
  render() {
    if(this.state.murid.length===0){
      return (
        <div>
          Loading
        </div>
      )
    }
    return (
      <div className='tengah' style={{height: '99vh'}}>
        <table>
          <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Usia</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                {
                  this.rendernamamurid()
                }
            </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td>
                <input type='text' className='mb-2' placeholder='masukkan nama' ref={this.state.inputnama}/>
              </td>
              <td>
                <input 
                  type='number' 
                  placeholder='masukkan usia' 
                  value={this.state.inputusia} 
                  onChange={(event)=>this.setState({inputusia:event.target.value})} />
              </td>
              <td>
                <button onClick={this.onAddButtonClick} className='btn btn-primary'>
                  Add
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    )
  }
}

export default App;

