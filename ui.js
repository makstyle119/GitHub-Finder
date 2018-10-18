class UI {
    constructor()   {
        this.profile = document.getElementById('profile');
    }
    // show profile in search bar
    showProfile(user)   {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn bbtn-primary btn-block"> View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary"> Public Repos: ${user.public_repos} </span>
                    <span class="badge badge-secondary"> Public Gists: ${user.public_gists} </span>
                    <span class="badge badge-success"> Followers: ${user.followers} </span>
                    <span class="badge badge-info"> Following: ${user.following} </span>
                    <br>
                    <br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</ul>
                        <li class="list-group-item">Webite/Blog: ${user.blog}</ul>
                        <li class="list-group-item">Location: ${user.location}</ul>
                        <li class="list-group-item">Member Since: ${user.created_at}</ul>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `
    }
    // show user repos
    showRepos(repos)    {
        let output = '';

        repos.forEach(function (repo) {
            output += `
                <div class="crd card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                        <span class="badge badge-primary"> Stars: ${repo.stargazers_count} </span>
                        <span class="badge badge-secondary"> Watcher: ${repo.watcher_count} </span>
                        <span class="badge badge-success"> Forks: ${repo.forms_count} </span>
                        </div>
                    </div>
                </div>
            `
        });

        document.getElementById('repos').innerHTML = output;

    }
    // show alert if uesr not found
    showAlert(message, className)   {
        // clear any remaning alert
        this.claerAlert();
        // create div
        const div = document.createElement('div');
        // add class name
        div.className = className;
        // add text
        div.appendChild(document.createTextNode(message));
        // get parent
        const container = document.querySelector('.searchContainer');
        // get search box
        const search = document.querySelector('.search');
        // insert alert
        container.insertBefore(div, search);
        // set time out
        setTimeout(() => {
            this.claerAlert();
        }, 3000);
    }
    // clear alert
    claerAlert()    {
        const currentAlert = document.querySelector('.alert');

        if(currentAlert)    {
            currentAlert.remove();
        }
    }
    // clear profile data in search bar
    clearProfile()  {
        this.profile.innerHTML = '';
    }
}