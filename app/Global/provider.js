"use client"
import { Provider } from 'react-redux';
import { store } from './store';
import Cookies from 'js-cookie';

export function Providers({ children }) {

    if (typeof window !== 'undefined' && !Cookies.get('cart')) {
        Cookies.remove('cart');
      }
      
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}