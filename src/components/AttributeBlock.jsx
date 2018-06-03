import React from 'react';

class AttributeBlock extends React.Component {
    render() {

        return (
            <fieldset>
                <legend>{this.props.blockName}</legend>
                {this.props.inputs}
                {(this.props.addNewInput && <span id="add-speed-input" onClick={this.props.addNewInput}>Add Another {this.props.blockName}</span>) || ""}
            </fieldset>
        )
    }
}

export default AttributeBlock;