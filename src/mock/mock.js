import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import Mock from "mockjs"
import { sessions } from "./data/data"

export default {
	start() {
		let mock = new MockAdapter(axios)
		mock.onGet("/data/init").reply(() => {
			return [
				200,
				{
					user: {
						name: Mock.Random.cname(),
						img: Mock.Random.image("50x50")
					},
					sessions: sessions,
					currentSessionId: sessions[0].ids
				}
			]
		})

		mock.onGet("data/reply").reply(() => {
			return [
				200,
				{
					content: Mock.Random.cparagraph(2),
					type: "guest"
				}
			]
		})
	}
}
