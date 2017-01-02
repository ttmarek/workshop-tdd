----
# Ticket 3

As a player I want the app to display the total count of my hand.

> Given that the player has drawn one or more cards
> Then the total count of the player's hand is displayed in the count box
> And if a face card is drawn it's value is 10
> And if an ace card is drawn it's value is 11, unless it brings the total
> hand count above 21, in which case it's value is 1.
> And if a numbered card is drawn it's value is it's number.
> And if the hand count is greater than 21, "BUST! is shown in the message box"

----

## Create an Event
...

## Compute new State
...

## Compute Derived Data
  * When there are drawn cards
    * When a KH and an 8C is drawn
      * it returns 18
    * When a AS and an 8C is drawn
      * it returns 19
    * When an AS, AH, and an KH is drawn
      * it returns 21

## Render UI
  * When the hand count is defined
    * it displays the count
    * When the hand count is greater than 21
      * it displays a bust message
