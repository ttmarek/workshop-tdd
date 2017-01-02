----
# Ticket 4

_BUG_: When the hand count is >= 21 the hit-me button remains enabled
allowing the user to draw more cards.

> Given that the hand count is >= 21
> Then the hit-me button is disabled

----

## Create an Event
...

## Compute new State
...

## Compute Derived Data
...

## Render UI
 * When the hand count is 21
   * it disables the hit-me button
 * When the hand count is 25
   * it disables the hit-me button
