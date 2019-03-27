export default {
	setData: (state, data) => {
		state.user = data.user
		state.currentSessionId = data.currentSessionId
		state.sessions = data.sessions
	},

	sendMessage({ sessions, currentSessionId }, {content,type="user"}) {
		let session = sessions.find(item => item.id === currentSessionId)
		let date = String(new Date()).split(" ")[4]
		session.messages.push({
			type: type,
			content: content,
			date: date
		})
	},

	selectSession(state, id) {
		state.currentSessionId = id
	}
}
