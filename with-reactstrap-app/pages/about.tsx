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
                        <b>January 2023 -</b>: Software Engineer, Monoxer
                    </div>
                    <div className="ml-5 mb-1">
                        <b>October 2022 - March 2023</b>: Software Engineer, Preferred Networks
                    </div>
                    <div className="ml-5 mb-1">
                        <b>April 2015 - May 2022</b>: Software Engineer, Indeed
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
                    <div className="ml-5 mb-1">
                        Judge's Prize, ACM SIGPLAN ICFP Programming Contest 2021
                    </div>
                </div>

                <div className="mt-3">
                    <h3>Skills</h3>
                    <div className="ml-5 mb-1">
                        <b>Languages</b>: Japanese (Native), English (Business), Korean (Beginner)
                    </div>
                    <div className="ml-5 mb-1">
                        <b>Algorithm</b>: Codeforces Grandmaster
                    </div>
                    <div className="ml-5 mb-1">
                        <b>Statistics</b>: Author of AtCoder Problem's difficulty estimator
                    </div>
                </div>
            </Container>
        </BasePage>
    )
}
