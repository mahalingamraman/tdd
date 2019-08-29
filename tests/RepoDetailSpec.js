import repoDetails from './../src/RepoDetails'
import repoInfo from './../src/RepoInfo'
import $ from 'jquery'

describe("Github Repo Details", function () {
  let repoDetail1 = new repoInfo("fms", "https://github.com/mahalingamraman/fms", "2015-01-29T11:52:47Z", 1)
  let serviceSpy
   beforeEach(function () {
   })

   afterEach(function () {
       repoDetails.__ResetDependency__("githubService")
   })
    describe("Repos for user", function () {
  it("Should be defined", function () {
      serviceSpy = jasmine.createSpyObj("Github service", {
          getRepoDetails: repoDetail1
      })
      repoDetails.__Rewire__("githubService", serviceSpy)
      expect(repoInfo).toBeDefined()
  })
  it("Should fetch repos info service for each repo", function (done) {
       serviceSpy = jasmine.createSpyObj("Github service", {
           getRepoDetails: repoDetail1
       })
       repoDetails.__Rewire__("githubService", serviceSpy)
       repoDetails("username", "repoName").then(function () {
           expect(serviceSpy.getRepoDetails).toHaveBeenCalledWith("username", "repoName")
           done()
       })
   })

    it("Should create table of repos", function (done) {
        serviceSpy = jasmine.createSpyObj("Github service", {
            getRepoDetails: repoDetail1
        })
        repoDetails.__Rewire__("githubService", serviceSpy)
        repoDetails("username", "repoName").then(function (html) {
            appendSetFixtures(html)
            console.log(html)
            let rows = $("#repodetails table tr")

            expect(rows.length).toEqual(2)
            done()
        })
    })
    it("Should return no repo info available", function (done) {
        serviceSpy = jasmine.createSpyObj("Github service", {
            getRepoDetails: []
        })
        repoDetails.__Rewire__("githubService", serviceSpy)
        repoDetails("username", "repoName").then(function (html) {
            appendSetFixtures(html)

            let rows = $("#repodetails table tr")
            expect(rows.length).toEqual(0)

            let p = $("#repodetails p")
            expect(p.text()).toEqual("No info available")
            done()
        })
    })
})

})