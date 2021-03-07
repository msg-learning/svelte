import { render } from '@testing-library/svelte'

import Marmotte from "./Marmotte.svelte";

describe("<Marmotte />", () => {
    it("takes src as argument", () => {
        const imagePath = "images/mrmotte.jpg";
        const { getByTestId } = render(Marmotte, { src: imagePath });

        const image = getByTestId("image");
        expect(image).toHaveAttribute("src", imagePath);
    })
})