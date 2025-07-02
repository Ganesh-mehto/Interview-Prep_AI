import React from 'react'

const SpinnerLoader = () => {
  return (
    <div role="status">
      <svg width="20" height="20" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" stroke="#4A90E2">
        <g fill="none" fillRule="evenodd">
          <circle cx="20" cy="20" r="18" strokeOpacity="0.2" strokeWidth="4"/>
          <path d="M38 20c0-9.94-8.06-18-18-18" strokeWidth="4">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 20 20"
              to="360 20 20"
              dur="1s"
              repeatCount="indefinite"/>
          </path>
        </g>
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default SpinnerLoader