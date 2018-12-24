import axios from "axios";

export default {
    getJobs: function() {
        return axios.get("/api/jobs")
    },
    postJob: function(jobData) {
        return axios.post("/api/jobs", jobData)
    }
}