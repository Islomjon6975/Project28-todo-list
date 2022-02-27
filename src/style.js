import styled from "styled-components";


export const Container = styled.div`
    width: 600px;
    height: 530px;
    background-color: white;
    margin: 0 auto;
    margin-top: 20px;
    
`

export const NavbarContainer = styled.div`
        display:flex;
        width: 100%;
        height: 110px;
        
`

export const NavbarLeft = styled.div`
    width: 35%;
    height: 100%;
    padding: 20px;
    background-color: rgba(237, 240, 242,0.5);
    
`

export const NavbarRight = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 65%;
    height: 100%;
    background-color: rgba(237, 240, 242,0.5);
    padding-right: 20px;
`

export const DayOfTheWeek = styled.p`
    font-size: 25px;
    font-weight: 600;
    color: rgba(72, 73, 74, 0.9);
`

export const Month = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: rgba(72, 73, 74, 0.9);
    margin-top: 10px;
`

export const Title = styled(Month)`
    font-size: 13px;
    margin: 0 10px;
`

export const Button = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 30px;
    background-color: crimson;
    border-radius: 8px;
    color: white;
    font-size: 14px;
    font-weight: 600;
    :active{
        transform: scale(1.01);
        background: white;
        color: rgba(72, 73, 74, 0.9);
        border: 1px solid rgba(72, 73, 74, 0.7);
    }
`

export const AddSomething = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 40px;
    color:  rgba(72, 73, 74, 0.5);
`

export const MainContainer = styled.div`
    width: 100%;
    height: 340px;
    overflow-y: scroll;
    scrollbar-width: thin;
`

export const MainItem = styled.div`
    width: 550px;
    height: 50px;
    border: 1.5px solid rgba(72, 73, 74, 0.5);
    margin: 0 auto;
    margin-top: 15px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    color: rgba(72, 73, 74, 1);
    font-size: 18px;
    
`

export const Checked = styled.input`
    width: 30px;
    height: 30px;
    margin-left: 15px;  
`

export const Post = styled.p`
    font-size: 25px;
    color: rgba(72, 73, 74, 0.9);
    margin-left: 20px;
    text-transform: capitalize;
    text-decoration: ${(props) => props.lineThrough ? 'line-through' : 'none'};
`

export const Time = styled.p`
    margin-left: auto;
    margin-right: 15px;

`

export const I = styled.i`
    transition: all .5s ease;
    :active{
        transform: scale(0.96);
    }
`


export const FooterContainer = styled.div`
    width: 100%;
    height: 90px;
    background-color: rgba(237, 240, 242,1);
`

export const FooterInput = styled.input`
    width: 565px;
    height: 57px;
    margin-left: 13px;
    border-radius: 30px;
    border: 3px solid rgba(2, 138, 235, 0.8);
    outline: none;
    font-size: 23px;
    padding-left: 30px;
    color: rgba(72, 73, 74, 0.9);
`

export const Footerdiv = styled.div`
    position: relative;
    display: inline-block;
    margin-top: 15px;
    .fa-circle-plus{
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        font-size: 40px;
        color: rgba(2, 138, 235, 0.8);
        
    }
`
export const FooterIcon = styled.i`

`

export const EditInput = styled.input`
   margin-left: 20px;
   width: 300px;
   height: 35px;
   outline: none;
   border: 1.5px solid rgba(72, 73, 74, 0.5);
   /* border: none; */
   font-size: 25px;
   color: rgba(72, 73, 74, 0.9);
   text-transform: capitalize;
`
