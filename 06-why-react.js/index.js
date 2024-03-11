



// Clock Component class _ v1
/*
function Clock(props) {
    const { timeZone } = props;
    const h3Element = React.createElement('h3', { className: 'text-center' }, timeZone);
    const cardHeaderElement = React.createElement('div', { className: 'card-header' }, h3Element);
    const timeDivElement = React.createElement('div', { className: 'text-center' }, new Date().toLocaleTimeString('en-US', { timeZone }));
    const cardBodyElement = React.createElement('div', { className: 'card-body' }, timeDivElement);
    const cardElement = React.createElement('div', { className: 'card' }, cardHeaderElement, cardBodyElement);
    return cardElement;
}
*/

// Clock Component class _ v2 (using JSX) jsx => template syntax for components ( proposed by Facebook )
function Clock(props) {
    const { timeZone } = props;
    return (
        <div className="card">
            <div className="card-header">
                <h3 className="text-center">{timeZone}</h3>
            </div>
            <div className="card-body">
                <div className="text-center">
                    {new Date().toLocaleTimeString('en-US', { timeZone })}
                </div>
            </div>
        </div>
    );
}

function ClockBoard() {
    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <div id="asia-kolkata">
                        <Clock timeZone="Asia/Kolkata" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div id="asia-dubai">
                        <Clock timeZone="Asia/Dubai" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div id="america-newyork">
                        <Clock timeZone="America/New_York" />
                    </div>
                </div>
            </div>
        </div>
    );
}


setInterval(() => {
    ReactDOM.render(<ClockBoard />, document.getElementById('root'));
}, 1000);