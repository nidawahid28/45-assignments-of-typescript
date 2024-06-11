"use strict";
/*40. Album: Write a function called make_album() that builds a Object
describing a music album. The function should take in an artist name and an
album title, and it should return a Object containing these two pieces of
information. Use the function to make three dictionaries representing different
albums. Print each return value to show that Objects are storing the
album information correctly.
Add an optional parameter to make_album() that allows you to store the
number of tracks on an album. If the calling line includes a value for the number
of tracks, add that value to the album’s Object. Make at least one new
function call that includes the number of tracks on an album.*/
Object.defineProperty(exports, "__esModule", { value: true });
// Define the make_album function
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Calling three functions and creating three variables with different values
let album1 = make_album("Atif Aslam", "Album title 1");
let album2 = make_album("Ali Zafar", "Album title 2");
// Calling a make_album function with third parameter
let album3 = make_album("Hadiqa Kiani", "Album title 3", 10);
// Print values of object created by function
console.log(album1);
console.log(album2);
console.log(album3);
