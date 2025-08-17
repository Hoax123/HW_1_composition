import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Game from './components/Game/Game.jsx'
import {Provider} from 'react-redux'
import {store} from './stateManagment/store/store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
            <Game />
      </Provider>
  </StrictMode>,
)
