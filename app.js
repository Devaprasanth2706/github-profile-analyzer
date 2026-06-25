async function analyseGitHubProfile(username){
    try{
        const [user,repo]=await Promise.all([
            fetch(`https://api.github.com/users/${username}`),
            fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=stars`)
        ])
        if(!user.ok){
            throw new Error("User not found")
        }
        const [users, repos] = await Promise.all([
        user.json(),
        repo.json()
        ]);

        console.log(`Name : ${users.name}`)
        console.log(`Profile url : ${users.url}`)
        console.log(`location: ${users.location}`)
        console.log("\nRepositories:")
        repos.forEach(element => {
            console.log(element.name)
        });
        console.log(`\n Followers: ${users.followers}`)
        console.log(`Following: ${users.following}`)
        console.log("\nLanguages:")
        repos.forEach(element => {
            console.log(element.language)
        });
        console.log("\nTopics:")
        repos.forEach(element => {
            console.log(`Repo: ${element.name}`);
            console.log(`Topics: ${element.topics.join(', ') || 'None'}`);
        });

    }
    catch(err){
        console.log(`error: ${err}`)
    }
}

analyseGitHubProfile("Devaprasanth2706")