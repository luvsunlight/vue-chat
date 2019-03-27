import Mock from "mockjs"

const COUNT = [1, 2, 3, 4, 5]
let sessions = []
COUNT.map(() => {
	sessions.push({
		id: Mock.Random.guid(),
		user: {
			name: Mock.Random.cname(),
			img: Mock.Random.image("50x50")
		},
		messages: COUNT.map(() => {
			return {
				id: Mock.Random.guid(),
				type: ["user", "guest"][Mock.Random.integer(0, 1)],
				date: Mock.Random.time(),
				content: Mock.Random.cparagraph(2)
			}
		})
	})
})

export {sessions}
