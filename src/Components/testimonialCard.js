import React from 'react'

export default function TestimonialCard({ name, designation, quote }) {
    return (
        <div className='testimonial-card'>
            <h5>{name} <span>{designation}</span></h5>
            <p className='testimonal-text'>
                {quote}
            </p>
        </div>
    )
}
