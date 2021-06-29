import './App.css';
import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
      {props.name}
      <button onClick={() => {console.log('click'); props.changeName('rakesh')}}>Change Name</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    name: state.name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeName: name => { dispatch({type:'CHANGE_NAME', payload: name}) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
