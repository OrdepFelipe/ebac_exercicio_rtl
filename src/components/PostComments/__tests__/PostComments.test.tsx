import { fireEvent, render, screen } from "@testing-library/react";
import PostComment from "..";

describe("Teste para o componente PostComment", () => {
  test("Deve adicionar os comentários", () => {
    render(<PostComment />);
    fireEvent.change(screen.getByTestId("textarea"), {
      target: {
        value: "primeiro comentario",
      },
    });

    fireEvent.click(screen.getByTestId("btn"));
    expect(screen.getByText("primeiro comentario")).toBeInTheDocument();

    fireEvent.change(screen.getByTestId("textarea"), {
      target: {
        value: "segundo comentario",
      },
    });

    fireEvent.click(screen.getByTestId("btn"));
    expect(screen.getByText("segundo comentario")).toBeInTheDocument();
  });
});
