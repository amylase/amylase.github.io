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
                        <Link className="nav-link" href="/" passHref={true}>Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" href="/about" passHref={true}>About</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" href="/software" passHref={true}>Software</Link>
                    </NavItem>
                </Nav>
            </div>
            {props.children}
            <footer className="cntr-footer">
                © 2024 Shunsuke Ohashi (amylase)
            </footer>
        </Container>
    )
}
