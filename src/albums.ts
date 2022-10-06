import albums from '../albums.json'

export function getAlbums() {
    console.log(albums);

    let albumsContainer = document.getElementById("albums");

    albums.forEach((album)=>{
        let img = document.createElement("img");
        img.src = album.image;
        img.className = "p-2"
        albumsContainer?.appendChild(img);
      })
}

getAlbums();