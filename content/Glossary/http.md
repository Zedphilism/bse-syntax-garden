---
title: "HTTP Is the Stateless Application-Layer Protocol of the Web"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# HTTP Is the Stateless Application-Layer Protocol of the Web

HTTP (HyperText Transfer Protocol) is the application-layer protocol used by web browsers and servers to request and transfer web objects (HTML pages, images, scripts), operating over TCP on port 80 (HTTP) or port 443 (HTTPS).

## Explanation

HTTP follows a client–server model: the client (browser) sends HTTP **request** messages; the server responds with HTTP **response** messages. The most common request methods are GET (retrieve a resource), POST (submit data), PUT (upload), and DELETE (remove).

An HTTP request contains: a request line (method, URL, HTTP version), header lines (Host, Connection, User-Agent, Accept, etc.), and optionally a body. An HTTP response contains: a status line (version, status code, phrase), headers, and the body.

**Status codes:** 200 OK, 301 Moved Permanently, 304 Not Modified, 404 Not Found, 500 Internal Server Error.

HTTP is **stateless** — the server keeps no information about past client requests. Each request is independent. HTTP cookies are the mechanism used to layer state on top of stateless HTTP (e.g., login sessions, shopping carts).

**HTTP/1.0** used non-persistent connections — one TCP connection per object (2 RTTs per object). **HTTP/1.1** introduced persistent connections — multiple objects over one TCP connection, reducing connection-setup overhead. **HTTP/2** added multiplexing within a single TCP connection; **HTTP/3** moved to QUIC (UDP-based) to eliminate head-of-line blocking.

## Key Points

- HTTP: application-layer protocol; client (browser) requests, server responds
- Runs over TCP: port 80 (HTTP), port 443 (HTTPS)
- Stateless: no server memory of past requests (cookies add state)
- Methods: GET, POST, PUT, DELETE
- Status codes: 200 OK, 404 Not Found, 301 Redirect, 500 Server Error
- HTTP/1.0: non-persistent (1 connection/object); HTTP/1.1: persistent (reuse connection)

## Example

Browser requests `http://example.com/index.html`. HTTP GET sent to port 80. Server returns `HTTP/1.1 200 OK` with HTML body. Browser parses HTML, finds 3 images, sends 3 more GET requests (persistent HTTP reuses the same TCP connection). All 4 objects delivered on 1 TCP connection.

## See Also

- [[http-stateless-protocol|HTTP Is a Stateless Client-Server Protocol That Transfers Web Objects over TCP]]
- [[http-persistent-vs-non-persistent|Persistent HTTP Reuses One TCP Connection While Non-Persistent HTTP Opens a New One Per Object]]
- [[dns|DNS Translates Human-Readable Hostnames to IP Addresses]]
