import React, {Component} from 'react'
import {AddSomething, Checked, Container, Img, MainContainer, MainItem, Post, Time} from '../../style'
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';
import { MainItems } from './MainItem';


class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [
                {id: 1,  minutes: new Date().getHours(), seconds: new Date().getMinutes(), note: 'Do something awesome'},
                {id: 2,  minutes: new Date().getHours(), seconds: new Date().getMinutes(), note: 'Do something Great'},
                {id: 3,  minutes: new Date().getHours(), seconds: new Date().getMinutes(), note: 'Do something Perfect'},
                {id: 4,  minutes: new Date().getHours(), seconds: new Date().getMinutes(), note: 'Do something awesome'},
                {id: 5,  minutes: new Date().getHours(), seconds: new Date().getMinutes(), note: 'Do something awesome'},
                {id: 6,  minutes: new Date().getHours(), seconds: new Date().getMinutes(), note: 'Do something awesome'},
                {id: 7,  minutes: new Date().getHours(), seconds: new Date().getMinutes(), note: 'Do something awesome'},
                {id: 8,  minutes: new Date().getHours(), seconds: new Date().getMinutes(), note: 'Do something awesome'},
                {id: 9,  minutes: new Date().getHours(), seconds: new Date().getMinutes(), note: 'Do something awesome'},
                {id: 10, minutes: new Date().getHours(), seconds: new Date().getMinutes(), note: 'Do something awesome'},
            ],
            input: '',
            
            editInput: '',
            count: 0,
            countImportant: 0,
            countDonee: 0,
            isChecked: false,
            

        }
    }

    render(){

        const clearAll = () => {
            this.setState(() => {
                const newArr = []
                return{
                    data: newArr,
                }

            })    
        }

        const onChange = (event) => {
            this.setState({[event.target.name]: event.target.value})
        }


        const addNotes = (id) => {
            this.setState(() => {
                const addedNote = {
                    id: this.state.data.length + 1,
                    minutes: new Date().getHours(),
                    seconds: new Date().getMinutes(),
                    note: this.state.input}
                return{
                    data: [...this.state.data, addedNote],
                    input: ''
                }

            })
        }

        const deleteItem = (id) => {
            this.setState(() => {
                const newArr = this.state.data.filter(item => item.id !== id)
                return{
                    data: newArr,
                }
            })
        }

      

        const onChecked = (event) => {
            this.setState({[event.target.name]: event.target.checked, countDonee: event.target.isChecked === this.state.isChecked && this.state.countDonee + 1})
        }

        const onImportant = () => {
            this.setState({countImportant: this.state.countImportant + 1,})    
        }

        return(
            <Container>
                <Navbar countDonee={this.state.countDonee}
                    countImportant={this.state.countImportant} 
                 
                    clearAll={clearAll} 
                     count={this.state.data.length} />
                <MainContainer>
                    {   this.state.data.length ? (
                            this.state.data.map(({id, note, minutes, seconds}) => (
                                <MainItems 
                                    key={id} 
                                    id={id} 
                                    data={note} 
                                    minutes={minutes} 
                                    seconds={seconds} 
                                    deleteItem={deleteItem}
                                    
                                    onChecked={onChecked}
                                    onImportant={onImportant}
                                    datas = {this.state.data}
                                    isChecked={this.state.isChecked}
                                    
                            
                                    />
                            ))
                        ) : (
                            <AddSomething>Add some notes...</AddSomething>
                            
                        )
                    }
                </MainContainer>
                <Footer 
                    addNotes={addNotes} 
                    onChange={onChange} 
                    value={this.state.input}
                    
                    />

            </Container>
        )
    }
}

export {Main}