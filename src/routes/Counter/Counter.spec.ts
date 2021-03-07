import { render } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";

import Counter from "./Counter.svelte";

describe("<Counter />", () => {
    it("Starts the counter on zero", () => {
        const { getByTestId } = render(Counter);

        const counter = getByTestId("count");

        expect(counter).toHaveTextContent("0");
    });

    it("Increases the count when clicking on the right button", async () => {
        const { getByTestId } = render(Counter);

        const increase = getByTestId("increase");
        const counter = getByTestId("count");

        await userEvent.click(increase);

        expect(counter).toHaveTextContent("1");
    });

    it("Decreases the count when clicking on the decrease button", async () => {
        const { getByTestId } = render(Counter);

        const decrease = getByTestId("decrease");
        const counter = getByTestId("count");

        await userEvent.click(decrease);

        expect(counter).toHaveTextContent("-1");
    });

    it("Allows to start the count with different values", () => {
        const { getByTestId } = render(Counter, { count: 10 });

        const counter = getByTestId("count");

        expect(counter).toHaveTextContent("10")
    })
});