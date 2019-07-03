# Project 8 Portfolio
The objective of this project is to keep all projects in a directory named "Projects" and enable users to access and view each project by changing the url. 

## Part 1 Create a server
* Create a server and listen on port 8080. A directory named "projects" is added to the portfolio directory, containing all projects done before.

## Part 2 Acquire the given url and determine which project to serve
* The `fs` module is used to determine what files are available to serve. If there is a file in the projects directory corresponding to the `url` property of the request object, that file is served by <a href="https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options">creating a read stream</a> and <a href="https://nodejs.org/api/stream.html#stream_readable_pipe_destination_options">piping</a> it to the response. 
* Requests will not just be for HTML files. It serves CSS, images, Javascript and JSON as well. For that, the `Content-Type` response header is set appropriately for each file.

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
* If there is not an item in the projects directory that matches the `url` of the request, a 404 will be sent.
* If the item that matches the request url is a directory, and the url ends with a slash, the index.html file that is in that directory should be served.
* If the item that matches the request url is a directory, and the url does not end with a slash, redirect to the request url with a slash added to the end of it.
* The url is validated by using [`path.normalize`](https://nodejs.org/api/path.html#path_path_normalize_path):
  ```js
  const myPath = path.normalize(__dirname + '/projects' + req.url);
  
  if (!myPath.startsWith(__dirname + '/projects')) {
      res.statusCode = 403;
      return res.end();
  }
  ```
* The overall logic of the request handler runs like this:
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
