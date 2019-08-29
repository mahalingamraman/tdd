import axios from "axios"
import Repo from './Repo'
import RepoInfo from './RepoInfo'
let githubService = {
  getRepos : (username) => {
          return axios
                .get(`https://api.github.com/users/${username}/repos`)
                .then(function(response){
                    let repos = response.data
                    return repos.map(x => new Repo(x.name, x.language, x.updated_at, x.private))
                })
                .catch(function(error){
                    return []
                })
  },
  getRepoDetails: (username, repoName) => {
     
      return axios
          .get(`https://api.github.com/repos/${username}/${repoName}`)
          .then(function (response) {
              let repos = response.data
              return new RepoInfo(repos.name, repos.html_url, repos.updated_at, repos.size)
          })
          .catch(function (error) {
              return []
          })
  }
}

export default githubService
