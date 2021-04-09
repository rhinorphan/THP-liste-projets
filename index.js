

function sendGitData(name, repoName, url) {
 document.querySelectorAll("button[value="+name+"]")[0].innerHTML  ='<a target="blank" href="'+ url +'"><button id="btn_get_repos"   class="repo_class btn btn-primary" value="tepepeka">'+repoName+'</button></a>'
}

async function getApi(name) {
    let response = await fetch("https://api.github.com/users/"+name+"/repos")
    let data = await response.json()
    let git = data[data.length-1]
    let repoName = git.name
    let url =  git.html_url
    let nameUser = git.owner.login
    console.log(git);
    sendGitData(nameUser, repoName, url) 
}

 function getRepo() {
    let nbClassRepo = [...document.getElementsByClassName('repo_class')]
    nbClassRepo.map(name => name.value).forEach(element => {
        let name = element
        getApi(name) 
    });
}


getRepo()
