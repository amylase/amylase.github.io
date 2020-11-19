import Head from 'next/head'
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter, faGithub, faLinkedin, faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faBook} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    return (
        <Container className="md-container">
            <Head>
                <title>shigure-hash.com</title>
                <link rel="icon" href="/favicon-32x32.png"/>
            </Head>
            <Container>
                <h1>
                    shigure-hash.com
                </h1>
                <Container>
                    <Row className="justify-content-center">
                        <img src="https://www.gravatar.com/avatar/dca82b4f824a231bbe37b7482f903493?s=256" alt="Avatar"/>
                    </Row>
                    <Row className="mt-2 justify-content-center">
                        <div className="m-2">
                            <a href="https://twitter.com/pepsin_amylase"><FontAwesomeIcon className="fa-link"
                                                                                          icon={faTwitter}/></a>
                        </div>
                        <div className="m-2">
                            <a href="https://github.com/amylase"><FontAwesomeIcon className="fa-link" icon={faGithub}/></a>
                        </div>
                        <div className="m-2">
                            <a href="https://www.facebook.com/ohashi.shunsuke.5"><FontAwesomeIcon
                                className="fa-link" icon={faFacebook}/></a>
                        </div>
                        <div className="m-2">
                            <a href="https://www.linkedin.com/in/shunsuke-ohashi-65b873144/"><FontAwesomeIcon
                                className="fa-link" icon={faLinkedin}/></a>
                        </div>
                        <div className="m-2">
                            <a href="https://pepsin-amylase.hatenablog.com/"><FontAwesomeIcon className="fa-link"
                                                                                              icon={faBook}/></a>
                        </div>
                    </Row>
                    <Row className="mt-2 justify-content-center">
                        <div className="m-2">
                            <a href="https://codeforces.com/profile/amylase">Codeforces</a>
                        </div>
                        <div className="m-2">
                            <a href="https://atcoder.jp/users/amylase">AtCoder</a>
                        </div>
                    </Row>
                </Container>
            </Container>

            <Row className="justify-content-end">
                <Col xs={3}>
                    <a className="old-top-link" href="/old_index.html">Go to old top page</a>
                </Col>
            </Row>

            <footer className="cntr-footer">
                © {new Date().getFullYear()} Shunsuke Ohashi (amylase)
            </footer>
        </Container>
    )
}
