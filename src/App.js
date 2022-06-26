import './App.css';
import Text from './components/Text';
import Button from './components/Button';

function App() {
	return (
		<div className='App'>
			<h1>Shared Component Library</h1>
			<p>
				This is an app containing reusable components that are responsive and
				customizable.
			</p>
			<div className='gap'></div>
			<div className='row'>
				<div className='column'>
					<b>Text Component</b> <p>Output:</p>
				</div>
				<div className='column'>
					<div className='code'>
						<span className='grey'>&lt;</span>
						<span className='green'>Text </span>

						<span className='light-blue'>color={`{`}</span>
						<span className='light-blue'> {`}`} </span>

						<span className='light-blue'>size={`{`}</span>
						<span className='light-blue'> {`}`} </span>

						<span className='light-blue'>text={`{`}</span>
						<span className='light-blue'> {`}`}</span>
						<span className='grey'> /&gt;</span>
					</div>
					<Text color='#9e9e9e' size='20px' text='This is a test2.' />
				</div>
			</div>
			<div className='gap'></div>
			<div className='row'>
				<div className='column'>
					<b>Button Component</b> <p>Output:</p>
				</div>
				<div className='column'>
					<div className='code'>
						<span className='grey'>&lt;</span>
						<span className='green'>Button </span>
						<span className='light-blue'>variant={`{`}</span>
						<span className='light-blue'> {`}`} </span>
						<span className='light-blue'>size={`{`}</span>
						<span className='light-blue'> {`}`} </span>
						<span className='light-blue'>text={`{`}</span>
						<span className='light-blue'> {`}`} </span>
						<span className='light-blue'>action={`{`}</span>
						<span className='light-blue'> {`}`}</span>
						<span className='grey'> /&gt;</span>
					</div>
					<Button
						variant='secondary'
						size='large'
						text='Test'
						action={console.log('yo')}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
