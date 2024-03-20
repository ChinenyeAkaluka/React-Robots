 import { Component } from 'react';
 import './card-list.styles.css';
import CardContainer from '../card-container/card-container.component';

 class CardList extends Component {
    render(){
        const { robots } = this.props;

        return (
            <div className='card-list'>
                {robots.map( (robot) => {
                    return (

                        <CardContainer robot={robot}/>
                    );
                })}
            </div>
        )
    }
 }

 export default CardList