import axios from "axios";

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers:{
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njg2MGIzNjQ0Njc4YzAxOTIxYjBiYjNjYjdjZmNiNyIsInN1YiI6IjY0MzQ4ZWI3YTEzNTMzMDBmM2U5ZTdmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YiPwAl5hvNe1ysCUmwEID0ns-10HWEGb4nkYV0i0DL0'
    }
})

export default apiFilmes
