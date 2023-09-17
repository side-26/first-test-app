import { render,screen } from "@testing-library/react"
import UserForm from '../components/userForm'

test('this is the first test i write',()=>{
render(<UserForm/>)
const inputs=screen.getAllByRole('textbox')
const button=screen.getByRole('button')
expect(inputs).toHaveLength(2)
expect(button).toBeInTheDocument()
})