import Head from "next/head";
import React, { FC, PropsWithChildren } from "react";
import { Nav } from "../common/Nav";

interface TProps {
    title: string;
    description?: string;
}

export const ApplicationWrapper: FC<PropsWithChildren<TProps>> = ({
    title,
    description,
    children,
}) => {
    return (
        <div className='bg-black flex flex-col min-h-screen'>
            <Head>
                <title>{title} | Jhosebro Movies</title>
                {description && <meta name="description" content={description} />}
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <header className='bg white h-20'>
                <Nav />
            </header>
            <main className='flex-grow flex-col text-white'>{children}</main>
            <footer className='flex p-6 h-20 text-black bg-white items-center justify-center'>
                <a
                    href='https://github.com/jhosebro/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Powered by <span className=''>Jhosebro Industries</span>
                </a>
            </footer>
        </div>
    );
};