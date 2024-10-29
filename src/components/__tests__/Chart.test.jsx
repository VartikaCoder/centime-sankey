import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { store } from '../../redux/store';
import i18n from '../../i18n/i18n';
import Chart from '../Chart';
import '@testing-library/jest-dom';

test('renders Chart title correctly', async () => {
    render(
        <I18nextProvider i18n={i18n}>
            <Provider store={store}>
                <Chart />
            </Provider>
        </I18nextProvider>
    );

    expect(await screen.findByText(/Financial Sankey Diagram/i)).toBeInTheDocument();
});
