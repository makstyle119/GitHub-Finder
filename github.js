class GitHub {
    constructor() {
        this.client_id = '18cf11854d94128fe09b';
        this.client_Secret = '7f9679526d79efe9e82ad8464a63389fc2974f67';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }

    async getUser (user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_Secret=${this.client_Secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_Secret=${this.client_Secret}`);

        const profile = await profileResponse.json();

        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}