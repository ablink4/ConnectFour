import React, { Component } from 'react';
import '../index.css';

export class ConnectFour extends Component {
	displayName = ConnectFour.name

	constructor(props) {
		super(props);
		this.state = { currentDifficulty: 'easy' };
	}

	setDifficulty = changeEvent => {
		this.setState({
			currentDifficulty: changeEvent.target.value
		});
	}

	render() {
		return (
			<div>
				<h1>Connect Four</h1>

				<p>On this page, you will play Connect 4 against a computer.</p>

				<p>Select a difficulty level:</p>
				<input type="radio" id="easy" name="difficulty" value="easy" checked={this.state.currentDifficulty === "easy"} onChange={this.setDifficulty}/>
				<label for="easy">Easy: The computer selects any free slot at random.</label>
				<br/>

				<input type="radio" id="medium" name="difficulty" value="medium" checked={this.state.currentDifficulty === "medium"} onChange={this.setDifficulty}/>
				<label for="easy">Medium: The computer initially choses a strategy at random and sticks to it, regardless of if it stops being the best strategy later in the game.</label>
				<br/>

				<input type="radio" id="hard" name="difficulty" value="hard" checked={this.state.currentDifficulty === "hard"} onChange={this.setDifficulty}/>
				<label for="easy">Hard: The computer switches between a variety of strategies to select the best move available based on a set of pre-programmed rules.</label>
				<br/>
				<input type="radio" id="learning" name="difficulty" value="learning" checked={this.state.currentDifficulty === "learning"} onChange={this.setDifficulty}/>
				<label for="easy">Learning Mode: The computer uses an unsupervised learning algorithm and training data from all its previous games to determine its next move.</label>
				<br />

				{/* still working on getting this to work.  trying to figure out how to get CSS to render in react components.  I think I'm just missing something obvious.  I'll get it. */}
				<span className="span dot"></span>
				<span class="dot"></span>
				<span class="dot"></span>
				<span class="dot"></span>
				<span class="dot"></span>
				<span class="dot"></span>
				<span class="dot"></span>
				<br />

				<span class="dot"></span>
				<span class="dot"></span>
				<span class="dot"></span>
				<span class="dot"></span>
				<span class="dot"></span>
				<span class="dot"></span>
				<span class="dot"></span>
				<br />

				<span class="dot"></span>
				<span class="dot"></span>
				<span class="dot"></span>
				<span class="dot"></span>
				<span class="dot"></span>
				<span class="dot"></span>
				<span class="dot"></span>
				<br />

				<span class="dot"></span>
				<span class="dot"></span>
				<span class="dot"></span>
				<span class="dot"></span>
				<span class="dot"></span>
				<span class="dot"></span>
				<span class="dot"></span>
				<br />


				<span class="dot"></span>
				<span class="dot"></span>
				<span class="dot"></span>
				<span class="dot"></span>
				<span class="dot"></span>
				<span class="dot"></span>
				<span class="dot"></span>
				<br />

				<span class="dot"></span>
				<span class="dot"></span>
				<span class="dot"></span>
				<span class="dot"></span>
				<span class="dot"></span>
				<span class="dot"></span>
				<span class="dot"></span>
				<br />
			</div>
		);
	}
}
