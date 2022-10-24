import React from "react";

import {render, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom'
import Button from '../Button';


describe("Button Component" ,() => {
    const props = {
        addFavorites: jest.fn(),
        text: 'Favourite',
    }
    test("renders component", ()=> {
        const {button} = render(<Button />);
        expect(button).toMatchSnapshot();
    })

    test("Calls the on Click", ()=> {
    
    const { addFavorites, text } = props;
    const {queryByText} = render(
    <Button {...props} addFavorites={addFavorites}/>);
    fireEvent.click(queryByText(text));
    expect(addFavorites).toHaveBeenCalled()
    })

})