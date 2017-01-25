----
# Ticket 2

As a player I can click a button to draw a card from the six deck.

> Given that the app has loaded, and a new 6 deck has been retreived
> When the user clicks a button labelled "Hit Me!"
> Then a new card is drawn from the 6 deck
> And an image of that card is displayed beneath the hit-me button

----

## Create an Event
  * When the request to get a new card is successful
    * it dispatches the `CARD_RETRIEVED` event with the new card object

## Compute new State
  * On `CARD_RETRIEVED`
    * When no cards have been drawn previously
      * it hydrates the state with the card object
    * When some cards have already been drawn
      * it adds the new card object to the array of previously drawn cards

## Compute Derived Data
    ...

## Render UI
  * When a card is first drawn
    * it displays the card's image
  * When there are multiple drawn cards
    * it displays each card's image
