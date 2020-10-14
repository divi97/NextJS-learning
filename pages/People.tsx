import { NextPageContext } from 'next'
import { myGet } from '../api/myGet';

export default function People({ people }: any) {
    return (<>
        <div>
            <h1>People</h1>
        </div>
    </>
    )
}

People.getInitialProps = async (ctx: NextPageContext) => {
    const json = await myGet(`${process.env.BASE_URL}/api/people`, ctx);
    return {people: json};
}