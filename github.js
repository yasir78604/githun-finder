class Github{
  constructor(){
    this.client_id = '79c3defacbbced0e9681';
    this.client_secret = '28d13b4609d8635719fa417fda79d02103a9e512';
    this.repos_count = 5;
    this.repos_sort = 'created:asc';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json() 

    return {
      profile,
      repos
    }

  }
}