import React from 'react';
// import { Link } from 'react-router-dom';
import SpeedInput from './Inputs/SpeedInput';
import AttributeInput from './Inputs/AttributeInput';
import AttributeBlock from './AttributeBlock';

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
            hitPoints: "",
            speeds: [
                {
                    type: "",
                    speed: 0
                }
            ],
            attributes: [
                {
                    name: "STR",
                    value: ""
                },
                {
                    name: "DEX",
                    value: ""
                },
                {
                    name: "CON",
                    value: ""
                },
                {
                    name: "INT",
                    value: ""
                },
                {
                    name: "WIS",
                    value: ""
                },
                {
                    name: "CHA",
                    value: ""
                }
            ],
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

    /* Change Handlers for Attribute Blocks */
    handleSpeedChange = (speed, index) => {
        this.setState((state) => {
            let newState = state;
            newState.creature.speeds[index] = speed;
            return newState;
        });
    }

    handleAttrChange = (attr, index) => {
        this.setState((state) => {
            let newState = state;
            console.log(newState.creature.attributes[index]);
            newState.creature.attributes[index].value = attr.value;
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
                        <option value="" disabled>Choose Alignment...</option>
                        {this.state.alignments.map((alignment, i) => <option value={alignment} key={i}>{alignment} </option>)}
                    </select>
                    <input className="create-input" name="armorClass" placeholder="Armor Class" value={this.state.creature.armorClass} />
                    <input className="create-input" name="hitPoints" placeholder="Hit Points" value={this.state.creature.hitPoints} />

                    <AttributeBlock blockName="Speed"
                        addNewInput={this.addSpeedInput}
                        inputs={this.state.creature.speeds.map((speed, i) => <SpeedInput changeHandler={this.handleSpeedChange} speedTypes={this.state.speedTypes} speed={speed} index={i} key={i} />)}
                    />

                    <AttributeBlock blockName="Attributes"
                        inputs={this.state.creature.attributes.map((attr, i) => <AttributeInput changeHandler={this.handleAttrChange} attr={attr} index={i} key={i} />)}
                    />

                </form>
                {JSON.stringify(this.state.creature)}
            </div>
        )
    }
}

export default CreateForm;
