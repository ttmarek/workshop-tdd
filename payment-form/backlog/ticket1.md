----
# Ticket 1

As a shopper, I want to enter in my phone number so that I can complete the payment form.

```
As a shopper,
I can enter in my phone number in the payment form
And,
I can accidentally enter in whitespace on either end of the number
I am prevented from entering in letters
I am prevented from entering in more than 10 digits
I am given on-the-fly phone number formatting as I type
   On the first three digits, no formatting: "123"
   On the fourth digit: "(123) 4"
   On the seventh digit: "(123) 456-7"
   On the tenth digit: "(123) 456-7890"
```

----

## Describe what happened
### AC
 * I can enter in my phone number in the payment form
 * I can accidentally enter in the whitespace on either end of the number
### TR
 * It needs to be an object with a `type` property describing the change

*Absolute minimal representation of the state of your application*
## Given this thing that happened, how is the state going to change?
### AC
 * I can enter in my phone number in the payment form
 * I am prevented from entering in letters
 * I am prevented from entering in more than 10 digits
### TC
 * The phone number must be stored in state as a string of digits

## When the state changes, what data needs to get sent to the UI?
### AC
 * I am given on-the-fly phone number formatting as I type
   * On the first three digits, no formatting: "123"
   * On the fourth digit: "(123) 4"
   * On the seventh digit: "(123) 456-7"
   * On the tenth digit: "(123) 456-7890"

## Render UI
 * Already done
 * Data in UI out, no transformations along the way
