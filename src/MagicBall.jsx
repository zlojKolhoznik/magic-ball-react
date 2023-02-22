import React from "react";

export default class MagicBall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: "",
            answers: [
                "It is certain",
                "It is decidedly so",
                "Without a doubt",
                "Yes definitely",
                "You may rely on it",
                "As I see it, yes",
                "Most likely",
                "Outlook good",
                "Yes",
                "Signs point to yes",
                "Reply hazy try again",
                "Ask again later",
                "Better not tell you now",
                "Cannot predict now",
                "Concentrate and ask again",
                "Don't count on it",
                "My reply is no",
                "My sources say no",
                "Outlook not so good",
                "Very doubtful"
            ],
            shake: () => {
                const answer = this.state.answers[Math.floor(Math.random() * (this.state.answers.length - 1))];
                this.setState({ answer: answer });
            }
        };
    }

    render() {
        return (
            <div className="ball-container">
                <h1>Ask the Magic 8 Ball! Think of a question an press `Shake!` button!</h1>
                <div className="ball">
                    <p id="answer">{this.state.answer}</p>
                </div>
                <button onClick={this.state.shake}>Shake!</button>
            </div>
        );
    }
}
