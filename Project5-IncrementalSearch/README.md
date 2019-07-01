# Project 5 Incremental Search
Incremental search has become standard on sites across the web. This project allows users to find one of the countries that exists on earth.

<img src="search.gif">

## Part 1 Search features:
* Every time the user types a visible character, if the current value of the input field is at the beginning of the names of any countries in the list, those country names are displayed (up to only four countries displayed at a time).

* If the current value of the input is not at the beginning of any of the country names, the string "No results" is displayed in grey.

* If a list of results is displayed and the user clicks outside of it and outside of the input field, the result list disappears.

* Result lists reappears when the user gives the input field focus

* If the user mouses over a result in the result list, that result lights up (grey background colour and blue text colour)

* If a result list is displayed and the user hits an up or down arrow key, the appropriate result lights up

* If the user clicks a result or hits the enter key while a result is lit up, the full country name of the appropriate result appears in the input field and the result list disappears.

*Do not use the HTML `<select>` or `<datalist>` tags to solve this challenge!*

**_NOTES_**: 
* Coding technologies: HTML, CSS, Javascript and Jquery.
* Learned more about Jquery events
