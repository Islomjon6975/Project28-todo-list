import React, {Component} from 'react'
import {NavbarContainer, Button, NavbarLeft, NavbarRight, DayOfTheWeek, Month, Title} from '../../style.js'

class Navbar extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){


        const getDaysOfTheWeek = () => {
            const number = new Date().getDay();
            
            switch(number){
                case 0: 
                        return 'Sunday'
                case 1: 
                        return "Monday"
                case 2: 
                        return "Tuesday"
                case 3: 
                        return "Wednesday"
                case 4: 
                        return "Thursday"
                case 5: 
                        return "Friday"
                case 6: 
                        return "Saturday"
                default: 
                        return 'Nothing here.'

            }
        }

        const getMonth = () => {
            const number = new Date().getMonth();
            switch(number){
                case 0: 
                        return 'January'
                case 1: 
                        return "February"
                case 2: 
                        return "March"
                case 3: 
                        return "April"
                case 4: 
                        return "May"
                case 5: 
                        return "June"
                case 6: 
                        return "July"
                case 7: 
                        return "August"
                case 8: 
                        return "September"
                case 9: 
                        return "October"
                case 10: 
                        return "November"
                case 11: 
                        return "December"
                default: 
                        return 'Nothing here.'

            }
        }

        return(
            <NavbarContainer>
                <NavbarLeft>
                    <DayOfTheWeek>{getDaysOfTheWeek()}, {new Date().getDate()}th </DayOfTheWeek>
                    <Month>{getMonth()} {new Date().getFullYear()}</Month>
                </NavbarLeft>
                <NavbarRight>
                    <Title>{this.props.count} Tasks</Title>
                    {/* <Title>{this.props.countDonee} Tasks Done</Title> */}
                    <Title>{this.props.countImportant} Important Tasks</Title>
                    <Button onClick={()=>this.props.clearAll()} >Clear List</Button>
                    
                </NavbarRight>
            </NavbarContainer>
        )
    }
}

export {Navbar}