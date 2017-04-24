# Ticket 1

As a shopper, I want to enter in my phone number so that I can complete the payment form.

## Acceptance Criteria
```
As a shopper, I can enter my phone number into the payment form

And,
1. I am prevented from entering in letters
2. I am prevented from entering in more than 10 digits
3. I am given on-the-fly phone number formatting as I type:
   3.1. On the first digit: "(1"
   3.2. On the fourth digit: "(123) 4"
   3.3. On the seventh digit: "(123) 456-7"
   3.4. On the tenth digit: "(123) 456-7890"
```

## Technical Requirements (agreed as a team)
 1. Using Redux to manage state
 2. Redux will store the absolute minimal representation of the state
    of the app. That is, the phone number should be stored as a string
    of digits with no formatting.

## Links
 - https://www.dominos.ca/pages/customer/#/customer/profile/new

TR1 (Redux)
Given `'123'`
Returns `{ type: 'PHONE_NUMBER_ENTERED', payload: '123'}`

TR2 (phoneNumber key)
Given `{ type: 'PHONE_NUMBER_ENTERED', payload: '123'}`
Returns `{ phoneNumber: '123' }`

TR3 (no formatting)
Given `{ type: 'PHONE_NUMBER_ENTERED', payload: '(123) 456-78'}`
Returns `{ phoneNumber: '12345678' }`

AC1 (no letters)
Given `{ type: 'PHONE_NUMBER_ENTERED', payload: '123a'}`
Returns `{ phoneNumber: '123' }`

AC2 (max ten digits)
Given `{ type: 'PHONE_NUMBER_ENTERED', payload: '(123) 456-78909'}`
Returns `{ phoneNumber: '1234567890' }`

AC3.1 (formatting)
Given `{ phoneNumber: '123' }`
Returns `'123'`

AC3.2 (formatting)
Given `{ phoneNumber: '1234' }`
Returns `'(123) 4'`

AC3.3 (formatting)
Given `{ phoneNumber: '1234567' }`
Returns `'(123) 456-7'`

AC3.4 (formatting)
Given `{ phoneNumber: '1234567890' }`
Returns `'(123) 456-7890'`

Given `'123'`
Renders the UI
