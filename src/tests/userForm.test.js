import { render, screen } from "@testing-library/react"
import user from "@testing-library/user-event"
import UserForm from '../components/userForm'

test('this is the first test i write', () => {
    render(<UserForm />)
    const inputs = screen.getAllByRole('textbox')
    const submitBtn = screen.getByRole('button')
    expect(inputs).toHaveLength(2)
    expect(submitBtn).toBeInTheDocument()
})
test('this test show that user can type into the inputs', () => {
    const mock = jest.fn()
    render(<UserForm addNewUser={mock} />)
    const [nameInput, emailInput] = screen.getAllByRole('textbox')
    const submitBtn = screen.getByRole('button')
    user.click(nameInput)
    user.keyboard('hello')
    user.click(emailInput)
    user.keyboard('hello@hello.com')

    user.click(submitBtn)
    expect(mock).toHaveBeenCalled()
    expect(mock).toHaveBeenCalledWith({name:'hello',email:'hello@hello.com'})
})