import Card from '../components/card/card'
import '../css/style.css'
import { useNavigate } from "react-router-dom";
import AddPayment from '../components/card/addcard';
import { Container,Message, Content,FlexboxGrid, Panel, Form, Button, Input, SelectPicker,Schema } from 'rsuite';
import { useState, useEffect } from 'react';
import TransactionHistory, { Transaction } from '../components/cardDetail/TransactionHistory';


export default function Dashboard({user, name, setCard}) { 
    //   message
    const [message, setMessage] = useState(null)
    const [myCard, setMyCard] = useState(null)
    const uuid = user?.id; 

    const [cd, setCd] = useState([])
    const nav = useNavigate();
    useEffect(()=>{
        
        fetch(`https://mopay-production.up.railway.app/users/1`,{
            method:'GET',
            headers: {
                "Access-Control-Allow-Origin":"no-cors",
                "Content-Type": "application/json"
              }
        })
        .then(res => res.json())
        .then(data => 
            {
                setCd(data.cards)
                setMessage("Welcome, All your cards are loaded, Click any of the card to view details.")
            })
        .catch(e=>console.log(e))
    }, [setCd])

    function handlePickCard(card){
        setMyCard(card)
        nav("/details", {state:{state:card}})
    }

    console.log(uuid)
    
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
                        <div key={card.id} id={card.id} onClick={()=>handlePickCard(card)}><Card card={card} name={user.username}/></div>
                    ))}
                    
                    <AddPayment setCard={setCd} uuid={uuid} />
                        
                    </FlexboxGrid>
                    <FlexboxGrid>
                        <FlexboxGrid.Item colspan={24}>
                            <Transaction/>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </Content>
                </Container>
            )
        }else{
            return nav('/')
        }

    
}