import Head from 'next/head'
import {Container, Nav, NavItem, NavLink} from 'reactstrap'
import {ReactNode} from "react";
import Link from 'next/link';

interface Props {
    title: string
    children: ReactNode
}

export default function BasePage(props: Props) {
    return (
        <Container className="md-container">
            <Head>
                <title>{props.title}</title>
                <link rel="icon" href="/favicon-32x32.png"/>
            </Head>
            <div className="mb-4">
                <Nav className="d-flex">
                    <NavItem className="flex-grow-1">
                        <h1>shigure-hash.com</h1>
                    </NavItem>
                    <NavItem>
                        <Link href="/" passHref={true}><NavLink className="nav-link">Home</NavLink></Link>
                    </NavItem>
                    <NavItem>
                        <Link href="/about" passHref={true}><NavLink className="nav-link">About</NavLink></Link>
                    </NavItem>
                </Nav>
            </div>
            {props.children}
            <footer className="cntr-footer">
                © {new Date().getFullYear()} Shunsuke Ohashi (amylase)
            </footer>
        </Container>
    )
}
