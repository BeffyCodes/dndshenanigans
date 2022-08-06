import React from 'react';

class SavingThrowInput extends React.Component {
    handleChange = (target) => {
        let savingThrow = this.props.savingThrow;

        savingThrow[target.name] = target.value;
        this.props.changeHandler(savingThrow, this.props.index);
    }

    render() {

        return (
            <div>
                <select name="type" className="savingThrowType" value={this.props.savingThrow.type} onChange={(e) => this.handleChange(e.target)}>
                    <option value="" disabled>Choose Attribute...</option>
                    {this.props.attributes.map((attr, i) => <option value={attr} key={i}>{attr}</option>)}
                </select>
                <input type="input" placeholder="Value" name="value" value={this.props.savingThrow.value} onChange={(e) => this.handleChange(e.target)}/>
            </div>
        )
    }
}

export default SavingThrowInput;
