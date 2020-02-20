import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard'
import faker from 'faker';


const App = () => {
    return (
        <div className="ui container comment">
           <ApprovalCard>
               <div>
                <h4>WARNING</h4>
               Are you sure you want to do this?
               </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Miro"
                    comment="Nice!"
                    date="Today, 6.00PM"
                    img={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Ben"
                    comment="Cool!"
                    date="Today, 4.12AM"
                    img={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Ettore"
                    comment="Awesome!"
                    date="Yesterday, 5.27PM"
                    img={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))