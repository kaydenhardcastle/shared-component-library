import './App.css';

function App() {
	return (
		<div className='App'>
			<h1>Shared Component Library</h1>
			<p>
				This is an app containing reusable components that are responsive and
				customizable.
			</p>
			<div class='gap'></div>
			<b>Text Component</b>
			<div class='code'>
				<span class='grey'>&lt;</span>
				<span class='green'>Text </span>

				<span class='light-blue'>color={`{`}</span>
				<span class='light-blue'> {`}`} </span>

				<span class='light-blue'>size={`{`}</span>
				<span class='light-blue'> {`}`} </span>

				<span class='light-blue'>text={`{`}</span>
				<span class='light-blue'> {`}`}</span>
				<span class='grey'> /&gt;</span>
			</div>
		</div>
	);
}

export default App;
