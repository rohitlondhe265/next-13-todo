"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Search = () => {
    const [term, setTerm] = useState('');
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        setTerm("");
        router.push(`/search/${term}`);
    };
    return (
        <main  className='flex space-x-6'>
                <div className="form-control flex-1" >
                    <input type="text" value={term} onChange={(e) => { setTerm(e.target.value) }} placeholder="Search" className="input input-bordered" />
                </div>
                <button onClick={handleSubmit} className="btn btn-info">Search</button>
        </main>
    )
}

export default Search