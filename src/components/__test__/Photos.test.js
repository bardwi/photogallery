import React from "react";

import {render} from "@testing-library/react";
import '@testing-library/jest-dom'
import Photos from '../Photos';

describe("Photos Component" ,() => {
    test('renders Photo component', () => {
        const photos = [{ id: 1, name: 'abc' }];
        const div = document.createElement('div');
        render(<Photos photos={photos} />, div);
      });
});
    

