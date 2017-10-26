Approach:

1) I have taken a bottom up approach where in for every task, I handled the reducer actions first (ex : toggleItem, deleteItem) and added the required tests for the actions. Normally I use storybook in my applicatons and create the presentation components first and its different states and finally connect these components to container components (connect with redux).
2) After handling the reducer actions I updated the components and its props and callbacks and also updated and added new tests for these component.
3) For Filtering task, I first created 3 additional components: ItemsFilter, ItemsFilterLink and ItemLink
    ItemsFilter : Presentational component
    ItemsFilterLink : Container Component
    ItemLink : Presentational component

Improvements:

1) Like Filtering task components, other components can also be divided into several presentational and Container components.
2) Snapshot testing can be used to test the rendered output of components.
3) Tools like Storybook must be used to view the different states of each component. This helps to create and browse a component library. This also helps in quick feedback from business as far as the UI is concerned.
4) Async actions must be used.
5) Libraries like Reselect must be used as it provides memoised selectors.  
6) Middlewares like redux-logic or redux-thunk or redux-saga can be used.
7) Libraries like redux-actions can be used to avoid lot of boilerplate code.
8) Libraries like Immutable.js can be used to make sure that some operations do not mutate the data.
9) For styling, libraries like Styled Components can be used.
