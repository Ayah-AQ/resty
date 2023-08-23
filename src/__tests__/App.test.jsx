import React from 'react';
import { render, screen,waitFor, fireEvent } from '@testing-library/react';
import App from '../App';


it('it loads and displays the request method', async () => {
    render(<App />);
    const reqMethod  = await waitFor(() => screen.getByTestId('req-method'));
    expect(reqMethod.textContent).toBe('Request Method: ');
}) 
it('it displays the URL ', async () => {
    render(<App />);
    const url  = await waitFor(() => screen.getByTestId('url'));

    expect(url.textContent).toBe('URL: ');
}) 