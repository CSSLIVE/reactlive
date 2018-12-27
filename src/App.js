import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import {LiveCode}  from './Component/LiveCode';
import * as R from 'ramda';

//import {BigScreen} from './Component/Jumptron';
//import {Counter}  from './Component/Counter';
import {MainNav} from './Component/NavaBar';
import {codes} from './Component/Code';
const scope= {styled,R};
const MainContainer=styled.div`
  width:85%;
  margin-left:auto;
  margin-right:auto;
  height:100%;
  overflow:hidden;
  margin-top:1px;

`

class App extends Component {
   
  render() {
    return (
    
      <MainContainer>
        
       <MainNav/>
          <section>
          {

           codes.map((code,i)=>(

            <LiveCode code={code.code} scope={scope} ></LiveCode>

           )) 

          }
          </section>

       
       
       
      </MainContainer>
       
    
    );
  }
}

export default App;
