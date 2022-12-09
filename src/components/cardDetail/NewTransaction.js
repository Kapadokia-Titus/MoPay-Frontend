import { Drawer, Schema, Form, RadioGroup, Radio, ButtonToolbar, Button, Placeholder, FlexboxGrid, SelectPicker } from 'rsuite';
import React,{useState} from 'react';
const styles = {
  radioGroupLabel: {
    padding: '8px 12px',
    display: 'inline-block',
    verticalAlign: 'middle'
  }
};

const selectData = ['VISA CARD', 'MASTER CARD','MPESA CARD'].map(item => ({
    label: item,
    value: item
  }));


//input validation:: validating if fields are empty or are filled correctly
const nameRule = Schema.Types.StringType().isRequired('This fields is required'); 
const emailRule = Schema.Types.StringType().isEmail('Please Enter A valid Email Address');


export default function NewTransaction({uuid}) {
  const [backdrop, setBackdrop] = React.useState('static');
  const [open, setOpen] = React.useState(false);
  

    // form value
    const [formValue, setFormValue] = useState({
        card_name: '',
        card_number: '',
        card_bank:"",
        amount:"", 
        status:"paid",
        user_id:uuid
      });

   
    //   handle submit
    function handleOnSubmit(e) {
        fetch("https://mopay-production.up.railway.app/cards", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(formValue),
        }).then((r) => {
            if (r.ok) {
            r.json().then(data => console.log(data));
            
            }
        })
        .catch(e => console.log(e))
    }


  return (
    <>
     
      <ButtonToolbar>
        <Button onClick={() => setOpen(true)}>+ New Transaction</Button>
      </ButtonToolbar>
      <Drawer backdrop={backdrop} open={open} onClose={() => setOpen(false)}>
      <Form fluid onChange={setFormValue} formValue={formValue} onSubmit={handleOnSubmit}>
        <Drawer.Header>
          <Drawer.Title>New Payment Transaction</Drawer.Title>
          <Drawer.Actions>
            
            <Button onClick={() => handleOnSubmit} type='submit' appearance="primary">
              Pay
            </Button>
          </Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body>

          {/* new payment form start */}
          
            <FlexboxGrid>
                <FlexboxGrid.Item colspan={12} >
                    <Form.Group controlId="name-9">
                    <Form.ControlLabel>Cardholder Name</Form.ControlLabel>
                    <Form.Control name="card_name" placeholder="Dohn Doe" rule={nameRule} />
                    <Form.HelpText>Required</Form.HelpText>
                    </Form.Group>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={7.5} style={{ marginLeft: 20 }}>
                    <Form.Group controlId="name-10">
                    <Form.ControlLabel>Bank</Form.ControlLabel>
                <Form.Control name="card_bank" data={selectData} accepter={SelectPicker} />
                    </Form.Group>
                </FlexboxGrid.Item>
            </FlexboxGrid>
            <FlexboxGrid>
                <FlexboxGrid.Item colspan={19}>
                    <Form.Group controlId="email-9">
                    <Form.ControlLabel>Card Number</Form.ControlLabel>
                    <Form.Control name="card_number" placeholder="0000 0000 0000 0000 0000" rule={nameRule}/>
                    <Form.HelpText>Required</Form.HelpText>
                    </Form.Group>
                </FlexboxGrid.Item>
            </FlexboxGrid>
            <FlexboxGrid>
                <FlexboxGrid.Item colspan={24} >
                    <Form.Group controlId="name-9">
                    <Form.ControlLabel>Ammount (ksh)</Form.ControlLabel>
                    <Form.Control name="amount" placeholder="3000" type="number" rule={nameRule} />
                    <Form.HelpText>Required</Form.HelpText>
                    </Form.Group>
                </FlexboxGrid.Item>
                
                
            
            </FlexboxGrid>
                
            
          {/* new payment end */}
        </Drawer.Body>
        </Form>
      </Drawer>
    </>
  );
};