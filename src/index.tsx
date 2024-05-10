import { createRoot } from 'react-dom/client'
import App from 'App'
import 'tailwindcss/tailwind.css'

import { store } from './store'
import { Provider } from 'react-redux'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
