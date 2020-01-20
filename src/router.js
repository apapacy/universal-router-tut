import React from 'react';
import UniversalRouter from 'universal-router';
import App from './App';
import Link from './Link';

function click(e) {
  console.log(e)
  console.log(this)
}

const routes =
    {
        path: '/',
        async action({next}) {
            const children = await next();
            return (
                <App>
                    {children}
                </App>
            );
        },
        children: [
            {
                path: '',
                async action() {
                    return (
                        <div>Root route go to <Link href='/test' onClick={e => console.log(e)}>Test</Link></div>
                    );
                },
            },
            {
                path: '/test',
                async action({next}) {
                    const children = await next();
                    return (
                        <App>
                            {children}
                        </App>
                    );
                },
                children: [
                    {
                        path: '',
                        async action() {
                            return (
                                <div>Test route return to <Link href='/' onClick={e => console.log(e)}>Root</Link></div>
                            );
                        },
                    },
                ]
            },
        ],
    };

export const basename = '';

const router = new UniversalRouter(routes, {
    baseUrl: basename
});

export default router;
