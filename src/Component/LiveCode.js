import React from 'react';
import {Jumbotron,CardHeader,Card,CardBody} from 'reactstrap';
import styled from 'styled-components';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

const CodeContainer=styled(LiveProvider)`
    display:flex;
    width:80%;
    margin:0 auto;
    background-color:'#e9ecef';
    flex-direction:'row';
    justify-items:'center';
    align-items:'center';
    box-shadow: rgba(20, 20, 20, 0.27) 0.0555556rem 0.0555556rem 1.11111rem;
    border-radius:5px;
    
  
`


const   Code=styled(LiveEditor)`
        flex:2;
        border-radius:3px;
        
        
  
`
const  Preview=styled(LivePreview)`
      flex:1;
      background-color:papayawhip;
      height:200px;
      border:1px solid rgba(222,222,222,.2);
      border-radius:3px;
      padding:10px;
      

`

const Step=(props)=>{
   
   return(
     
    <Card>
    
     <CardBody>
       {props.content} 
     </CardBody>
    </Card>

   )
}

const  Note=styled(Step)`
    flex:1;
    background-color:#fdae0c;
    height:50%;
`





const  Error=styled(LiveError)`
      flex:2;
      background-color:yellow;
      height:200px;
      border:1px solid rgba(222,222,222,.2);
      border-radius:3px;
      padding:10px;
      

`

const CodeTitle=styled(CardHeader)`
        background-color:#4274ee;
        width:80%;
        text-align:center;
        color:white;
        text-shadow:1px 1px 1px #dedede;
        margin:0 auto;
`
const LiveCode=(props)=>{
    const code=props.code;
    const scope=props.scope;
    const text=props.content;
    return (
      
      <Jumbotron width="100%">
        {text&&<CodeTitle>{text}</CodeTitle>}
         <CodeContainer code={code} scope={scope} noInline={true}>
                <Code />
                 <Error />
                 <section style={{flexDirection:'column',flex:1,height:'100%'}}>
                  <Preview/>
                  <Note content="step demo "/>
                 </section>
               
         </CodeContainer>
      </Jumbotron>
    )
    };
// const CardInfo = (props) => {
//   return (
//     <div>
//       <Jumbotron width="100%">
        
      
//           <CodeContainer code={code} scope={scope} noInline={true}>
//                 <Code />
//                 <LiveError />
//                  <Preview/>
//           </CodeContainer>
        
//       </Jumbotron>
//     </div>
//   );
// };

export  {LiveCode};