import Card from '../components/card/card'
import '../css/style.css'
import { useNavigate } from "react-router-dom";
import AddPayment from '../components/card/addcard';
import { Container,Message, Content,FlexboxGrid, Panel, Form, Button, Input, SelectPicker,Schema } from 'rsuite';
import { useState, useEffect } from 'react';


export default function Dashboard({user, name}) { 
    //   message
    const [message, setMessage] = useState(null)
    const uuid = user?.id; 
    
    console.log(uuid)

    const [cd, setCd] = useState([])
    const nav = useNavigate();
   
    useEffect(()=>{
        
        fetch(`/users/${uuid}`)
        .then(res => res.json())
        .then(data => 
            {
                setCd(data.cards)
                setMessage("Welcome, All your cards are loaded, Click any of the card to view details.")
            })
        .catch(e=>console.log(e))
    }, [setCd])
    console.log(cd)

   
        if (user) {
            return (
                <Container>
                <Content>
                    <FlexboxGrid>
                    <FlexboxGrid.Item colspan={24}>
                    <h5>Welcome Back {user.username}!</h5>

                    <Form.Group>
                    {message && (
                      <Message showIcon type="success">
                        {message}
                      </Message>
                    )}
                  </Form.Group>
                    </FlexboxGrid.Item>
                    {cd?.map(card=>(
                        <Card key={card.id} card={card} name={user.username}/>
                    ))}
                    
                    <AddPayment setCard={setCd} uuid={uuid} />

                   
                    </FlexboxGrid>

                </Content>
                </Container>
            )
        }else{
            return nav('/')
        }

    
}