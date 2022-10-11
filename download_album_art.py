import json
import urllib.request

file = open('albums.json')
albums = json.load(file)

album_list = []

for album in albums:
    album_name = album["name"]
    trimmed_name = album_name
    if '(' in album_name and album_name.index('(') != 0:
        trimmed_name = album_name[0:album_name.index('(') - 1]
    if '?' in album_name:
        trimmed_name = trimmed_name.replace('?', '')

    album["trimmed_name"] = trimmed_name

    file_path = "public/album_art/" + trimmed_name + ".jpg"
    print(file_path)
    urllib.request.urlretrieve(album["image"], file_path)
    # write file path without public/ (will be served at root)
    album["file"] = file_path[7:]
    album_list.append(album)

with open("albums_with_local_assets.json", "w") as outfile:
    outfile.write(json.dumps(album_list, indent=4))

