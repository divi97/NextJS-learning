import { NextPageContext } from "next";
import Router from "next/router";
import fetch from 'isomorphic-unfetch'

export async function myGet(url: string, ctx: NextPageContext) {
    const cookie = ctx.req?.headers.cookie;

    const resp = await fetch(url , {
        headers: {
            cookie: cookie!
        }
    });

    if (resp.status === 401 && !ctx.req) {
        Router.replace('/Login')
        return;
    }

    if (resp.status === 401 && ctx.req) {
        ctx.res?.writeHead(302, {
            Location: `${process.env.BASE_URL}/Login`
        })

        ctx.res?.end();
        return;
    }
    const json = await resp.json();
    console.log(json)
    return json
}
