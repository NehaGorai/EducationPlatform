import React from 'react'

function Hero() {
    return (
        <>
            <section className="bg-cover bg-center h-[100vh] text-center flex flex-col justify-center items-center text-white" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1596457596404-350378e433c3?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
                <h1 className="text-6xl font-bold">Learn Anytime, Anywhere</h1>
                <p className="text-xl mt-6">Choose from hundreds of courses</p>
                <button className="mt-10 bg-white text-black py-2 px-4 rounded">Start Learning</button>
            </section>
        </>
    )
}

export default Hero
