/**
 *
 * @author Mr.Da
 *
 * @date 2020/4/17 8:43
 *
 * 功能：页签元素
 *
 */
var React = require('react');

class Row extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return(<div className="row">
            <div className="column large-full">
                <nav className="pgn">
                    <ul>
                        <li><a className="pgn__prev" href="#0">Prev</a></li>
                        <li><a className="pgn__num" href="#0">1</a></li>
                        <li><span className="pgn__num current">2</span></li>
                        <li><a className="pgn__num" href="#0">3</a></li>
                        <li><a className="pgn__num" href="#0">4</a></li>
                        <li><a className="pgn__num" href="#0">5</a></li>
                        <li><span className="pgn__num dots">…</span></li>
                        <li><a className="pgn__num" href="#0">8</a></li>
                        <li><a className="pgn__next" href="#0">Next</a></li>
                    </ul>
                </nav>
            </div>
        </div>);
    }

}

module.exports = Row;
