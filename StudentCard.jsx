import { useState } from "react";

function StudentCard({name, program, semester}) {

    const [views, setViews] = useState(0)
    const [showDetails, setShowDetails] = useState(false)

    function viewProfile() {
        setViews(views + 1)
    }

    return (
        <div>
            <p>Name: {name}</p>
            <p>Program: {program}</p>
            <p>Semester: {semester}</p>
            <p>View: {views}</p>

            <button onClick={viewProfile}>View Profile</button>
            <button onClick={()=> setShowDetails(!showDetails)}>{showDetails ? 'Hide Details' : 'Show Details'}</button>

            {showDetails &&(
                <div> 
                    <p>
                        <strong>Email:</strong> student@example.com
                    </p>

                    <p>
                        <strong>Phone:</strong> 03182182142            
                    </p>
                </div>
            )}
        </div>
    )
}

export default StudentCard
