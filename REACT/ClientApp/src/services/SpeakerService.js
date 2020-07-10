import callApi from './Api';


const api = {
    speakers: {
        list() {
            return callApi('/api/speaker');
        },
        create(badge) {
            return callApi(`/api/speaker`, {
                method: 'POST',
                body: JSON.stringify(badge),
            });
        },
        read(id) {
            return callApi(`/api/speaker/${id}`);
        },
        update(updates) {
            return callApi(`/api/speaker/`, {
                method: 'PUT',
                body: JSON.stringify(updates),
            });
        },
        remove(badgeId) {
            return callApi(`/api/speaker/${badgeId}`, {
                method: 'DELETE',
            });
        },
        guid() {
            return callApi(`/api/hash/`);
        },
    },
};

export default api;