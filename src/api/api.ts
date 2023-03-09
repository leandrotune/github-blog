import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com/',
})

export const username = import.meta.env.VITE_GITHUB_USERNAME

export const repoName = import.meta.env.VITE_GITHUB_REPO_NAME
