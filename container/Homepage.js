import Link from 'next/link'

export function Homepage() {
    return (<>
        <div> 
            <h1>HomePage</h1>
        </div>

        <Link href= '/People'>
            <a>People</a>
        </Link>

        <Link href= '/Vehicles'>
            <a>Vehicles</a>
        </Link>
    </>
    )
}