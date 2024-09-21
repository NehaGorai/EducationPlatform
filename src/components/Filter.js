import React from 'react'

function Filter() {
    return (
        <>
            <div className="flex space-x-4">
                <select className="p-2 rounded">
                    <option value="">Category</option>
                    <option value="programming">Programming</option>
                    <option value="design">Design</option>
                    <option value="marketing">Marketing</option>
                </select>
                <select className="p-2 rounded">
                    <option value="">Price</option>
                    <option value="free">Free</option>
                    <option value="paid">$0 - $20</option>
                    <option value="paid">$21 - $50</option>
                </select>
            </div>
        </>
    )
}

export default Filter
