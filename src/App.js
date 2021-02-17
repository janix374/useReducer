import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import HobbiesComponent from './components/HobbiesComponent';
import dataHobbies from './data/data';

function App() {
	const refreshPage = () => {
		window.location.reload();
	};

	return (
		<Container className='mt-4'>
			<Row>
				<a
					href='https://github.com/janix374/Select-option-useReducer'
					target='_blank'
				>
					Link to code
				</a>
			</Row>
			<Row>
				<Col>
					<h2>Your Hobbies</h2>
				</Col>
				<Col>
					<Button
						className='mb-5'
						variant='outline-primary'
						onClick={refreshPage}
					>
						Refresh Page
					</Button>
				</Col>
			</Row>
			<Row>
				<Col className='mt-4' md={12}>
					<HobbiesComponent dataHobbies={dataHobbies.hobbies} />
				</Col>
			</Row>
		</Container>
	);
}

export default App;
