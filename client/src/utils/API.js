import axios from "axios";

export default {
    getJobs: function() {
        return axios.get("api/jobs")
    }
}