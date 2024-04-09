
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/luane-loureiro/portfolio-js-developer/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
