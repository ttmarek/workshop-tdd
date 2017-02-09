----
# Ticket 1

As a shopper, I want to enter in my phone number so that I can complete the payment form.

## Acceptance Criteria
```
As a shopper,
I can enter in my phone number in the payment form
And,
I am prevented from entering in letters
I am prevented from entering in more than 10 digits
I am given on-the-fly phone number formatting as I type
   On the first three digits, no formatting: "123"
   On the fourth digit: "(123) 4"
   On the seventh digit: "(123) 456-7"
   On the tenth digit: "(123) 456-7890"
```
## Technical Requirements (agreed as a team)
 * Using Redux to manage state
 * Redux will store the absolute minimal representation of the state of the app

----

## How can I describe what happened?
Given `"123"`
Returns `{ type: 'PHONE_NUMBER_ENTERED', payload: "123"}`

## How is the state going to change?
Given `{ type: 'PHONE_NUMBER_ENTERED', payload: "123"}`
Returns `{ phoneNumber: "123" }`

Given `{ type: 'PHONE_NUMBER_ENTERED', payload: "123a"}`
Returns `{ phoneNumber: "123" }`

Given `{ type: 'PHONE_NUMBER_ENTERED', payload: "(123) 456-7890"}`
Returns `{ phoneNumber: "1234567890" }`

Given `{ type: 'PHONE_NUMBER_ENTERED', payload: "(123) 456-78909"}`
Returns `{ phoneNumber: "1234567890" }`

## How do I need to transform the state data for the UI?
Given `{ phoneNumber: "123" }`
Returns `"123"`

Given `{ phoneNumber: "1234" }`
Returns `"(123) 4"`

Given `{ phoneNumber: "1234567" }`
Returns `"(123) 456-7"`

Given `{ phoneNumber: "1234567890" }`
Returns `"(123) 456-7890"`

## How is the UI going to look given some data?
Given `"123"`
Renders the UI
