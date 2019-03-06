import React, {Component, Fragment} from 'react';
// Funkce na generování UUID  (nepsána mnou)
function b(a){return a?(a^Math.random()*16>>a/4)
    .toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11)
    .replace(/[018]/g,b)}
////

class InputCom extends Component {

    render() {
        console.log(b())
        return (
            <Fragment>
                <input type="text" required />
            </Fragment>
        );
    }
}
export default InputCom;