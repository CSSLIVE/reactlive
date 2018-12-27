import React from 'react';
import styled from 'styled-components';
//encapsule some unimport property
const baseBox=styled.div`
     box-sizing:border-box;
     border:1px solid #4c4c4c;
     background-color:black;
     margin:2px;
     box-shadow:2px 2px 4px rgba(0,0,0,.5) ;
     visibility:hidden;
`

const code1 = `
    const Header = styled.div\`
      color: palevioletred;
      font-size: 18px;
    \`
  
    render(<Header>Hello styled components</Header>)
  `

  
  
  const code2=`
     const Button= styled.div\`
       padding:5px;
       border:1px solid green;
       background-color:rgba(220, 119, 139, 1);
  \`

  render(<Button>Button</Button>)
`

const code3=`
// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1\`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
\`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section\`
  padding: 4em;
  background: papayawhip;
\`;

// Use Title and Wrapper like any other React component – except they're styled!
render(
  <Wrapper>
    <Title>
      Hello World!
    </Title>
  </Wrapper>
);
`

const code4=`

const Button = styled.button\`
// Adapt the colors based on primary prop 
background: \${props => props.primary?"palevioletred" : "white"};
color: \${props => props.primary ? "white" : "palevioletred"};

font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
\`;

render(
<div>
  <Button>Normal</Button>
  <Button primary>Primary</Button>
</div>
);

`


const code5=`

// The Button from the last section without the interpolations
const Button = styled.button\`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
\`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)\`
  color: tomato;
  border-color: tomato;
\`;

render(
  <div>
    <Button>Normal Button</Button>
    <TomatoButton>Tomato Button</TomatoButton>
  </div>
);
`
const code6=`
// Create an Input component that'll render an <input> tag with some styles
const Input = styled.input\`
  padding: 0.5em;
  margin: 0.5em;
  color: \${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
\`;

// Render a styled text input with the standard input color, and one with a custom input color
render(
  <div>
    <Input defaultValue="@probablyup" type="text" />
    <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
  </div>
);
`

const code7=`
//Box is a  black div
  const  Box=styled.div\`
     display:\${props => props.Grid || "grid"};
     align-items:center;
     width:50px; 
     box-sizing:border-box;
     border:1px solid #4c4c4c;
     background-color:black;
     margin:2px;
     box-shadow:2px 2px 4px rgba(0,0,0,.5) ;
     
     
    //grid-template-columns: 12px 12px 12px;
    //grid-template-rows: 12px 12px 12px;

   \`;

   //const Box2=styled(Box1);

   const Item=styled.div\`
      
      margin:2px;
      background-color:yellow;
      height:5px;
    \`

   const Item2=styled.div\`
   width:80%;
   margin:2px;
   background-color:red;
   height:5px;
   \`


   const Container=styled.div\`
    flex-direction:'row';
    display:flex;
   \`

   const Grid1=(props)=>{

    return (

        <Box>
                <Item2/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                
        </Box>
    )
   }

   const Grid2=styled(Grid1)\`\`;

   

   render(
    <Container>
      <Grid1/>
      <Grid2/>
    </Container>
  );
   

`

const  subGrid=`

  const  Box=styled.div\`
     display:\${props => props.Grid || "grid"};
     align-items:center;
     justify-items:center;
     grid-auto-rows:5px;
     width:50px; 
     height:200px;
     box-sizing:border-box;
     border:1px solid #4c4c4c;
     background-color:black;
     margin:2px;
     box-shadow:2px 2px 4px rgba(0,0,0,.5) ;
     grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  \`;

   const Subgrid1=styled.div\`
      display:subgrid;
      background-color:red;
      box-shadow:2px 2px 4px rgba(0,0,0,.5) ;
      flex:1;
   \`;
   const Subgrid2=styled(Subgrid1)\`
      background-color:orange;
   
   \`;
   const Item=styled.div\`
      flex:1;
      margin:2px;
      background-color:yellow;
      height:5px;
    \`

    const Item2=styled.div\`
    flex:1;
    margin:2px;
    background-color:red;
    height:5px;
   \`


   const Container=styled.div\`
    flex-direction:'row';
    display:grid;
   \`

   
   

   render(
    <Container>
       
       <Subgrid1>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
      </Subgrid1>
       <Subgrid2>
            <Item2/>         
            <Item2/>
            <Item2/>
            <Item2/>
            <Item2/>
            <Item2/>
            <Item2/>
            <Item2/>
            <Item2/>
            <Item2/>
       
       </Subgrid2>

    </Container>
  );
   

`


const cssGrid=`
   const Grid=styled.div\`
      display:grid;
      background-color:#5b2653;
      width:100%;
      height:100%;
      //②grid-template-columns:repeat(auto-fit,minmax(40px,1fr));
      //①grid-template-rows:80px;
      grid-auto-flow:dense;

   
   \`

   const Box1=styled.div\`
       grid-row:span 2
       background-color:yellow;


   \`

   const Box2=styled(Box1)\`
      background-color: #5b2653;
      grid-row:span 2
   \`

   render(

     <Grid>
      <Box1/>
      <Box2/>
     </Grid>

   )
`

const ramdaCode1 = `
      const List = items => <ul>{items}</ul>
      const Item = todo => <li key={todo.id}>{todo.text}</li>
      const getTodos = R.prop('todos')
      const TodoList = R.compose(List, R.map(Item), getTodos)
      const props = {todos: [{id: 1, text: 'foo'}, {id: 2, text: 'bar'}]}
    
  
      render(<TodoList {...props} />);
  `

const codes=[
            {code:code1,step:{step1:'step1',step2:'step2',step3:'step3'}},
            {code:code2,step:{step1:'step1',step2:'step2',step3:'step3'}},
            {code:code3,step:{step1:'step1',step2:'step2',step3:'step3'}},
            {code:ramdaCode1,step:{step1:'step1',step2:'step2',step3:'step3'}}

           ];

export {codes};