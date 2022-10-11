import albums from '../albums_with_local_assets.json'

export function getAlbums() {
    let albumsContainer = document.getElementById("albums");

    albums.forEach((album)=>{
        let div = document.createElement("div");
        div.className="relative"
        let img = document.createElement("img");
        img.src = "../" + album.file;
        //img.src = album.image;
        img.className = "hover:opacity-30 m-auto"
        div.appendChild(img);

        let text = document.createElement("p");
        text.innerHTML = album.trimmed_name + ", " + album.date.substring(0,4);
        text.className = "text-black bg-white rounded-sm p-1 font-bold xl:text-lg text-center album-text"
        div.appendChild(text);

        albumsContainer?.appendChild(div);
      })
}

getAlbums();