const LinksSocialMedia = {
  github: "LeonamJop",
  youtube: "channel/UCJ-us6xHJ45IdPk2r5qCM3A",
  instagram: "leonam.ms",
  facebook: "Leonam.MS",
  twitter: "leonam_murilo",
};

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`;
  }
}

changeSocialMediaLinks();

function getGitHubProfileInfos() {
  const urlGitHubUserInfos = `https://api.github.com/users/${LinksSocialMedia.github}`;

  fetch(urlGitHubUserInfos)
    .then((response) => response.json())
    .then((data) => {
      userImage.src = data.avatar_url;
      userName.textContent = data.name;
      userLogin.textContent = data.login
      userLink.href = data.html_url;
      userBio.textContent = data.bio;
    });
}

getGitHubProfileInfos();
