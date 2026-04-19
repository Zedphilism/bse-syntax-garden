---
title: "Demultiplexing"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# Demultiplexing

Demultiplexing is the transport-layer function of receiving incoming segments from the network layer, reading the destination port number (and for TCP, the full 4-tuple), and routing each segment to the correct application socket.

## Explanation

When a segment arrives at a host, the network layer has already used the destination IP address to deliver it to the right machine. The transport layer's job is then to figure out which of the many running application processes should receive the data. This is demultiplexing — delivering the right data to the right socket.

**UDP demultiplexing (2-tuple):** the OS reads only the destination port. Any segment arriving at port 9999 goes to the socket bound to port 9999, regardless of which host or port it came from. One UDP socket can receive from many senders simultaneously.

**TCP demultiplexing (4-tuple):** the OS reads all four fields — source IP, source port, destination IP, destination port. Each unique 4-tuple maps to a different socket. This means a web server on port 443 can have thousands of simultaneous connections: each one has a different client IP or client port, creating a unique 4-tuple and therefore a unique socket.

The difference explains why a UDP DNS server can handle many clients with a single socket, while a TCP web server creates a new socket per connection.

## Key Points

- Demultiplexing: receiver-side; routes incoming segments to the correct socket
- UDP: 2-tuple (dst IP, dst port) — one socket per port number
- TCP: 4-tuple (src IP, src port, dst IP, dst port) — one socket per connection
- TCP allows multiple simultaneous connections all on the same destination port
- Counterpart: multiplexing (sender side)

## Example

A server receives three TCP segments all destined for port 80: from (10.0.0.1:50001), (10.0.0.2:50001), and (10.0.0.3:50001). Even though all share the same destination port, TCP demultiplexing routes each to a separate socket because the source IPs differ — producing three unique 4-tuples.

## See Also

- [[multiplexing|Multiplexing]]
- [[multiplexing-and-demultiplexing|Multiplexing and Demultiplexing]]
- [[four-tuple|4-Tuple]]
- [[port-number|Port Number]]
