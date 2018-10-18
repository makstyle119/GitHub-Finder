// inicial github
const github = new GitHub;
// inicil ui
const ui = new UI;
// Search input
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup' , (e) => {
    // get input text
    const userText = e.target.value;

    if(userText !== '') {
        // Make HTTP call
        github.getUser(userText)
        .then( data => {
            if(data.profile.message === 'Not Found') {
                // Show alert
                ui.showAlert('User Not Found', 'alert alert-danger');
            }   else    {
                // Show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    }   else    {
        // Clear Profile
        ui.clearProfile();
    }
});