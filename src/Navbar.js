import React from "react";
import styled from "styled-components";
const Nav=styled.div`
width: 100%;
height: 70px;
background: #4267b2;
display: flex;
justify-content: space-between;
align-items:center;
position:relative; 

`
const Title=styled.div`
font-size: 30;
color: #fff;
font-weight: 600;
font-family: Montserrat, sans-serif;
text-transform: uppercase;
margin-left: 20;
&:hover{color:red;}

`;
const CardContainer=styled.div`
     position:relative;
     cursor:pointer;
`;

const Image=styled.img`
      height:48px;
      marginRIght:20px;
    
    `;
const CartCount=styled.span`
          background:${(props)=>props.color};
          border-radius:50%;
          padding:4px 8px;
          position:absolute;
          right:10px;
          top:-5px;
          fontSize:12px;
          visibility: ${(props)=>{
            if(props.show){
                return "visible;"
            }else{
                return "hidden;"
            }
          }}
     
     `;

export default class Navbar extends React.Component{
    render(){
        console.log("this.props in navbar",this.props.cartitemcount)
        const {cartitemcount}=this.props;
        return (
            <>
            <Nav>
            <Title>Movie-App</Title>
            <CardContainer >
                <Image  alt="Cart-Icon" src="https://cdn-icons-png.flaticon.com/128/891/891462.png"/>
                <CartCount color="yellow" show={true}>{cartitemcount}</CartCount>
            </CardContainer>
            </Nav>
            </>
            )
    }
}

{/* <cartCount style={styles.cartCount}>0</cartCount> */}

const styles = {
    nav: {
      width: "100%",
      height: 70,
      background: "#4267b2",
      display: "flex",
      justifyContent: "space-between",
      alignItems:"center",
      position:"relative"
    },
    title: {
      fontSize: 30,
      color: "#fff",
      fontWeight: 600,
      fontFamily: "Montserrat, sans-serif",
      textTransform: "uppercase",
      marginLeft: 20
    },

    cartContainer:{
      position:"relative",
      cursor:"pointer"
    },
    cartIcon:{
       height:48,
       marginRIght:20,
    },

    cartCount:{
       background:"orange",
       borderRadius:"50%",
       padding:"4px 8px",
       position:"absolute",
       right:10,
       top:-5,
       fontSize:12
    }

  };
  