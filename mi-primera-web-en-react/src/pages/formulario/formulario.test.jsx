import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect, test } from "vitest";
import Formulario from "./formulario";

test("Probar input del nombre", () => {
    render(
        <MemoryRouter>
            <Formulario/>
        </MemoryRouter>
    )

    const nombreInput = screen.getByLabelText('Nombre:');
    fireEvent.change(nombreInput, {target:{value: "Pedrito"}});
    expect(nombreInput.value).toBe("Pedrito");
});