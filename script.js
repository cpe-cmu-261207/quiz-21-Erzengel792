async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
}

const btnRandom = document.querySelector("#btn-random");
const imgProfile = document.querySelector("#img-profile");

btnRandom.onclick = async () => {
  const resp2 = await axios.get(
    "https://randomuser.me/api/portraits/women/11.jpg"
  );
  imgProfile.src = resp2.data.result.picture.large;
};
