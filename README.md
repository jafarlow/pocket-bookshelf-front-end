LINKS
Github Front-end repo: https://github.com/jafarlow/album-library-front-end
Github Back-end repo: https://github.com/jafarlow/album-library-back-end
Deployed app: https://jafarlow.github.io/album-library-front-end/
Deployed Heroku: https://intense-fortress-15001.herokuapp.com/
Wireframes: https://imgur.com/AYX0poV

USER STORIES
As a user I want to register on the website and signin
As a user I want to be able to log out of the website
As a user I want to be able to change my password
As a user I want to add an album to my collection
As a user I want to see my collection
As a user I want to be able to update an item in my collection
As a user I want to be able to delete an item from my collection

OVERVIEW OF THE APP
This app is essentially a library builder for users to catalogue their record
collection. Upon page load, the user is met with a login/register request.
Registration does not automatically log in, so the user will need to do that
upon registering. Once logged in, the view changes and the user sees four buttons:
Sign out, Change password, My collection, and Add album. Sign out brings the
user back to the initial view. Change password shows two input fields that will
collapse when the button is clicked again. My collection shows the current list
of albums as user has added. These albums are themselves clickable, which
expands a field showing Update and Remove buttons. The Update button pops up a
modal form, the Remove button clears the item from the list and refreshes the
list. Clicking again on the album will collapse and hide the buttons. Add album
displays an entry form for album title and artist.

TECHNOLOGY USED
HTML, CSS, Bootstrap, Handlebars, JavaScript, Ruby, Rails, Google Fonts

FUTURE OF THE APP
There are a handful of things which I have as yet been unable to accomplish.
Primarily I want to implement a thrid party API from Wikipedia to perform a
lookup for each album a user has added to their collection. This would at least
populate release date and genre fields. I may also try an pull in the album cover
art and have that displayed somewhere. This information which would be pulled
from Wikipedia would be displayed in the same collapsed section as the Update and
Remove buttons.
On the front end I would like a user to be able to sort their collection
alphabetically by album title or by album artist.

PLANNING AND DEVELOPMENT PROCESS
I started out thinking big-picture, and I frequently needed to reel myself in
to just focus on the here-and-now. I would ask myself, "What needs to be done now
in order to implement the next piece?" I broke down my code objectives into a
schedule that I followed quite closely:
1) HTML & CSS skeleton
2) Ruby/Rails database building and functionality
3) JS authorization
4) JS user actions
5) Refine HTML & CSS
6) Deploy
There was a lot of debugging and more than a handful of roadblocks. Were I not
bald I would describe some of these as hair-pulling problems. To overcome these
impediments I relied on Google, related tech docs, the issue queue, and my
fellow classmates for advice, hints, and suggestions. They were invaluable to me
completing this on time.
