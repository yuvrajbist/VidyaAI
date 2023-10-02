import React from 'react'

const FreeTrialButton = () => {
    return (
        <div>
            <button
                type="button"
                className="inline-block rounded border-2 border-neutral-800 px-4 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-800">
                Join Us!   
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 30" strokeWidth="1.5" stroke="currentColor" className="inline w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
            </button>
        </div>
    )
}

export default FreeTrialButton