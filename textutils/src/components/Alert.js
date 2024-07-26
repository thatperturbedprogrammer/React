import React from 'react'

export default function Alert(props) {

    // const capitalize = (word) => {
    //     const lower = word.toLowerCase();
    //     return lower.charAt(0).toUpperCase() + lower.slice(1);
    // }
  return (
    <>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show m-2`} role="alert">
            <strong>{props.alert.msg}</strong>
        </div>
    </>
  )
}
