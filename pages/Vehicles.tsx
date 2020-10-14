import { NextPageContext } from 'next'
import { myGet } from '../api/myGet';

export default function Vehicles({ vehicles }: any) {
    return (<>
        <div>
            <h1>Vehicles</h1>
        </div>
    </>
    )
}

Vehicles.getInitialProps = async (ctx: NextPageContext) => {
    const json = await myGet(`${process.env.BASE_URL}/api/vehicles`, ctx);
    return {vehicles: json};
}