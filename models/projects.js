class Project {
  constructor(name, page, ...domains) {
    this.name = name
    this.page = page
    this.domains = domains
  }
}

const projects = [
  new Project("Build a Node.js Server", "https://github.com/nategthomas/assignment_build_a_nodejs_server", "Node.js", "JavaScript", "HTML"),
  new Project("Building with Async Node.js", "https://github.com/nategthomas/assignment_async_nodejs", "Node.js"),
  new Project("Practice with DOM Manipulation", "https://github.com/nategthomas/assignment_jq_dom_sprint", "HTML", "Javascript", "CSS")
]

module.exports = {
  Project,
  projects
}
