import {Col, Container, Row} from 'reactstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faBook} from "@fortawesome/free-solid-svg-icons";
import BasePage from "../components/basePage";

export default function Home() {
    return (
        <BasePage title="shigure-hash.com">
            <Container>
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
                            <a href="https://codeforces.com/profile/amylase" className="contest-link">Codeforces</a>
                        </div>
                        <div className="m-2">
                            <a href="https://atcoder.jp/users/amylase" className="contest-link">AtCoder</a>
                        </div>
                    </Row>
                </Container>
            </Container>

            <Row className="justify-content-end">
                <Col xs={3}>
                    <a className="old-top-link" href="/old_index.html">Go to old top page</a>
                </Col>
            </Row>
        </BasePage>
    )
}
