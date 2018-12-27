import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import {LiveCode}  from './Component/LiveCode';
import {BigScreen} from './Component/Jumptron';
//import {Counter}  from './Component/Counter';
import {MainNav} from './Component/NavaBar';
import {code1,code2,code3,code4,code5,code6,code7,subGrid,cssGrid} from './Component/Code';
const scope= {styled};
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
              <LiveCode code={code1} scope={scope} content="First Component"></LiveCode>
              <LiveCode code={code2} scope={scope}></LiveCode>
              <LiveCode code={code3} scope={scope}></LiveCode>
              <LiveCode code={code4} scope={scope}></LiveCode>
              <LiveCode code={code5} scope={scope}></LiveCode>
              <LiveCode code={code6} scope={scope}></LiveCode>
              <LiveCode code={code7} scope={scope}></LiveCode>
              <LiveCode code={subGrid} scope={scope} content="subgrid"></LiveCode>
              <LiveCode code={cssGrid} scope={scope} content="cssGrid"></LiveCode>
              
          </section>

       <BigScreen></BigScreen> 
       
       
      </MainContainer>
       
    
    );
  }
}

export default App;
