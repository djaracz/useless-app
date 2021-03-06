import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/formActions';
import Form from '../../components/Form/Form';

const mapStateToProps = state => ({
    invalidateInputs: state.form.invalidateInputs,
    focusedInput: state.form.focusedInput,
    name: state.form.name,
    email: state.form.email,
    nickname: state.form.nickname,
    password: state.form.password,
    inputs: state.form.inputs
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actions, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);
