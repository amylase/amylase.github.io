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
                        <b>2023/01 -</b>: Software Engineer, Monoxer, inc.
                    </div>
                    <div className="ml-5 mb-1">
                        <b>2022/10 -</b>: Software Engineer, Preferred Networks, inc.
                    </div>
                    <div className="ml-5 mb-1">
                        <b>2017/07 - 2022/05</b>: Software Engineer, Indeed
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
