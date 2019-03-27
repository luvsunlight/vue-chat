export default {
    getSession: state => id => state.sessions.find(session => session.id === id)
}