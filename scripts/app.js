// Two video elements
// buttons to select which is better
var AppContainer = React.createClass({
    render: function() {
        return (
            <div className="appContainer">
                <h1>Battle Roymeow</h1>
                <Video1 />
                <Video2 />
            </div>
        )
    }
});

var Video1 = React.createClass({
    getInitialState: function() {
        return {};
    },
    render: function() {
        return (
            <div className="Video1Container">
                <p id="video1">Heres video 1</p>
            </div>
        );
    }
});

var Video2 = React.createClass({
    getInitialState: function() {
        return {};
    },
    render: function() {
        return (
            <div className="Video1Container">
                <p id="video2">Heres video 2</p>
            </div>
        );
    }
});

ReactDOM.render(
    <AppContainer />,
    document.getElementById('react-app')
);