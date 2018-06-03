import React from 'react';
// import { Link } from 'react-router-dom';
import SpeedInput from './Inputs/SpeedInput';

class CreateForm extends React.Component {
    state = {
        alignments: [
            "Lawful Good",
            "Lawful Neutral",
            "Lawful Evil",
            "Neutral Good",
            "Neutral Neutral",
            "Neutral Evil",
            "Chaotic Good",
            "Chaotic Neutral",
            "Chaotic Evil"
        ],
        speedTypes: [
            "Walk",
            "Burrow",
            "Climb",
            "Fly",
            "Fly (hover)",
            "Swim"
        ],
        creature: {
            name: "",
            size: "",
            creatureType: "",
            alignment: "",
            armorClass: "",
            hitPoints: 0,
            speeds: [
                {
                    type: "",
                    speed: 0
                }
            ],
            attributes: {
                str: 0,
                dex: 0,
                con: 0,
                int: 0,
                wis: 0,
                cha: 0
            },
            savingThrows: [],
            skills: [],
            damageMods: [],
            senses: [],
            languages: [],
            challengeRating: 0,
            exp: 0
        }
    }
    handleInput(field) {

    }

    addSpeedInput = () => {
        this.setState((state) => {
            let newState = state;
            let newSpeeds = newState.creature.speeds;

            newSpeeds.push({
                type: "",
                speed: 0
            });

            newState.creature.speeds = newSpeeds;

            return newState;
        });
    }

    handleSpeedChange = (speed, index) => {
        this.setState((state) => {
            let newState = state;
            newState.creature.speeds[index] = speed;
            return newState;
        });
    }

    render() {

        return (
            <div className="create-form">
                <form name="createMonster">
                    <input className="create-input" name="name" placeholder="Name" value={this.state.creature.name} />
                    <input className="create-input" name="size" placeholder="Size" value={this.state.creature.size} />
                    <input className="create-input" name="creatureType" placeholder="Creature Type" value={this.state.creature.creatureType} />
                    <select className="create-input" name="alignment" value={this.state.creature.size}>
                        <option value="" selected disabled>Choose Alignment...</option>
                        {this.state.alignments.map((alignment, i) => <option value={alignment} key={i}>{alignment} </option>)}
                    </select>
                    <input className="create-input" name="armorClass" placeholder="Armor Class" value={this.state.creature.armorClass} />
                    <input className="create-input" name="hitPoints" placeholder="Hit Points" value={this.state.creature.hitPoints} />

                    <fieldset>
                        <legend>Speed</legend>
                        {
                            this.state.creature.speeds.map((speed, i) => <SpeedInput changeHandler={ this.handleSpeedChange } speedTypes={this.state.speedTypes} speed={speed} index={i} key={i} />)
                        }
                        <span id="add-speed-input" onClick={this.addSpeedInput}>Add Another Speed</span>
                    </fieldset>
                </form>
                <div>{ console.log(this.state.creature.speeds) }</div>
            </div>
        )
    }
}

export default CreateForm;
