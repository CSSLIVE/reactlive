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
    display:grid;
    width:100%;
    margin:0 auto;
    background-color:'#e9ecef';
    flex-direction:'row';
    justify-items:'center';
    align-items:'center';
    box-shadow: rgba(20, 20, 20, 0.27) 0.0555556rem 0.0555556rem 1.11111rem;
    border-radius:4px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    padding:5px;
  
`


const   Code=styled(LiveEditor)`
        grid-row: span 3;
        grid-column:span 2;
        border-radius:0px;
        
        
        
  
`
const  Preview=styled(LivePreview)`
      grid-row:span 2;
      grid-column:span 1;
      background-color:papayawhip;
      
      border:1px solid rgba(222,222,222,.2);
      border-radius:0px;
      padding:5px;

      :hover{background-color:red;}
      

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
    grid-row:span 1;
    grid-column:span 1;
    background-color:#fdae0c;
    
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