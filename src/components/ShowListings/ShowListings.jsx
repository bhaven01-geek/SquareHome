import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../../AuthContext/AuthContext';

export default function ShowListings() {
    const [listings, setListings] = useState([]);
    const navigate = useNavigate();

    const { currentUser } = useAuth();
    const id = currentUser.uid;

    useEffect(() => {

        const apiUrl = `http://localhost:3000/api/listing/get/${id}`;

        // Fetch listings from the API
        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                console.log(response)
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                // Update the listings state with the fetched data
                console.log(data);
                setListings(data);
            })
            .catch((error) => {
                console.error('Error fetching listings:', error);
            });
    }, []);



    const handleDelete = async (itemId) => {
        try {
            // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint for deleting a resource
            const apiEndpoint = `http://localhost:3000/api/listing/delete/${itemId}`;

            const response = await fetch(apiEndpoint, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                console.error('Failed to delete item');
                return;
            }

            console.log(`Item with ID ${itemId} has been deleted.`);
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    const handleEdit = (listing) => {
        console.log(listing);
        navigate(`/app/edit`, { state: { listing } });
    }

    return (
        <main className="p-3 max-w-4xl mx-auto">
            <ul role="list" className="divide-y divide-gray-100">
                {listings.map((listing) => (
                    <li key={listing._id} className="flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={listing.imageUrls[0]} alt="" />
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">{listing.name}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{listing.address}</p>
                            </div>
                            <p className="m-1 p-2 bg-green-500 text-white text-sm font-semibold uppercase">{listing.status}</p>
                        </div>
                        <div className="hidden sm:flex sm:flex-col sm:items-end gap-y-2">
                            <button className="flex items-center gap-x-2 text-gray-500 hover:text-gray-700" onClick={() => handleEdit(listing)}>
                                <PencilIcon className="h-5 w-5" />
                            </button>
                            <button className="flex items-center gap-x-2 text-gray-500 hover:text-gray-700" onClick={() => handleDelete(listing._id)}>
                                <TrashIcon className="h-5 w-5" />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
}
