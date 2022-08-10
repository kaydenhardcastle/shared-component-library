import './App.css';
import Text from './components/Text';
import Button from './components/Button';
import Input from './components/Input';
import Select from './components/Select';

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
			<div className='gap'></div>
			<div className='row'>
				<div className='column'>
					<b>Input Component</b> <p>Output:</p>
				</div>
				<div className='column'>
					<div className='code'>
						<span className='grey'>&lt;</span>
						<span className='green'>Input </span>
						<span className='light-blue'>type={`{`}</span>
						<span className='light-blue'> {`}`} </span>
						<span className='light-blue'>size={`{`}</span>
						<span className='light-blue'> {`}`} </span>
						<span className='light-blue'>label={`{`}</span>
						<span className='light-blue'> {`}`} </span>
						<span className='light-blue'>onChange={`{`}</span>
						<span className='light-blue'> {`}`}</span>
						<span className='grey'> /&gt;</span>
					</div>
					<Input onChange={console.log('yo')} />
				</div>
			</div>
			<div className='gap'></div>
			<div className='row'>
				<div className='column'>
					<b>Select Component</b> <p>Output:</p>
				</div>
				<div className='column'>
					<div className='code'>
						<span className='grey'>&lt;</span>
						<span className='green'>Select </span>
						<span className='light-blue'>options={`{`}</span>
						<span className='light-blue'> {`}`} </span>
						<span className='light-blue'>size={`{`}</span>
						<span className='light-blue'> {`}`} </span>
						<span className='light-blue'>label={`{`}</span>
						<span className='light-blue'> {`}`} </span>
						<span className='light-blue'>onChange={`{`}</span>
						<span className='light-blue'> {`}`}</span>
						<span className='grey'> /&gt;</span>
					</div>
					<Select
						options={[
							{ name: 'option 1', value: 1 },
							{ name: 'option 2', value: 2 },
						]}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
