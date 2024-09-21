import React from 'react'

function Sort() {
    return (
        <>
            <div>
                <select className="p-2 rounded">
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                </select>
            </div>
        </>
    )
}

export default Sort
