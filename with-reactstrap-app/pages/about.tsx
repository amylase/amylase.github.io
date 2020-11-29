import {Container} from 'reactstrap'
import BasePage from "../components/basePage";

export default function Home() {
    return (
        <BasePage title="About | shigure-hash.com">
            <Container>
                <div>
                    <h3>Name</h3>
                    <div className="ml-5 mb-1">Shunsuke Ohashi / 大橋 駿介</div>
                </div>

                <div className="mt-3">
                    <h3>Professional Experiences</h3>
                    <div className="ml-5 mb-1">
                        <b>2017/07 - Current</b>: Software Engineer, Indeed
                    </div>
                    <div className="ml-5 mb-1">
                        <b>2015/04 - 2017/06</b>: Software Engineer, Recruit Holdings Co., Ltd.
                    </div>
                </div>

                <div className="mt-3">
                    <h3>Education</h3>
                    <div className="ml-5 mb-1">
                        <b>2015/03</b>: Master of Science in Computer Science, The University of Tokyo
                    </div>
                    <div className="ml-5 mb-1">
                        <b>2013/03</b>: Bachelor of Science in Information Science, The University of Tokyo
                    </div>
                </div>

                <div className="mt-3">
                    <h3>Awards</h3>
                    <div className="ml-5 mb-1">
                        2nd place, ACM SIGPLAN ICFP Programming Contest 2016
                    </div>
                    <div className="ml-5 mb-1">
                        2nd place, ACM SIGPLAN ICFP Programming Contest 2018
                    </div>
                </div>

                <div className="mt-3">
                    <h3>Skills</h3>
                    <div className="ml-5 mb-1">
                        <b>Languages</b>: Japanese (Native), English (Business)
                    </div>
                    <div className="ml-5 mb-1">
                        <b>Algorithm</b>: Codeforces Grandmaster
                    </div>
                    <div className="ml-5 mb-1">
                        <b>Statistics</b>: Having basic knowledge about statistical modeling and machine learning.
                    </div>
                </div>

                <div className="mt-3">
                    <h3>Software</h3>
                    <div className="ml-5 mb-1">
                        <b>Difficulty Model for Competitive Programming</b>: Available on <a href="https://kenkoooo.com/atcoder">AtCoder Problems.</a>
                    </div>
                </div>
            </Container>
        </BasePage>
    )
}
