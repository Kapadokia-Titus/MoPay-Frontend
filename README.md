To create a reactjs app that shows credit cards in the dashboard and allows for the addition of another card, you would need to follow the steps below:

Start by creating a new reactjs project using the create-react-app command. This will create a new directory with all the necessary files and dependencies for your react app.

Create a new component called "CardList" that will display the list of credit cards in the dashboard. This component should have a state variable called "cards" that will hold an array of credit card objects. Each card object should have the following properties:

card number
expiration date
card type (Visa, Mastercard, etc.)
cardholder name
In the CardList component, create a function called "addCard" that will allow the user to add a new card to the list of cards. This function should prompt the user for the card details (card number, expiration date, card type, and cardholder name) and then update the "cards" state variable with the new card.

In the CardList component, create a function called "showCardDetails" that will be triggered when the user clicks on a card in the list. This function should open a new component called "CardDetails" that displays the details of the selected card (card number, expiration date, card type, cardholder name) as well as a payment button and payment history.

In the CardDetails component, create a function called "makePayment" that will be triggered when the user clicks on the payment button. This function should open a modal with a form that allows the user to enter a payment amount and a payment request. Once the user submits the form, the payment should be processed and added to the payment history of the selected card.

Finally, in the CardList component, render the list of cards using the "cards" state variable and add a button that allows the user to add a new card. Also, add an event listener to each card in the list that triggers the "showCardDetails" function when clicked.

With these steps, you should be able to create a reactjs app that shows credit cards in the dashboard, allows the addition of another card, and displays the details of a selected card with a payment button and payment history.