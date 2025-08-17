//  Import express package as express
import express from "express"
//  Call express to create the app
const app = express()
export default app

// GET / should respond with the message "You've reached the Playlist API!"
app.route("/").get((req, res) => {
  res.send("You've reached the Playlist API!")
  });

  import playlist from '/db/playlist'

// GET /playlist should send the playlist array as a response.
app.route("/playlist").get((req, res)=>{
  res.send(playlist)
});

// GET /playlist/:index should respond with the song at the given index of the playlist array.
app.route("/playlist/:index").get((req, res)=>{
  const index = Number(req.params.index);
  const song = playlist[index];
    
  if (song){
      return res.send(song);
  }else{
      // If the index is invalid, it should send the message "That song does not exist in the playlist." with status code 404.
      return res.status(404).send("That song does not exist in the playlist.")
  };
  
});
  
