const [views, setViews] = useState(0)

function handleView() {
    setViews(views + 1)
}

<p>Profile Views: {views}</p>
<button onClick={handleView}>View Profile</button>


// SHOW DETAILS:
const [showDetails, setShowDetails] = useState(false)

<button onClick={() => setShowDetails(!showDetails)}>
    {showDetails ? 'Hide Details' : 'Show Details'}
</button>

{showDetails && (
    <div>
        <p>Email: student@example.com</p>
        <p>Phone: 0300-1234567</p>
    </div>
)}
