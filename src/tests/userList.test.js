import { queryAllByRole, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserList from "../components/usersList";
test("should render two row if we have two item in array", () => {
  const arr = [
    { name: "mahdi", email: "mahdi@gmail.com" },
    { name: "daf", email: "dafi@gamil.com" },
  ];
  const { container } = render(<UserList list={arr} />);
  const rows = container.querySelectorAll("tbody>tr");
  expect(rows).toHaveLength(2);
});
test("render each user name and email", () => {
  const arr = [
    { name: "mahdi", email: "mahdi@gmail.com" },
    { name: "daf", email: "dafi@gamil.com" },
  ];
  render(<UserList list={arr} />);
  for (let user of arr) {
    const name = screen.getByRole("cell", {
      name: user.name,
    });
    const email = screen.getByRole("cell", {
      name: user.email,
    });
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    // console.log(user);
  }
});

