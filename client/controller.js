const trackSearch = async(req, res) => {
    const result = await fetch('/api/tracks/' + req)
    const data = await result.json();
    const root = document.getElementById('playListDark');
    var str = '<table>'
    data.forEach(function(list) {
        str += '<tr>' + '<td id="play">' + JSON.stringify(list.TrackId) + '</td>' + '<td id="track">' + JSON.stringify(list.TrackName) + '</td>' + '<td id="artist">' + JSON.stringify(list.ArtistName) + '</td>' + '</tr>';
    });
    str += '</table>';
    root.innerHTML = str;
}
const listTracks = async(req, res) => {
    const result = await fetch('/api/tracks');
    const data = await result.json();
    const root = document.getElementById('playListBody');
    var str = "<table><tr><th id='track'>Track Id</th><th id='track'>Song Title</th><th id='artist'>Artist Name</th></tr>";
    data.forEach(function(list) {
        str += "<tr><td id='play'>" + JSON.stringify(list.TrackId) + "</td><td id='album-td'><button id='album-button' onclick='albumsByArtist(" + JSON.stringify(list.ArtistId) + ")'>" + JSON.stringify(list.TrackName) + "</button></td><td id='artist-td'>" + JSON.stringify(list.ArtistName) + "</td></tr>";
    });
    str += '</table>';
    root.innerHTML = str;
}
const listAlbums = async(req, res) => {
    const result = await fetch('/api/albums');
    const data = await result.json();
    const root = document.getElementById('playListBody');
    var str = "<table><tr><th id='track'>Album Id</th><th id='track'>Album Title</th><th id='artist'>Artist Name</th></tr>";
    data.forEach(function(list) {
        str += "<tr><td id='play'>" + JSON.stringify(list.AlbumId) + "</td><td id='album-td'><button id='album-button' onclick='albumsByArtist(" + JSON.stringify(list.ArtistId) + ")'>" + JSON.stringify(list.AlbumTitle) + "</button></td><td id='artist-td'>" + JSON.stringify(list.ArtistName) + "</td></tr>";
    });
    str += '</table>';
    root.innerHTML = str;
}
const listArtists = async(req, res) => {
    const result = await fetch('/api/artists');
    const data = await result.json();
    const root = document.getElementById('playListBody');
    var str = "<table><tr><th id='track'>Artist Id</th><th id='track'>Artist Name</th><th id='artist'></th></tr>";
    data.forEach(function(list) {
        str += "<tr><td id='play'>" + JSON.stringify(list.ArtistId) + "</td><td id='album-td'><button id='album-button' onclick='albumsByArtist(" + JSON.stringify(list.ArtistId) + ")'>" + JSON.stringify(list.Name) + "</button></td><td id='artist-td'>" + " " + "</td></tr>";
    });
    str += '</table>';
    root.innerHTML = str;
}
const listPlaylists = async(req, res) => {
    const result = await fetch('/api/playlists');
    const data = await result.json();
    const root = document.getElementById('playListBody');
    var str = "<table><tr><th id='track'>PlayList Id</th><th id='track'>PlayList Name</th><th id='artist'>Action</th></tr>";
    data.forEach(function(list) {
        str += "<tr><td id='play'>" + JSON.stringify(list.PlaylistId) + "</td><td id='album-td'><button id='album-button' onclick='tracksByPlaylist(" + JSON.stringify(list.PlaylistId) + ")'>" + JSON.stringify(list.Name) + "</button></td><td id='artist-td'>" + "<button >Add Song</button><button onclick='deletePlaylist(" + JSON.stringify(list.PlaylistId) + ")'>Delete</button>" + "</td></tr>";
    });
    str += '</table>';
    root.innerHTML = str;
}
const albumSearch = async(req, res) => {
    const result = await fetch('/api/albums/' + req)
    const data = await result.json();
    const root = document.getElementById('playListDark');
    var str = '<table>'
    data.forEach(function(list) {
        str += '<tr>' + '<td id="play">' + JSON.stringify(list.AlbumId) + '</td>' + '<td id="track">' + JSON.stringify(list.AlbumTitle) + '</td>' + '<td id="artist">' + JSON.stringify(list.ArtistName) + '</td>' + '</tr>';
    });
    str += '</table>';
    root.innerHTML = str;
}
const tracksByAlbum = async(req, res) => {

    const result = await fetch('/api/tracks/tracks/' + req)
    const data = await result.json();
    const root = document.getElementById('videoBlockBody1');
    var str = "<table><tr><th id='track'>Track Id</th><th id='track'>Track Title</th><th id='artist'>Music Composer</th></tr>";
    data.forEach(function(list) {
        str += "<tr><td id='play'>" + JSON.stringify(list.TrackId) + "</td><td id='album-td'><button id='album-button' onclick='myFunction()'>" + JSON.stringify(list.Name) + "</button></td><td id='artist-td'>" + JSON.stringify(list.Composer) + "</td></tr>";
    });
    str += '</table>';
    root.innerHTML = str;
    console.log(data);
}

function myFunction() {
    alert("Sorry! Unable to play this track!");
}

const tracksByPlaylist = async(req, res) => {

    const result = await fetch('/api/playlists/list/' + req)
    const data = await result.json();
    const root = document.getElementById('videoBlockBody');
    var str = "<table><tr><th id='track'>Track Id</th><th id='track'>Track Name</th><th id='artist'>Action</th></tr>";
    data.forEach(function(list) {
        str += "<tr><td id='play'>" + JSON.stringify(list.TrackId) + "</td><td id='album-td'><button id='album-button'>" + JSON.stringify(list.TrackName) + "</button></td><td id='artist-td'>" + "<button onclick='removeSong(" + JSON.stringify(list.TrackId) + ")'>Remove Song</button>" + "</td></tr>";
    });
    str += '</table>';
    root.innerHTML = str;
    console.log(data);

}
const albumsByArtist = async(req, res) => {

        const result = await fetch('/api/albumss/' + req)
        const data = await result.json();
        const root = document.getElementById('videoBlockBody');
        var str = "<table><tr><th id='track'>Album Id</th><th id='track'>Album Title</th><th id='artist'>Artist Id</th></tr>";
        data.forEach(function(list) {
            str += "<tr><td id='play'>" + JSON.stringify(list.AlbumId) + "</td><td id='album-td'><button id='album-button' onclick='tracksByAlbum(" + JSON.stringify(list.AlbumId) + ")'>" + JSON.stringify(list.Title) + "</button></td><td id='artist-td'>" + JSON.stringify(list.ArtistId) + "</td></tr>";
        });
        str += '</table>';
        root.innerHTML = str;
        // console.log(data);

    }
    /*const addToPlaylist = async(req, res) => {

        const root = document.getElementById('videoBlockBody');
        root.innerHTML = "enter track id to add";
        var x = document.createElement("FORM");
        x.id = "myForm";
        x.action = "/api/playlists/track";
        x.method = "POST";
        root.appendChild(x);
        var yy = document.createElement("INPUT");
        yy.id = "playid";
        yy.innerHTML = req;
        var y = document.createElement("INPUT");
        y.id = "trackid";
        //y.setAttribute("type", "text");
        //y.setAttribute("value", "Track");
        document.getElementById("myForm").appendChild(yy);
        document.getElementById("myForm").appendChild(y);
        var z = document.createElement("BUTTON");
        z.id = "ButtonAdd";
        z.innerHTML = "Add Song";
        document.getElementById("myForm").appendChild(z);
    }*/

const deletePlaylist = async(req, res) => {
    const result = await fetch('/api/playlists/remove/' + req, {
        method: 'DELETE'
    })
    const data = await result.json();
    alert(data);

}
const removeSong = async(req, res) => {
    const result = await fetch('/api/playlists/' + req, {
        method: 'DELETE'
    })
    const data = await result.json();
    alert(data);

}
const artistDelete = async(req, res) => {
    const result = await fetch('/api/artists/' + req, {
        method: 'DELETE'
    })
    const data = await result.json();
    var str = '<ol>'
    str += '<li class="delete">' + JSON.stringify(data) + '</li>';
    str += '</ol>';
    document.getElementById("display").innerHTML = str;

}
const viewAlbums = async() => {
    const result = await fetch('/api/albums')
    const data = await result.json();
    const root = document.getElementById('root');
    root.innerHTML = "Albums";
    const albums = document.createElement('P');
    albums.id = "display";
    var str = '<ol>'
    data.forEach(function(list) {
        str += '<li>' + JSON.stringify(list) + '</li>';
    });
    str += '</ol>';
    albums.innerHTML = str;
    root.appendChild(albums);
}
const viewPlaylists = async() => {
    const result = await fetch('/api/playlists')
    const data = await result.json();
    const root = document.getElementById('root');
    root.innerHTML = "Playlists";
    const playlists = document.createElement('P');
    playlists.id = "display";
    var str = '<ol>'
    data.forEach(function(list) {
        str += '<li>' + JSON.stringify(list) + '</li>';
    });
    str += '</ol>';
    playlists.innerHTML = str;
    root.appendChild(playlists);
}
const viewMediatypes = async() => {
    const result = await fetch('/api/media-types')
    const data = await result.json();
    var str = '<ol>'
    data.forEach(function(list) {
        str += '<li>' + JSON.stringify(list) + '</li>';
    });
    str += '</ol>';
    document.getElementById("display").innerHTML = str;
}
const viewTracks = async() => {
    const result = await fetch('/api/tracks');
    const data = await result.json();
    const root = document.getElementById('root');
    root.innerHTML = "Songs";
    const songs = document.createElement('P');
    songs.id = "display";
    var str = '<ol>'
    data.forEach(function(list) {
        str += '<li>' + JSON.stringify(list) + '</li>';
    });
    str += '</ol>';
    songs.innerHTML = str;
    root.appendChild(songs);
}