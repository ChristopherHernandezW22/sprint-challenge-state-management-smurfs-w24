1. What problem does the context API help solve?
Context API is used when we have global data with lots of components to share and when we have to pass data through complex components. It can help to keep the coding clean.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are payloads of information that transfers data from your application to your store and are the only source of information that can be connected to the store.
Reducers take two arguments (current state & an action) and returns a new state object based on those two arguments.
Stores holds a whole state tree of an application. The state inside can only be changed with an action dispatch.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application states are global and component states are local.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux thunk is a middleware which allows you to call action creators which return functions instead of action objects. Those functions receive the store's dispatch method.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
I enjoyed Monday's project (shopping-card) when we used context api. I wanted to be more familiar with how to work with e-commerce.