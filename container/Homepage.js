import Link from 'next/link'

export function Homepage() {
    return (<>
        <div> 
            <h1>HomePage</h1>
        </div>

        <Link href= '/People'>
            <a style = {{textDecoration: "none"}}>People</a>
        </Link>

        <Link href= '/Vehicles'>
            <a style = {{textDecoration: "none"}}>Vehicles</a>
        </Link>
    </>
    )
}