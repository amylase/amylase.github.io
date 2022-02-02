import {Container} from 'reactstrap'
import BasePage from "../components/basePage";

export default function Home() {
    return (
        <BasePage title="Software | shigure-hash.com">
            <Container>
                <div className="mt-3">
                    <h3>Difficulty Model for Competitive Programming</h3>
                    <div className="ml-5 mb-1">
                        Estimates the rating that required to be able to solve a problem with 50% chance. 
                        It is considered to be a de facto difficulty criteria in competitive programming community.
                    </div>
                    <div className="ml-5 mb-1">
                        Available at <a href="https://kenkoooo.com/atcoder">AtCoder Problems</a>.
                    </div>
                </div>

                <div className="mt-3">
                    <h3>FFXIV Crafter Solver</h3>
                    <div className="ml-5 mb-1">
                        Available at <a href="/ffxiv-crafter-rust">here</a>.
                    </div>
                    <div className="ml-5 mb-1">
                        Solvers for in-game item crafting in Square Enix's <a href="https://na.finalfantasyxiv.com/">FINAL FANTASY XIV</a> MMORPG.
                    </div>
                    <div className="ml-5 mb-1">
                        Advisor: ID-DFS based algorithm to find the best action of a given state and stats. Aimed at expert recipes.
                    </div>
                    <div className="ml-5 mb-1">
                        Macro: Simulated annealing based algorithm to find the best macro that works under any status changes. Aimed at non-expert recipes.
                    </div>
                </div>

                <div className="mt-3">
                    <h3>Others</h3>
                    <div className="ml-5 mb-1">
                        See <a href="https://github.com/amylase">GitHub repositories</a> for more.
                    </div>
                </div>
            </Container>
        </BasePage>
    )
}
