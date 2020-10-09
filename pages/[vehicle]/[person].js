import { useRouter } from 'next/router';

export default function Person({ownerList}) {
    const router = useRouter();
    // return (<h1>{router.query.person}'s {router.query.vehicle}</h1>)
    return (<pre>{JSON.stringify(ownerList, null, 4)}</pre>)
}

Person.getInitialProps = async () => {
    const response = await fetch('');
    const ownerList = await response.json();
    return { ownerList: ownerList }
}