import PropTypes from 'prop-types';
import { Form, Input, Submit } from "./MovieForm.styled"

const MovieForm = ({ submit, change, inputValue }) => {
    return (
        <Form onSubmit={submit}>
            <Input onChange={change} value={inputValue} name='query' type="text" />
            <Submit type="submit">Search</Submit>
        </Form>
    )
}

MovieForm.propTypes = {
    submit: PropTypes.func.isRequired,
    change: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired,
}

export default MovieForm