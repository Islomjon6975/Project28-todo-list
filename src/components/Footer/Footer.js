import React, {Component} from 'react'
import {FooterContainer, Footerdiv, FooterInput} from '../../style'
 
class Footer extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <FooterContainer> 
                <Footerdiv>
                    
                    <FooterInput 
                        type="text"
                        placeholder='New Task'
                        value={this.props.value}
                        onChange={(event)=>this.props.onChange(event)}
                        name='input'
                    />
                        
                    
                    <i onClick={()=>this.props.addNotes()} className="fa-solid fa-circle-plus"></i>
                </Footerdiv>
            </FooterContainer>
        )
    }
}

export {Footer}