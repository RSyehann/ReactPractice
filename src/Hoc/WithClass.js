import React, { Component } from 'react';


// const withClass = (WrappedCompoonent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedCompoonent { ...props }/>
//         </div>
//     )
// }

const withClass = (WrappedCompoonent, className) => {
    const WithClass = class extends Component {
        render () {
            return (
                    <div className={className}>
                        <WrappedCompoonent ref={this.props.forwardedRef} { ...this.props }/>
                    </div>
            )
        }
    }

    return React.forwardRef((props, ref) => {
        return <WithClass { ...props } forwardedRef={ref} />;
    });
}

export default withClass;