import React from "react";
import { Container } from "react-bootstrap";

// https://developer.spotify.com/documentation/general/guides/authorization-guide/
// READ  1. Have your application request authorization; the user logs in and authorizes access

// streaming : first access to streaming
// user-read-email: user email
// user-read-private:user infomation
// user-library-read: determine if the song is in users library
// user-library-modify: add songs to favourites
// user-read-playback-state: determine if the song is playing or not
// user-modify-playback-state: allows to modify which song spotify is playing
const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=88e9ad173305490ba60849a2ecf9d0d8&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export default function Login() {
  return (
    <Container
      // !!BOOTSTRAP notation!! the d-flex class is used to create a simple flexbox container.
      // Horizontal and vertical elements - d-flex supports creating elements both horizontally (. flex-row) and vertically (. flex-column). Col only support horizontally.
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      {/* //https://getbootstrap.com/docs/4.0/components/buttons/
   !!BOOTSTRAP notation!!   btn is button. clickable.  */}
      <a className="btn btn-success btn-lg" href={AUTH_URL}>
        Login With Spotify
      </a>
    </Container>
  );
}
