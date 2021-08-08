import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import profileReducer from './profile/reducers'
import messagesReducer from './messages/reducers'
import chatsReducer from './chats/reducers'
import newsReducer from './news/reducers'


const persistConfig = {
	key: 'root',
	storage,
}

const rootReducer = combineReducers({
    profile: profileReducer,
		messages: messagesReducer,
		chats: chatsReducer,
		news: newsReducer,
})

const persistedReduser = persistReducer(persistConfig, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
	persistedReduser,
	composeEnhancers(applyMiddleware(thunk))
	);

export const persistor = persistStore(store)
