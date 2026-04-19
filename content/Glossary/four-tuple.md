---
title: "4-Tuple"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# 4-Tuple

A 4-tuple is the four-field identifier (source IP address, source port, destination IP address, destination port) that uniquely identifies a TCP connection — the transport layer uses all four values to demultiplex incoming segments to the correct socket.

## Explanation

Because IP addresses identify hosts and port numbers identify processes, the combination of both endpoints fully specifies one end-to-end connection. The 4-tuple is:

```
(source IP, source port, destination IP, destination port)
```

Two TCP connections are distinct if any one of these four values differs. This is how a web server on port 443 can maintain thousands of simultaneous HTTPS connections: all share the same destination IP and destination port 443, but each client has a different source IP or source port (or both), making each 4-tuple unique.

The OS maintains a socket table indexed by 4-tuples. When a TCP segment arrives, the OS looks up the 4-tuple in this table to find the matching socket and delivers the segment's payload to the application waiting on that socket.

**Contrast with 2-tuple (UDP):** UDP demultiplexing only uses (destination IP, destination port). The source fields are ignored for routing to the socket. This means multiple UDP clients reaching the same destination port all share one socket.

## Key Points

- 4-tuple: (src IP, src port, dst IP, dst port) — uniquely identifies a TCP connection
- Two connections with the same dst IP:port but different src IP or src port are distinct
- OS uses 4-tuple as the socket table key for TCP demultiplexing
- Enables one server port to support thousands of simultaneous connections
- UDP uses 2-tuple: (dst IP, dst port) — source fields ignored for socket lookup

## Example

Server at 93.184.216.34:443. Client A: 10.0.0.1:50001. Client B: 10.0.0.2:50001. Client C: 10.0.0.1:50002. All three have unique 4-tuples and therefore unique sockets:
- (10.0.0.1, 50001, 93.184.216.34, 443) → socket A
- (10.0.0.2, 50001, 93.184.216.34, 443) → socket B
- (10.0.0.1, 50002, 93.184.216.34, 443) → socket C

## See Also

- [[demultiplexing|Demultiplexing]]
- [[socket|Socket]]
- [[port-number|Port Number]]
- [[multiplexing-and-demultiplexing|Multiplexing and Demultiplexing]]
