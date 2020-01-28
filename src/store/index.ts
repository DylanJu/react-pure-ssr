import { createStore, Store } from 'redux';
import rootReducer, { RootState } from './reducers';

const configureStore = (preloadedState?: RootState): Store =>
  createStore(rootReducer, preloadedState);

export default configureStore;
