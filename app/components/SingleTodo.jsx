import React from 'react'

const SingleTodo = ({todo}) => {
    return (
        <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title">{todo.title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
    )
}

export default SingleTodo