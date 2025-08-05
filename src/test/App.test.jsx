import { describe, expect, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";

describe ('testiamo applicazione', () => {
    it ('renders welcome',()=> {
        render(<App/>)
        expect(screen.getByText(/Benvenuto su Epibooks!/i)).toBeInTheDocument()
    });
    it('render allthebooks after sometime', async () => {
        render(<App/>)
        await waitFor(() => {
            expect(screen.queryByText(/The Silent Corner/i)).toBeInTheDocument()
        }, {timeout : 7000} )
    },10000)

    it('render commentArea', async () => {
    const { container } = render(<App />);
    await waitFor(() => {
        expect(container.querySelector('.text-center')).toBeInTheDocument();
    })})

    
})