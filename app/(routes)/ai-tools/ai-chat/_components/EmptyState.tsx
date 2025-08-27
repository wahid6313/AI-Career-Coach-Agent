import React from 'react'

const questionList = [
    'What skills do I need for a data analyst role?',
    'How do I switch careers to UX design?'
]

function EmptyState({selectedQuestion}: any) {
  return (
    <div>
        <h2 className='text-2xl text-center'>Ask Anything to AI Career Agent</h2>
        <div>
            {questionList.map((question, index) => (
                <h2 className='text-center border rounded-lg p-4 mt-4 hover:border-primary cursor-pointer' key={index} onClick={() => selectedQuestion(question)}>{question}</h2>
            ))}
        </div>
    </div>
  )
}

export default EmptyState