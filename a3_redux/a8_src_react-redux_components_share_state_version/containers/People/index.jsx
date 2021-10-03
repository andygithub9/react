import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import { createAddPersonAction } from '../../redux/actions/people_action_creator';

class PeopleUI extends Component {
	addPerson = () => {
		const { nameNode: { value: personName }, ageNode: { value: personAge } } = this;
		const personObj = { nanoid: nanoid(), personName, personAge: +personAge };
		this.props.createAddPersonAction(personObj);
	};

	render() {
		const { props: { PeopleArrFromRedux, CountNumFromRedux } } = this;
		return (
			<div>
				<h2>我是 People 組件, 上方 Count 組件的和為: {CountNumFromRedux}</h2>
				<input ref={node => (this.nameNode = node)} type='text' placeholder='請輸入名字' />
				<input ref={node => (this.ageNode = node)} type='text' placeholder='請輸入年齡' />
				<button onClick={this.addPerson}>添加</button>
				<ul>
					{PeopleArrFromRedux.map(person => (
						<li key={person.nanoid}>
							{person.personName}-{person.personAge}
						</li>
					))}
				</ul>
			</div>
		);
	}
}
export default connect(
	reduxState => ({ PeopleArrFromRedux: reduxState.peopleReducer, CountNumFromRedux: reduxState.countReducer }), // 映射狀態到 UI 組件的 props , { 自定義 key: reduxState }
	{ createAddPersonAction } // 映射操作狀態的方法到 UI 組件的 props
)(PeopleUI);
