<<<<<<< HEAD
# React-on-Rails Hotel Reservation :hotel:

## Overview:

Full-stack react-on-rails Hotel reservation system application.
Fully functional and interactive, this web application allows
users to see a list of hotel's room displayed as cards, inspect
rooms information and reserve the room. The user also can edit and
save a reservation, delete an existent reservation.

## Technologies Used:

    * React
    * Rails
    * Ruby
    * PostgreSQL
    * JS
    * CSS
    * FontAwesome
    * Cloudinary
    * Adobe Illustrator and Photoshop 
    * Image retrieved from Unsplash and unDraw:
        - Unsplash.com
        - unDraw.co

## Aproach

I had a defined idea of what I was looking for. A hotel
reservation system that provides users with a variety of room
types, allowing the user to view more information about the rooms
and to reserve that room, also providing a place where the user
can see their booked reservation, delete and update at the same
place. Additionally, I wanted to provide the user with the ability
to search for the room and filter by some sort of criteria, which
I had to set as a stretch goal due to the small deadline for this
app.

I am a super visual person, so I like to start my projects by designing the application wireframe on my GA draw handbook with a pencil, nothing too fancy but for a visual person it makes a whole lot of difference, I feel like I have a goal to meet, like when I am doing a mockup of some website, the design is layout for me I just need to follow the patterns. Once that part is completed I start thinking about some little details that would bring character to my projects, like a funny or meaningful name or a logo, or changing the icon on the cursor when the user approaches a certain area of my application, this character can be seen throughout the entire application (like an easter egg, except I am the only one who knows about it lol), this project I decided to create the logo and the name based on my sons and wife's name after I was playing around with a string reverse challenge. The hotel name was Zilnai, can you guess what my wife and son's names are? After this, I jumped into the design and develop my back-end and my client component structure.

## Challanges:

Then I learned a valuable lesson about state management. I had
successfully tested my rails DELETE route in postman, once I
ensured that everything was set the way it should be, I move the
client development phase. Inside my UserReservation component, I
have created a method called deleteReservation() and passed two
variables -id and index- by initiated the fetch request and
passing the id as template literals I would ensure that I was
getting a unique id and not some other data. In my promes, I set
the state of the userReservationData array (where the user data
would be stored) to slice anything between the two specified
indexes, which results in the specific reservation ID being
deleted. All good, up to the point that I map over my reservation
data passing an arrow function with the user's reservation
information, mainly due to the fact that I passed only one
variable called data and omitted index on my function, the delete
button would only work if the state of the application were
refreshed, otherwise, it would not identify what the index of the
item being deleted. After I have added a second variable to the
map function and called it on my onClick alongside with data.id it
worked properly.

##### Demo: Heroku app
=======
# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
>>>>>>> 561c950e53171213c37dc95a1d575d71fdb0d275
