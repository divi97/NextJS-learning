import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function List({ ownerList }) {
    const [owners, setOwners] = useState([]);
    // useEffect(() => {
    //     async function loadData() {
    //         const response = await fetch('');
    //         const ownerList = await response.json();
    //         setOwners(ownerList);
    //     }

    //     loadData();
    // }, []);


    return (
        <div>
            {ownerList.map((e, index) => (
                <div key={index}>
                    <Link as={`/${e.vehicle}/${e.ownerName}`} href="/[vehicle]/[person]">
                        <a>Navigate to {e.ownerName}'s {e.vehicle}</a>
                    </Link>
                </div>
            ))}
        </div>
    )
}

List.getInitialProps = async () => {
    const response = await fetch('');
    const ownerList = await response.json();
    return { ownerList: ownerList }
}