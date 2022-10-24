import React from "react";
import {render, fireEvent,screen, cleanup} from "@testing-library/react";
import '@testing-library/jest-dom'
import PhotoList from '../PhotoList';


describe("Photo List Component" ,() => {
  
    test('Check to fetch photos list at start', () => {
        const { queryByTestId } = render(<PhotoList />)
        expect(queryByTestId('fetch-photos')).toBeNull()
    });
   test('Expect loading state', async () => {
        render(<PhotoList />)
	    expect(screen.getByText("Loading...")).toBeInTheDocument();
 });

});