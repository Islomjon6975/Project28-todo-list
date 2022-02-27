import React, {Component} from 'react'
import {MainItem, Checked, Post, Time, I, EditInput} from '../../style'

class MainItems extends Component{
    constructor(props){
        super(props);
        this.state = {
            isChecked: false,
            
            important: false,
            editInput: '',
            onedite: true,
            
        }
    }

    render() {


        const onEditChange = (event, id) => {
            this.setState({editInput: this.props.datas.filter(item => item.note == this.props.data) && this.props.data})
            
        }

        

        return(
            <MainItem>
                <Checked   
                    type='checkbox' 
                    onChange={(event)=>this.props.onChecked(event)} 
                    name='isChecked'
                    value={this.props.isChecked}
                    />
                {
                    this.state.onedite ? (
                        <Post lineThrough={this.state.isChecked}>{this.props.data}</Post>
                    ) : (
                        <EditInput 
                            type="text"
                            onChange={onEditChange}
                            value={this.state.editInput}
                            name='editInput' 
                        />
                    )
                }
                
                <Time>{this.props.minutes < 10 ? '0' + this.props.minutes : this.props.minutes}:{this.props.seconds < 10 ? '0' + this.props.seconds : this.props.seconds} 
                    <i onClick={() => {this.props.onImportant(); this.setState({important: !this.state.important})}}  style={{padding: '5px', color: this.state.important && 'yellow'}}  className="fa-solid fa-star"></i> 
                    {/* <i onClick={onEdit} style={{padding: '5px'}} className="fa-solid fa-pen-to-square"></i>  */}
                    <I onClick={() => this.props.deleteItem(this.props.id)} 
                    className="fa-solid fa-trash-can"></I>
                </Time>
            </MainItem>
        )
    }
}

export {MainItems}