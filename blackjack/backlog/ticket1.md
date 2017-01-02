----
# Ticket 1

As a player I want a new six deck of cards so that I can play blackjack.

> When the app loads
> Then a new 6 deck is retrieved from deckofcardsapi.com
> And the new 6 deck id is displayed in the app's message bar
> And the message should read: "Playing With Deck: {{ deckId }}"
> And the hit-me button changes from disabled to enabled

----

## Create an Event
  * When the request to get a new 6 deck is successful
    * it dispatches the `DECK_RETRIEVED` event with the new deck Id.

## Compute new State
  * On `DECK_RETRIEVED`
    * it hydrates the state with the deck Id.

## Compute Derived Data
    ...

## Render UI
  * When the deck Id is defined
    * it displays the deck Id in the message bar
    * it enables the hit-me button
