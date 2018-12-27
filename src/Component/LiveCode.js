import React from 'react';
import {CardHeader,Card,CardBody} from 'reactstrap';
import styled from 'styled-components';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live';

import {Grid} from "reakit";

const template = `
  "a a b" ;
  "a a b" ;
  "a a c" ;
`;
const CodeContainer=styled(LiveProvider)`
    width:85%;
    margin:0 auto;
    background-color:'#e9ecef';
    box-shadow: rgba(20, 20, 20, 0.27) 0.0555556rem 0.0555556rem 1.11111rem;
    border-radius:4px;
    padding:5px;
  
`


const   Code=styled(LiveEditor)`
        
        border-radius:0px;
        
        
        
  
`
const  Preview=styled(LivePreview)`
      
      background-color:papayawhip;
      
      border:1px solid rgba(222,222,222,.2);
      border-radius:0px;
      padding:5px;

      :hover{background-color:red;
             transition: background-color 1s;
      }
      

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
    
    background-color:#fdae0c;
    
`





const  Error=styled(LiveError)`
      
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
      
      
      <CodeContainer code={code} scope={scope} noInline={true}>
         <Grid  autoRows="auto" template={template} >
        
         
              <Grid.Item area="a">
                 <Code />
              </Grid.Item>
              <Grid.Item area="b">
               <Error />
               <Preview/>
              </Grid.Item>
              <Grid.Item area="c">
              <Note content="step demo "/>
              </Grid.Item>
           </Grid>
        </CodeContainer>
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