import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from "..";

afterEach(cleanup)

describe('ContactForm', () => {
    it('renders', () => {
        render(<ContactForm />)
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm />); 
        expect(asFragment).toMatchSnapshot();
    });
});

describe('h1 is right', () => {
    it('has contact me in h1', () => {
        const { getByTestId } =render(<ContactForm />);

        expect(getByTestId('contact')).toHaveTextContent('Contact Me')
    });
});

describe('contactButton says submit', () => {
    it('says submit', () => {
        const { getByTestId } =render(<ContactForm />);

        expect(getByTestId('contactButton')).toHaveTextContent('Submit')
    })
})