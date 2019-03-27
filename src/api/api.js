import axios from "axios"

export const getInitData = () => {
	return axios.get("/data/init")
}

export const updateMessage = store => {
	axios.get("/data/reply").then(res => {
		setTimeout(() => {
			store.commit("sendMessage", {
				content: res.data.content,
				type: res.data.type
			})
		}, 1000)
	})
}
