//////////////// START the global variables ////////////////

//creat an array form the sections Node list
const pageSections = Array.from(document.querySelectorAll("section"));

// select the navBar ul class to append the created list items to it
const navList = document.getElementById("navbar__list");

const fragment = new DocumentFragment(); // creat a fragment for better performance

//////////////// End of the global variables ////////////////

// use the (for ...  of ) loop through the sections
for (const item of pageSections) {
  // create a (li) and (a) elements
  const listItem = document.createElement("li");
  const anchor = document.createElement("a");

  // set the (href) attribute to the anchor element using the id of the sections

  anchor.setAttribute("href", "#" + item.getAttribute("id"));

  //append the list item to the parent element (ul)
  navList.appendChild(listItem);
  // append the anchor to the parent element (li)
  listItem.appendChild(anchor);
  // add class (menu__link) for styling to the link
  anchor.classList.add("menu__link");
  //add the inner text to the anchor element
  anchor.textContent = item.getAttribute("data-nav");

  ///////////////////// CREAT SMOOTH SCROLL EVENT //////////////////////

  /*
  >> i have creat this part inside the for...of loop to avoid repeating loops and 
    avoid too much lines of code
  */

  //   add click event listner for every anchor tag in the navbar
  anchor.addEventListener("click", function (e) {
    // (e)event parameter
    //   prevent default action for the iteration
    e.preventDefault();
    /*using the scroollIntoView method for smooth scroll 
      and centering the section in the view port of the user without computing the size of 
      the element*/

    item.scrollIntoView({ behavior: "smooth", block: "center" });
  });
  // append the HTMLfragment to the ul
  navList.appendChild(fragment);

  ////////////// START to Get the active Section and the active link/////////////

  /*
      for this part i looped through sections to get the size of the section that 
      is viewd to the user using the getBoundingClientRect()
      to set the active class to the section and the active linke in the nav bar that is
      refer to that active section

      // some recources i've used for this part

      >> https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
      >>https://arabicprogrammer.com/article/9291663469/
      >>https://www.digitalocean.com/community/tutorials/js-getboundingclientrect

      >>https://www.youtube.com/watch?v=eTVGA7yFMC0

      
        
      => condition for the viewport if it between 0 and 300, i tried some values 
        but 300 looks great and added the active class effictivly
  
      */

  //  add scroll event to the document
  document.addEventListener("scroll", function () {
    pageSections.forEach(function (viewportItem) {
      // write the condition to dedect the viewport of the user height using top()
      if (
        viewportItem.getBoundingClientRect().top >= 0 &&
        viewportItem.getBoundingClientRect().top <= 300 // the space between the top element and top of the window
      ) {
        /*
        if the height of the viwport condition is true check using if condition which 
        link has the textContent equal to active section (data-nav) attribute
        // check if the value of the link text_content equal the section Attribute("data-nav")
        */

        if (anchor.textContent === viewportItem.getAttribute("data-nav")) {
          // add the css (active_class) to the link of the navbar
          anchor.classList.add("active_link");
        } else {
          // remove the css (active link)from the link of the navbar
          anchor.classList.remove("active_link");
        }
        // viewportItem.getAttribute("data-nav");
        viewportItem.classList.add("your-active-class");
      } else {
        viewportItem.classList.remove("your-active-class");
      }
    });
  });
}
