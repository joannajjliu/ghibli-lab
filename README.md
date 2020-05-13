# Lab: Router (Hooks)

This lab aims to apply the basics of:

- event-binding
- state
- lifecycle methods
- routing

## Running the App

1. Clone

    ### `git clone https://github.com/min1c/lab-router-hooks.git`

2. Install dependencies

    ### `npm install`

3. Start the web application

    ### `npm start`

4. Open in web browser at http://localhost:3000/

5. Follow instructions and edit code

## In App.js:

1. Modify the behaviour of the Navbar.Brand and Nav.Link elements to behave as a react-router <NavLink>.  
    
    - Using <NavLink> will not trigger a full page refresh when navigating within a router.
    
    - Hint: Use 'as' attribute

2. Replace the current <Home> return with two <Route> components within a <Switch> component
    
    a. The first route will render the <Films> component if the path is "/films"

    b. The second route will render the <Home> component if the path is "/"

## In FilmsHook.js:

1. Add state:

    a. Make 'id' stateful with an initial state of an empty string

    b. Make 'films' stateful with an initial state of an empty list

2. Write an effect hook for 'films' to fetch film list using the provided fetchFilms function and set it only once upon initialization

3. Create a variable called 'match' which captures the route match object

    - Add a "to" property to the ListGroup.Item elements to link to the film details. Use the match object and film.id

4. Replace { C.INCOMPLETE_2_FULL } with two <Route> components within a <Switch> component

    a. The first route will render the <FilmDetails> component if the path is exactly the match path + "/:id"

    b. The second route will render { C.SELECT_FILM } if the path is the match path

5. Add a callback hook to handle id change

    a. It should accept selectedId and set the "id" state to selectedId

    b. It should be memoized only once (at initialization)

    c. Pass it as a prop called onIdChange to the FilmDetails component in the route you created in the previous step

    d. Add a "className" property to the ListGroup.Item elements that will conditionally set the class to "active" or "" depending if the state id matches the element's film.id

## In FilmDetailsHook.js:

1. Create a variable called 'id' which captures the :id from the Route using one of the react-router hooks

2. Add state:

    a. Make 'film' stateful with an initial state of an empty object

    b. Make 'filmChildren' stateful with an initial state of an empty object
    
3. Add effects:

    a. Write an effect hook for 'film' to fetch the film details using the provided fetchFilm function and set it when id is changed

    b. Write an effect hook for 'filmChildren' to format the film details using the provided generateChildren function when film is changed

4. Add an event handler inside the film effect to use the provided onIdChange function

    - Modify the effect to run when onIdChange is changed along with id