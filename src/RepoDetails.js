import githubService from './GithubService'

async function repoDetails(username, repoName) {
    let repoInfo = await githubService.getRepoDetails(username, repoName)
    console.log(repoInfo)
  if (repoInfo.length == 0) {
      return `
              <div id = "repodetails">
                <p>No info available</p>
              </div>
             `
  }

    let template = `
                    <div id = "repodetails">
                      <table class="table">
                        <tr>
                          <th>name</th>
                          <th>HTML URL</th>
                          <th>updatedAt</th>
                          <th> subscribersCount </th>
                        </tr>
                          <tr>
                            <td>${repoInfo.name}</td>
                            <td>${repoInfo.htmlUrl}</td>
                            <td>${repoInfo.updatedAt}</td>
                            <td> ${repoInfo.subscribersCount} </td>
                          </tr>
                      
                      </table>
                    </div>
                   `
      return template
}

export default repoDetails
