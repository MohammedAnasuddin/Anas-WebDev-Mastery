# DEBOUNCING

## Problem

Suppose in a search bar with autocomplete functionality making API request for each every character is not suitable.
*Wouldn't it it be better if suggestions are fetched on every pause the user makes while input?*



## Solution

Use `DEBOUNCING`

We need a betterFunction to handle the requests accoding to the pauses

>  i.e we need to call this method on after a specific time interval has passed from the previous call