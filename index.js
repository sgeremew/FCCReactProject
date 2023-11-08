
// create page and save in variable
let samplePage = (
    <div>
        <h3>Sample Page</h3>
        <ul>
            <li>apples</li>
            <li>bananas</li>
            <li>dragon fruit</li>
            <li>pomegranete</li>
        </ul>
    </div>
);

// params ( what it is, where to put it )
ReactDOM.render(
    samplePage,
    document.querySelector("#root")
);