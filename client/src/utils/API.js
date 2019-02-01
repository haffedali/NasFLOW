import axios from "axios";

export default {
    getJobs: function() {
        return axios.get("https://localhost:3002/api/jobs")
    },
    postJob: function(jobData) {
        return axios.post("/api/jobs", jobData)
    }
}