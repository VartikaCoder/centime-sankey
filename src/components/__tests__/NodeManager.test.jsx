import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { store } from '../../redux/store';
import i18n from '../../i18n/i18n';
import NodeManager from '../NodeManager';
import '@testing-library/jest-dom';

test('renders NodeManager and adds a new node', async () => {
    render(
        <I18nextProvider i18n={i18n}>
            <Provider store={store}>
                <NodeManager />
            </Provider>
        </I18nextProvider>
    );

    fireEvent.change(screen.getByPlaceholderText('Enter node name'), {
        target: { value: 'Test Node' },
    });
    fireEvent.change(screen.getByPlaceholderText('Enter node value'), {
        target: { value: '200' },
    });

    fireEvent.click(screen.getByText(/Add Node/i));

    const addedNode = await screen.findByText(/Test Node/i);
    expect(addedNode).toBeInTheDocument();
});