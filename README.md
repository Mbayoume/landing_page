<!-- Add banner here -->

# landing_page

## first project in the professional track in the FWD programme from UDACITY

# project technologies
- HTML
- CSS
- JS

# Project_description

## a multi-section landing page, with a dynamically updating navigational menu based on the amount of content that is added to the page.

# Landing Page Behavior and functionality

- multi-section landing page, with a dynamically updating navigational menu based on the amount of content that is added to the page.
- the user should know which is the active section in the page
- the nav bar items should refer which is the section that is viewed
- the page should have smooth scroll behavior
- edit the navigation bar code in css to make it responsive

# Recources and description of the project code

- first i have select the sections and the navBar menu (ul) and created an HTML fregmant for better performance
- i have used for...of to loop through the sections and i've created the elements (li) and (a) and set the attributes to the (a) using

```
setAttribute()
appendChild()
textContent()
getAttribute()

```

- for the smooth scroll part i chosed the scrollIntoView() to center the block of the element
  and i got some resource for this on [youtube](https://www.youtube.com/watch?v=HIWWBHB3xHY&t=308s) and
  [mdn](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)

- add the active class to the viewed section on viewport while scrolling resources for this part i used the the scroll event for the hole document and i set a condition to measure the space between the top of the element to heighest point in the window using the `getBoundingClientRect() `
  method and i used some recources to understand more about this method:
1. https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect

2. https://arabicprogrammer.com/article/9291663469/

3. https://www.digitalocean.com/community/tutorials/js-getboundingclientrect

4. https://www.youtube.com/watch?v=eTVGA7yFMC0


- add active class to the navBar menu to refer which section is wiewed to the user while scrolling, simply i add a condition to see which section is active and connect it's value to the link in the navBar which have the same textContent of the active section attribute ('data-nav')
if the condition is ```true``` then add the css created class and if it's ```false```
remove that class



