import React from 'react'

function About() {
    return (
        <div className=" p-8 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2  gap-8">
            {/* Left part - Story and Signature */}
            <div className="flex flex-col justify-between ">
                <div>
                    <h1 className="text-3xl font-bold mb-4 text-gray-800">About Us</h1>
                    <p className="text-lg mb-8 text-gray-700 leading-relaxed">
                        Welcome to our Education Platform, where learning meets innovation. Our platform provides high-quality courses across a range of topics to help individuals advance in their personal and professional lives.
                    </p>
                    <p className="text-lg mb-4 text-gray-700 leading-relaxed">
                        We believe in making education accessible for all. Our mission is to empower learners worldwide by offering engaging and practical courses taught by industry experts. Join our community and start your journey towards growth today.
                    </p>
                </div>
                {/* Signature */}
                <div className="mt-8 mb-8">
                    <p className="text-lg font-semibold">Sincerely,</p>
                    <p className="text-xl font-bold text-gray-800">The Education Platform Team</p>
                </div>
            </div>

            {/* Right part - Masonry Image Gallery */}
            {/* <div className="grid grid-cols-2 gap-4 bg-gray-200"> */}
            {/* First column of masonry images */}
            <div className="grid grid-cols-4 gap-4 ">
                <img
                    src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Education 1"
                    className="rounded-lg h-80 object-cover  w-full col-span-4 shadow-md" // Span across two columns
                />


                <img
                    src="https://images.unsplash.com/photo-1586985564259-6211deb4c122?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Education 3"
                    className="rounded-lg col-span-2 shadow-md "
                />
                <img
                    src=" https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Education 4"
                    className="rounded-lg shadow-md h-full object-cover col-span-2" // Span across two columns
                />


            </div>



        </div>
    )
}

export default About
