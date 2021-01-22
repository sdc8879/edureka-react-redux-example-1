What is Store?
A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it.
To create a store, you would need two things state and reducer. Reducer is nothing but it is a simple function.
To create store. Create a new file called “reducer.js” under store folder. Below is the example reducer.js file -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
The “initialState” is our application state. Where all value will be store.

The “reducer” is a reducer which is able to change the ” initialState”.

Next, Let’s connect our application with “Redux”.

Now we have reducer. Remember the store has to be global. The store has to be done at highest level. And highest level of React application is “index.js”. So open the “index.js” file and do the following changes -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
Now store is available to the entire application, Let’s see above changes

The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function. In the simple terms the “Provider” allows us to inject the global store.

The “createStore ” allow us to create the store.

Next, Open the App.js file and do the following changes to access the Redux store. -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

-----------\***\*\*\*\*\*\***IMP**\*\***\***\*\***------------------------
https://www.valentinog.com/blog/redux/
https://chriscourses.com/blog/redux
