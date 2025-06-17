let userContainer = document.querySelector('.usercontainer');
let inputsearch = document.querySelector('#inputsearch');

const arr = [
    {
        profileUrl: 'https://th.bing.com/th/id/OIF.PBXe3hAwZgBlpwoF3IQKpA?rs=1&pid=ImgDetMain',
        name: 'virat kohli',
        email: 'viratkohli675@gmail.com',
    },
    {
        profileUrl: 'https://cdn.openart.ai/uploads/image_sjAK8Llp_1722294261774_raw.jpg',
        name: 'Harry Potter',
        email: 'harrypotter465@gmail.com',
    },
    {
        profileUrl: 'https://images.squarespace-cdn.com/content/v1/6204821bfe06b76898b431c5/7a754ab5-7a0e-498d-b16e-aa5e1bdc59bd/AW5A9414.JPG',
        name: 'Alexa Wisley',
        email: 'wisleyalexa324@gmail.com',
    },
    {
        profileUrl: 'https://images.news9live.com/wp-content/uploads/2025/04/Rohit-Sharma-Birthday-1.jpg',
        name: 'Rohit sharma',
        email: 'rohitsharma264@gmail.com',
    },
    {
        profileUrl: 'https://wallpapercave.com/wp/wp6728034.jpg',
        name: 'Narendra Modi',
        email: 'narendramodi574@gmail.com',
    },
    {
        profileUrl: 'https://st1.uvnimg.com/4d/97/870bcb42452ebf7bfa0c609b90bd/cristiano-ronaldo-portugal.jpg',
        name: 'Cristiano Ronaldo',
        email: 'cristianoronaldo435@gmail.com',
    },
    {
        profileUrl: 'https://th.bing.com/th/id/R.8d7969739e05b542de5129e82b3e95ed?rik=MtxbBOkUNFqakg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-vxhfcW9xV4E%2fTVi6C7JYzPI%2fAAAAAAAAADo%2fuQz15oWJzkw%2fs1600%2fLord%2bkrishna%2bHigh%2bDefinition%2bDesktop%2bWallpapers.jpeg&ehk=7P04JRKt3UzD1afFNI1zmdXdfwujOe%2blnLrDw3KRItM%3d&risl=&pid=ImgRaw&r=0',
        name: 'Krishna',
        email: 'krishna111@gmail.com',
    },
]



function renderusers(arr) {
    userContainer.innerHTML = ''
    arr.map(function (obj) {
        let { profileUrl, name, email } = obj

        let divelem = document.createElement('div');
        divelem.className = 'useritem'
        divelem.innerHTML = `
            <img src=${profileUrl} alt="error loading">
         <div class="userdetails">
             <h3>${name}</h3>
            <p>${email}</p> 
        </div>`
        userContainer.append(divelem);
    })
}
renderusers(arr)

function handlesearch(e) {
    let searchvalue = e.target.value;
    let filteredarr = arr.filter(obj => {
       return (
    obj.name.toLowerCase().includes(searchvalue.toLowerCase()) ||
    obj.email.toLowerCase().includes(searchvalue.toLowerCase())
)});

    renderusers(filteredarr)
}
inputsearch.addEventListener('input', handlesearch);
