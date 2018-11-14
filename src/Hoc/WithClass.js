import React, { Component } from 'react';


// const withClass = (WrappedCompoonent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedCompoonent { ...props }/>
//         </div>
//     )
// }

const withClass = (WrappedCompoonent, className) => {
    return class extends Component {
        render () {
            return (
                    <div className={className}>
                        <WrappedCompoonent { ...this.props }/>
                    </div>
            )
        }
    }
}

export default withClass;