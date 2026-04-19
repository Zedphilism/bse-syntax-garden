---
title: "A Socket Is the Interface Between an Application and the Transport Layer"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# A Socket Is the Interface Between an Application and the Transport Layer

A socket is a software abstraction (an OS API) that provides an application with a handle for sending and receiving data through the network — it is the door through which application data passes into and out of the transport layer.

## Explanation

Sockets are the programming interface to the network. An application calls `socket()` to create a socket, `bind()` to associate it with a port, `connect()` to establish a TCP connection (client side), and then `send()` / `recv()` to exchange data. The OS handles everything below the socket — TCP/UDP, IP, and link-layer framing.

A socket is identified by a **socket address**: the combination of an IP address and a port number. A TCP socket is uniquely identified by a 4-tuple: (local IP, local port, remote IP, remote port). Multiple TCP sockets on the same host can share the same local port number as long as the remote (IP, port) differs — this is how a web server handles thousands of simultaneous HTTPS connections all on port 443.

From a conceptual standpoint, the socket is the "door" in the network architecture model: the application shoves data through the door, and the transport layer picks it up for delivery. The application does not need to know how TCP or IP work — only how to write to and read from the socket.

## Key Points

- Socket: OS API that gives applications access to the transport layer
- Socket address: IP address + port number
- TCP socket uniquely identified by 4-tuple: (src IP, src port, dst IP, dst port)
- UDP socket uniquely identified by 2-tuple: (dst IP, dst port)
- Application uses: socket(), bind(), listen(), accept(), connect(), send(), recv()

## Example

A Python web server: `sock = socket(AF_INET, SOCK_STREAM)` creates a TCP socket. `sock.bind(('0.0.0.0', 8080))` binds it to port 8080. `sock.listen(100)` starts accepting connections. Each `sock.accept()` returns a new socket for one client — the listening socket remains available for the next connection.

## See Also

- [[port-number|A Port Number Identifies a Specific Process or Service on a Host]]
- [[multiplexing-and-demultiplexing|Multiplexing Uses Port Numbers to Direct Segments to the Right Process]]
- [[tcp-three-way-handshake|TCP Uses a Three-Way Handshake to Establish and a Four-Way Close to Terminate]]
