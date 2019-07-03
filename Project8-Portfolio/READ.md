# Portfolio

* Create a new directory named "portfolio" for this project.

* Add a directory named "projects" to the portfolio directory. Copy into this directory the directories containing your versions of <a href="../wk2_carousel">Kitty Carousel</a>, <a href="../wk3_spotify_search">Spotify Search</a>, etc.

* Add to the portfolio directory a main js file in which you create a server and listen on port 8080. We are only interested in GET requests so you should handle other requests by redirecting or sending an appropriate error.

* Use the `fs` module to determine what files are available to serve. If there is a file in the projects directory corresponding to the `url` property of the request object, serve that file by <a href="https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options">creating a read stream</a> and <a href="https://nodejs.org/api/stream.html#stream_readable_pipe_destination_options">piping</a> it to the response.

* Requests will not just be for HTML files. You will also have to serve CSS, images, Javascript and JSON as well. Be sure to set the `Content-Type` response header appropriately for each file you serve.

  | Extension | Content-Type |
  |-----------|--------------|
  | .html | text/html |
  | .css | text/css |
  | .js | text/javascript |
  | .json | application/json |
  | .gif | image/gif |
  | .jpg | image/jpeg |
  | .png | image/png |
  | .svg	| image/svg+xml |

* If there is not an item in the projects directory that matches the `url` of the request, send a 404.

* If the item that matches the request url is a directory, and the url ends with a slash, the index.html file that is in that directory should be served.

* If the item that matches the request url is a directory, and the url does not end with a slash, redirect to the request url with a slash added to the end of it.

* It is critical that we only allow files that are contained in the projects directory to be served. If you are checking the file system for a file that corresponds to the url with every request, you cannot trust that the url will not be crafted in such a way that when it is appended to `__dirname + '/projects'` it would not refer to a file that is not in that directory. You must perform validation to prevent such mischief. A good way to validate the url would be to use [`path.normalize`](https://nodejs.org/api/path.html#path_path_normalize_path):
  ```js
  const myPath = path.normalize(__dirname + '/projects' + req.url);
  
  if (!myPath.startsWith(__dirname + '/projects')) {
      res.statusCode = 403;
      return res.end();
  }
  ```
The overall logic of the request handler runs like this:
```
Does the request url correspond to an item in the projects folder?
                      /     \
                     /       \
                no  /         \ yes
                   /           \
                  /             \
                404            Is it a directory?
                                     /     \
                                    /       \
                                no /         \ yes
                                  /           \
                                 /             \
                    Serve the file             Does the request url end with a slash?
                                                              /     \
                                                             /       \
                                                         no /         \ yes
                                                           /           \
                                                          /             \
                                Redirect to the request url             Serve the index.html file 
                                with a slash appended to it             that is in the directory
```
