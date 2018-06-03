import React from 'react';

class AttributeInput extends React.Component {
    handleChange = (value) => {
        console.log(value);
        let newAttr = this.props.attr;
        newAttr.value = value;
        this.props.changeHandler(newAttr, this.props.index);
    }

    render() {

        return (
            <div>
                <label>{this.props.attr.name}</label>
                <input type="input" placeholder="Value" value={this.props.attr.value} onChange={(e) => this.handleChange(e.target.value)} />
            </div>
        )
    }
}

export default AttributeInput;
