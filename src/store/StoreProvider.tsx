import { Provider } from 'react-redux';
import store from './store';
import type { ReactNode } from 'react';



function StoreProvider({ children } : { children: ReactNode }) {
  return (
    <Provider store={store} >
        { children }
    </Provider>
  )
}

export default StoreProvider