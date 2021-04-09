

function sendGitData(name, repoName, url) {
    let gitUrl = 'https://github.com/'+name
    document.querySelectorAll("button[value="+name+"]")[0].innerHTML  ='<a target="blank" href="'+ url +'"><button id="btn_get_repos"   class="repo_class btn btn-primary">'+repoName+'</button></a>'
    document.querySelectorAll("button[value="+name+"1]")[0].innerHTML  ='<a target="blank" href="'+ gitUrl +'"><button id="btn_get_repos"   class="repo_class btn btn-primary">Git hub</button></a>'

}

async function getApi(name) {
    let response = await fetch("https://api.github.com/users/"+name+"/repos")
    let data = await response.json()
    let git = data[data.length-1]
    console.log(data);
    let repoName = git.name
    let url =  git.html_url
    let nameUser = git.owner.login
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
