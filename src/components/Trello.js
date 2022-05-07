
import React, {Component} from 'react';

class Trello extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cardShow: false,
            boardTitle: '',
            boards: [],
            taskTitles: []
        }
    }

    render() {
        const arrayMethods = () => {
            let numbers = [12, 3, 45, 67, -90, -100, -76767, 53, 89];

            for (let i = 0; i < numbers.length; i++){
                console.log(numbers[i]);
            }
            // for() - sikl

            numbers.forEach((item, index, array) => {
                console.log(item, index, array);

                // item - numbers[i]
                // index - numbers[index] - index
            });
            // forEach() - item, index, jadval qaytarib beradi, xar biriga amal qo'llash mumkin

            let mappedNumbers = numbers.map((item, index) => {
                return 1;
            });
            console.log(mappedNumbers);
            // map() - array qayta chizib beradi

            let filteredNumbers = numbers.filter((item, index) => {
                return item > 0;
            });
            console.log(filteredNumbers);
            // filter() - arrayni filterlab beradi

            let sortedNumbers = numbers.sort((item1, item2) => {
                return item1 - item2;
            });
            console.log(sortedNumbers);
            // sort() - sortirovka qilib beradi

            let numbers1 = [12, 34, 56], numbers2 = [100, 200, 300];

            numbers1.push(...numbers2);
            // push(...array) - ikkinchi arrayni ichidagi barcha qiymatlarni birinchi arrayni oxiridan qo'shib beradi

            console.log(numbers1);
        };
        arrayMethods();

        const showCard = () => {
            this.setState({
                cardShow: !this.state.cardShow
            })
        }

        const changeBoardTitle = (event) => {
            this.setState({
                boardTitle: event.target.value
            })
        }

        const addBoard = () => {
            let newBoard = {
                title: this.state.boardTitle,
                tasks: []
            }

            this.state.boards.push(newBoard);

            this.setState({
                boards: this.state.boards,
                boardTitle: ""
            })
        }

        const changeTaskTitles = (event, index) => {

            this.state.taskTitles[index] = event.target.value;

            this.setState({
                taskTitles: this.state.taskTitles
            })
        }

        const addTask = (index) => {
            this.state.boards[index].tasks.push(this.state.taskTitles[index]);

            this.setState({
                boards: this.state.boards
            })
        }

        const deleteTask = (index, index1) => {
            this.state.boards[index].tasks.splice(index1, 1);
            this.setState({
                boards: this.state.boards
            })
        }

        // const {cardShow, boardTitle, boards} = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3 mt-3">
                        <button type="button" className="btn btn-success btn-block" onClick={showCard}>Add Board</button>

                        {this.state.cardShow ? (
                            <div className="card mt-3">
                                <div className="card-body">
                                    <textarea className="form-control" placeholder="Type here" value={this.state.boardTitle} onChange={changeBoardTitle}></textarea>

                                    <button type="button" className="btn btn-success ml-auto mt-3 d-block" onClick={addBoard}>Add</button>
                                </div>
                            </div>
                        ) : ("")}
                    </div>

                    <div className="col-9">
                        <div className="row">
                            {this.state.boards.map((item, index) => {
                                return (
                                    <div className="col-4 mb-3">
                                        <div className="card">
                                            <div className="card-header">
                                                <h3>{item.title}</h3>
                                            </div>
                                            <div className="card-body">
                                                {item.tasks.map((item, index1) => {
                                                    return <div className="task">{item} <span className="task-close" onClick={() => deleteTask(index, index1)}>&times;</span></div>
                                                })}
                                            </div>
                                            <div className="card-footer">
                                                <textarea className="form-control" placeholder="Type here" onChange={(event) => changeTaskTitles(event, index)}></textarea>

                                                <button type="button" className="btn btn-success ml-auto mt-3 d-block" onClick={() => addTask(index)}>Add</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Trello;