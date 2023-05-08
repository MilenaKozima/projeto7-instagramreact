import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import Body1 from './Body1';


function Body() {
    return {

    }
}


function App() {
    return (
        <div class="root">
            <NavBar />
            <Body1 />
        </div>
    );
}

const app = App();


ReactDOM.render(app, document.querySelector(".root"));

