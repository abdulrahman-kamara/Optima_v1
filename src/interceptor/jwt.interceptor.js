import axios from "axios"

export const jwtInterceptor = () => {
    axios.interceptors.request.use(async request => {

            request.headers['x-api-key'] = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPZmZpY2lhbCBXZWJzaXRlIiwiaWF0IjoxNjk1Mjg5NDcxLCJleHAiOjE5MTYxMjc4NzEsImF1ZCI6IiIsInN1YiI6IjEwMSIsImdyb3VwIjoiMCIsInJvbGUiOiI1In0.aR32F26RsBxgLaPwjBxWRYGJkp2rRcKjgyS2M-hp9u4"

        return request
    })
}