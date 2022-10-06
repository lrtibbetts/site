
# to get fresh oauth token: https://developer.spotify.com/console/get-playlist/
# Through The Years playlist id: 4CVjYLoQGb4AVdagZvSS2r

curl -X "GET" "https://api.spotify.com/v1/playlists/4CVjYLoQGb4AVdagZvSS2r" -H "Accept: application/json" \
-H "Content-Type: application/json" -H "Authorization: Bearer BQCxkxjnaH7nT1rDJw-uHfnmDyAU4xAKwkA1_GD2HvB2IjLhPUcdZIbJXiKCWDQQczggjNSWCaivwmzZIiNW41kUFLKVSUCfKduqVE-2Pw0d0vPA4-A49pPOWHNXyTtvuuI-9Glx8ToYVXmeHw8hnxkio2qjNpiJBME2plgHFpXOyOdX" \
| jq '[.tracks.items[].track.album | { name: .name, date: .release_date, image: .images[0].url }]' > albums.json
