import React from 'react';

class SpeedInput extends React.Component {
    handleChange = (target) => {
        let speed = this.props.speed;

        speed[target.name] = target.value;
        this.props.changeHandler(speed, this.props.index);
    }

    render() {

        return (
            <div>
                <select name="type" className="speedType" value={this.props.speed.type} onChange={(e) => this.handleChange(e.target)}>
                    <option value="" selected disabled>Choose Movement Type...</option>
                    {this.props.speedTypes.map((type, i) => <option value={type} key={i}>{type}</option>)}
                </select>
                <input type="input" placeholder="Distance" name="speed" value={this.props.speed.speed} onChange={(e) => this.handleChange(e.target)}/>
            </div>
        )
    }
}

export default SpeedInput;
